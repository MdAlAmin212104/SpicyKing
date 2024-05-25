import 'animate.css';

const Table = () => {
  return (
    <div className="my-24">
      <div className='animate__animated animate__backInUp animate__slow	2s'>
        <h5 className="text-[#c33] md:text-4xl text-2xl text-center canvas font-bold">
            Online Booking
        </h5>
        <h2 className="md:text-5xl text-3xl font-black text-center mt-5 text-[#2a435d]">
            Table <span className="text-[#c33]">Booking</span>
        </h2>
      </div>
      <div className="my-12 md:mx-32 grid lg:grid-cols-4 md:grid-cols-2  gap-4 md:space-y-0 space-y-4 px-2">
        <select className="select font-medium select-bordered w-full max-w-xs">
          <option selected>4 people</option>
          <option>3 people</option>
          <option>2 people</option>
          <option>1 people</option>
        </select>
        <label className="input input-bordered flex items-center w-full max-w-xs">
          <input type="date" className="grow" placeholder="Search" />
        </label>
        <select className="select select-bordered w-full max-w-xs">
          <option>07:50PM</option>
          <option>08:50PM</option>
          <option>09:50PM</option>
        </select>
        <button className="btn w-full capitalize max-w-xs bg-[#c33] text-white font-bold">
          find table
        </button>
      </div>
    </div>
  );
};

export default Table;
