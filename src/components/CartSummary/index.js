import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      )

      return (
        <div className="cart-summary">
          <h1>
            Order Total: <span>Rs {totalAmount} /-</span>
          </h1>
          <p>Items in Cart: {cartList.length}</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
