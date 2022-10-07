function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default {
    addToCart(state, product){
        let item = state.cart.find( i => i.id === product.id)
        if(item) {
            item.quantity++
        }else {
            //浅拷贝商品信息，而不是直接引用
            state.cart.push({...product, quantity: 1})
        }

        updateLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
        let item = state.cart.find(i => i.id === product.id )

        if(item) {
            if(item.quantity > 1) {
                item.quantity--
            }else{
                state.cart = state.cart.filter( i => i.id !== product.id )
            }
        }

        updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state){
        const cart = localStorage.getItem('cart')
        if(cart) {
            state.cart = JSON.parse(cart)
        }
    }
}