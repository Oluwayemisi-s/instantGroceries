import { useState, useEffect } from 'react'
import CartItem from './CartItem'

function Cart(){
    const [carts, setCarts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("/cartitems")
          .then((res) => res.json())
          .then((data) => {setCarts(data)
            setIsLoading(false)
        });
    }, [])

    if (isLoading) return <div>Page is loading</div>

    const name = carts[0].user.name

    const cart_item = carts.map(item => <CartItem key = {item.id} item = {item}/>)

    let total = 0
    const totalPrice = carts.map(item => {
        total += item.product.price
    })
    

    return (
        <div>
            <h3>Hello {name}, here are the items in your cart:</h3>
            {cart_item}
            <h3>Total price: ${total}</h3>
            <button>Checkout</button>
        </div>
    )
}
export default Cart;