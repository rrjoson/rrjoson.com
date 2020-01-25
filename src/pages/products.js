import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Products from "../components/Products";
import config from "../../data/SiteConfig";

export default class ProductsPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Products – ${config.siteTitle}`} />
        <div className="container">
          <Products />
        </div>
      </Layout>
    );
  }
}
