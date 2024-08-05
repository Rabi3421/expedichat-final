import useMultipleAnime from '@/hooks/useMultipleAnime';
import portfolio_blog from '@/data/portfolio-blog';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Box } from '@mui/system';
// data
const categories = [
   "All",
   ...new Set(portfolio_blog.map((item) => item.category)),
];

const Portfolio = () => {
   const { dataRef } = useMultipleAnime();
   const [activeCategory, setActiveCategory] = useState("All");
   const [items, setItems] = useState(portfolio_blog);

   const filterItems = (cateItem) => {
      setActiveCategory(cateItem);

      if (cateItem === "All") {
         return setItems(portfolio_blog);
      } else {
         const findItems = portfolio_blog.filter((findItem) => {
            return findItem.category == cateItem;
         });
         setItems(findItems);
      }
   };

   return (
      <>
         <div className="portfolio blog-grid-inner mb-80">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className="tp-about__section-box text-center mb-40">
                        <h4 className="inner-section-subtitle">150+ Blog Central</h4>
                        <h3 className="tp-section-title">The Knowledge Hub</h3>
                        <p>Connecting You with the Updates, Trends, and Expert Opinions</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="portfolio-filter masonary-menu text-center mb-35">
                        {categories.map((cate, i) => (
                           <button
                              onClick={() => filterItems(cate)}
                              key={i}
                              className={`${cate === activeCategory ? "active" : ""}`}
                           >
                              <span>{cate}</span>
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="row grid blog-grid-inner"  >
                  {items.map((item, i) =>
                     <div key={i} data-index={i} className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat1 cat4 cat3 cat5" style={{ opacity: '' }}>
                        <div className="tp-blog-item">
                           <div className="tp-blog-thumb fix">
                              <Link href= {`/blog/${item.slug}`}><img src={item?.feature_img} alt="theme-pure" /></Link>
                           </div>
                           <div className="tp-blog-content">
                              <div className="tp-blog-meta d-flex align-items-center">
                                 <div className="tp-blog-category category-color-1">
                                    <span>{item.category}</span>
                                 </div>
                                 <div className="tp-blog-date">
                                    <span>{item.date}</span>
                                 </div>
                              </div>
                              <div className="tp-blog-title-box">
                                 <Link className="tp-blog-title-sm" href="/blog-details">{item.title}</Link>
                              </div>
                              <Box
                                 style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                 }}
                              >
                                 {item.des}
                              </Box>
                           </div>
                        </div>
                     </div>
                  )
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default Portfolio;