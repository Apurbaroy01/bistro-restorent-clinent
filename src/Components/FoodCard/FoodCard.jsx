import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    
    return (
        <div className="card bg-base-100 w-70 shadow-sm mt-10">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;