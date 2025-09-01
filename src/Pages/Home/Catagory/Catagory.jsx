import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import shape from '../../../assets/home/chef-service.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';





const Catagory = () => {

    return (
        <div>
            <div>

                <SectionTitle
                    subFeading={"From 11.00am to 10.00pm"}
                    heading={"Order Online"}>
                </SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-full h-80"
            >
                <SwiperSlide><img src={img1} /></SwiperSlide>
                <SwiperSlide><img src={img2} /></SwiperSlide>
                <SwiperSlide><img src={img3} /></SwiperSlide>
                <SwiperSlide><img src={img4} /></SwiperSlide>
                <SwiperSlide><img src={img5} /></SwiperSlide>

            </Swiper>
            <div
                className="text-center bg-cover bg-center p-30 rounded-xl mt-20 my-5"
                style={{ backgroundImage: `url(${shape})` }}
            >
                <div className='bg-white p-10'>
                    <h3 className="text-2xl font-bold mb-4">Bistro Boss</h3>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Catagory;