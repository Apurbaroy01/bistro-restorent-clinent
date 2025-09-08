import useCart from "../../../Hookes/useCart";

const Cart = () => {
    const [cart] = useCart();

    // সব price যোগ করা
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="w-full mt-6">
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
                            cart.map(item =>
                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
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
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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
