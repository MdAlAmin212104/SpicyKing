
import Hero from '../../components/Hero/Hero';
import { Helmet } from 'react-helmet-async';
import HomeCard from '../../components/HomeCard/HomeCard';
import Table from './HomeComponents/Table/Table';
import Banner from './HomeComponents/Banner/Banner';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || Home</title>
                  </Helmet>
                  <Hero />
                  <Table/>
                  <Banner/>
                  <HomeCard/>
            </div>
      );
};

export default Home;