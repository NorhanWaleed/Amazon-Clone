import React from "react";

const ProductCard = ({item}) => {
  return (
    <div className="w-full max-w-[300px]  min-h-[570px] p-[10.78px] border border-[#D9D9D9] gap-[23.73px]">
      <img
        className="mb-4 w-[255px] h-[255px]"
        src={item.image}
        alt=""
      />
      <div className="info  flex flex-col flex-grow">
        <h4 className="text-[18px] font-medium text-left mb-1.5">
          {item.title}
        </h4>
      </div>
      <div className="rating mb-2 flex flex-col">
        <div className="stars flex gap-2 items-center">
          <img src="/public/Frame 220.png" alt="" />
          <span className="text-[#1F8394] text-[18px]">13,204</span>
        </div>
        <p className="text-[14px] text-[#717171] text-left">
          300+ bought in past month
        </p>
      </div>
      <div className="cost text-left mb-2">
        <p className="text-[20px] font-normal">
          ₹{item.price}
          <span className="text-[13.42px] text-[#717171]">(46% off)</span>
        </p>
          <p className="text-[13px] font-light text-[#7F7F7F]">
            Save extra with No Cost EMI
          </p>
      </div>
      <div className="cart w-full">
        <p className="text-[14px] font-light text-left">
          FREE delivery by&nbsp;
          <span className="text-[14px] font-semibold">
            Sat, 14 Sept, 7:00 am - 9:00 pm
          </span>
        </p>
        <a
          className=" text-[12px] font-light block w-fit bg-[#FFCC00] mt-[10px] py-[7px] px-[23px]  rounded-[20px]"
          href=""
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
