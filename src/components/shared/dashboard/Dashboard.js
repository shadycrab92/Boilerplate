import React from "react";
import "./dashboard.sass";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard__content">
          <a className="button is-primary">
                 <span className="icon">
                   <i className="fas fa-pencil-alt"></i>
                 </span>
            <span>Написать</span>
          </a>
            <span className="is-pulled-right">
               <a className="button is-outlined">
                   <span className="icon">
                     <i className="fa fa-user"></i>
                   </span>
              <span>100</span>
            </a>
            <a className="button is-outlined">
                   <span className="icon">
                     <i className="fa fa-ruble-sign"></i>
                   </span>
              <span>550</span>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

