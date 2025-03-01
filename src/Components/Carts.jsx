import { useState, useEffect } from 'react';

const Carts = () => {
  const [products, setProducts] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  useEffect(() => {
    // جلب البيانات من API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // تعيين المنتج الأول كافتتاحي
          setMainImage(data[0].image);
          setProducts(data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-[33px] container mx-auto max-w-[1440px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
      {/* القسم الأول */}
      <div className="flex flex-col items-start justify-between bg-white max-w-[296px] h-auto z-10 mx-auto px-2.5">
        <h1
          className="text-4xl font-bold"
          style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
        >
          Best Sellers in Toys & Games
        </h1>
        {/* الصورة الرئيسية */}
        <div className="mt-5 flex justify-center">
          <img src={mainImage} alt="main" className="h-48 object-fit" />
        </div>
        <p
          className="font-normal "
          style={{
            fontSize: '11.58px',
            lineHeight: '16.75px',
            letterSpacing: '0',
          }}
        >
          {products[selectedThumbnail]?.title || 'Loading...'}
        </p>
        {/* الصور الثانوية (الأزرار) */}
        <div className="grid grid-cols-4 my-5">
          {products.slice(0, 4).map((product, index) => (
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
                setMainImage(product.image);
                setSelectedThumbnail(index);
              }}
            >
              <img
                src={product.image}
                alt={`thumbnail-${index}`}
                className="w-12 h-12 object-fit rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* القسم الثاني */}
      <div className="flex flex-col items-start justify-between bg-white max-w-[296px] h-auto z-10 mx-auto px-2.5">
        <h1
          className="text-4xl font-bold"
          style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
        >
          Customers’ Most-Loved Products
        </h1>
        <div className="grid grid-cols-2 justify-between gap-2 items-baseline mt-5">
          {products.slice(4, 8).map((product, index) => (
            <img
              key={index}
              src={product.image}
              alt={`product-${index}`}
              className="w-full h-24 object-fit"
            />
          ))}
        </div>
        <button className="text-lg">Explore More</button>
      </div>

      {/* القسم الثالث */}
      <div className="flex flex-col items-start bg-white max-w-[296px] h-auto z-10 mx-auto px-2.5">
        <h1
          className="text-4xl font-bold"
          style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
        >
          Customers’ Most-Loved Products
        </h1>
        <div className="grid grid-cols-2 justify-between gap-5 items-baseline mt-5">
          {products.slice(8, 12).map((product, index) => (
            <img
              key={index}
              src={product.image}
              alt={`product-${index}`}
              className="w-full h-24 object-fit"
            />
          ))}
        </div>
      </div>

      {/* القسم الرابع */}
      <div className="flex flex-col items-start justify-between bg-white max-w-[296px] h-auto z-10 mx-auto px-2.5">
        <h1
          className="text-4xl font-bold"
          style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
        >
          Latest styles | Dresses, kurta & more | 50% -...
        </h1>
        <div className="grid grid-cols-2 justify-between gap-2 items-baseline mt-5">
          {products.slice(12, 16).map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between"
            >
              <img
                src={product.image}
                alt={`product-${index}`}
                className="w-full h-24 object-fit"
              />
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '12.39px',
                  lineHeight: '17.93px',
                }}
              >
                {product.title.split(' ')[0]}{' '}
                {/* عرض الكلمة الأولى فقط كعنوان */}
              </p>
            </div>
          ))}
        </div>
        <button className="text-lg">seeMore</button>
      </div>
    </div>
  );
};

export default Carts;
