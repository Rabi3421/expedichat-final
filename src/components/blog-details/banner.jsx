import React from 'react';
import Image from 'next/image';
import brand_img from "../../../public/assets/img/blog/blog-details-1.jpg";
import { useParams } from 'next/navigation';
import portfolio_blog from '@/data/portfolio-blog';


const Banner = () => {
   const params = useParams();
   const slug = params?.slug;
   const blog = portfolio_blog?.find((item) => item?.slug === slug);
   console.log("portfolio_blog", blog);
    return (
        <>
           <div className="blog-details-img-area mb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="blog-details-big-img z-index-2">
                        <img src={blog?.feature_img} alt="theme-pure" style={{objectFit:'cover'}}/>
                     </div>
                  </div>
               </div>
            </div>
         </div> 
        </>
    );
};

export default Banner;