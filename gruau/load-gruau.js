// load-gruau.js

// Extract params
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");
const coupon = urlParams.get("coupon");

// YOUR PRODUCT → PAYPAL LINK MAP
const PAYPAL_LINKS = {
  "123": "https://www.paypal.com/checkoutnow?token=EXAMPLE123",
  "456": "https://www.paypal.com/checkoutnow?token=EXAMPLE456"
};

// Validate
if (!productId || !PAYPAL_LINKS[productId]) {
  alert("Invalid or missing product.");
  window.location.href = "/gruau/checkout/return.html?status=error";
}

// Build PayPal URL
let checkoutURL = PAYPAL_LINKS[productId];

// If coupon exists → Append it for tracking
if (coupon) {
  checkoutURL += `&coupon=${encodeURIComponent(coupon)}`;
}

// Redirect directly to PayPal
window.location.href = checkoutURL;
