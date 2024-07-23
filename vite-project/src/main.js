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
      addToWishlist(product) {
          // Implement add to wishlist logic
          console.log('Added to wishlist:', product);
          this.$dispatch('notify', { message: 'Added to wishlist!' });
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
