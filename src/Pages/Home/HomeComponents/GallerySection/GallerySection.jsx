import React from 'react';
import gallery1 from '../../../../assets/image/gallery1.png';
import gallery02 from '../../../../assets/image/gallery02.png';
import gallery3 from '../../../../assets/image/gallery3.png';
import gallery4 from '../../../../assets/image/gallery4.png';
import gallery from '../../../../assets/image/gallery.png';

const GallerySection = () => {
    return (
        <div className='grid grid-cols-4 text-white gap-8'>
            <div className='col-span-2 bg-[#270E0E] flex justify-between pt-8'>
                <div className='pl-4 my-4'>
                <h2 className='text-3xl font-black'>Buzzed Burger</h2>
                <p>Sale off 50% only this week</p>
                <button className='bg-[#c33] font-bold btn border-none mt-10 text-white uppercase'>Order Now</button>
                </div>
                <img src={gallery1} alt="" className='mt-8' />
            </div>
            <div className='bg-[#270E0E]'>
                <img src={gallery02} alt="" />
                <div className='text-white text-end mt-8 mr-2'>
                    <h2 className='text-2xl font-black'>Super Delicious Pizza</h2>
                    <button className='bg-[#c33] font-bold btn border-none mt-3 text-white uppercase'>Order Now</button>
                </div>
            </div>
            <div className='row-span-2 bg-[#270E0E] relative overflow-hidden'>
                <div className='mt-4 ml-2'>
                    <h1 className='text-2xl font-black '>Supper Combo Burger</h1>
                    <button className='bg-[#c33] font-bold btn border-none mt-3 text-white uppercase'>Order Now</button>
                </div>
                <img src={gallery3} alt="" className='absolute -bottom-2 h-2/3 left-1/3 ' />
            </div>
            <div className='bg-[#270E0E] relative'>
                <div className='mt-4 ml-2'>
                    <h1 className='text-2xl font-black '>Supper Combo Burger</h1>
                    <button className='bg-[#c33] font-bold btn border-none mt-3 text-white uppercase'>Order Now</button>
                </div>
                <img src={gallery} alt="" className='absolute bottom-0 right-0' />
            </div>
            <div className='bg-[#270E0E] relative h-[250px]'>
                <div className='mt-4 ml-2'>
                    <h1 className='text-2xl font-black '>Supper Combo Burger</h1>
                    <button className='bg-[#c33] font-bold btn border-none mt-3 text-white uppercase'>Order Now</button>
                </div>
                <img src={gallery3} alt="" className='absolute right-0 bottom-0 w-2/3' />
            </div>
            <div className='bg-[#270E0E] relative'>
                <div className='mt-4 ml-2'>
                    <h1 className='text-2xl font-black '>Supper Combo Burger</h1>
                    <button className='bg-[#c33] font-bold btn border-none mt-3 text-white uppercase'>Order Now</button>
                </div>
                <img src={gallery4} alt="" className='absolute right-0 bottom-0' />
            </div>
        </div>
    );
};

export default GallerySection;