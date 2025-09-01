import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (

        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-300}
        >
            <div
                className="hero h-100">

                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className=" border-2 px-50 py-10 bg-gray-500/50">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            WOULD YOU LIKE TO TRY ADISH?
                        </p>

                    </div>
                </div>
            </div>
        </Parallax>





    );
};

export default Cover;