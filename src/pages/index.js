import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          buildTime
        }
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
      <Layout title="Full-stack engineer, living in San Francisco.">
        <>
          <div
            css={`
              max-width: 800px;
              margin: 0 auto;
              padding: 0 20px;

              @media (max-width: 900px) {
                max-width: inherit;
              }
            `}
          >
            <h1
              css={`
                font-size: 72px;
                margin-bottom: 0px;
              `}
            >
              Austin Green
            </h1>
            <h2
              css={`
                margin: 12px 0;
              `}
            >
              Full-stack engineer, living in San Francisco.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui{' '}
              <a href="https://www.google.com">officia deserunt</a> mollit anim
              id est laborum.
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
            <ul
              css={`
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 0;
                margin: 32px 0;

                li {
                  margin: 0 12px;
                }
              `}
            >
              <li>
                <a href="https://github.com/austin94">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/austin-green-dev/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://garden.zendesk.com/">Zendesk Garden</a>
              </li>
              <li>
                <a href="mailto:austingreenkansas@gmail.com">Email</a>
              </li>
            </ul>
            <div
              css={`
                text-align: center;
                font-size: 12px;
                margin: 12px 0;
              `}
            >
              Last Updated: {new Date(data.site.buildTime).toLocaleDateString()}
            </div>
          </div>
        </>
      </Layout>
    )}
  />
);

export default IndexPage;
