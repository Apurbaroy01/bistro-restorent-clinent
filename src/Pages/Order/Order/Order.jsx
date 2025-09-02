
import { Helmet } from 'react-helmet-async';
import oderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Share/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import Usemenu from '../../../Hookes/Usemenu';

import OderTab from '../OderTab/OderTab';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = Usemenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const drink = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Helmet>
                <title>Bistro || Oder</title>
            </Helmet>
            <Cover img={oderCover} title="Order Food"></Cover>
            <div className='mt-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >

                    <TabList >
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drink</Tab>
                    </TabList>

                    <TabPanel>
                        <OderTab items={salad}></OderTab>
                    </TabPanel>

                    <TabPanel>
                        <OderTab items={pizza}></OderTab>
                    </TabPanel>

                    <TabPanel>
                        <OderTab items={soup}></OderTab>
                    </TabPanel>

                    <TabPanel>
                        <OderTab items={dessert}></OderTab>
                    </TabPanel>

                    <TabPanel>
                        <OderTab items={drink}></OderTab>
                    </TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default Order;