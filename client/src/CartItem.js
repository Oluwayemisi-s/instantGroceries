

export default function CartItem ({item, onDelete, setCount}) {

    function handleCartDelete(){
        fetch(`/carts/${item.id}`, {
            method:'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => (res.json()))
          .then(() => {
                console.log("Deleted")
                onDelete(item)
                fetch("/cartitems")
                    .then((res) => res.json())
                    .then((data) => {
                    console.log(data.length)
                    setCount(data.length) 
                  })
              });
        
          };
  const total = item.product.price * item.quantity
    return (
        <div className = "cart-item">
            <div className = "inside-cart-item"><img src = {item.product.image} alt = "product" width = "100px"/>
            <h6>{item.product.name}</h6></div>
            <h6>Qty: {item.quantity}</h6>
            <h6>Price: ${total}</h6>
            <button onClick = {handleCartDelete}>Delete from cart</button>
        </div>
    )
}
