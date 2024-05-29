import img1 from '../../../../assets/image/gm1.jpg';
import img2 from '../../../../assets/image/gm2.jpg';
import img3 from '../../../../assets/image/gm3.jpg';
import img4 from '../../../../assets/image/gm4.jpg';
import img5 from '../../../../assets/image/gm5.jpg';
import img6 from '../../../../assets/image/gm6.jpg';
import './BlogContent.css';

const BlogContent = () => {
    return (
        <div className='slider'>
            <div className='slider-track'>
                <div className='slide'><img src={img1} alt="" className='img' /></div>
                <div className='slide'><img src={img2} alt="" className='img'  /></div>
                <div className='slide'><img src={img3} alt="" className='img'  /></div>
                <div className='slide'><img src={img4} alt="" className='img'  /></div>
                <div className='slide'><img src={img5} alt="" className='img'  /></div>
                <div className='slide'><img src={img6} alt="" className='img'  /></div>
                <div className='slide'><img src={img4} alt="" className='img'  /></div>
                <div className='slide'><img src={img5} alt="" className='img'  /></div>
                <div className='slide'><img src={img6} alt="" className='img'  /></div>
            </div>
            
       
        </div>
    );
};

export default BlogContent;