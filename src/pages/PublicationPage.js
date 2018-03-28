import React from "react";

import Navbar from "src/components/shared/navbar/Navbar"
import Publication from "src/components/publication/Publication"
import Comments from "src/components/shared/comments/Comments"

const PublicationPage = () => {
  return (
      <section className="publicationPage">
        <Navbar/>
        <Publication/>
        <Comments/>
      </section>
  );
};

export default PublicationPage;