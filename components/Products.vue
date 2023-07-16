<script setup>
const {addData, readData}= useFirestore()
const { uploadImage} = useFirestoreStorage()
const data={
first: 'alan',
last: 'west',
born: 2021
}
let products=reactive([])
readData('furniture').then((data)=> data.forEach(d=>products.push(d.data())))

uploadImage()


</script>

<template>
    <div>
        <p>Read data</p>
        <ul >
            <li v-for="product in products">
                {{product.name}}
                {{product.price}}
                {{product.price}}
                {{product.quantity}}
            </li>
        </ul>

    </div>

</template>
