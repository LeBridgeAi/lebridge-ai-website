fetch("/data/gruau.json")
  .then(response => response.json())
  .then(items => {
    const grid = document.getElementById("art-grid");

    grid.innerHTML = items.map(item => `
      <a class="art-card" href="/gruau/${item.slug}.html">
        <img class="art-image" src="${item.image}" alt="${item.title}">
        <div class="art-info">
          <h3>${item.title}</h3>
          <div class="price">$${item.price}</div>
        </div>
      </a>
    `).join("");
  })
  .catch(err => console.error("Failed to load Gruau items:", err));
