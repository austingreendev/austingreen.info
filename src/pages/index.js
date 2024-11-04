import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile-image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout title="Full-stack engineer, living in Seattle.">
        <>
          <p>
            Hi! I'm a full-stack developer working primarily with JavaScript and
            React. Specializing in helping developers create more robust,
            accessible, and pleasant user experiences through shared component
            libraries, mentorship, and developer education.
          </p>
          <p>
            I'm currently a Staff Software Engineer on the Sharing and Collaboration team
            at <a href="https://databricks.com/">Databricks</a>.
          </p>
          <div>
            <Img
              css={`
                border-radius: 8px;
                width: 100%;
                max-width: 250px;
                margin: 0 auto;
              `}
              alt="Profile image"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
        </>
      </Layout>
    )}
  />
);

export default IndexPage;
