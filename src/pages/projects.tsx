import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Project from 'components/Project';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Project />
    </Layout>
  );
};

export default ProjectsPage;
