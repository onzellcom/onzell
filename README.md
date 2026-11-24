# OnZell — Lifestyle Magazine & Affiliate Discovery

**Website:** https://www.onzell.com  
**Owner:** OnZell Corp  
**GitHub:** https://github.com/onzellcom/onzell  
**Vercel:** onzellcom / onzell-72zk

## What is deployed
- Static, responsive lifestyle homepage with eight illustrated editorial categories.
- Eight original article pages and About, Privacy, Terms and Affiliate Disclosure.
- Category filters and local search (browser-side only).
- Contact form that opens the visitor's email application; it **does not send or store a message on the server**.
- Newsletter is coming soon; **no email addresses are currently collected** by the site.
- No fake purchase links, fake discounts or unsupported affiliate sales claims.
- Canonical pages, sitemap.xml, robots.txt, and an automated HTML/JavaScript check.

## GitHub → Vercel publishing
The `main` branch is connected to the owner's Vercel project `onzell-72zk`. GitHub reported successful Vercel deployments for recent commits. Custom domains and DNS were shown as Valid Configuration in the owner's Vercel dashboard.

This repository is **public**. Do not commit secrets, tax data, personal customer data or banking credentials.

## What is not deployed
- No PostgreSQL database or Fastify/Prisma backend.
- No web-delivered contact submissions, newsletter signup, account system, or merchant-feed importer.
- No affiliate network acceptance or merchant agreements.
- No real prices, affiliate destination links, deal scoring or commission attribution.
- No connected analytics account, Search Console verification or active social handles.

An earlier v3.2 package contains preliminary backend work but is not part of the current deployed frontend. Review that code, migrations and security before any production deployment.

## Publisher onboarding
Start with [Affiliate Application Instructions](docs/APPLICATION-START-HERE.md), the [Affiliate Application Kit](docs/AFFILIATE-APPLICATION-KIT.md) and [Integration Plan](docs/AFFILIATE-INTEGRATION-PLAN.md). `data/` contains **empty example templates only**, not real approved offers.

## Pre-affiliate requirements requiring owner action
1. Confirm a Vercel **commercial-eligible** plan for the correct `onzellcom` workspace (prior screenshots showed Hobby).
2. Test receipt of mail at `contact@onzell.com`, and confirm it opens correctly from the website on intended devices.
3. Review published legal/privacy pages for accuracy and local law.
4. Check photographs, responsive behavior and links in a real browser (external automated fetches of OnZell have sometimes failed while the owner reports it works).
5. Apply as a **publisher** through the official affiliate network; submit legal/tax/payout details only in the provider's own secure portal.

## Local tests
Run `python3 tests/check_site.py` with Node.js on PATH. GitHub Actions runs the checks on pull requests and pushes to main.

## Compliance and site operations
Preserve GoDaddy NS and Neo email MX/SPF/DKIM records. Use verified network-provided deep links and merchant-approved content only. Disclose paid relationships near the relevant link; never invent offers or prices. Update the Privacy Policy when new data processing features go live.
