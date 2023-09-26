import React from "react";

const Card = ({img, title, cost, cuisine, link}) => {
    return (
        <div className="card">
            <img className="card-img" src={img} alt="No Image"></img>
            <div className="card-information">
                <h2>{title}</h2>
                <p>{cost}</p>
                <p>{cuisine} Food</p>
            </div>
            <a className="card-btn" href={link}>View More</a>
        </div>
    )
}

export default Card;