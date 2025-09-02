import { Helmet } from 'react-helmet-async';
import Cover from '../../../Share/Cover/Cover';
import menuImg from '../../../../assets/menu/salad-bg.jpg'
import desserts from '../../../../assets/menu/dessert-bg.jpeg'
import pizzas from '../../../../assets/menu/pizza-bg.jpg'
import salads from '../../../../assets/menu/salad-bg.jpg'
import soups from '../../../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import Usemenu from '../../../../Hookes/Usemenu';

import MenuCatagory from '../MenuCatagory/MenuCatagory';

const Menu = () => {
    const [menu] = Usemenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle
                subFeading="Don't miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>

            <MenuCatagory items={offered}></MenuCatagory>

            <MenuCatagory items={dessert} title="dessert" coverImg={desserts}></MenuCatagory>

            <MenuCatagory items={pizza} title="pizza" coverImg={pizzas}></MenuCatagory>

            <MenuCatagory items={salad} title="salad" coverImg={salads}></MenuCatagory>

            <MenuCatagory items={soup} title="soup" coverImg={soups}></MenuCatagory>


        </div>
    );
};

export default Menu;