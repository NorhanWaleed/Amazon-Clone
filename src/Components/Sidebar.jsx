import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar mr-4 w-full">
      <div className="delivary flex flex-col items-start mb-10">
        <h3 className="text-left mb-4 font-semibold">Delivary Day</h3>
        <div className="w-[121px] flex align-middle">
          <input type="radio" />
          <label className="text-[13px] ml-1.5">Get It in 2 Days</label>
        </div>
      </div>
      <div className="customer flex flex-col items-start mb-10">
        <h3 className="text-left mb-4 font-semibold">Customer Reviews</h3>
        <div className="w-[128px] flex items-center gap-1">
          <div className="flex">
            <FontAwesomeIcon
              icon={solidStar}
              className="text-[#FFCC00] text-[13px]"
            />
            <FontAwesomeIcon
              icon={solidStar}
              className="text-[#FFCC00] text-[13px]"
            />
            <FontAwesomeIcon
              icon={solidStar}
              className="text-[#FFCC00] text-[13px]"
            />
            <FontAwesomeIcon
              icon={solidStar}
              className="text-[#FFCC00] text-[13px]"
            />
            <FontAwesomeIcon
              icon={regularStar}
              className="text-[#FFCC00] text-[13px]"
            />
          </div>
          <p className="text-[13px]">
            &&nbsp;<span>Up</span>
          </p>
        </div>
      </div>
      <div className="brands mb-5">
        <h3 className="text-left mb-1 font-semibold">Brands</h3>
        <div className="w-[121px] flex align-middle">
          <input type="radio" />
          <label className="text-[14px] ml-1.5 mb-1">Samsung</label>
        </div>
        <div className="w-[121px] flex align-middle">
          <input type="radio" />
          <label className="text-[14px] ml-1.5 mb-1">LG</label>
        </div>
        <div className="w-[121px] flex align-middle">
          <input type="radio" />
          <label className="text-[14px] ml-1.5 mb-1">Haier</label>
        </div>
        <div className="w-[121px] flex align-middle">
          <input type="radio" />
          <label className="text-[14px] ml-1.5 mb-1">Daikin</label>
        </div>
        <div className="w-[121px] flex align-middle">
          <input type="radio" />
          <label className="text-[14px] ml-1.5 mb-1">Godrej</label>
        </div>
        <div className="w-[121px] flex align-middle">
          <input type="radio" />
          <label className="text-[14px] ml-1.5 mb-1">IFB</label>
        </div>
        <div className="w-[121px] flex align-middle">
          <input type="radio" />
          <label className="text-[14px] ml-1.5 mb-1">Panasonic</label>
        </div>
      </div>
      <div className="price w-[155px] flex flex-col items-start">
      <h3 className="text-left mb-1 font-semibold">Price</h3>
      <label><input type="radio" name="price" value="All" checked/>&nbsp;All</label>
      <label><input type="radio" name="price" value="5900-10000"/>&nbsp;₹5900 to ₹10,000</label>
      <label><input type="radio" name="price" value="10000-20000"/>&nbsp;₹10,000 to ₹20,000</label>
      <label><input type="radio" name="price" value="20000-30000"/>&nbsp;₹20,000 to ₹30,000</label>
      <label><input type="radio" name="price" value="30000-45000"/>&nbsp;₹30,000 to ₹45,000</label>
      </div>
    </div>
  );
};

export default Sidebar;
