import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";


const Table = () => {
  return (
    <div className="my-24">
      <SectionTitle subHeading='Online Booking' heading='Table' colorHeading = 'Booking' />
      <div className="my-12 md:mx-32 grid lg:grid-cols-4 md:grid-cols-2  gap-4 md:space-y-0 space-y-4 px-2">
        <select className="select font-medium select-bordered w-full max-w-xs">
          <option>4 people</option>
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
