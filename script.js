  document.addEventListener('DOMContentLoaded', () => {

    // --- PRODUCT DATA ---
    // Place your image files in the project images folder (e.g. /D:/e-comm/images)
    // and reference them here as relative paths like 'images/your-image.jpg'

    const products = [
      {
        id: 'prod_001',
        name: 'Classic Plain Mat',
        description: 'Traditional comfort for everyday use. Handwoven with natural korai grass for a cool and comfortable sleep.',
        price: 349,
        oPrice:0,
        rating: 3.8,
        badge: 'Bestseller',
        variations: [
          {
            id: 'var_001a',
            colorName: 'green',
            colorHex: '#00ff48ff',
            images: [
              'images/4-white(1).jpg',
              'images/4-white (2).jpg',
            ]
          },
          {
            id: 'var_001b',
            colorName: 'Purple',
            colorHex: '#d000ffff',
            images: [
              'images/4-white pur.jpg'
            ]
          }
        ]
      },
      {
        id: 'prod_002',
        name: 'Patterned Mat',
        description: 'Stylish designs for a modern touch, combining traditional weaving with contemporary aesthetics.',
        price: 399,
        oPrice:0,
        rating: 4.6,
        badge: 'Popular',
        variations: [
          {
            id: 'var_002a',
            colorName: 'Red & Gold',
            colorHex: '#ffee00ff',
            images: [
              
              'images/color-yell (2).jpg'
            ]
          },
          {
            id: 'var_002b',
            colorName: 'Green & red',
            colorHex: '#087f56ff',
            images: [
              'images/color-yell.jpg',
              'images/color-green.jpg'
            ]
          }
        ]
      },
      {
        id: 'prod_003',
        name: 'The Artisian Mats',
        description: 'higher level of detail and craftsmanship. Simple, natural, and beautiful.',
        price: 299,
        oPrice:0,
        rating: 4.6,
        badge: 'Premium',
        variations: [
          {
            id: 'var_003a',
            colorName: 'dotted R&B',
            colorHex: '#074583ff',
            images: [
              'images/4-dotted (2).jpg',
              'images/4-dotted.jpg'
            ]
          },
          {
            id: 'var_003b',
            colorName:'light green',
            colorHex: '#00fb54ff',
            images:[
              'images/4-color.jpg',
              'images/4-color (2).jpg'
            ]

          }
        ]
      },
      {
        id: 'prod_004',
        name: 'Premium Mat with Nylon Borders',
        description: 'Luxury weave with durable nylon borders for superior comfort, longevity, and a refined look.',
        price: 549,
        oPrice:0,
        rating: 4.9,
        badge: 'Premium',
        variations: [
          {
            id: 'var_004a',
            colorName: 'dark orange',
            colorHex: 'rgba(187, 44, 0, 1)',
            images: [
              'images/180-2.jpg',
              'images/180-1.jpg'
            ]
          }
        ]
      },
      {
        id: 'prod_005',
        name: 'Eco-Friendly Mat',
        description: 'Sustainably sourced korai grass mats that are environmentally friendly and biodegradable.',
        price: 279,
        oPrice:0,
        rating: 3.7,
        badge: 'Affordable',
        variations: [
          {
            id: 'var_005a',
            colorName: 'Yellow',
            colorHex: '#ffe601ff',
            images: [
              'images/normal-yell.jpg'
            ]
          },
          {
            id: 'var_005b',
            colorName: 'Red',
            colorHex: '#ff0000ff',
            images: [
              'images/normal-red.jpg'
            ]
          },
          {
            id: 'var_005c',
            colorName: 'Purple',
            colorHex: '#b400ffff',
            images: [
              'images/normal-pur.jpg'
            ]
          }
        ]
      },
      {
        id: 'prod_006',
        name:'special coloured Mats',
        description: 'Affordable yet stylish mats that do not compromise on quality or design.',
        price: 319,
        oPrice:0,
        rating: 4.2,
        badge: 'Budget',
        variations: [
          {
            id: 'var_006a',
            colorName: 'Red',
            colorHex: '#ff0000ff',
            images: [
              'images/spl-clr.jpg',
              'images/spl-clr (2).jpg'
            ]
          }
        ]
      },
      {
        id:'prod_007',
        name:'special plain mats',
        description: 'Simple, natural, and beautiful mats that highlight the inherent beauty of korai grass.',
        price: 289,
        oPrice:0,
        rating: 4.0,
        badge: 'Simple',
        variations: [
          {
            id: 'var_007a',
            colorName:'green',
            colorHex: '#00ff48ff',
            images:[
              'images/spl-green.jpg'
            ]
          },
          {
            id: 'var_007b',
            colorName:'Golden',
            colorHex: '#ffd700ff',
            images:[
              'images/spl-yellow.jpg'

            ]
          },
          {
            id: 'var_007c',
            colorName:'red',
            colorHex: '#ff0000ff',
            images:[
              'images/spl-red.jpg'
            ]
          }
        ]
      }
    ];

    // IMPORTANT: Replace this with your actual Google Apps Script Web App URL
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwc1DC9XdEoABZfQ3MftEgk2B58is1d0pmc5QJb-U5YvqDgCmJAvbSmTZFm7jiF9kuSVw/exec';

    // --- STATE VARIABLES ---
    let currentProduct = null;
    let currentVariationId = null;

    // --- DOM ELEMENTS ---
    const productGrid = document.getElementById('product-grid');
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const mainProductImage = document.getElementById('main-product-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductPrice = document.getElementById('modal-product-price');
    const modalProductDescription = document.getElementById('modal-product-description');
    const colorSwatchContainer = document.getElementById('color-swatch-container');
    const selectedColorNameEl = document.getElementById('selected-color-name');
    const addToFormBtn = document.getElementById('add-to-form-btn');
    const orderForm = document.getElementById('order-form');
    const productNameInput = document.getElementById('product-name-input');
    const quantityInput = document.getElementById('quantity');
    const pricePerMatInput = document.getElementById('price-per-mat'); 
    const totalPriceInput = document.getElementById('total-price'); 
    const notificationEl = document.getElementById('notification');
    const rotatingMat = document.getElementById('rotating-mat-animation'); 

    // --- FUNCTIONS ---

    function renderProductGrid() {
      productGrid.innerHTML = products.map(product => `
        <div class="product-card" data-product-id="${product.id}">
          <span class="badge">${product.badge}</span>
          <img src="${product.variations[0].images[0]}" alt="${product.name}">
          <div class="info">
            <div class="rating">⭐ ${product.rating}</div>
            <h4>${product.name}</h4>
            <p>${product.description.split('.')[0]}.</p>
            <h3>₹ ${product.price} <s>₹ ${product.oPrice}</s></h3>
          </div>
        </div>
      `).join('');
    }

    function openModal(productId) {
      currentProduct = products.find(p => p.id === productId);
      if (!currentProduct) return;
      
      currentVariationId = currentProduct.variations[0].id;
      
      modalProductName.textContent = currentProduct.name;
      modalProductPrice.innerHTML = `₹ ${currentProduct.price} <s>₹ ${currentProduct.oPrice}</s>`;
      modalProductDescription.textContent = currentProduct.description;

      updateModalContent();
      modal.classList.add('visible');
    }

    function updateModalContent() {
      const variation = currentProduct.variations.find(v => v.id === currentVariationId);
      if (!variation) return;

      mainProductImage.src = variation.images[0];
      selectedColorNameEl.textContent = variation.colorName;

      colorSwatchContainer.innerHTML = currentProduct.variations.map(v => `
        <div class="color-swatch ${v.id === currentVariationId ? 'selected' : ''}" 
             style="background-color: ${v.colorHex};" 
             data-variation-id="${v.id}"
             title="${v.colorName}">
        </div>
      `).join('');

      thumbnailContainer.innerHTML = variation.images.map((img, index) => `
        <img src="${img}" alt="Thumbnail ${index + 1}" 
             class="thumbnail-image ${index === 0 ? 'selected' : ''}" 
             data-image-src="${img}">
      `).join('');
      
      addColorSwatchListeners();
      addThumbnailListeners();
    }
    
    // NEW: Function to calculate and update prices in the form
    function updatePriceDetails() {
        if (!currentProduct) return;
        
        const quantity = parseInt(quantityInput.value) || 1;
        const price = currentProduct.price;
        const totalPrice = quantity * price;

        pricePerMatInput.value = price.toFixed(2);
        totalPriceInput.value = totalPrice.toFixed(2);
    }

    function closeModal() {
      modal.classList.remove('visible');
    }

    function showNotification(message, isError = false) {
      notificationEl.textContent = message;
      notificationEl.className = isError ? 'notification-error' : 'notification-success';
      setTimeout(() => { notificationEl.textContent = ''; notificationEl.className = ''; }, 5000);
    }

    // --- EVENT LISTENERS ---
    // Scroll Animation Listener
    window.addEventListener('scroll', () => {
        if (!rotatingMat) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        const rotation = scrollPercent * 360; // One full rotation over the whole page
        
        // Applying a smooth transform
        rotatingMat.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    });

    productGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      if (card) {
        openModal(card.dataset.productId);
      }
    });

    function addColorSwatchListeners() {
      document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', (e) => {
          currentVariationId = e.target.dataset.variationId;
          updateModalContent();
        });
      });
    }

    function addThumbnailListeners() {
      document.querySelectorAll('.thumbnail-image').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
          const newSrc = e.target.dataset.imageSrc;
          mainProductImage.src = newSrc;
          document.querySelectorAll('.thumbnail-image').forEach(t => t.classList.remove('selected'));
          e.target.classList.add('selected');
        });
      });
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    addToFormBtn.addEventListener('click', () => {
      if (!currentProduct || !currentVariationId) return;
      const variation = currentProduct.variations.find(v => v.id === currentVariationId);
      productNameInput.value = `${currentProduct.name} - ${variation.colorName}`;
      
      updatePriceDetails(); // NEW: Update prices when product is selected
      
      closeModal();
      document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
    
    // NEW: Event listener for quantity changes
    quantityInput.addEventListener('input', updatePriceDetails);

    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        showNotification('Form submission is not configured yet.', true);
        return;
      }
      if (!productNameInput.value) {
        showNotification('Please select a product from the list above.', true);
        return;
      }

      const submitButton = orderForm.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';

      const formData = new FormData(orderForm);
      const data = Object.fromEntries(formData.entries());
      data.timestamp = new Date().toISOString();

      fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(result => {
        if (result.result === 'success') {
          showNotification('Order placed successfully! We will contact you shortly.', false);
          orderForm.reset();
          // Clear price fields after reset
          pricePerMatInput.value = '';
          totalPriceInput.value = '';
        } else {
          throw new Error(result.message || 'An unknown error occurred.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showNotification(`Failed to submit order. Please try again. Error: ${error.message}`, true);
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Place Order';
      });
    });

    // --- INITIALIZATION ---
    renderProductGrid();
  });