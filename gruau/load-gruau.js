// load-gruau.js

// Extract params from URL sent by index.html
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");
const coupon = urlParams.get("coupon") || null;

// Validate product ID
if (!productId) {
  alert("No product was passed from Facebook Shop.");
  window.location.href = "/gruau/checkout/return.html?status=error";
}

// Map Meta product IDs → your real PayPal URLs
const PAYPAL_LINKS = {
  "t8mytpb1b0": "https://www.paypal.com/ncp/payment/VGEFJPB7B6PLE",  // Yellow ink
  "d5caaulmbr": "https://www.paypal.com/ncp/payment/3QKGCNFHDARQQ"   // Black Swan
};

// Validate ID
if (!PAYPAL_LINKS[productId]) {
  alert("Unknown or unmapped product.");
  window.location.href = "/gruau/checkout/return.html?status=error";
}

// Build PayPal redirect
let checkoutURL = PAYPAL_LINKS[productId];

if (coupon) {
  checkoutURL += `?coupon=${encodeURIComponent(coupon)}`;
}

// Redirect to PayPal
window.location.href = checkoutURL;
