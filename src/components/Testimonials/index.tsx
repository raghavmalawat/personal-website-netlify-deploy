import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface Testimonial {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      subtitle: string;
      url: string;
      date: string;
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Testimonials: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "testimonials section" } }) {
        frontmatter {
          title
          subtitle
          url
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "testimonials" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              subtitle
              url
              cover {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const testimonials: Testimonial[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Testimonials>
        <Carousel>
          {testimonials.map((item) => {
            const {
              id,
              html,
              frontmatter: { cover, title, subtitle, url }
            } = item.node;

            return (
              <Styled.Testimonial key={id}>
                <a href={url} target='_blank'>
                  <Styled.Image>
                    <Img fluid={cover.childImageSharp.fluid} alt={title} />
                  </Styled.Image>
                  <div style={{ marginBottom: "1rem" }}>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.SubTitle>{subtitle}</Styled.SubTitle>
                  </div>
                </a>
                <FormatHtml content={html} />
              </Styled.Testimonial>
            );
          })}
        </Carousel>
      </Styled.Testimonials>
    </Container>
  );
};

export default Testimonials;
