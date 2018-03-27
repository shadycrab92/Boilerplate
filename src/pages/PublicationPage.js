import React from "react";

import Navbar from "src/components/shared/navbar/Navbar"
import Publication from "src/components/publication/Publication"

const PublicationPage = () => {
  return (
      <section className="publicationPage">
        <Navbar/>
        <Publication/>
      </section>
  );
};

export default PublicationPage;
