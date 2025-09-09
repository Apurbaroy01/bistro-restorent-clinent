import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hookes/useAxios";


const AllUsers = () => {
    const axoiosSecure = useAxios();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axoiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div >
            <div className="flex justify-evenly ">
                <h2>All Users </h2>
                <h2>Total Users: {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;