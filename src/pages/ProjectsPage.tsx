import React from "react";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard  from "../components/projects-page/ProjectProjectCard";

const ProjectsPage = () => {
  return (
    <PageContainer>
      <section className="m-4">
        <h1>all projects</h1>
      </section>

      <section className="m-4">
        <h2>Current projects</h2>
        <div className="flex flex-col gap-6">
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>

      <section className="m-4">
        <h2>Completed projects</h2>
        <div className="flex flex-col gap-6">
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>

      <section className="m-4">
        <h2>Launch a Project Placeholder</h2>
      </section>
    </PageContainer>
  );
};

export default ProjectsPage;