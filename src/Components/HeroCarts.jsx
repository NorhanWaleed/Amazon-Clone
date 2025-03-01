import { useEffect, useState } from 'react';

const HeroCarts = () => {
  const [heroCarts, setHeroCarts] = useState([]);

  useEffect(() => {
    // استدعاء بيانات من Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((fakeStoreData) => {
        // فلترة المنتجات حسب الفئات من Fake Store API
        const fakeStoreCategories = [
          'electronics',
          "women's clothing",
          "men's clothing",
          'jewelery',
        ];

        const fakeStoreFilteredCarts = fakeStoreCategories.map((category) => {
          const productsInCategory = fakeStoreData.filter(
            (product) => product.category === category
          );

          return {
            title: `${
              category.charAt(0).toUpperCase() + category.slice(1)
            } Collection`,
            categories: productsInCategory.slice(0, 4).map((product) => ({
              image: product.image,
              text: product.title,
            })),
            seeMore: 'See more',
          };
        });

        // استدعاء بيانات من Dummy JSON API
        fetch('https://dummyjson.com/products')
          .then((response) => response.json())
          .then((dummyJsonData) => {
            // فلترة المنتجات حسب الفئات من Dummy JSON API
            const dummyJsonCategories = ['groceries', 'beauty', 'fragrances'];

            const dummyJsonFilteredCarts = dummyJsonCategories.map(
              (category) => {
                const productsInCategory = dummyJsonData.products.filter(
                  (product) => product.category === category
                );

                return {
                  title: `${
                    category.charAt(0).toUpperCase() + category.slice(1)
                  } Collection`,
                  categories: productsInCategory.slice(0, 4).map((product) => ({
                    image: product.thumbnail,
                    text: product.title,
                  })),
                  seeMore: 'See more',
                };
              }
            );

            // دمج البيانات من كلا المصدرَين
            const combinedCarts = [
              ...fakeStoreFilteredCarts,
              ...dummyJsonFilteredCarts,
            ];

            // تحديث الحالة
            setHeroCarts(combinedCarts);
          })
          .catch((error) =>
            console.error('Error fetching data from Dummy JSON:', error)
          );
      })
      .catch((error) =>
        console.error('Error fetching data from Fake Store:', error)
      );
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[33px] container mx-auto mt-[-270px] max-w-[1440px] lg:grid-cols-4 md:grid-cols-3 p-5">
      {heroCarts.map((cart, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-between bg-white max-w-[296px] w-[100%] sm:max-w-[100%] h-auto z-10 mx-auto px-2.5"
        >
          <h1
            className="text-4xl font-bold"
            style={{ fontWeight: 700, fontSize: '22px', lineHeight: '31.83px' }}
          >
            {cart.title}
          </h1>

          <div className="grid grid-cols-2  w-[100%] justify-between gap-2 items-baseline mt-5">
            {cart.categories?.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between "
              >
                <img
                  src={category.image}
                  alt={category.text}
                  className="w-20 h-20 object-fit"
                />
                <p
                  style={{
                    fontWeight: '700',
                    fontSize: '12.39px',
                    lineHeight: '17.93px',
                  }}
                >
                  {category.text.length > 20
                    ? category.text.slice(0, 20) + '...' // إذا كان النص أكبر من 20 حرفًا، نقطعه ونضيف "...."
                    : category.text}{' '}
                  {/* إذا كان النص أقل من أو يساوي 20 حرفًا، نعرضه كما هو */}
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
