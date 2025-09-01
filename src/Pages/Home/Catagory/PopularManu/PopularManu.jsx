import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Share/MenuItem/MenuItem";


const PopularManu = () => {
    const [menu, setMenu]=useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems= data.filter(item=> item.category ==="popular");
                setMenu(popularItems)
            })
    }, []);
    return (

        <div>
            <SectionTitle
                heading="From Our Menu"
                subFeading="Popular Items"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-5 p-4">
                {
                    menu.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>

        </div>
    );
};

export default PopularManu;