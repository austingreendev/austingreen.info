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
      <Layout>
        <>
          <div
            css={`
              max-width: 700px;
              margin-left: auto;
              margin-right: auto;
              padding-left: 20px;
              padding-right: 20px;
            `}
          >
            <h1>Austin Green</h1>
            <h2>Full-stack engineer, working in San Francisco.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Img
              css={`
                border-radius: 8px;
                width: 100%;
                max-width: 250px;
                margin-top: 40px;
                margin-left: auto;
                margin-right: auto;
              `}
              alt="Profile image"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
          {/* <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Img
                  css={`
                    border-radius: 50%;
                    max-width: 300px;
                  `}
                  fluid={data.placeholderImage.childImageSharp.fluid}
                />
              </div>
              <div className="col-lg-9">test</div>
            </div>
          </div> */}
        </>
      </Layout>
    )}
  />
);

export default IndexPage;
