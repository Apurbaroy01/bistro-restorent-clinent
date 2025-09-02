
import { Link } from 'react-router-dom';
import Cover from '../../../Share/Cover/Cover';
import MenuItem from '../../../Share/MenuItem/MenuItem';

const MenuCatagory = ({ items, title , coverImg }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-5 p-4">
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className='text-center mb-5'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-3 border-amber-300 bg-gray-300 px-10">Oder now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCatagory;