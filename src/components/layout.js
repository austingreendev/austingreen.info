import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

/* Global Styling */
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,Arial,sans-serif;
  }
`;

const Layout = ({ children }) => (
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
          title={data.site.siteMetadata.title}
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
        <GlobalStyle />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{data.site.siteMetadata.title}</h1>
            </div>
          </div>
        </div>
        {children}
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                css={`
                  text-align: center;
                `}
              >
                <span>
                  © Copyright {new Date(data.site.buildTime).getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
