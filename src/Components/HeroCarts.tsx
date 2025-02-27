import React from 'react';

const HeroCart = [
  {
    title: 'Revamp your home in style',

    subtitle: 'Appliances for your home | Up to 55% off',

    categories: [
      {
        image: '../assets/home-card-1.png',

        text: 'Cushion covers, bedsheets',
      },

      {
        image: '../assets/home-card-2.png',

        text: 'Figurines, vases',
      },

      {
        image: '../assets/image 12.png',

        text: 'Air Conditioners',
      },

      {
        image: '../assets/image 13.png',

        text: 'Refrigerators',
      },
    ],

    seeMore: 'See more',
  },
  {
    title: 'Starting ₹99 | Home improvement essentials',

    categories: [
      {
        image: '../assets/image 14.png',

        text: 'Microwaves',
      },

      {
        image: '../assets/image 15.png',

        text: 'Washing machines',
      },

      {
        image: '../assets/image 16.png',

        text: 'Home storage',
      },

      {
        image: '../assets/image 17.png',

        text: 'Lighting solutions',
      },
    ],

    seeMore: 'See more',
  },
  {
    title: 'Appliances for your home| Up to 55% off',

    categories: [
      {
        image: '../assets/image 18.png',

        text: 'Starting ₹249 | boAt',
      },

      {
        image: '../assets/image 19.png',

        text: 'Starting ₹349 | boulT',
      },

      {
        image: '../assets/image 20.png',

        text: 'Starting ₹649 | Noise',
      },

      {
        image: '../assets/image 21.png',

        text: 'Starting ₹149 | Zebronics',
      },
    ],

    seeMore: 'See all offers',
  },

  {
    title: 'Starting $99 | Amazon Brands',

    categories: [
      {
        image: '../assets/image 22.png',

        text: 'Starting $299 | Home storage &...',
      },

      {
        image: '../assets/image 23.png',

        text: 'Up to 60% off | Storage &racks',
      },

      {
        image: '../assets/image 24.png',

        text: 'Starting $99 | Toys & games',
      },

      {
        image: '../assets/image 25.png',

        text: 'Up to 60% off | Jackets,dresses',
      },
    ],

    seeMore: 'See more',
  },

  {
    title: 'Automotive | Up to 60% off',

    categories: [
      {
        image: '../assets/image 26.png',

        text: 'Cleaning accessories',
      },

      {
        image: '../assets/image 27.png',

        text: 'Tyre & rim care',
      },

      {
        image: '../assets/image 28.png',

        text: 'Helmets',
      },

      {
        image: '../assets/image 29.png',

        text: 'Vacuum cleaner',
      },
    ],

    seeMore: 'See more',
  },

  {
    title: 'Up to 60% off | Styles for women',

    categories: [
      {
        image: '../assets/image 30.png',

        text: "Women's Clothing",
      },

      {
        image: '../assets/image 31.png',

        text: 'Footwear+Handbags',
      },

      {
        image: '../assets/image 32.png',

        text: 'Watches',
      },

      {
        image: '../assets/image 33.png',

        text: 'Fashion Jewellery',
      },
    ],

    seeMore: 'See more',
  },

  {
    title: 'Starting ₹199 | Amazon Brands',

    categories: [
      {
        image: '../assets/image 540.png',

        text: 'Starting $199 | Bedsheets',
      },

      {
        image: '../assets/image 541.png',

        text: 'Starting $199 | Curtains',
      },

      {
        image: '../assets/image 542.png',

        text: 'Minimum 40% off | Ironing board & more',
      },

      {
        image: '../assets/image 543.png',

        text: 'Up to 60% off | Home decor',
      },
    ],

    seeMore: 'See more',
  },

  {
    title: 'Starting ₹99 | Home improvement essentials',

    categories: [
      {
        image: '../assets/image 14.png',

        text: 'Microwaves',
      },

      {
        image: '../assets/image 15.png',

        text: 'Washing machines',
      },

      {
        image: '../assets/image 16.png',

        text: 'Home storage',
      },

      {
        image: '../assets/image 17.png',

        text: 'Lighting solutions',
      },
    ],

    seeMore: 'See more',
  },
];
const HeroCarts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[33px] container mx-auto mt-[-270px] max-w-[1440px]  lg:grid-cols-4 md:grid-cols-3 p-5">
      {HeroCart.map((cart, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-between bg-white   max-w-[296px] sm:max-w-[100%] h-auto z-10 mx-auto px-2.5 "
        >
          <h1
            className="text-4xl font-bold"
            style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
          >
            {cart.title}
          </h1>
          {/* <p className="text-lg">{cart.subtitle}</p> */}
          <div className="grid grid-cols-2 justify-between gap-2 items-baseline mt-5">
            {cart.categories?.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between "
              >
                <img
                  src={`/src/assets/${category.image}`}
                  alt={category.text}
                />
                <p
                  style={{
                    fontWeight: '700',
                    fontSize: '12.39px',
                    lineHeight: '17.93px',
                  }}
                >
                  {category.text}
                </p>
              </div>
            ))}
          </div>
          <button className="text-lg">{cart.seeMore}</button>
        </div>
      ))}
    </div>
  );
};

export default HeroCarts;
