<template>
    <div class="card">
        <h3>{{ product.name }}</h3>
        <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
        <p class="description">Description: {{ description }}</p>
        <p class="text-muted">{{ product.category }}</p>
        <button class="view-product-button" @click="$emit('view-product', product)">View Product</button>
    </div>
</template>

<script>
export default {
    name:'product',
    props:['product'],
    computed : {
        description(){
            return this.product.description.substring(0, 150)
        }
    }
}
</script>
<style scope>
    .card {
        width:80%;
        margin: 10%;
        padding: 10%;
        border-radius: 5px;
        background-color: white;
        box-shadow: 0 0 5px gray;
    }
    .card h5.price {
        color: gray;
    }

    .card p.description {
        font-size: .85rem;
    }

    .card p.text-muted {
        color: gray;
    }

    .card button.view-product-button {
        padding: 10px;
        background-color:rgb(79, 160, 187);
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.15rem;
        border-radius: 5px;
        cursor: pointer;
    }

    @media (min-width: 500px) {
        .card {
            width: 350px;
            margin: 10px;
        }
    }
</style>