import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useCart = () => {
    // tanstack quary
    const useAxioss = useAxios();
    const {user}=useAuth();
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ["cards"],
        queryFn: async () => {
            const res =await useAxioss.get(`/cards?email=${user.email}`)
            return res.data
        }

    })
    return [cart,refetch];
};

export default useCart;