// Product listing page
function productListing() {
  return {
      products: [],
      async fetchProducts() {
          const response = await fetch('https://fakestoreapi.com/products');
          this.products = await response.json();
      },
      addToCart(product) {
          // Implement add to cart logic
          console.log('Added to cart:', product);
          this.$dispatch('notify', { message: 'Added to cart!' });
      },
      addToWatchlist(product) {
          // Implement add to watchlist logic
          console.log('Added to watchlist:', product);
          this.$dispatch('notify', { message: 'Added to watchlist!' });
      }
  }
}

// Product detail page
function productDetail() {
  return {
      product: null,
      async fetchProduct() {
          const urlParams = new URLSearchParams(window.location.search);
          const id = urlParams.get('id');
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          this.product = await response.json();
      },
      addToCart() {
          // Implement add to cart logic
          console.log('Added to cart:', this.product);
          this.$dispatch('notify', { message: 'Added to cart!' });
      }
  }
}

// Shopping cart page
function cart() {
  return {
      items: [],
      get total() {
          return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
      increaseQuantity(item) {
          item.quantity++;
      },
      decreaseQuantity(item) {
          if (item.quantity > 1) {
              item.quantity--;
          }
      },
      removeItem(item) {
          this.items = this.items.filter(i => i.id !== item.id);
      },
      goToCheckout() {
          window.location.href = 'checkout.html';
      }
  }
}

// Checkout page
function checkout() {
  return {
      form: {
          name: '',
          email: '',
          address: '',
          card: ''
      },
      processOrder() {
          // Implement order processing logic
          console.log('Order processed:', this.form);
          alert('Order placed successfully!');
          // Redirect to a thank you page or clear cart
      }
  }
}

// Toast notification
function toast() {
  return {
      visible: false,
      message: '',
      show(msg) {
          this.visible = true;
          this.message = msg;
          setTimeout(() => this.visible = false, 3000);
      }
  }
}

// Initialize Alpine.js data and components
document.addEventListener('alpine:init', () => {
  Alpine.data('productListing', productListing);
  Alpine.data('productDetail', productDetail);
  Alpine.data('cart', cart);
  Alpine.data('checkout', checkout);
  Alpine.data('toast', toast);
});