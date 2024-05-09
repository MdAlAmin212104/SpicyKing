import voucher from '../../assets/icon/discount.png';
import fresh from '../../assets/icon/fresh.png';
import delivery from '../../assets/icon/delivery.png';

const DiscountSection = () => {
      return (
            <div className='grid lg:grid-cols-3 gap-4 my-4'>
                  <div className="card card-side bg-base-100 shadow-xl pl-4">
                        <figure><img src={voucher} alt="Movie"/></figure>
                        <div className="card-body">
                              <h2 className="card-title">Discount Voucher</h2>
                              <p>Unlock exclusive savings with our discount voucher! </p>
                        </div>
                  </div>
                  <div className="card card-side bg-base-100 shadow-xl pl-4">
                        <figure><img src={fresh} alt="Movie"/></figure>
                        <div className="card-body">
                              <h2 className="card-title">Fresh Healthy Food</h2>
                              <p>Discover the deliciousness of fresh, healthy food delivered straight to your door!</p>
                        </div>
                  </div>
                  <div className="card card-side bg-base-100 shadow-xl pl-4">
                        <figure><img src={delivery} alt="Movie"/></figure>
                        <div className="card-body">
                              <h2 className="card-title">Fast Home Delivery</h2>
                              <p>Experience the convenience of fast home delivery with our reliable service!</p>
                        </div>
                  </div>
            </div>
      );
};

export default DiscountSection;
