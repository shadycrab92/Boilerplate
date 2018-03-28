import React from "react";

import Navbar from "src/components/shared/navbar/Navbar"
import Publications from "src/components/publications/Publications"
import Dashboard from "src/components/shared/dashboard/Dashboard"

const PublicationsPage = () => {
  return (
      <section className="authorPage">
        <Navbar/>
        <Dashboard/>
        <Publications/>
      </section>
  );
};

export default PublicationsPage;
