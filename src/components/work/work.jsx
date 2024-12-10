import React from 'react';
import '../workCard/WorkCard.css';
import WorkData from '../workData/workData';
import WorkCard from '../workCard/WorkCard';

const Work = () => {
  return (
    <>
      <h1 className="project-heading" style={{ margin: '1px' }} aria-label="My Projects">
        Projects
      </h1>
      <section className="projects-container" aria-label="List of Projects">
        {WorkData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgSrc={val.imgSrc}
              title={val.title}
              text={val.text}
              git={val.git}
              view={val.View}
              aria-label={`Project: ${val.title}`}
            />
          );
        })}
      </section>
    </>
  );
};

export default Work;
