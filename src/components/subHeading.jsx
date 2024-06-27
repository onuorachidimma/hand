const SubHeading = (props) => {
  return <div className="w-10/12 mx-auto ">
    <h2 className="font-roboto  font-black text-4xl text-subBlack mb-9">
    {props.subHeading}
    </h2>
    <p className="font-medium text-lg text-subBlack ">
        {props.sectionText}
    </p>
  </div>;
};

export default SubHeading;
