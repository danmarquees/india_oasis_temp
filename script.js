document.addEventListener("DOMContentLoaded", () => {
  // ======================================================
  // INICIALIZAÇÃO DO SISTEMA DE TOAST
  // ======================================================

  // Aguardar carregamento do sistema de toast
  if (typeof window.toastSystem === 'undefined') {
    console.log('🍞 Carregando sistema de notificações...');
  }

  // ======================================================
  // BANCO DE DADOS SIMULADO (MOCK DATA)
  // ======================================================
  const products = [
    {
      id: 1,
      name: "Garam Masala Premium",
      price: 25.0,
      image: "https://placehold.co/400x400/D84315/FFFFFF?text=Garam+Masala",
      description:
        "Nossa mistura exclusiva de especiarias torradas e moídas na hora. Essencial para dar um toque quente e aromático a pratos de curry, lentilhas e vegetais.",
      rating: 4.9,
      category: "Temperos",
      reviews: [
        {
          author: "Ricardo F.",
          text: "O melhor garam masala que já comprei! Muito aromático.",
          rating: 5,
        },
        {
          author: "Juliana M.",
          text: "Transformou meu curry de grão de bico. Recomendo!",
          rating: 5,
        },
      ],
    },
    {
      id: 2,
      name: "Cúrcuma (Açafrão-da-terra) Pura",
      price: 18.0,
      image: "https://placehold.co/400x400/FFC107/333333?text=C%C3%BArcuma",
      description:
        "Cúrcuma em pó 100% pura, de cor vibrante e sabor terroso. Conhecida por suas propriedades anti-inflamatórias, é um ingrediente chave na culinária e medicina ayurvédica.",
      rating: 4.8,
      category: "Temperos",
      reviews: [
        {
          author: "Lucas T.",
          text: "Cor e sabor incríveis. Produto de alta qualidade.",
          rating: 5,
        },
      ],
    },
    {
      id: 3,
      name: "Chá Masala Chai Tradicional",
      price: 32.0,
      image: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Masala+Chai",
      description:
        "Uma mistura revigorante de chá preto Assam com cardamomo, canela, cravo e gengibre. Prepare um chai autêntico e cremoso em casa.",
      rating: 5.0,
      category: "Chás",
      reviews: [
        {
          author: "Camila G.",
          text: "O melhor chai que já tomei! Cheirinho maravilhoso.",
          rating: 5,
        },
      ],
    },
    {
      id: 4,
      name: "Sementes de Cominho Inteiras",
      price: 15.0,
      image: "https://placehold.co/400x400/5D4037/FFFFFF?text=Cominho",
      description:
        "Sementes de cominho de alta qualidade, perfeitas para serem torradas e liberarem seu aroma inconfundível. Use em pães, arroz e pratos de legumes.",
      rating: 4.7,
      category: "Temperos",
      reviews: [
        {
          author: "Pedro A.",
          text: "Muito frescas e aromáticas.",
          rating: 4.5,
        },
      ],
    },
    {
      id: 5,
      name: "Lentilha Vermelha (Masoor Dal)",
      price: 22.0,
      image:
        "https://placehold.co/400x400/BF360C/FFFFFF?text=Lentilha+Vermelha",
      description:
        "Lentilhas vermelhas que cozinham rapidamente, ideais para sopas e o tradicional prato indiano 'dal'. Ricas em proteína e sabor.",
      rating: 4.9,
      category: "Grãos",
      reviews: [],
    },
    {
      id: 6,
      name: "Arroz Basmati Envelhecido",
      price: 35.0,
      image: "https://placehold.co/400x400/CFD8DC/37474F?text=Arroz+Basmati",
      description:
        "Grãos longos e aromáticos de arroz Basmati, envelhecido para perfeição. Fica soltinho e é o acompanhamento ideal para qualquer curry.",
      rating: 5.0,
      category: "Grãos",
      reviews: [],
    },
    {
      id: 7,
      name: "Chutney de Manga Agridocce",
      price: 28.0,
      image: "https://placehold.co/400x400/F9A825/FFFFFF?text=Chutney+de+Manga",
      description:
        "Um delicioso chutney de manga com um equilíbrio perfeito entre doce, picante e ácido. Sirva com samosas, pães ou como acompanhamento de carnes.",
      rating: 4.8,
      category: "Acompanhamentos",
      reviews: [],
    },
    {
      id: 8,
      name: "Pasta de Gengibre e Alho",
      price: 19.0,
      image:
        "https://placehold.co/400x400/BCAAA4/3E2723?text=Pasta+de+Gengibre",
      description:
        "Poupe tempo na cozinha com nossa pasta de gengibre e alho frescos. A base perfeita e prática para a maioria dos pratos indianos.",
      rating: 4.9,
      category: "Acompanhamentos",
      reviews: [],
    },
  ];

  // ======================================================
  // ESTADO DA APLICAÇÃO
  // ======================================================
  let cartItems = [];
  let wishlistItems = [];
  let currentSlide = 0;

  // ======================================================
  // SELETORES DE ELEMENTOS DO DOM
  // ======================================================
  const mainContent = document.getElementById("main-content");
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll(".nav-link");
  const cartCountEl = document.getElementById("cart-count");
  const wishlistCountEl = document.getElementById("wishlist-count");
  const wishlistBtn = document.getElementById("wishlist-btn");
  const cartBtn = document.getElementById("cart-btn");

  // Menu Lateral
  const sideMenu = document.getElementById("side-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const openMenuBtn = document.getElementById("open-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");

  // Carrossel
  const carouselItems = document.querySelectorAll(".carousel-item");
  const totalSlides = carouselItems.length;

  // ======================================================
  // FUNÇÕES DE RENDERIZAÇÃO
  // ======================================================

  // Renderiza um único card de produto
  function createProductCard(product) {
    const isWishlisted = wishlistItems.includes(product.id);
    const wishlistedClass = isWishlisted ? "text-primary" : "text-gray-300";

    return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover cursor-pointer product-link" data-id="${product.id}">
                    <button class="wishlist-toggle absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:text-primary ${wishlistedClass}" data-id="${product.id}">
                        <i class="fas fa-heart text-xl"></i>
                    </button>
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-teko h-12 cursor-pointer product-link" data-id="${product.id}">${product.name}</h3>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-lg font-bold text-primary">R$ ${product.price.toFixed(2)}</p>
                        <div class="rating">
                            ${renderStars(product.rating, false)}
                        </div>
                    </div>
                    <button class="add-to-cart-btn btn btn-secondary w-full mt-4" data-id="${product.id}">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
  }

  // Renderiza estrelas de avaliação
  function renderStars(rating, isInteractive = false) {
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? "text-accent" : "";
      const interactiveAttr = isInteractive ? `data-value="${i}"` : "";
      starsHtml += `<i class="fa-solid fa-star ${starClass}" ${interactiveAttr}></i>`;
    }
    return starsHtml;
  }

  // Renderiza a página de detalhes do produto
  function renderProductDetail(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const isWishlisted = wishlistItems.includes(product.id);
    const wishlistedClass = isWishlisted ? "text-primary" : "text-gray-400";

    const container = document.getElementById("product-detail-page");
    container.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src="${product.image}" alt="${product.name}" class="w-full rounded-lg shadow-lg">
                </div>
                <div>
                    <h1 class="text-5xl font-teko text-secondary">${product.name}</h1>
                    <div class="flex items-center my-4">
                        <div class="rating mr-4">${renderStars(product.rating)}</div>
                        <span class="text-gray-600">${product.reviews.length} avaliações</span>
                    </div>
                    <p class="text-3xl font-bold text-primary mb-4">R$ ${product.price.toFixed(2)}</p>
                    <p class="text-gray-700 leading-relaxed mb-6">${product.description}</p>
                    <div class="flex items-center space-x-4">
                        <button class="add-to-cart-btn btn btn-primary flex-grow text-lg" data-id="${product.id}">Adicionar ao Carrinho</button>
                        <button class="wishlist-toggle p-3 rounded-lg border-2 border-gray-300 hover:border-primary ${wishlistedClass}" data-id="${product.id}">
                            <i class="fas fa-heart text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Seção de Avaliações -->
            <div class="mt-12 bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-4xl font-teko text-secondary mb-6">Avaliações de Clientes</h2>
                <div id="reviews-list" class="space-y-6 mb-8">
                    ${
                      product.reviews
                        .map(
                          (review) => `
                        <div class="border-b pb-4">
                            <div class="flex items-center mb-1">
                                <div class="rating mr-3">${renderStars(review.rating)}</div>
                                <p class="font-bold">${review.author}</p>
                            </div>
                            <p class="text-gray-600">${review.text}</p>
                        </div>
                    `,
                        )
                        .join("") ||
                      "<p>Este produto ainda não tem avaliações. Seja o primeiro a avaliar!</p>"
                    }
                </div>

                <!-- Formulário de Nova Avaliação -->
                <h3 class="text-3xl font-teko text-secondary mb-4">Deixe sua avaliação</h3>
                <form id="review-form" data-id="${product.id}">
                    <div class="mb-4">
                        <label for="author-name" class="block mb-1 font-semibold">Seu Nome</label>
                        <input type="text" id="author-name" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-1 font-semibold">Sua Nota</label>
                        <div id="new-review-rating" class="rating text-3xl cursor-pointer">
                            ${renderStars(0, true)}
                        </div>
                        <input type="hidden" id="rating-value" value="0" required>
                    </div>
                     <div class="mb-4">
                        <label for="review-text" class="block mb-1 font-semibold">Seu Comentário</label>
                        <textarea id="review-text" rows="4" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar Avaliação</button>
                </form>
            </div>
        `;
    addReviewFormListeners();
  }

  // Renderiza itens na wishlist
  function renderWishlist() {
    const container = document.getElementById("wishlist-items");
    if (wishlistItems.length === 0) {
      container.innerHTML =
        '<p class="text-center text-gray-500">Sua lista de desejos está vazia.</p>';
      return;
    }
    container.innerHTML = wishlistItems
      .map((itemId) => {
        const product = products.find((p) => p.id === itemId);
        return `
                <div class="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-cover rounded mr-4">
                    <div class="flex-grow">
                        <h3 class="text-xl font-teko">${product.name}</h3>
                        <p class="text-lg font-bold text-primary">R$ ${product.price.toFixed(2)}</p>
                    </div>
                    <div class="flex items-center space-x-4">
                         <button class="add-to-cart-btn btn btn-secondary btn-sm" data-id="${product.id}">Mover para Carrinho</button>
                         <button class="remove-from-wishlist text-gray-400 hover:text-red-500" data-id="${product.id}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
      })
      .join("");
  }

  // Renderiza itens no carrinho de compras
  function renderCart() {
    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");
    let total = 0;

    if (cartItems.length === 0) {
      container.innerHTML =
        '<p class="text-center text-gray-500">Seu carrinho está vazio.</p>';
      totalEl.textContent = "R$ 0,00";
      return;
    }

    container.innerHTML = cartItems
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        total += product.price * item.quantity;
        return `
                <div class="flex items-center">
                    <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded mr-4">
                    <div class="flex-grow">
                        <h4 class="font-bold">${product.name}</h4>
                        <p>R$ ${product.price.toFixed(2)}</p>
                    </div>
                    <div class="flex items-center">
                        <input type="number" min="1" value="${item.quantity}" class="w-16 p-1 border rounded text-center cart-quantity-input" data-id="${product.id}">
                    </div>
                    <p class="w-24 text-right font-semibold">R$ ${(product.price * item.quantity).toFixed(2)}</p>
                    <button class="remove-from-cart ml-4 text-gray-400 hover:text-red-500" data-id="${product.id}"><i class="fas fa-times-circle"></i></button>
                </div>
            `;
      })
      .join("");

    totalEl.textContent = `R$ ${total.toFixed(2)}`;
  }

  // Renderiza avaliações em destaque na home
  function renderFeaturedReviews() {
    const container = document.getElementById("featured-reviews");
    if (!container) return;

    const allReviews = products.flatMap((p) =>
      p.reviews.map((r) => ({ ...r, productName: p.name })),
    );
    const featured = allReviews.filter((r) => r.rating === 5).slice(0, 3);

    if (featured.length === 0) {
      container.innerHTML =
        '<p class="text-center text-gray-500 col-span-3">Ainda não temos avaliações em destaque.</p>';
      return;
    }

    container.innerHTML = featured
      .map(
        (review) => `
            <div class="bg-yellow-50 p-6 rounded-lg text-center flex flex-col items-center">
                <i class="fas fa-quote-left text-3xl text-accent mb-4"></i>
                <p class="text-gray-600 italic mb-4">"${review.text}"</p>
                <div class="rating text-accent mb-2">
                    ${renderStars(review.rating)}
                </div>
                <p class="font-bold text-secondary">${review.author}</p>
                <p class="text-sm text-gray-500">Sobre: ${review.productName}</p>
            </div>
        `,
      )
      .join("");
  }

  // ======================================================
  // LÓGICA DA APLICAÇÃO
  // ======================================================

  // Navegação entre páginas
  function showPage(pageId) {
    pages.forEach((page) => {
      page.classList.remove("active-page");
    });
    const newPage = document.getElementById(pageId + "-page");
    if (newPage) {
      newPage.classList.add("active-page");
    }
    window.scrollTo(0, 0);
  }

  // Atualiza os contadores no cabeçalho
  function updateCounters() {
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistCount = wishlistItems.length;

    cartCountEl.textContent = cartCount;
    wishlistCountEl.textContent = wishlistCount;

    // Atualizar mini contadores no menu lateral
    const wishlistMiniCount = document.getElementById("wishlist-mini-count");
    const cartMiniCount = document.getElementById("cart-mini-count");

    if (wishlistMiniCount) {
      wishlistMiniCount.textContent = wishlistCount;
    }
    if (cartMiniCount) {
      cartMiniCount.textContent = cartCount;
    }
  }

  // Adiciona um item ao carrinho
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
      // Notificação de quantidade atualizada
      if (window.cartNotifications) {
        window.cartNotifications.quantityUpdated(product?.name || 'Produto', existingItem.quantity);
      }
    } else {
      cartItems.push({ id: productId, quantity: 1 });
      // Notificação de item adicionado
      if (window.cartNotifications) {
        window.cartNotifications.itemAdded(product?.name || 'Produto');
      }
    }

    updateCounters();
    showFeedback("Produto adicionado ao carrinho!");

    // Verificar se desbloqueou frete grátis
    checkFreeShipping();
  }
    showFeedback(
      "Produto adicionado!",
      "O item foi adicionado ao seu carrinho.",
    );
  }

  // Alterna item na wishlist
  function toggleWishlist(productId) {
    const index = wishlistItems.indexOf(productId);
    if (index > -1) {
      wishlistItems.splice(index, 1);
      showFeedback(
        "Item removido",
        "O item foi removido da sua lista de desejos.",
      );
    } else {
      wishlistItems.push(productId);
      showFeedback(
        "Item adicionado!",
        "O item foi salvo na sua lista de desejos.",
      );
    }
    updateCounters();
    // Re-renderiza a view atual para atualizar o ícone de coração
    const activePageId = document.querySelector(".active-page").id;
    if (activePageId === "home-page" || activePageId === "products-page") {
      populateProducts();
    } else if (activePageId === "product-detail-page") {
      renderProductDetail(productId);
    } else if (activePageId === "wishlist-page") {
      renderWishlist();
    }
  }

  // Modal de feedback
  function showFeedback(title, message) {
    const modal = document.getElementById("feedback-modal");
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-message").textContent = message;
    modal.classList.remove("hidden");
  }

  // Controle do menu lateral
  function toggleMenu() {
    sideMenu.classList.toggle("open");
    menuOverlay.classList.toggle("hidden");
  }

  // Controle do Carrossel
  function updateCarousel() {
    carouselItems.forEach((item, index) => {
      item.classList.toggle("active", index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  // ======================================================
  // INICIALIZAÇÃO E EVENT LISTENERS
  // ======================================================

  // Preenche as seções de produtos com base no filtro
  function populateProducts(filter = "all", searchTerm = "") {
    const featuredContainer = document.getElementById("featured-products");
    const recommendedContainer = document.getElementById(
      "recommended-products",
    );
    const productListContainer = document.getElementById("product-list");

    let filteredProducts = products;

    // Filtro por categoria
    if (filter !== "all") {
      filteredProducts = filteredProducts.filter((p) => p.category === filter);
    }

    // Filtro por busca
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    const productHtml = filteredProducts.map(createProductCard).join("");

    // Na página de produtos, mostra o resultado filtrado
    if (
      document.getElementById("products-page").classList.contains("active-page")
    ) {
      productListContainer.innerHTML =
        productHtml || "<p>Nenhum produto encontrado.</p>";
    }

    // Na home, continua mostrando os fixos
    if (featuredContainer) {
      featuredContainer.innerHTML = products
        .slice(0, 4)
        .map(createProductCard)
        .join("");
    }
    if (recommendedContainer) {
      recommendedContainer.innerHTML = products
        .slice(-4)
        .map(createProductCard)
        .join("");
    }
  }

  // Listeners para o formulário de avaliação
  function addReviewFormListeners() {
    const reviewForm = document.getElementById("review-form");
    if (reviewForm) {
      reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const productId = parseInt(reviewForm.dataset.id);
        const product = products.find((p) => p.id === productId);
        const author = document.getElementById("author-name").value;
        const text = document.getElementById("review-text").value;
        const rating = parseInt(document.getElementById("rating-value").value);

        if (rating === 0) {
          alert("Por favor, selecione uma nota.");
          return;
        }

        product.reviews.push({ author, text, rating });

        // Recalcula a média de rating do produto
        const totalRating = product.reviews.reduce(
          (sum, r) => sum + r.rating,
          0,
        );
        product.rating = totalRating / product.reviews.length;

        showFeedback("Obrigado!", "Sua avaliação foi enviada com sucesso.");
        renderProductDetail(productId); // Re-renderiza a página para mostrar a nova avaliação
      });

      const stars = document.querySelectorAll("#new-review-rating .fa-star");
      stars.forEach((star) => {
        star.addEventListener("click", () => {
          const value = parseInt(star.dataset.value);
          document.getElementById("rating-value").value = value;
          stars.forEach((s) => {
            s.classList.toggle(
              "text-accent",
              parseInt(s.dataset.value) <= value,
            );
          });
        });
      });
    }
  }

  // Delegação de eventos no corpo do documento
  document.body.addEventListener("click", (e) => {
    const addToCartBtn = e.target.closest(".add-to-cart-btn");
    if (addToCartBtn) {
      const productId = parseInt(addToCartBtn.dataset.id);
      addToCart(productId);
      const wishlistIndex = wishlistItems.indexOf(productId);
      if (wishlistIndex > -1) {
        toggleWishlist(productId);
      }
    }

    const productLink = e.target.closest(".product-link");
    if (productLink) {
      const productId = parseInt(productLink.dataset.id);
      renderProductDetail(productId);
      showPage("product-detail");
    }

    const wishlistToggle = e.target.closest(".wishlist-toggle");
    if (wishlistToggle) {
      const productId = parseInt(wishlistToggle.dataset.id);
      toggleWishlist(productId);
    }

    const removeFromWishlistBtn = e.target.closest(".remove-from-wishlist");
    if (removeFromWishlistBtn) {
      const productId = parseInt(removeFromWishlistBtn.dataset.id);
      toggleWishlist(productId);
    }

    const removeFromCartBtn = e.target.closest(".remove-from-cart");
    if (removeFromCartBtn) {
      const productId = parseInt(removeFromCartBtn.dataset.id);
      cartItems = cartItems.filter((item) => item.id !== productId);
      renderCart();
      updateCounters();
    }
  });

  // Event listener para navegação principal
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pageId = link.dataset.page;
      showPage(pageId);
      if (sideMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  // Event listener para abrir a wishlist e o carrinho
  wishlistBtn.addEventListener("click", () => {
    renderWishlist();
    showPage("wishlist");
  });
  cartBtn.addEventListener("click", () => {
    renderCart();
    showPage("checkout");
  });

  // Listeners do menu lateral
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);

  // Listeners para subcategorias
  document.querySelectorAll(".category-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const subcategoryList =
        this.parentElement.querySelector(".subcategory-list");
      const isOpen = subcategoryList.classList.contains("show");

      // Fecha todas as outras subcategorias
      document.querySelectorAll(".subcategory-list").forEach((list) => {
        list.classList.remove("show");
        list.classList.add("hidden");
      });
      document.querySelectorAll(".category-toggle").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Alterna a subcategoria atual
      if (!isOpen) {
        subcategoryList.classList.remove("hidden");
        subcategoryList.classList.add("show");
        this.classList.add("active");
      }
    });
  });

  // Listener da busca
  document.getElementById("search-input").addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // Se há termo de busca, filtra produtos
    if (searchTerm) {
      showPage("products");
      document.getElementById("product-list").innerHTML = products
        .map(createProductCard)
        .join(""); // Reset view before filtering
      populateProducts("all", searchTerm);

      // Filtrar categorias visíveis baseado na busca
      filterCategoriesInMenu(searchTerm);

      // Mostrar contador de resultados
      updateSearchCounter(searchTerm);

      // Mostrar botão de limpar filtros
      document.getElementById("reset-filters-btn").classList.remove("hidden");
    } else {
      // Se não há busca, mostra todas as categorias
      showAllCategoriesInMenu();
      hideSearchCounter();
      document.getElementById("reset-filters-btn").classList.add("hidden");
    }
  });

  // Listener das categorias
  document.querySelectorAll(".category-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.dataset.category;
      showPage("products");
      document.getElementById("product-list").innerHTML = products
        .map(createProductCard)
        .join(""); // Reset view before filtering
      populateProducts(category);
      toggleMenu();
    });
  });

  // Listener para o formulário de checkout
  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      showFeedback(
        "Carrinho Vazio",
        "Adicione itens ao carrinho antes de finalizar a compra.",
      );
      return;
    }
    showFeedback(
      "Pedido Confirmado!",
      "Obrigado por sua compra. Seu pedido foi processado com sucesso.",
    );
    cartItems = [];
    updateCounters();
    renderCart();
    e.target.reset();
    setTimeout(() => showPage("home"), 2000);
  });

  // Listener do formulário de contato
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    showFeedback(
      "Mensagem Enviada!",
      "Obrigado por entrar em contato. Responderemos em breve.",
    );
    e.target.reset();
  });

  // Listener para quantidade no carrinho
  document.getElementById("cart-items").addEventListener("change", (e) => {
    if (e.target.classList.contains("cart-quantity-input")) {
      const productId = parseInt(e.target.dataset.id);
      const newQuantity = parseInt(e.target.value);
      const item = cartItems.find((i) => i.id === productId);
      if (item && newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        cartItems = cartItems.filter((i) => i.id !== productId);
      }
      renderCart();
      updateCounters();
    }
  });

  // Fechar modal
  document.getElementById("modal-close-btn").addEventListener("click", () => {
    document.getElementById("feedback-modal").classList.add("hidden");
  });

  // Listeners do Carrossel
  document.getElementById("next-slide").addEventListener("click", nextSlide);
  document.getElementById("prev-slide").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  // Inicialização
  function init() {
    console.log("Inicializando India Oasis...");

    const productListContainer = document.getElementById("product-list");
    if (productListContainer) {
      productListContainer.innerHTML = products.map(createProductCard).join("");
    }

    populateProducts();
    renderFeaturedReviews();
    updateCounters();
    showPage("home");
    setInterval(nextSlide, 5000); // Avança o slide a cada 5 segundos

    console.log("Menu lateral inicializado com", products.length, "produtos");
    console.log(
      "Funcionalidades ativas: busca, categorias expandíveis, contadores",
    );
  }

  // Função para filtrar categorias no menu baseado na busca
  function filterCategoriesInMenu(searchTerm) {
    const categories = document.querySelectorAll(
      ".category-section, .category-link",
    );

    let visibleCategories = 0;
    categories.forEach((category) => {
      const categoryText = category.textContent.toLowerCase();
      const categoryItem = category.closest("li");

      if (categoryText.includes(searchTerm)) {
        categoryItem.style.display = "block";
        categoryItem.style.opacity = "1";
        visibleCategories++;
      } else {
        categoryItem.style.display = "none";
        categoryItem.style.opacity = "0.5";
      }
    });

    console.log(
      `Filtro aplicado: ${visibleCategories} categorias visíveis para "${searchTerm}"`,
    );
  }

  // Função para mostrar todas as categorias
  function showAllCategoriesInMenu() {
    const categories = document.querySelectorAll(
      ".category-section, .category-link",
    );

    categories.forEach((category) => {
      const categoryItem = category.closest("li");
      categoryItem.style.display = "block";
      categoryItem.style.opacity = "1";
    });
  }

  // Função para destacar categoria ativa
  function highlightActiveCategory(categoryName) {
    // Remove destaque anterior
    document.querySelectorAll(".category-active").forEach((el) => {
      el.classList.remove("category-active");
    });

    // Adiciona destaque à categoria atual
    const activeCategory = document.querySelector(
      `[data-category="${categoryName}"]`,
    );
    if (activeCategory) {
      activeCategory.classList.add("category-active");
    }
  }

  // Função para atualizar contador de busca
  function updateSearchCounter(searchTerm) {
    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const counter = document.getElementById("search-results-counter");
    const countSpan = document.getElementById("results-count");

    countSpan.textContent = filteredProducts.length;
    counter.classList.remove("hidden");
  }

  // Função para esconder contador de busca
  function hideSearchCounter() {
    const counter = document.getElementById("search-results-counter");
    counter.classList.add("hidden");
  }

  // Listener para botão de limpar filtros
  const resetBtn = document.getElementById("reset-filters-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      // Limpar campo de busca
      const searchInput = document.getElementById("search-input");
      if (searchInput) {
        searchInput.value = "";
      }

      // Mostrar todas as categorias
      showAllCategoriesInMenu();

      // Esconder contador e botão
      hideSearchCounter();
      resetBtn.classList.add("hidden");

      // Voltar para página inicial
      showPage("home");

      console.log("Filtros limpos, voltando à visualização padrão");

      // Notificação de filtros limpos
      if (window.actionFeedback) {
        window.actionFeedback.copied('Filtros limpos');
      }
    });
  }

  // ======================================================
  // FUNCIONALIDADES AVANÇADAS
  // ======================================================

  // Verificar se desbloqueou frete grátis
  function checkFreeShipping() {
    const total = cartItems.reduce((sum, item) => {
      const product = products.find(p => p.id === item.id);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    const freeShippingThreshold = 150;

    if (total >= freeShippingThreshold && window.cartNotifications) {
      // Verificar se é a primeira vez que atinge o limite
      const wasUnderThreshold = localStorage.getItem('wasUnderFreeShipping') === 'true';
      if (wasUnderThreshold) {
        window.cartNotifications.freeShippingUnlocked();
        localStorage.removeItem('wasUnderFreeShipping');
      }
    } else {
      localStorage.setItem('wasUnderFreeShipping', 'true');
    }
  }

  // Atualizar ícones de wishlist
  function updateWishlistIcons() {
    document.querySelectorAll('[data-action="add-to-wishlist"]').forEach(btn => {
      const productId = parseInt(btn.getAttribute('data-product-id'));
      const isInWishlist = wishlistItems.some(item => item.id === productId);

      const icon = btn.querySelector('i');
      if (icon) {
        if (isInWishlist) {
          icon.className = 'fas fa-heart text-red-500';
          btn.setAttribute('title', 'Remover dos favoritos');
        } else {
          icon.className = 'far fa-heart';
          btn.setAttribute('title', 'Adicionar aos favoritos');
        }
      }
    });
  }

  // Simulação de alertas de preço
  function simulatePriceAlert() {
    if (wishlistItems.length > 0 && window.wishlistNotifications) {
      const randomItem = wishlistItems[Math.floor(Math.random() * wishlistItems.length)];
      const product = products.find(p => p.id === randomItem.id);

      if (product) {
        const oldPrice = product.price;
        const newPrice = product.price * 0.8; // 20% de desconto

        setTimeout(() => {
          window.wishlistNotifications.priceDropAlert(product.name, oldPrice, newPrice);
        }, 10000); // Simular após 10 segundos
      }
    }
  }

  // Detectar erros de formulário
  function setupFormValidation() {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        const requiredFields = form.querySelectorAll('[required]');
        let hasErrors = false;

        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            hasErrors = true;
            field.classList.add('border-red-500');
          } else {
            field.classList.remove('border-red-500');
          }
        });

        if (hasErrors) {
          e.preventDefault();
          if (window.actionFeedback) {
            window.actionFeedback.formError('Por favor, preencha todos os campos obrigatórios');
          }
        }
      });
    });
  }

  // Inicializar funcionalidades avançadas
  function initAdvancedFeatures() {
    updateWishlistIcons();
    setupFormValidation();

    // Simular alerta de preço para demonstração
    if (window.location.pathname.includes('wishlist.html')) {
      simulatePriceAlert();
    }

    // Configurar indicador de progresso de scroll
    setupScrollProgress();

    // Configurar botão voltar ao topo
    setupBackToTop();
  }

  // Indicador de progresso de scroll
  function setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-indicator';
    progressBar.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(progressBar);

    const progress = progressBar.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      progress.style.width = scrollPercent + '%';
    });
  }

  // Botão voltar ao topo
  function setupBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.title = 'Voltar ao topo';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  init();

  // Inicializar funcionalidades avançadas após carregamento
  setTimeout(initAdvancedFeatures, 500);
});
