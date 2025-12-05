// load-gruau.js

// Extract params
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");
const coupon = urlParams.get("coupon") || null;

// Validate product ID
if (!productId) {
  alert("Missing product ID.");
  window.location.href = "/gruau/checkout/return.html?status=error";
}

// ---------------------------------------------
// PRODUCT → PAYPAL LINK MAP
// Replace these with your real PayPal checkout URLs
// ---------------------------------------------
const PAYPAL_LINKS = {
  "123": "https://www.paypal.com/checkoutnow?token=EXAMPLE123",
  "456": "https://www.paypal.com/checkoutnow?token=EXAMPLE456"
};

// Validate product exists
if (!PAYPAL_LINKS[productId]) {
  alert("Unknown or unmapped product.");
  window.location.href = "/gruau/checkout/return.html?status=error";
}

// Build redirect URL
let checkoutURL = PAYPAL_LINKS[productId];

// Append coupon for tracking
if (coupon) {
  checkoutURL += `&coupon=${encodeURIComponent(coupon)}`;
}

// Redirect to PayPal
window.location.href = checkoutURL;
