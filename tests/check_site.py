#!/usr/bin/env python3
"""Basic OnZell static site checks without external dependencies."""
from pathlib import Path
from html.parser import HTMLParser
import re
import subprocess
import tempfile
import sys

root = Path(__file__).resolve().parents[1]
pages = sorted(root.glob("*.html")) + sorted((root / "articles").glob("*.html"))
assert pages, "No HTML documents found"

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.targets = []
        self.canonicals = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ("a", "link", "script", "img"):
            key = "href" if tag in ("a", "link") else "src"
            href = attrs.get(key, "")
            if href.startswith("/") and not href.startswith("//"):
                self.targets.append(href.split("#",1)[0].split("?",1)[0])
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href",""))

errors = []
for page in pages:
    source = page.read_text(encoding="utf-8")
    parser = Links()
    parser.feed(source)
    if not parser.canonicals:
        errors.append(f"{page}: missing canonical URL")
    for path in parser.targets:
        dest = root / path.lstrip("/")
        if path == "/":
            dest = root / "index.html"
        if not dest.is_file():
            errors.append(f"{page}: missing local link {path}")
    if page.name == "index.html":
        scripts = re.findall(r"<script[^>]*>(.*?)</script>", source, flags=re.S)
        if not scripts:
            errors.append("Homepage has no script")
        else:
            with tempfile.TemporaryDirectory() as temp:
                for i, code in enumerate(scripts):
                    js = Path(temp) / f"inline-{i}.js"
                    js.write_text(code, encoding="utf-8")
                    result = subprocess.run(["node", "--check", str(js)], capture_output=True, text=True)
                    if result.returncode:
                        errors.append(result.stderr)

if errors:
    print("\n".join(errors), file=sys.stderr)
    raise SystemExit(1)
print(f"Validated {len(pages)} HTML pages, internal links and homepage JavaScript syntax.")
