import { useState, useEffect } from 'react';

const ProductCarousel = ({ array, text }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [products, setProducts] = useState([]);

  // إذا كانت `array` هي وعده، نقوم بحلها وإعداد الحالة
  useEffect(() => {
    if (typeof array === 'function') {
      array().then((data) => {
        setProducts(data);
      });
    } else {
      setProducts(array); // إذا كانت المصفوفة عادية، نستخدمها مباشرة
    }
  }, [array]);

  const handlePrev = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 200); // تحريك 200px إلى اليسار
    }
  };

  const handleNext = () => {
    if (scrollPosition < products.length * 150 - 800) {
      setScrollPosition(scrollPosition + 200); // تحريك 200px إلى اليمين
    } else {
      // عند الوصول لنهاية القائمة، أضف المنتجات من البداية إلى النهاية
      setProducts((prevProducts) => [
        ...prevProducts,
        ...prevProducts.slice(0, 6),
      ]);
    }
  };

  useEffect(() => {
    // دالة لتحريك الشريط تلقائيًا نحو اليسار
    const autoScroll = () => {
      if (scrollPosition < products.length * 150 - 800) {
        setScrollPosition(scrollPosition + 20); // تحريك 20px كل فترة زمنية
      } else {
        // عند الوصول لنهاية القائمة، أضف المنتجات من البداية إلى النهاية
        setProducts((prevProducts) => [
          ...prevProducts,
          ...prevProducts.slice(0, 6),
        ]);
      }
    };

    // إنشاء توقيت لتحريك الشريط كل 180 ميلي ثانية
    const intervalId = setInterval(autoScroll, 180);

    // تنظيف التوقيت عند فصل المكون
    return () => clearInterval(intervalId);
  }, [scrollPosition, products]);

  return (
    <div className="h-[320px] max-w-[1380px] px-[30px] py-[25px] bg-white mx-auto">
      <h2
        className="text-[12px] mb-3.5 md:text-[22px]"
        style={{ fontWeight: '700', lineHeight: '31.83px', letterSpacing: '0' }}
      >
        {text || ''}
      </h2>

      <div className="mx-auto flex  items-center ">
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Scrollable Content */}
          <div
            className="flex gap-[10px] transition-transform ease-out duration-300"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="w-auto h-48 mx-2 my-auto flex-shrink-0 rounded-lg overflow-hidden "
              >
                <img
                  src={product.image || product} // لدعم صور URL أو بيانات API
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 
            bg-[#ffffff30]
            text-black rounded-sm p-2 z-10 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[100px] w-[45px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2  transform -translate-y-1/2 
            bg-[#ffffff30]
            text-black rounded-sm p-2 z-10 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[100px] w-[45px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
