"use strict";
(async()=>{const status=document.getElementById("offer-status"),grid=document.getElementById("offer-grid");
const message=t=>status.textContent=t;
try{
 const response=await fetch("/data/approved-offers.json",{cache:"no-store"});if(!response.ok)throw Error("Offer catalog unavailable");
 const data=await response.json();if(data.schemaVersion!==1||!Array.isArray(data.offers))throw Error("Unexpected catalog format");
 const now=Date.now();let count=0;
 for(const entry of data.offers){
  if(!entry||entry.status!=="active"||entry.merchantApproved!==true||entry.networkApproved!==true)continue;
  if(!entry.title||!entry.merchantName||!entry.merchantId||!entry.network||!entry.affiliateUrl||!entry.reviewedAt)continue;
  if(entry.validUntil&&Date.parse(entry.validUntil)<now)continue;
  if(!Number.isFinite(Date.parse(entry.reviewedAt)))continue;
  let target;try{target=new URL(entry.affiliateUrl)}catch{continue}
  if(target.protocol!=="https:"||target.username||target.password)continue;
  const card=document.createElement("article");card.className="offer";
  if(entry.imageUrl){try{const imgUrl=new URL(entry.imageUrl);if(imgUrl.protocol==="https:"){const img=document.createElement("img");img.src=imgUrl.href;img.loading="lazy";img.alt=entry.imageAlt||("Product photo for "+entry.title);card.append(img)}}catch{}}
  const merchant=document.createElement("div");merchant.className="merchant";merchant.textContent=entry.merchantName;card.append(merchant);
  const heading=document.createElement("h2");heading.textContent=entry.title;card.append(heading);
  if(entry.summary){const p=document.createElement("p");p.textContent=entry.summary;card.append(p)}
  const disclosure=document.createElement("small");disclosure.textContent="Affiliate link: OnZell may earn a commission from qualifying purchases.";card.append(disclosure);
  const link=document.createElement("a");link.className="button";link.href=target.href;link.rel="sponsored noopener noreferrer";link.target="_blank";link.textContent="Visit merchant";card.append(link);
  const note=document.createElement("small");note.textContent="Confirm price, availability and shipping directly with the merchant.";card.append(note);
  grid.append(card);count++;
 }
 message(count?count+" approved merchant recommendation"+(count===1?"":"s")+" available.":"Our partner collections are being prepared. Explore the magazine while we verify merchant approvals.");
}catch{message("Our partner collections are being prepared. Browse our magazine while offers are being verified.");}
})();