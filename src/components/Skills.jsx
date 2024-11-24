import Skill from '../components/data/skills.json'
const Skills = () => {
  return (
    <>
        <div className='container d-flex justify-content-center py-5' id="skill">
        <h1>Skills</h1>
        </div>
    <div className="container skillcontainer">
        {
            Skill.map((el)=>{
                return(
                    <>
                    <ul className='list-unstyled skill-list' data-aos="flip-left" data-aos-duration="1000">
                        <div key={el.id}>
                            <img src={el.imageSrc} alt="logoImage" />
                            <p>{el.title}</p>
                        </div>
                    </ul>
                    </>
                )
            })
        }
    </div>
      
    </>
  )
}

export default Skills
