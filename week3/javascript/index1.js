import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';
import products from '../data/products.js';

let productModal = null;
let delProductModal = null;

createApp({
  data() {
    return {
      products,
      isNew: false,
      tempProduct: {
        imagesUrl: [],
      },
    };
  },
  methods: {
    updateProduct(){
      if(this.isNew) {
        this.products.push({
          id: Date.now(),
          ...this.tempProduct,
        })

        this.tempProduct = {
          imagesUrl: [],
        };
        productModal.hide();
      } else {
        // findIndex 用法參考
        // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        const index = this.products.findIndex((item) => item.id === this.tempProduct.id);
        this.products[index] = this.tempProduct;
        productModal.hide();
      }
    },
    openModal(isNew, item) {
      if(isNew === 'new') {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.isNew = true;
        productModal.show();
      } else if(isNew === 'edit') {
        this.tempProduct = { ...item };
        this.isNew = false;
        productModal.show();
      } else if(isNew === 'delete') {
        this.tempProduct = { ...item };
        delProductModal.show()
      }
    },
    delProduct() {
      // splice 用法參考
      // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      // findIndex 用法參考
      // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      this.products.splice(this.products.findIndex((item) => item.id === this.tempProduct.id), 1);
      delProductModal.hide();
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
  },
  mounted() {
    productModal = new bootstrap.Modal(document.getElementById('productModal'), {
      keyboard: false
    });

    delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
      keyboard: false
    });
  }
}).mount('#app');