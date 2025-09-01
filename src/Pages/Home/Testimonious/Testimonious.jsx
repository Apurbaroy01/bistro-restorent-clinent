import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonious = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);

    return (
        <div className='my-20'>
            <SectionTitle
                heading="TESTIMONIALS"
                subFeading="What Our Clients Say"
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='w-9/12 mx-auto flex flex-col items-center '>

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                // onChange={setRating}
                                isDisabled
                            />
                            <p className='text-center'>{review.details}</p>
                            <h3 className='text-center font-semibold text-2xl text-orange-400'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonious;