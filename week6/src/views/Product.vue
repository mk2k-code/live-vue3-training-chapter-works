<template>
  <div class="about">
    <h1>This is 單一產品頁面</h1>
    {{ product.title }}
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http.get(url)
      .then((response) => {
        if(response.data.success) {
          this.product = res.data.product;
        } else {
          alert(response.data.message);
        }
      });
  },
};
</script>