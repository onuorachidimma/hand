const Avatars = (props) => {
    return(
        <div >
            <img className="w-full" src={props.avatarImage} alt="" />
            <h3 className="text-3xl mb-2.5">{props.name}</h3>
            <p className="text-gray-500">{props.role}</p>
        </div>
    )
}

export default Avatars