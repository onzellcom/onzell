# OnZell: Activate Approved Affiliate Offers

The live [Shop the Edit](https://www.onzell.com/shop.html) page reads `/data/approved-offers.json`. This file is intentionally empty until an affiliate network **and each merchant** has granted OnZell permission to promote them.

## Before adding any offer

1. Register as a publisher at the chosen network and confirm account approval.
2. Apply to the specific merchant's program and confirm that **merchant** approval, too.
3. Obtain a compliant **tracking/deep link** using the network's own tool. Do not guess or manufacture tracking parameters.
4. Check the merchant's restrictions on paid search, email, social posts, brand names, images, data feeds and sub-affiliation.
5. Use only approved photographs. A missing image is fine; unauthorized image use is not.
6. Get the legally required clear disclosures close to each offer. The shopping page currently displays a disclosure beside each live link.
7. Check the offer in a browser and test attribution via the network dashboard (without placing fake orders).

## Catalog format

Populate `data/approved-offers.json` with approved offers. Each item requires:

```json
{
  "schemaVersion": 1,
  "lastReviewed": "2026-11-23",
  "disclosure": "OnZell may earn a commission from qualifying purchases through approved links.",
  "offers": [
    {
      "id": "unique-approved-offer-id",
      "status": "active",
      "networkApproved": true,
      "merchantApproved": true,
      "network": "approved-network-name",
      "merchantId": "actual-merchant-program-id",
      "merchantName": "actual-merchant-name",
      "title": "verified-product-or-experience-title",
      "summary": "short-factual-description",
      "affiliateUrl": "https://real-network-authorized-affiliate-link",
      "imageUrl": "https://approved-image-host/asset.jpg",
      "imageAlt": "verified image description",
      "reviewedAt": "2026-11-23T00:00:00Z",
      "validUntil": "2027-01-01T00:00:00Z"
    }
  ]
}
```

**This JSON block is documentation only.** No listed sample is approved, and the production file is empty. Use actual merchant and network values and appropriate expiration dates. Note that the browser validates structure and URL format, not the underlying partnership—it is the operator's responsibility to confirm approval.

## Why no prices yet?

The first release deliberately avoids displaying prices, discounts, countdowns or ratings because those become inaccurate quickly. After network-feed access is granted, create a server-backed freshness check and disclose the last verified price before showing it.

## Security

- Never commit passwords, publisher secrets, API keys, tax IDs, bank details, private emails or purchaser information to GitHub.
- The GitHub repository is public. Treat **all** files placed here as public.
- Use approved trackable HTTPS links that do not expose private secrets.
- If a merchant revokes approval, mark its offers `inactive` or remove them immediately.
- Use Vercel environment secrets for authenticated API feeds in a future server-side integration.
- For larger product inventories, replace the public static JSON with an authenticated back-office and validated server-side API.

## Go-live steps

1. Change an approved offer's status to active only after reviewing network and merchant acceptance.
2. Merge the catalog update to `main`.
3. Check GitHub's Vercel status and the live https://www.onzell.com/shop.html page.
4. Click the link in a test browser and verify it reaches the approved merchant destination; compare aggregate clicks in the network's dashboard if available.
5. Update the Privacy Policy if analytics, tracking or a new vendor processes visitor data.
