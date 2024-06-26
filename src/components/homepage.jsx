import NavBar from "./nav";
import SubHeading from "./subHeading";
import gingerAndOrangeImage from "../asset/images/Ginger and Orange.svg";
import Hero from "./hero";
import Avatars from "./avatar";
import Avatar1 from "../asset/images/Female avatar with laptop.svg";
import Avatar2 from "../asset/images/Male avatar with phone.svg";
import Avatar3 from "../asset/images/Female avater with coffee.svg";
import AvatarMaleAndFemale from "../asset/images//MaleAndFemaleAvatar.svg"
import Statistics from "./statistics";
import Form from "./form";
import Footer from "./footer";
const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div id="aboutUs">
        <SubHeading
            subHeading="Who we are"
            sectionText="We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born."
        />
      </div>

      <div className="w-10/12 mx-auto py-10  mt-12 md:mt-16">
        <img
          className="w-full object-cover"
          src={gingerAndOrangeImage}
          alt=""
        />
      </div>

        <div className="">
            <div className="text-center my-20  md:my-24">
            <SubHeading subHeading="Meet the heroes behind the magic" />
            </div>

            <div className="w-9/12 lg:w-10/12 justify-between mx-auto flex flex-wrap">
                <div className="bg-white shadow-inner w-full md:w-5/12 lg:w-4/12 p-5 mb-4">
                    <Avatars
                    avatarImage={Avatar1}
                    name="Esther Howard"
                    role="Founder"
                    />
                </div>
                <div className="bg-white shadow-inner w-full md:w-5/12 lg:w-4/12 p-5 mb-4">
                    <Avatars
                    avatarImage={Avatar2}
                    name="Cody Fisher"
                    role="Developer"
                    />
                </div>
                <div className="bg-white shadow-inner w-full md:w-5/12 lg:w-4/12 p-5 mb-4">
                    <Avatars
                    avatarImage={Avatar3}
                    name="Brooklyn Simmons"
                    role="Designer"
                    />
                </div>
            </div>
        </div>
        <div className="bg-subBlack text-white  ">
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

        <div className="flex justify-between flex-wrap py-52 px-14 lg:px-28">
            <div className=" pt-12 pb-20 px-8 md:px-12 lg:px-28 bg-yellow-50 text-center w-full  lg:w-5/12 mb-12">
                <img
                className="w-full h-full"
                src={AvatarMaleAndFemale}
                alt=""
                />
            </div>

            <div className="w-full  lg:w-5/12">
                <div className="text-right mb-12">
                    <SubHeading subHeading="We'd love to hear 
                        from you"/>
                </div>
                <div>
                <Form />
                </div>
            </div>
        </div>

        <Footer />
    </div>
    
  );
};

export default Homepage;
