fetch("../../data/gruau.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load product data");
    }
    return response.json();
  })
  .then(products => {
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
  })
  .catch(err => {
    console.error(err);
    document.body.innerHTML = "<h1>Checkout error.</h1>";
  });
