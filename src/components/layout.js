import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navbar from './navbar';
import Footer from './footer';
import '@fontsource/roboto';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Navbar />
      <div class="flex justify-center items-center ">
        <main className="w-full">
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
