import YelloShape from "../asset/images/Bg yellow Shape.svg";
import Hands from "../asset/images/Hands.png";
const Hero = () => {
  return (
    <div className="relative bg-yellow-300">
      <p className="font-bold text-lg sm:text-2xl md:text-5xl lg:text-7xl leading-tight text-center text-gray-900 absolute top-20 w-full lg:w-6/12 left-0 right-0 mx-auto">
        Let’s create something great together.
      </p>

      <img
        className="w-full object-cover px-4 md:px-16"
        src={YelloShape}
        alt=""
      />
      <img
        className=" w-full object-cover px-1.25 absolute bottom-0 left-0 right-0 mx-auto"
        src={Hands}
        alt=""
      />
    </div>
  );
};

export default Hero;
