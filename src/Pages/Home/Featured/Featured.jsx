import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'


const Featured = () => {
    return (
        <div className="my-10 p-5 bg-fixed" style={{ backgroundImage: `url(${featured})` }}>
            <SectionTitle
            heading="Featured Item"
            subFeading="check it out"
            ></SectionTitle>
            <div className="flex space-x-10 justify-center items-center w-10/12 mx-auto py-5">
                <div>
                    <img className="w-200" src={featured}/>
                </div>
                <div className="text-white space-y-2">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Whwre can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex est nulla culpa minus perspiciatis quas magnam esse quos? Nesciunt minus deserunt cupiditate voluptatum voluptatibus id perspiciatis odit maxime reiciendis.</p>
                    <button className="btn btn-outline border-0 border-b-3 border-amber-300">Oder now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;