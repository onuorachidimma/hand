import YelloShape from "../asset/images/Bg yellow Shape.svg";
import Hands from "../asset/images/Hands.png";
const Hero = () => {
  return (
    <div className="relative bg-yellow-300">
      <p className="font-bold text-lg sm:text-2xl md:text-5xl lg:text-7xl leading-tight text-center text-gray-900 absolute top-10 left-10 right-10">
        Let’s create something great together.
      </p>

      <img
        className="h-60 md:h-80 lg:h-96 w-full object-cover px-4 md:px-16"
        src={YelloShape}
        alt=""
      />
      <img
        className="h-40 md:h-60 lg:h-80 w-full object-cover px-1.25 absolute bottom-0 left-0 right-0 mx-auto"
        src={Hands}
        alt=""
      />
    </div>
  );
};

export default Hero;
