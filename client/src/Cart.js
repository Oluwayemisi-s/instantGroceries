import { useState, useEffect } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'

function Cart({setCount}){
    const [carts, setCarts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState({})
    const [checkout, setCheckout] = useState(false)
   

    useEffect(() => {
        fetch("/cartitems")
          .then((res) => res.json())
          .then((data) => {setCarts(data)
            setIsLoading(false)
        });
    }, [])

    if (isLoading) return <div>Page is loading</div>
  
    if(carts.length === 0) return <h3>No Items currently in cart.<br/> Navigate to products or categories page to add..</h3> 

    const name = carts[0].user.name
    // const cartCount = carts.lenght

    let totalAmount = 0
    carts.forEach(cart => {
        totalAmount += cart.quantity * cart.product.price
    })

    function onDelete(cart_item){
        const filteredCart  =  carts.filter(item => item!== cart_item)
       setCarts(filteredCart)
    }

    function handleCheckout(){
        carts.forEach(item => {
            console.log(item)
            fetch(`/products/${item.product.id}`)
            .then(resp => resp.json())
            .then (data => {
                setProduct(data)
                fetch(`/products/${item.product.id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({...product, stock: product.stock - item.quantity}),
                  })
                  .then (resp => {
                      if (resp.ok) {
                        resp.json()
                        .then (data => console.log(data))
                      } else {
                          resp.json()
                          .then (err => {
                              console.log(err.errors)
                        })
                    }
                }) 
                fetch(`/carts/${item.id}`, {
                    method: "DELETE"
                }).then (data => {
                    console.log("item has been deleted")
                    fetch("/cartitems")
                    .then((res) => res.json())
                    .then((data) => {
                    console.log(data.length)
                    setCount(data.length) 
                });
                })   
            })     
        });
        setCheckout(true)
    }

    const cart_item = carts.map(item => <CartItem key = {item.id} item = {item} onDelete={onDelete} setCount = {setCount}/>)

    return (
        <div>
            <div className = {checkout ? "dissappear" : ""}>
                <h3>Hello {name}, here are the items in your cart:</h3>
                {cart_item}
                <h3>Total price: ${totalAmount}</h3>
                <button onClick = {handleCheckout}>Checkout</button>
            </div>
            {checkout ? <Checkout name = {name}/> : null}
        </div>
    )
}
export default Cart;