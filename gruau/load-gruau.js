// load-gruau.js

// Extract params
const urlParams = new URLSearchParams(window.location.search);
const itemsParam = urlParams.get("items");
const coupon = urlParams.get("coupon") || null;

// Validate the items param
if (!itemsParam) {
    alert("No product list received.");
    window.location.href = "/gruau/checkout/return.html?status=error";
}

// Decode product list JSON
let productList = [];
try {
    productList = JSON.parse(decodeURIComponent(itemsParam));
} catch (e) {
    alert("Invalid product data received.");
    window.location.href = "/gruau/checkout/return.html?status=error";
}

// Use the FIRST product (Meta only sends single-item checkout for approval)
const productId = productList[0]?.id;

if (!productId) {
    alert("Missing product ID.");
    window.location.href = "/gruau/checkout/return.html?status=error";
}

// YOUR PRODUCT → PAYPAL LINK MAP  (Replace with your real PayPal URLs)
const PAYPAL_LINKS = {
    "123": "https://www.paypal.com/checkoutnow?token=EXAMPLE123",
    "456": "https://www.paypal.com/checkoutnow?token=EXAMPLE456"
};

// Validate product ID exists in map
if (!PAYPAL_LINKS[productId]) {
    alert("Unknown or unmapped product.");
    window.location.href = "/gruau/checkout/return.html?status=error";
}

// Build redirect URL
let checkoutURL = PAYPAL_LINKS[productId];

// If coupon exists, append for tracking
if (coupon) {
    checkoutURL += `&coupon=${encodeURIComponent(coupon)}`;
}

// Redirect to PayPal
window.location.href = checkoutURL;
