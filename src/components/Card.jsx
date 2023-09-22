import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img" src={props.img} alt="No Image"></img>
            <div className="card-information">
                <h2>{props.title}</h2>
                <p>{props.cost}</p>
                <p>{props.cuisine} Food</p>
            </div>
            <a className="card-btn" href={props.link}>View More</a>
        </div>
    )
}

export default Card;