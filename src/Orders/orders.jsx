import { useSelector } from "react-redux";
import "./orders.css";
export const Orders = () => {
  const carts = useSelector((state) => state.bookslist.mycart);
  let total = 0;
  carts.forEach((item) => {
    total += item.num * item.price;
  });
  return (
    <>
      <div className="orders">
        <div className="master-container">
          <div className="card checkout">
            <label className="title">Checkout</label>
            <div className="details">
              {carts.map((item) => {
                return (
                  <>
                    <span>
                      {item.num}x --{item.bookname}
                    </span>
                    <span>{item.num * item.price} $</span>
                  </>
                );
              })}
            </div>
            <div className="inputcard">
                Card:
                <input placeholder="4142 4543 4545 1323" type="text" />
            </div>
            <div className="checkout--footer">
              <label className="price">
                <sup>$</sup>{total}
              </label>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
