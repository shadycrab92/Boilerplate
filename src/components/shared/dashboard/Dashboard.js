import React from "react";
import "./dashboard.sass";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard__content">
          <a className="button is-info">
                 <span className="icon">
                   <i className="fas fa-pencil-alt"></i>
                 </span>
            <span>Написать</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

