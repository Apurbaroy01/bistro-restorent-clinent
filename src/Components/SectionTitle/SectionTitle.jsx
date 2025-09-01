

const SectionTitle = ({heading, subFeading}) => {
    return (
        <div className=" w-3/12 mx-auto text-center mt-10 my-10">
            <p className="text-xs lg:text-xl  text-yellow-600 my-2">--- {subFeading} ---</p>
            <h3 className="text-xl lg:text-3xl uppercase font-semibold border-gray-300 border-y-2 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;