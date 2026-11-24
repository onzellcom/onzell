# OnZell Website - Vercel Static Frontend

Source: OnZell Affiliate-Ready v3.2 Contact.

This is the website frontend, prepared to deploy as a Vercel static site.

## Publish
Create a private GitHub repository called `onzell`, then upload the files from this folder to the repository ROOT (not nested in a folder). In Vercel, use Add New > Project > Import Git Repository, select `onzell`, leave Framework Preset as Other, Root Directory `./`, and Deploy.

## Limitations
- The site displays sample/demo products and editorial content where the production API is unavailable. The sample deal buttons are not real merchant affiliate links.
- Contact form and newsletter require a running backend; they are not live in this static deployment.
- The API/backend source from the original package should be deployed separately with PostgreSQL and protected secrets.
- The GitHub integration can automatically deploy subsequent commits.
- Before linking onzell.com, add both the apex and www domains in Vercel Settings > Domains, then apply Vercel's EXACT DNS guidance at GoDaddy, preserving all MX/SPF/DKIM/Neo email DNS records.
- Vercel Hobby is not intended for commercial affiliate businesses; check appropriate plan before commercial launch.