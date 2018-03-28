import React from "react";
import "./publications.sass";

import PublicationItem from "src/components/publications/PublicationItem";

const Publications = () => {
  return (
    <section className="publications">
      <div className="container">
        <PublicationItem/>
        <PublicationItem/>
      </div>
    </section>
  );
};

export default Publications;

