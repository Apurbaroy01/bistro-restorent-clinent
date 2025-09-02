
import { Helmet } from 'react-helmet-async';
import oderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Share/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import Usemenu from '../../../Hookes/Usemenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = Usemenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const drink = menu.filter(item => item.category === "drink")
    return (
        <div>
            <Helmet>
                <title>Bistro || Oder</title>
            </Helmet>
            <Cover img={oderCover} title="Oder Food"></Cover>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drink</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-10 w-9/12 mx-auto'>
                            {
                                salad.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-10 w-9/12 mx-auto'>
                            {
                                pizza.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-10 w-9/12 mx-auto'>
                            {
                                soup.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-10 w-9/12 mx-auto'>
                            {
                                dessert.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-10 w-9/12 mx-auto'>
                            {
                                drink.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    
                </Tabs>
            </div>

        </div>
    );
};

export default Order;