import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hookes/useCart";
import useAxios from "../../../Hookes/useAxios";
import Swal from "sweetalert2";

const Cart = () => {
    const [cart, refetch] = useCart();
    const Axos = useAxios();

    // সব price যোগ করা
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                Axos.delete(`cards/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    };

    return (
        <div className="w-full  mt-6">
            <div className="w-full flex justify-between items-center bg-white shadow-lg rounded-2xl p-6 ">
                <h2 className="text-xl font-semibold">🛒 Items: {cart.length}</h2>
                <h2 className="text-xl font-semibold text-blue-600">
                    💰 Total: ${totalPrice.toFixed(2)}
                </h2>
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition">
                    Pay Now
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>$ {item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"> <FaTrashAlt /> </button>
                                    </th>
                                </tr>

                            )
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;
