# OnZell — Pre-Affiliate Release Checklist

## Current deployment
- Site: https://www.onzell.com/
- GitHub: https://github.com/onzellcom/onzell
- Vercel project reported by owner: onzellcom / onzell-72zk
- GoDaddy DNS: configured and shown as Valid Configuration in owner's Vercel screenshot
- Current production frontend: static HTML/CSS/JS (no deployed backend/database)
- Caution: Connected Vercel integration has access to a different workspace; do not claim live deployment tests are complete without user dashboard verification.

## Before merging this branch
- [x] No fabricated purchasable deals, prices or scores in home page.
- [x] Original editorial pages linked from homepage.
- [x] No unimplemented newsletter signup collecting email addresses.
- [x] Contact form opens local email application with explicit instructions; does NOT promise server receipt.
- [x] Privacy/Terms/Affiliate Disclosure drafts linked from footer.
- [x] SEO canonical tags, sitemap.xml and robots.txt.
- [x] Code syntax / internal link review through GitHub.
- [ ] Test third-party photography URLs and mobile performance in browser.
- [ ] Test mailto form in two browsers and a device with an email client.
- [ ] Review legal drafts for final accuracy.
- [ ] Verify preview Vercel deployment if accessible.

## Next production infrastructure
1. Switch Vercel workspace onzellcom's projects from Hobby to commercial-eligible Pro (the owner must authorize purchase); confirm Vercel current terms and costs.
2. Confirm Vercel production deployment after merge and new pages return HTTP 200.
3. Preserve GoDaddy NS, MX, SPF, DKIM and Neo verification; avoid new DNS changes unless Vercel explicitly requires them.
4. Configure a secure backend (v3.2 Fastify/Prisma source is only an earlier package, not deployed in this static repo), production database, secrets and backups.
5. Choose transactional/contact and opt-in newsletter services, test email delivery, add unsubscribe/consent features before signup opens.
6. Add analytics and consent controls as appropriate, then Search Console; submit sitemap.
7. Validate privacy statements again whenever analytics, forms, tracking, or merchant feeds go live.
8. Apply for affiliate networks, secure merchant approvals, then integrate their real feeds; test tracking attribution.

## Launch safety
- Keep public site informational until commercial hosting plan and legal review are complete.
- No hard-coded affiliate credentials or banking/tax information.
- Passwords and keys belong only in provider secrets/environment variables.
- Use verified merchant IDs and tracking links, no fake offers.
- If hosting provides live automated Git deploy on main, merging may update production immediately; review first.
