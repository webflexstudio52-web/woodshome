document.addEventListener('DOMContentLoaded', function() {
    // Product filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Quick View Modal
    const quickViewModal = document.getElementById('quickViewModal');
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    const closeModal = document.querySelector('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Sample product data (in a real app, this would come from a database)
    const products = {
        1: {
            id: 1,
            name: 'Rustic Wooden Chair',
            price: '149.99',
            originalPrice: '199.99',
            category: 'Furniture',
            rating: 4.5,
            reviews: '24',
            description: 'Handcrafted from solid oak, this rustic wooden chair combines durability with timeless design. Perfect for dining rooms, kitchens, or as an accent piece.',
            features: [
                'Made from 100% solid oak wood',
                'Hand-finished with natural oil',
                'Weight capacity: 300 lbs',
                'Dimensions: 18"W x 22"D x 36"H',
                'Assembly required'
            ],
            images: [
                'https://images.unsplash.com/photo-1555041463-a586c061ea63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            ]
        },
        2: {
            id: 2,
            name: 'Floating Wood Shelf',
            price: '89.99',
            category: 'Home Decor',
            rating: 4,
            reviews: '18',
            description: 'This floating shelf is perfect for displaying your favorite decor items. Made from reclaimed wood, each piece has its own unique character.',
            features: [
                'Made from reclaimed pine wood',
                'Hidden mounting hardware included',
                'Dimensions: 36"L x 8"D x 2"H',
                'Weight capacity: 30 lbs per shelf',
                'Easy to install with included hardware'
            ],
            images: [
                'https://images.unsplash.com/photo-1600585154526-990dced4b0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            ]
        },
        3: {
            id: 3,
            name: 'Bamboo Cutting Board',
            price: '34.99',
            originalPrice: '49.99',
            category: 'Kitchenware',
            rating: 5,
            reviews: '42',
            description: 'This eco-friendly bamboo cutting board is both durable and beautiful. The natural bamboo is naturally antimicrobial and gentle on knives.',
            features: [
                'Made from 100% organic bamboo',
                'Reversible design with juice groove on one side',
                'Dimensions: 12" x 8" x 0.75"',
                'Dishwasher safe (hand wash recommended)',
                'Lightweight and easy to store'
            ],
            images: [
                'https://images.unsplash.com/photo-1561485445-5d0a95382b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1598373182133-524e082378dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1600369672778-69a5ebf4af17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            ]
        },
        4: {
            id: 4,
            name: 'Live Edge Coffee Table',
            price: '299.99',
            category: 'Furniture',
            rating: 4,
            reviews: '15',
            description: 'This stunning live edge coffee table features the natural beauty of solid walnut with a smooth, polished finish. The metal hairpin legs add a modern touch.',
            features: [
                'Solid walnut top with live edge',
                'Powder-coated steel hairpin legs',
                'Dimensions: 48"L x 24"D x 18"H',
                'Weight: 45 lbs',
                'Finished with food-safe oil and wax'
            ],
            images: [
                'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1555041463-a586c061ea63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            ]
        }
    };
    
    // Open Quick View
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = btn.getAttribute('data-product');
            const product = products[productId];
            
            if (product) {
                const modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = `
                    <div class="modal-product">
                        <div class="modal-product-gallery">
                            <div class="main-image">
                                <img src="${product.images[0]}" alt="${product.name}">
                            </div>
                            <div class="thumbnail-container">
                                ${product.images.map((img, index) => `
                                    <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                                        <img src="${img}" alt="${product.name} ${index + 1}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="modal-product-details">
                            <h2>${product.name}</h2>
                            <div class="product-meta">
                                <div class="product-rating">
                                    ${Array(5).fill('').map((_, i) => 
                                        `<i class="fas fa-star${i < Math.floor(product.rating) ? '' : (i < Math.ceil(product.rating) ? '-half-alt' : '')} ${i < product.rating ? 'filled' : ''}"></i>`
                                    ).join('')}
                                    <span class="reviews">(${product.reviews} reviews)</span>
                                </div>
                                <div class="product-category">${product.category}</div>
                            </div>
                            <div class="product-price">
                                <span class="current-price">$${product.price}</span>
                                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                            </div>
                            <p class="product-description">${product.description}</p>
                            <div class="product-features">
                                <h4>Features:</h4>
                                <ul>
                                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="quantity-selector">
                                <label for="quantity">Quantity:</label>
                                <div class="quantity-controls">
                                    <button class="quantity-btn minus">-</button>
                                    <input type="number" id="quantity" value="1" min="1" max="10">
                                    <button class="quantity-btn plus">+</button>
                                </div>
                            </div>
                            <div class="modal-actions">
                                <button class="btn btn-primary add-to-cart">
                                    <i class="fas fa-shopping-cart"></i> Add to Cart
                                </button>
                                <button class="btn btn-secondary add-to-wishlist">
                                    <i class="far fa-heart"></i> Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                // Add event listeners for quantity controls
                const quantityInput = modalBody.querySelector('#quantity');
                const minusBtn = modalBody.querySelector('.quantity-btn.minus');
                const plusBtn = modalBody.querySelector('.quantity-btn.plus');
                
                minusBtn.addEventListener('click', () => {
                    let value = parseInt(quantityInput.value);
                    if (value > 1) {
                        quantityInput.value = value - 1;
                    }
                });
                
                plusBtn.addEventListener('click', () => {
                    let value = parseInt(quantityInput.value);
                    if (value < 10) {
                        quantityInput.value = value + 1;
                    }
                });
                
                // Add event listeners for thumbnail navigation
                const thumbnails = modalBody.querySelectorAll('.thumbnail');
                const mainImage = modalBody.querySelector('.main-image img');
                
                thumbn.forEach(thumb => {
                    thumb.addEventListener('click', () => {
                        const imgIndex = thumb.getAttribute('data-index');
                        mainImage.src = product.images[imgIndex];
                        
                        // Update active thumbnail
                        thumbnails.forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });
                });
                
                // Show the modal
                quickViewModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close Modal
    function closeQuickView() {
        quickViewModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeModal.addEventListener('click', closeQuickView);
    modalOverlay.addEventListener('click', closeQuickView);
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeQuickView();
        }
    });
    
    // Add to cart functionality (simplified)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const productCard = button.closest('.product-card') || button.closest('.modal-product');
            
            if (productCard) {
                const productName = productCard.querySelector('.product-title')?.textContent || 
                                  productCard.querySelector('h2')?.textContent;
                const quantity = productCard.querySelector('#quantity')?.value || 1;
                
                // In a real app, you would add the product to a shopping cart
                alert(`Added ${quantity} x ${productName} to your cart!`);
                
                // Update cart count in the navbar
                const cartCount = document.querySelector('.cart-count');
                if (cartCount) {
                    const currentCount = parseInt(cartCount.textContent) || 0;
                    cartCount.textContent = currentCount + parseInt(quantity);
                    cartCount.style.display = 'flex';
                }
                
                // Close the modal if it's open
                if (quickViewModal.classList.contains('active')) {
                    closeQuickView();
                }
            }
        }
    });
    
    // Add to wishlist functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-wishlist') || e.target.closest('.add-to-wishlist')) {
            const button = e.target.classList.contains('add-to-wishlist') ? e.target : e.target.closest('.add-to-wishlist');
            const productCard = button.closest('.product-card') || button.closest('.modal-product');
            
            if (productCard) {
                const productName = productCard.querySelector('.product-title')?.textContent || 
                                  productCard.querySelector('h2')?.textContent;
                
                // Toggle wishlist state
                const isActive = button.classList.contains('active');
                button.classList.toggle('active', !isActive);
                
                // Change icon based on state
                const icon = button.querySelector('i');
                if (icon) {
                    if (isActive) {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                    } else {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                    }
                }
                
                // Show feedback
                if (!isActive) {
                    alert(`Added ${productName} to your wishlist!`);
                } else {
                    alert(`Removed ${productName} from your wishlist.`);
                }
            }
        }
    });
});
