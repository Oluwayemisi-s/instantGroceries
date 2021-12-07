

export default function CartItem ({item}) {


    return (
        <div>
            <img src = {item.product.image} alt = "product" width = "100px"/>
            <small>{item.product.name}</small>
            <small>Qty: {item.quantity}</small>
            <small>Price: ${item.product.price}</small>
            <button>Delete from cart</button>
            <hr width = "75%"></hr>
        </div>
    )
}