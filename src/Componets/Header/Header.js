import React from "react";
import "../../Styles/main.scss";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="todo">
          <h1 className="todo-text">todo</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        </div>
        <div className="create">
          <span className="check-circle"></span>
          <input placeholder="Create a new todo..."></input>
        </div>
      </div>
    </header>
  );
};

export default Header;
