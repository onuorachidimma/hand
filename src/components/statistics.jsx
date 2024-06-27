const Statistics = (props) => {
    return(
        <div className="">
            <p className="font-semibold text-4xl md:text-5xl lg:text-6xl text-yellow-400">{props.number}<span>{props.unit}</span> +</p>
            <p>{props.groupOfPeople}</p>
        </div>
    )
}

export default Statistics