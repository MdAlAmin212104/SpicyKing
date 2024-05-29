import React from 'react';
import useAxiosPublic from '../../../../hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Shared/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

const Review = () => {
    const axiosPublic = useAxiosPublic();
    const { data : reviews = []} = useQuery({
        queryKey : ['review'],
        queryFn : async () => {
            const res = await axiosPublic.get('/review')
            return res.data
        }
    })

    return (
        <div>
            <SectionTitle subHeading='Testimonial' heading='Client' colorHeading='Feedback'/>
            <section>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            
                    {
                        reviews.map(review => <SwiperSlide
                                key={review._id}
                        >
                                
                        <div className='m-24 flex flex-col items-center '>
                            <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                            <p className='my-10'>{review.details}</p>
                            <h3 className='text-[#CD9003] font-medium text-3xl'>{review.name}</h3>
                        </div>

                        </SwiperSlide>)
                    }
                </Swiper>
                  
            </section>
            
        </div>
    );
};

export default Review;