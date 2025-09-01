import { Helmet } from 'react-helmet-async';
import Cover from '../../../Share/Cover/Cover';
import menuImg from '../../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const Menu = () => {
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
        </div>
    );
};

export default Menu;