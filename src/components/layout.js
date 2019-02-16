import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import GlobalStyles from './global-styling';

const Layout = ({ children, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          buildTime
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={`${data.site.siteMetadata.title} | ${title}`}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyles />

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
              font-family: 'Playfair Display', serif;
              font-size: 62px;
              margin-bottom: 0px;
            `}
          >
            Austin Green
          </h1>
          <h2
            css={`
              font-family: 'Playfair Display', serif;
              font-size: 34px;
              font-weight: 400;
              margin: 12px 0;
            `}
          >
            {title}
          </h2>
          {children}
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
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
