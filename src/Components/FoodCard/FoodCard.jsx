import React from 'react';
import useAuth from '../../Hookes/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddtoCart = (food) => {
        if (user && user.email) {
            console.log(food, user.email)
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }
    }


    return (
        <div className="card bg-base-100 w-70 shadow-sm mt-10">
            <div className='relative'>
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute top-0 right-0 bg-yellow-300 p-1 font-semibold rounded-xl'>$ {price}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddtoCart(item)} className="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;