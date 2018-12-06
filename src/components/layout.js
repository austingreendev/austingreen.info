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
        {children}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
