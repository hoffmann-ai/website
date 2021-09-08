// @flow strict
import type { Node as ReactNode } from 'react';
import { gatsbyImageData } from 'gatsby-plugin-image';

export type RenderCallback = {
  // $FlowFixMe
  render: (data: any) => ReactNode;
}

export type Entry = {
  getIn: (string[]) => string;
}

export type WidgetFor = (string) => string;

export type PageContext = {
  tag: string,
  category: string,
  currentPage: number,
  prevPagePath: string,
  nextPagePath: string,
  hasPrevPage: boolean,
  hasNextPage: boolean
};

export type Node = {
  fields: {
    slug: string,
    categorySlug?: string,
    tagSlugs?: string[]
  },
  frontmatter: {
    date: string,
    description?: string,
    category?: string,
    tags?: string[],
    title: string,
    socialImage?: {
      publicURL: string
    }
  },
  html: string,
  id: string
};

export type Edge = {
  node: Node
};

export type Edges = Array<Edge>;

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges,
  },
  group: {
    fieldValue: string,
    totalCount: number
  }[]
};

export type GatsbyImage = {
  node: {
    childImageSharp: typeof gatsbyImageData;
    name?: string;
  }
}

export type GatsbyImages = GatsbyImage[];

export type ServiceData = {
  node: {
    frontmatter: {
      description: string,
      name: string,
      logo: {
        childImageSharp: typeof gatsbyImageData;
      }
    }
  }
}

export type MarkdownRemark = Node;
