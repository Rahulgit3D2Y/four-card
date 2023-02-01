function Card(props){
    return(
        <div className="card">
            <h1 className="">{props.name} </h1>
            <p className="">{props.desc} </p>
            <img className="card-img" src={props.img} alt={props.alt}/>
        </div>
    )
}
export default Card