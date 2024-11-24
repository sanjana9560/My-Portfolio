import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
import { useEffect,useRef  } from "react";


const Home = () => {
  const typedtext = useRef(null);

useEffect(()=>{
  const option = { strings:["Welcom to my profle"
                  ,"My name is Sanjana Gupta",
                  "I am a software developer"],
                  TypedSpeed:50,
                  backSpeed:50,
                  loop:true
                }
        const typed = new Typed(typedtext.current,option)

    return ()=>{
      typed.destroy();
    };
},[])

  return (
    <>
    <div className="container home" id="home">
    <dixv className="left" data-aos="fade-up-left" data-aos-duration="1000">
        <h1 ref={typedtext}></h1>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
    </dixv>
    <div className="right" data-aos="fade-up-right" data-aos-duration="1000">
      <div className="image">
      <img src={`/assets/${hero.imgSrc}`} alt="" />
      </div>
    </div>
    </div>

    </>
  )
}

export default Home
