import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { useEffect, useState } from "react";
import { fetchBooks, removecart, removeinfo } from "../reducer/reducer";
import { Card } from "./card/card";
import { Link } from "react-router-dom";
export const Home = () => {
  const books = useSelector((state) => state.bookslist.fillter);
  const carts = useSelector((state) => state.bookslist.mycart);
  const info = useSelector((state) => state.bookslist.info);
  const [state, setState] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  let total = 0;
  carts.forEach((item) => {
    total += item.num * item.price;
  });
  return (
    <>
      <div className="home-container">
        <div className="logo">
          <img src="./../mainLogo.jpg" alt="" />
        </div>
        <div className="cards">
          {books.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </div>
      </div>

      <div
        style={state ? { display: "none" } : { display: "flex" }}
        className="basketnav"
      >
        <h2>
          <span className="red">My</span> Cart
        </h2>
        <ul className="list">
          {carts.map((item) => {
            return (
              <>
                <li>
                  <p>
                    {item.bookname}--
                    <p className="red">
                      {item.num}x{item.price}$
                    </p>
                  </p>

                  <button
                    onClick={() => {
                      dispatch(removecart(item));
                    }}
                    className="tooltip"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      height="25"
                      width="25"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#6361D9"
                        d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
                      ></path>
                    </svg>
                    <span className="tooltiptext">remove</span>
                  </button>
                </li>
              </>
            );
          })}
        </ul>
        <div className="total">
          <p className="red">Total:{total}</p>
        </div>
        <Link to="/Orders">
          {" "}
          <button className="Btn">
            Pay
            <svg className="svgIcon" viewBox="0 0 576 512">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
            </svg>
          </button>
        </Link>
      </div>
      <div
        style={info[0] ? { display: "block" } : { display: "none" }}
        className="bookinfo"
      >
        <div className="header">
          {" "}
          <h2>{info[0]?.bookname}</h2>{" "}
          <button
            onClick={() => {
              dispatch(removeinfo());
            }}
          >
            X
          </button>
        </div>
        <div className="main">
          <p>{info[0]?.info}</p>
        </div>
      </div>
      <div className="basketDiv">
        <button
          onClick={() => {
            if (state) {
              setState((prew) => !prew);
            } else {
              setState((prew) => !prew);
            }
          }}
          className="button"
        >
          <span className="button-decor"></span>
          <div className="button-content">
            <div className="button__icon">
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
              >
                <circle
                  opacity="0.5"
                  cx="25"
                  cy="25"
                  r="23"
                  fill="url(#icon-payments-cat_svg__paint0_linear_1141_21101)"
                ></circle>
                <mask id="icon-payments-cat_svg__a" fill="#fff">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"
                  ></path>
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"
                  fill="#fff"
                ></path>
                <path
                  d="M25.958 20.962l-1.47-1.632 1.47 1.632zm2.067.109l-1.632 1.469 1.632-1.469zm-.109 2.068l-1.469-1.633 1.47 1.633zm-5.154 4.638l-1.469-1.632 1.469 1.632zm-.276 1.841l-1.883 1.13 1.883-1.13zM34.42 15.93l-2.084-.695 2.084.695zm-19.725 6.42l18.568-6.189-1.39-4.167-18.567 6.19 1.389 4.166zm5.265 1.75l-5.12-3.072-2.26 3.766 5.12 3.072 2.26-3.766zm2.072 3.348l5.394-4.854-2.938-3.264-5.394 4.854 2.938 3.264zm5.394-4.854a.732.732 0 01-1.034-.054l3.265-2.938a3.66 3.66 0 00-5.17-.272l2.939 3.265zm-1.034-.054a.732.732 0 01.054-1.034l2.938 3.265a3.66 3.66 0 00.273-5.169l-3.265 2.938zm.054-1.034l-5.154 4.639 2.938 3.264 5.154-4.638-2.938-3.265zm1.023 12.152l-3.101-5.17-3.766 2.26 3.101 5.17 3.766-2.26zm4.867-18.423l-6.189 18.568 4.167 1.389 6.19-18.568-4.168-1.389zm-8.633 20.682c1.61 2.682 5.622 2.241 6.611-.725l-4.167-1.39a.732.732 0 011.322-.144l-3.766 2.26zm-6.003-8.05a3.66 3.66 0 004.332-.419l-2.938-3.264a.732.732 0 01.866-.084l-2.26 3.766zm3.592-1.722a3.66 3.66 0 00-.69 4.603l3.766-2.26c.18.301.122.687-.138.921l-2.938-3.264zm11.97-9.984a.732.732 0 01-.925-.926l4.166 1.389c.954-2.861-1.768-5.583-4.63-4.63l1.39 4.167zm-19.956 2.022c-2.967.99-3.407 5.003-.726 6.611l2.26-3.766a.732.732 0 01-.145 1.322l-1.39-4.167z"
                  fill="#fff"
                  mask="url(#icon-payments-cat_svg__a)"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-payments-cat_svg__paint0_linear_1141_21101"
                    x1="25"
                    y1="2"
                    x2="25"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" stopOpacity="0.71"></stop>
                    <stop offset="1" stopOpacity="0" stopColor="#fff"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="button__text">Basket</span>
          </div>
        </button>
      </div>
      
    </>
  );
};
