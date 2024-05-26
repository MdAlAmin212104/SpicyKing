
import Hero from '../../components/Hero/Hero';
import { Helmet } from 'react-helmet-async';
import HomeCard from '../../components/HomeCard/HomeCard';
import Table from './HomeComponents/Table/Table';
import Banner from './HomeComponents/Banner/Banner';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import GallerySection from './HomeComponents/GallerySection/GallerySection';
import ComingSoon from './HomeComponents/ComingSoon/ComingSoon';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || Home</title>
                  </Helmet>
                  <Hero />
                  <Table/>
                  <Banner/>
                  <SectionTitle subHeading='Food Items' heading='Popular' colorHeading='Menu' />
                  <HomeCard/>
                  <GallerySection/>
                  <ComingSoon/>
            </div>
      );
};

export default Home;