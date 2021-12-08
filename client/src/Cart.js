import { useState, useEffect } from 'react'
import CartItem from './CartItem'

function Cart(){
    const [carts, setCarts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [cartTotal,setCartTotal] = useState(0)

    useEffect(() => {
        fetch("/cartitems")
          .then((res) => res.json())
          .then((data) => {setCarts(data)
            setIsLoading(false)
        });
    }, [])

    if (isLoading) return <div>Page is loading</div>
    
    const name = carts[0].user.name

    let totalAmount = 0
    const Arr = carts.map(cart => {
        totalAmount += cart.quantity * cart.product.price
    })
    function onDelete(cart_item){
        const filteredCart  =  carts.filter(item => item!== cart_item)
       setCarts(filteredCart)
    }

    const cart_item = carts.map(item => <CartItem key = {item.id} item = {item} onDelete={onDelete} setCartTotal= {setCartTotal}/>)

    return (
        <div>
            <h3>Hello {name}, here are the items in your cart:</h3>
            {cart_item}
            <h3>Total price: ${totalAmount}</h3>
            <button>Checkout</button>
        </div>
    )
}
export default Cart;