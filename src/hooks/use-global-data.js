// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useGlobalData = () => {
  const data = useStaticQuery(
    graphql`
      query global {
        allFile(filter: {relativePath: {eq: "logo.png"}}) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(width: 64, height: 64)
              }
              name
            }
          }
        }
      }
    `
  );

  const logo = data.allFile?.edges[0]?.node ? data.allFile?.edges[0]?.node : undefined;

  return { logo };
};

export default useGlobalData;