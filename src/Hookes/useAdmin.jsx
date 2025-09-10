import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const { user } = useAuth();
    const axoiosSecure = useAxios();
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isadmin'],
        queryFn: async () => {
            const res = await axoiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin];
};

export default useAdmin;