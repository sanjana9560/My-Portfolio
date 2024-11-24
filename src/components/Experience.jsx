import data from "../components/data/experience.json";
const Experience = () => {
  return (
    <>
      <div className="container ex">
        <h1 className="text-white py-5">Experience</h1>
          {data.map((item) => {
            return (
              <>
            <div className=" d-flex justify-content-around ex-container" data-aos="Zoom-in" data-aos-duration="1000" id="experience">
                <div className="left-box">
                  <img src={item.imageSrc} alt="img"/>
                </div>
                <div className="right-box">
                <h2>{item.role}</h2>
                <h4 className="text-warning text-bold">{item.organisation}</h4>
                <h4 className="text-success text-bold">{item.startDate}{" "}{"to"}{" "}<span className="text-warning text-bold">{item.endDate}</span></h4>
                <ul className="list-unstyled text-bold text-warning fs-5">
                    <li>{item.experiences[0]}</li>
                    <li>{item.experiences[1]}</li>
                </ul>
                </div>
            </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Experience;
