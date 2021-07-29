// @flow strict
import React from 'react';
import { GatsbyImage, gatsbyImageData } from 'gatsby-plugin-image';
import styles from './Services.module.scss';

type Props = {
  node: {
    childImageSharp: typeof gatsbyImageData,
    name: string
  }
}

const Services = ({ services } : { services : Array<Props> }) => (
  <div className={styles['services__module']}>
    <h2>Nos services</h2>
    <p className={styles['text_light']}>Les services dans lesquels nous sommes experts</p>
    <div className={styles['services__module__innergrid']}>
      <div className={styles['services__module__innergrid__comp']}>
        {services[1] && (
          <>
            <GatsbyImage
              image={services[1].node.childImageSharp.gatsbyImageData}
              height={services[1].node.childImageSharp.gatsbyImageData.height}
              width={services[1].node.childImageSharp.gatsbyImageData.width}
              alt={services[1].node.name}
              key={services[1].node.name}
              className={styles['services__module__innergrid__comp__image']}
            />
            <h4>Cloud</h4>
            <p className={styles['text_light']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vestibulum aliquam metus.
            </p>
          </>
        )}
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        {services[0] && (
          <>
            <GatsbyImage
              image={services[0].node.childImageSharp.gatsbyImageData}
              height={services[0].node.childImageSharp.gatsbyImageData.height}
              width={services[0].node.childImageSharp.gatsbyImageData.width}
              alt={services[0].node.name}
              key={services[0].node.name}
              className={styles['services__module__innergrid__comp__image']}
            />
            <h4>DevOps & InfraOps</h4>
            <p className={styles['text_light']}>
              Ansible, Docker, Git, Kubernetes, Maven, Unix, Vagrant
            </p>
          </>
        )}
      </div>
      <div className={styles['services__module__innergrid__comp']}>
        {services[2] && (
          <>
            <GatsbyImage
              image={services[2].node.childImageSharp.gatsbyImageData}
              height={services[2].node.childImageSharp.gatsbyImageData.height}
              width={services[2].node.childImageSharp.gatsbyImageData.width}
              alt={services[2].node.name}
              key={services[2].node.name}
              className={styles['services__module__innergrid__comp__image']}
            />
            <h4>Technologies Web</h4>
            <p className={styles['text_light']}>
              AWS, CSS, HTML, Java Spring, NodeJS, ReactJS, Shopify, Wordpress
            </p>
          </>
        )}
      </div>
    </div>
  </div>
);
export default Services;
