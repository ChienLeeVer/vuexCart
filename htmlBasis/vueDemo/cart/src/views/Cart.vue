<template>
    <div id="">
        <h1>Your cart</h1>
        <CartItemCard v-for="product in products"
        :key="product.id"
        :product="product"
        >
        </CartItemCard>

        <CartSummaryPaymentCard >

        </CartSummaryPaymentCard>

    </div>
</template>
<script>
import CartItemCard from '../components/cart/CartItemCart'
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue'
export default {
    name:'Home',
    components : {
        CartItemCard,
        CartSummaryPaymentCard
    },
    computed : {
        products() {
            return this.$store.getters.cartItems
        }
    }
}
</script>