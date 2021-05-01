import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

interface Project {
  node: {
    id: string;
    frontmatter: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      hrefLink: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Project: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "project section" } }) {
        frontmatter {
          title
          subtitle
        }
      }

      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } } 
        sort: { fields: fileAbsolutePath, order: DESC }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              subtitle
              description1
              description2
              hrefLink
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 600) {
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
  const projects: Project[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Projects>
        {projects.map((item) => {
          const {
            id,
            frontmatter: { title, subtitle, cover, description1, description2, tags, hrefLink }
          } = item.node;

          return (
            <Styled.Project key={id}>
              <a href={hrefLink} target="_blank">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
                  <Styled.ProjectContainer>
                    <Styled.Image>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.Image>
                      <Styled.Content>
                        <div>
                          <Styled.Title>{title}</Styled.Title>
                          <Styled.SubTitle>{subtitle}</Styled.SubTitle>
                          <Styled.Description>{description1}</Styled.Description>
                          <Styled.Description>{description2}</Styled.Description>
                        </div>
                        <Styled.Tags>
                          {tags.map((item) => (
                            <Styled.Tag key={item}>{item}</Styled.Tag>
                          ))}
                        </Styled.Tags>
                      </Styled.Content>
                  </Styled.ProjectContainer>
                </motion.div>
              </a>
            </Styled.Project>
          );
        })}
      </Styled.Projects>
    </Container>
  );
};

export default Project;
