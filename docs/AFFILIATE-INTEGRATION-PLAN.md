# OnZell approved affiliate integration plan

## Current state
There are **zero connected affiliate networks** and **zero approved merchant offers** in the website code. The example data files are documentation only, and no visitor-facing partner buttons will appear until approved offers are validated.

## Safe rollout
1. OnZell Corp signs up as a *publisher*, not as an advertiser, using `www.onzell.com`.
2. Save official confirmation of acceptance and obtain permitted promotion methods, approved merchant IDs, feeds, licensing rules, tracking/deep-link specifications, and publisher IDs.
3. Configure these IDs as server-side settings wherever possible. Place credentials and private API keys only in hosting secret/environment settings, **not GitHub**.
4. Build feed import from the approved network's documented API or signed feed URL, with freshness timestamps, rate limits, error logging, duplication detection, and retailer permissions.
5. Validate every imported listing: required title, real merchant, approved deep link, approved photo rights, price currency, availability and last-checked time. If verification is unavailable, suppress price rather than inventing one.
6. Show **clear affiliate disclosures** near monetized product cards, not just in the site footer. Label paid placements as sponsored.
7. Test click-through and attribution using the network's own reporting; avoid recording sensitive visitor details. Log aggregated impressions and click counters only after appropriate consent and policy updates.
8. Remove paused merchant programs immediately; handle expired/deleted offers with graceful fallback.

## Minimum backend design
- Secure admin-authenticated merchant and offer catalog.
- Scheduled feed imports with retry, request throttling, and monitoring.
- PostgreSQL tables for affiliate_network, merchant, offer, import_job, offer_revision and affiliate_click_event (where allowed).
- Clean separation of editorial stories from sponsored placements.
- Deploy the prior Fastify/Prisma backend only after reviewing vulnerabilities, authentication, secrets, CORS and migrations.
- Use the current static site to render editorial content until verified partner data exists.

## Partnership lifecycle
not_applied -> application_submitted -> network_approved -> merchant_pending -> merchant_approved -> active -> paused/ended.

Never assume network approval implies all individual merchants approve.
