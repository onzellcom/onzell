const fs=require("node:fs");const assert=require("node:assert/strict");
const data=JSON.parse(fs.readFileSync("data/approved-offers.json","utf8"));
assert.equal(data.schemaVersion,1);
assert.ok(Array.isArray(data.offers));
for(const offer of data.offers){
  assert.ok(offer.id&&offer.title&&offer.merchantName&&offer.merchantId&&offer.network);
  assert.equal(offer.merchantApproved,true);
  assert.equal(offer.networkApproved,true);
  assert.equal(offer.status,"active");
  assert.ok(!Number.isNaN(Date.parse(offer.reviewedAt)));
  const dest=new URL(offer.affiliateUrl);
  assert.equal(dest.protocol,"https:");
  assert.equal(dest.username,"");
  assert.equal(dest.password,"");
  if(offer.imageUrl)assert.equal(new URL(offer.imageUrl).protocol,"https:");
  if(offer.validUntil)assert.ok(!Number.isNaN(Date.parse(offer.validUntil)));
}
const shop=fs.readFileSync("shop.js","utf8");
new Function(shop);
assert.ok(shop.includes('link.rel="sponsored noopener noreferrer"'));
assert.ok(shop.includes("entry.merchantApproved!==true"));
assert.ok(shop.includes("entry.networkApproved!==true"));
assert.match(fs.readFileSync("shop.html","utf8"),/Affiliate disclosure:/);
console.log("Approved-only affiliate catalog and shop page checks passed ("+data.offers.length+" offers)");
