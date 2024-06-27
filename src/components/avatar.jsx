const Avatars = (props) => {
    return(
        <div className="">
            <img className="w-full" src={props.avatarImage} alt="" />
            <h3 className="text-3xl font-bold mt-6 mb-4 text=subBlack">{props.name}</h3>
            <p className="text-gray-500">{props.role}</p>
        </div>
    )
}

export default Avatars