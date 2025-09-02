
import Cover from '../../../Share/Cover/Cover';
import MenuItem from '../../../Share/MenuItem/MenuItem';

const MenuCatagory = ({ items ,title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg}  title={title}></Cover>}
            <div className="grid grid-cols-2 gap-5 p-4">
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCatagory;