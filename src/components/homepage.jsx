import NavBar from "./nav";
import SubHeading from "./subHeading";
import gingerAndOrangeImage from "../asset/images/Ginger and Orange.svg";
import Hero from "./hero";
import Avatars from "./avatar";
import Avatar1 from "../asset/images/Female avatar with laptop.svg";
import Avatar2 from "../asset/images/Male avatar with phone.svg";
import Avatar3 from "../asset/images/Female avater with coffee.svg";
import Statistics from "./statistics";
const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <SubHeading
        subHeading="Who We Are"
        sectionText="We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born."
      />

      <div className="w-10/12 mx-auto py-10">
        <img
          className="w-full object-cover"
          src={gingerAndOrangeImage}
          alt=""
        />
      </div>

      <div className="">
        <div className="text-center mb-10">
          <SubHeading subHeading="Meet the heroes behind the magic" />
        </div>

        <div className="w-9/12 justify-between mx-auto flex flex-wrap">
          <div className="bg-white shadow-inner w-full sm:w-full md:w-6/12 lg:w-4/12 p-5 mb-4 text-center">
            <Avatars
              avatarImage={Avatar1}
              name="Esther Howard"
              role="Founder"
            />
          </div>
          <div className="bg-white shadow-inner w-full sm:w-full md:w-6/12 lg:w-4/12 p-5 mb-4">
            <Avatars
              avatarImage={Avatar2}
              name="Cody Fisher"
              role="Developer"
            />
          </div>
          <div className="bg-white shadow-inner w-full sm:w-full md:w-6/12 lg:w-4/12 p-5 mb-4">
            <Avatars
              avatarImage={Avatar3}
              name="Brooklyn Simmons"
              role="Designer"
            />
          </div>
        </div>

        <div className="bg-gray-900 text-white  ">
          <div className=" flex flex-wrap justify-between  text-center lg:text-left p-0 lg:pl-28 py-5">
            <div className="w-full sm:w-full md:w-6/12 lg:w-3/12  mb-4">
              <Statistics number="350" groupOfPeople="Clients Worldwide" />
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-3/12  mb-4">
              <Statistics number="20" groupOfPeople="Team Members" />
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-3/12  mb-4">
              <Statistics number="100" groupOfPeople="Projects Completed" />
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-3/12  mb-4">
              <Statistics
                number="85"
                unit="M"
                groupOfPeople="Revenue Generated"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
