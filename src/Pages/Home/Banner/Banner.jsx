import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

const Banner = () => {
    return (
        <div className="w-full">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} className="h-[200px] md:h-[400px] w-full  rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} className="h-[200px] md:h-[400px] w-full  rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} className="h-[200px] md:h-[400px] w-full  rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} className="h-[200px] md:h-[400px] w-full  rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} className="h-[200px] md:h-[400px] w-full  rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} className="h-[200px] md:h-[400px] w-full  rounded-xl" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
