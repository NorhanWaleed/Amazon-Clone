import { useEffect, useState } from 'react';
import Carts from '../Components/Carts';
import Hero from '../Components/Hero';
import HeroCarts from '../Components/HeroCarts';
import ProductCarousel from '../Components/ProductCarousel';
import axios from 'axios';

const HomPage = () => {
  const [products, setProducts] = useState([]);

  // استدعاء Fake Store API للحصول على المنتجات
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // الفئة التي نريد فلترة المنتجات بناءً عليها
  const selectedCategoryElectronics = 'electronics';
  const selectedCategoryWomen = "women's clothing";

  // فلترة المنتجات بناءً على الفئة المحددة
  const filteredProductsElectronics =
    selectedCategoryElectronics === 'all'
      ? products
      : products.filter(
          (product) => product.category === selectedCategoryElectronics
        );

  const filteredProductsWomen =
    selectedCategoryWomen === 'all'
      ? products
      : products.filter(
          (product) => product.category === selectedCategoryWomen
        );

  // إرسال المصفوفات كوعود
  const getFilteredProductsElectronics = () =>
    new Promise((resolve) => resolve(filteredProductsElectronics));

  const getFilteredProductsWomen = () =>
    new Promise((resolve) => resolve(filteredProductsWomen));

  // وظيفة للعودة إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // الانتقال السلس
    });
  };

  return (
    <div style={{ backgroundColor: 'rgba(35, 47, 62, 1)' }}>
      <Hero />
      <HeroCarts />
      {/* إرسال الوعد إلى ProductCarousel */}
      <ProductCarousel
        array={getFilteredProductsElectronics}
        text={'Best Sellers in Clothing & Accessories'}
      />
      <Carts />
      <ProductCarousel
        array={getFilteredProductsWomen}
        text={'Min. 50% off | Unique kitchen finds | Amazon Brands & more'}
      />
      <button
        onClick={scrollToTop}
        className="   text-white rounded-sm w-max-[1440px] w-[100%] mx-auto h-10  md:h-[80px] flex items-center justify-center  p-0 md:py-[17px] transition duration-300"
        style={{ backgroundColor: ' rgba(55, 71, 90, 1)', color: 'white' }}
      >
        back to top
      </button>
    </div>
  );
};

export default HomPage;
