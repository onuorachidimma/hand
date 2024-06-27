import NavBar from "./nav";
import SubHeading from "./subHeading";
import gingerAndOrangeImage from "../asset/images/Ginger and Orange.svg"
import Hero from "./hero";
const Homepage = () => {
    
    return (
      <div>
        <NavBar />
        <SubHeading subHeading="Who We Are" sectionText="We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born."/>
        
        <Hero />
      </div>
    );
  };


export default Homepage



