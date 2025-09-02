import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OderTab = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 w-9/12 mx-auto'>
                {
                    items.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>

        </div>
    );
};

export default OderTab;