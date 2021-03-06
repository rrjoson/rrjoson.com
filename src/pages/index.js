import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import GitHubButton from "react-github-btn";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import ProjectListing from "../components/ProjectListing";
import SimpleListing from "../components/SimpleListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import speaking from "../../data/speaking";
import projects from "../../data/projects";

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Software Developer & Writer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <h1>👋🏽️ Hi there!</h1>
            <p>
              I'm Ricardo, a software engineer at <a href="https://www.apollo.io/" target="_blank">Apollo (Y Combinator Winter 2016)</a>, bringing simple and intelligent go-to-market to the masses, so that every business can reach their full potential.
              <br />
              <br />
              Outside of Apollo, I am a mentor at <a href="https://mentorcruise.com/mentor/RicardoJoson/" target="_blank">MentorCruise</a>, helping people jumpstart their career in tech through personalized mentorship and coaching.
            </p>
            <div className="social-buttons">
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/rrjoson"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Follow @rrjoson
                </a>
              </div>
              <div>
                <GitHubButton
                  href="https://github.com/rrjoson"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Follow @rrjoson on GitHub"
                >
                  Follow
                </GitHubButton>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>Open Source Contributions</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Speaking</h2>
            <SimpleListing simple data={speaking} />
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;
