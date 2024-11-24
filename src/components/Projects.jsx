import Project from "./data/projects.json";
const Projects = () => {
  return (
    <>
      <div className="container d-flex justify-content-center py-4" id="project">
        <h1>Projects</h1>
      </div>
      <div className="container py-4 project">
        {Project.map((item) => {
          return (
            <>
              <div className="container pro-container" data-aos="flip-right" data-aos-duration="1000" >
                <img src={item.imageSrc} alt="" />
                <div className="container">
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </div>
                <div className="my-2 project-btn ">
                    <a href={item.demo} className="btn btn-primary">Demo </a>
                    <a href={item.source} className="btn btn-warning">Code </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
