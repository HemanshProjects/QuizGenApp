import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container min-vh-100 d-flex text-center align-items-center">
        <div class="d-flex flex-row mb-3">
          <div class="p-2 flex-fill">
            <NavLink className="card" to="/create-quiz">
              <h5>Create Quiz</h5>
            </NavLink>
          </div>
          <div class="p-2 flex-fill">
            <NavLink className="card" to="/my-quizes">
              <h5>My Quizes</h5>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
