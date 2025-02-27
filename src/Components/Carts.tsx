import React, { useState } from 'react';

const Carts = () => {
  const [mainImage, setMainImage] = useState('/src/assets/image 148.png');
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  // قائمة الصور
  const images = [
    '/src/assets/image 148.png',
    '/src/assets/image 152.png',
    '/src/assets/image 153.png',
    '/src/assets/image.png',
  ];
  return (
    <div className="grid grid-cols-1 gap-[33px] container mx-auto max-w-[1440px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
      <div className="flex flex-col items-start justify-between bg-white max-w-[296px] h-auto z-10 mx-auto px-2.5">
        {/* العنوان */}
        <h1
          className="text-4xl font-bold"
          style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
        >
          Best Sellers in Toys & Games
        </h1>

        {/* الصورة الرئيسية */}
        <div className="mt-5 flex justify-center">
          <img src={mainImage} alt="main" className="h-48 object-cover" />
        </div>
        <p
          className="font-normal "
          style={{
            fontSize: '11.58px',
            lineHeight: '16.75px',
            letterSpacing: '0',
          }}
        >
          Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing
          Cactus Toys…
        </p>

        {/* الصور الثانوية (الأزرار) */}
        <div className="grid grid-cols-4  my-5">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative cursor-pointer gap-1 p-[7px] ${
                selectedThumbnail === index ? 'border-2 border-blue-500' : ''
              }`}
              style={
                selectedThumbnail === index
                  ? { border: '2px solid gray', borderRadius: '9px' }
                  : {}
              }
              onClick={() => {
                setMainImage(image);
                setSelectedThumbnail(index);
              }}
            >
              <img
                src={image}
                alt={`thumbnail-${index}`}
                className="w-12 h-12 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-between bg-white max-w-[296px] h-auto z-10 mx-auto px-2.5 ">
        <h1
          className="text-4xl font-bold"
          style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
        >
          Customers’ Most-Loved Products
        </h1>
        <div className="grid grid-cols-2 justify-between gap-2 items-baseline mt-5">
          {/* <div className="grid grid-cols-2 items-center justify-between "> */}
          <img src={`/src/assets/image 154.png`} alt="img" />
          <img src={`/src/assets/image 155.png`} alt="img" />
          <img src={`/src/assets/image 156.png`} alt="img" />
          <img src={`/src/assets/image 157.png`} alt="img" />
          {/* </div> */}
        </div>
        <button className="text-lg">Explore More</button>
      </div>

      <div className="flex flex-col items-start  bg-white max-w-[296px] h-auto z-10 mx-auto px-2.5 ">
        <h1
          className="text-4xl font-bold"
          style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
        >
          Customers’ Most-Loved Products
        </h1>
        <div className="grid grid-cols-2 justify-between gap-5 items-baseline mt-5">
          {/* <div className="grid grid-cols-2 items-center justify-between "> */}
          <img src={`/src/assets/image 158.png`} alt="img" />
          <img src={`/src/assets/image 159.png`} alt="img" />
          <img src={`/src/assets/image 160.png`} alt="img" />
          <img src={`/src/assets/image 161.png`} alt="img" />
          {/* </div> */}
        </div>
      </div>

      <div className="flex flex-col items-start justify-between bg-white max-w-[296px] h-auto z-10 mx-auto px-2.5 ">
        <h1
          className="text-4xl font-bold"
          style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
        >
          Latest styles | Dresses, kurta & more | 50% -...
        </h1>
        <div className="grid grid-cols-2 justify-between gap-2 items-baseline mt-5">
          <div className="flex flex-col items-start justify-between ">
            <img src={`/src/assets/image 162.png`} alt="img" />
            <p
              style={{
                fontWeight: '700',
                fontSize: '12.39px',
                lineHeight: '17.93px',
              }}
            >
              Kurta & sets
            </p>
          </div>
          <div className="flex flex-col items-start justify-between ">
            <img src={`/src/assets/image 163.png`} alt="img" />
            <p
              style={{
                fontWeight: '700',
                fontSize: '12.39px',
                lineHeight: '17.93px',
              }}
            >
              Tops
            </p>
          </div>
          <div className="flex flex-col items-start justify-between ">
            <img src={`/src/assets/image 164.png`} alt="img" />
            <p
              style={{
                fontWeight: '700',
                fontSize: '12.39px',
                lineHeight: '17.93px',
              }}
            >
              Dresses
            </p>
          </div>
          <div className="flex flex-col items-start justify-between ">
            <img src={`/src/assets/image 165.png`} alt="img" />
            <p
              style={{
                fontWeight: '700',
                fontSize: '12.39px',
                lineHeight: '17.93px',
              }}
            >
              Sarees
            </p>
          </div>
        </div>
        <button className="text-lg">seeMore</button>
      </div>
    </div>
  );
};

export default Carts;
