

export default function CartItem ({item, onDelete,setCartTotal}) {

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
              });
        
          };
  const total = item.product.price * item.quantity
    return (
        <div>
            <img src = {item.product.image} alt = "product" width = "100px"/>
            <small>{item.product.name}</small>
            <small>Qty: {item.quantity}</small>
            <small>Price: ${total}</small>
            <button onClick = {handleCartDelete}>Delete from cart</button>
            <hr width = "75%"></hr>
        </div>
    )
}
