
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Share/MenuItem/MenuItem";
import Usemenu from "../../../../Hookes/Usemenu";


const PopularManu = () => {

    const [menu]=Usemenu()
    const popularItems= menu.filter(item=> item.category==="popular")
    
    return (

        <div>
            <SectionTitle
                heading="From Our Menu"
                subFeading="Popular Items"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-5 p-4">
                {
                    popularItems.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-primary">View Full Menu</button>
            </div>

        </div>
    );
};

export default PopularManu;