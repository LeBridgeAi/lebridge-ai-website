import products from "../../data/gruau.json" assert { type: "json" };

const page = window.location.pathname.split("/").pop().replace(".html", "");

const product = products.find(p => p.checkoutSlug === page);

if (product && product.paypalLink) {
  window.location.href = product.paypalLink;
} else {
  document.body.innerHTML = `
    <h1>Checkout Error</h1>
    <p>Missing PayPal link for this product.</p>
  `;
}
