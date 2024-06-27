const SubHeading = (props) => {
  return <div className="pl-28 pr-32 py-7">
    <h2 className="font-manrope font-normal font-bold text-4xl text-gray-800">
    {props.subHeading}
    </h2>
    <p className="font-normal text-lg text-gray-800 ">
        {props.sectionText}
    </p>
  </div>;
};

export default SubHeading;
