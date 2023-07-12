<template>
  <form @submit.prevent="addProduct">
    <div>
      <label for="name">Product Name:</label>
      <input type="text" id="name" v-model="productName" required />
    </div>
    <div>
      <label for="price">Price:</label>
      <input type="number" id="price" v-model="productPrice" required />
    </div>
    <div>
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model="productQuantity" required />
    </div>
    <div>
      <label for="image">Image:</label>
      <input type="file" id="image" @change="handleImageUpload" accept="image/*" />
    </div>
    <button type="submit">Add Product</button>
  </form>
</template>

<script setup>
const {addData}= useFirestore()
const collectionRef = 'furniture'

const productName = ref('');
const productPrice = ref(0);
const productQuantity = ref(0);
const productImage = ref(null);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  productImage.value = file;
};

const addProduct = () => {
  const product = {
    name: productName.value,
    price: productPrice.value,
    quantity: productQuantity.value,
    image: productImage.value,
  };
  addData(collectionRef, product)

  // Do something with the product object (e.g., send it to a server)

  // Reset form fields
  productName.value = '';
  productPrice.value = 0;
  productQuantity.value = 0;
  productImage.value = null;
};
</script>

