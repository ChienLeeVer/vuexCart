export default {
    productQuantity(state) {
        return function(product) {
            const item = state.cart.find( i => i.id === product.id)
            if(item) return item.quantity
            else return null
        }
    },
    cartItems(state){
        return state.cart
    },
    cartTotal(state) {
        return state.cart.reduce((a, b)=>{
            return a + (b.price * b.quantity)
        }, 0)
    }
} 