import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import PageHeader from '../components/page-header';

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
          <PageHeader>
            <h1
              css={`
                margin: 0;
                text-align: center;
              `}
            >
              Hi, I'm Austin
            </h1>
          </PageHeader>
          <div className="container">
            <div
              className="row"
              css={`
                margin-top: 40px;
              `}
            >
              <div className="col-lg-3">
                <Img
                  css={`
                    border-radius: 50%;
                    max-width: 300px;
                  `}
                  fluid={data.placeholderImage.childImageSharp.fluid}
                />
              </div>
              <div className="col-lg-9">
                <p>
                  I am currently an engineer on the Garden Design Systems team
                  at Zendesk in San Francisco, CA.
                </p>
                <p>
                  I come from a full-stack background, but focus on modern
                  front-end technologies. My primary experiences are with React,
                  Angular (2+), and the .net MVC ecosystem.
                </p>
              </div>
            </div>
          </div>
        </>
      </Layout>
    )}
  />
);

export default IndexPage;
