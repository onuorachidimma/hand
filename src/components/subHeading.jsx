const SubHeading = (props) => {
  return <div className="w-10/12 mx-auto ">
    <h2 className="font-manrope font-normal font-bold text-4xl text-gray-800">
    {props.subHeading}
    </h2>
    <p className="font-normal text-lg text-gray-800 ">
        {props.sectionText}
    </p>
  </div>;
};

export default SubHeading;
