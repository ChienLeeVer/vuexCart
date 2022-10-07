<template>
    <div id="home">
        <ProductDescriptionDrawer
        :product="product"
        :active="active.product_drawer"
        @close-product-drawer="closeProductDrawer()"
        >

        </ProductDescriptionDrawer>

        <div class="product-cards-container">
            <ProductSummaryCard v-for="product in items"
            :key="product.id"
            :product="product"
            @view-product="viewProduct($event)">

            </ProductSummaryCard>
        </div>
    </div>
</template>
<script>
import items from '../data/items'
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue'

export default {

    data() {
        return {
            items,
            product: null,
            active: {
                product_drawer:false
            }
        }
    },
    components : {
        ProductSummaryCard,
        ProductDescriptionDrawer
    },
    methods : {
        viewProduct(product) {
            this.product = product
            this.active.product_drawer = true
        },
        closeProductDrawer() {
            this.active.product_drawer = false
        }
    }
}
</script>

<style scope>
    .product-cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>