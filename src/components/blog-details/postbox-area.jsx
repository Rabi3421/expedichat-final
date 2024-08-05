import SocialLinks from '@/common/social-links';
import CommentPost from '@/forms/comment-post';
import DoubleSemicolon from '@/svg/double-semicolon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Categories from '../blog-list/categories';
import RecentPost from '../blog-list/recent-post';
import Search from '../blog-list/search';
import Tags from '../blog-list/tags';
import Comments from './comments';


import blog_details_img_1 from "../../../public/assets/img/blog/blog-details-1.jpg";
import blog_details_img_2 from "../../../public/assets/img/blog/blog-details-2.jpg";
import blog_details_img_3 from "../../../public/assets/img/blog/blog-details-3.jpg";
import navigation_img_1 from "../../../public/assets/img/blog/navigation-1.png";
import navigation_img_2 from "../../../public/assets/img/blog/navigation-2.png";
import blog_details_avata from "../../../public/assets/img/blog/blog-details-avata-1.jpg";
import portfolio_blog from '@/data/portfolio-blog';
import { useParams } from 'next/navigation';

const post_box_content = {
   title_1: <>The History Of Web Design</>,
   des_1: <>While you want your sales team to be spending most of their time prospecting and selling, making sure they have the time and   space to keep the CRM up to date is critical. Remember to factor in time for these tasks when setting goals and benchmarks for them. Provide sales support where you can to ensure your sales team is spending.</>,
   des_2: <>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved.!</>,
   checkmark_list: [
      "Say goodbye to bank fees.",
      "Leverage agile frameworks to provide",
      "Capitalize on low hanging fruit",
      "Deposit funds easily, securely.",
   ],
   title_2: "How to Update your Theme",
   des_3: <>Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis.</>,
   des_4: <>Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. sed turpis odio vitae sem lobortis.</>,
   des_5: <>Ex erat referrentur vis. Vim ad consul molestie, eu malorum aliquando referrentur pro, erroribus gloriatur sed at. Eu illud saepe impetus ius. Cum graece libris abhorreant id, eu veri aeque ubique vel. Ut his malis similique. Ei vim blandit nominavi, quo elaboraret quaerendum et. At animal fabellas pericula est, ut cibo lobortis delicatissimi vel, cum ex putant probatus petentium. Elitr laboramus mel id. Admodum adolescens id eam, omnes reformidans comprehensam no vim, ex omnes alienum liberavisse usu. Mandamus tincidunt cu pro, vocent corrumpit no per. Vis ad malorum tacimates adipiscing. Elitr laboramus mel id.</>,
   des_6: <></>,
}
const { title_1, des_1, des_2, checkmark_list, title_2, des_3, des_4, des_5, des_6 } = post_box_content

const PostboxArea = ({ style_details_2 }) => {
   const params = useParams();
   const slug = params?.slug;
   const blog = portfolio_blog?.find((item) => item?.slug === slug);
   console.log("portfolio_blog", blog);
   return (
      <>
         <div className={`postbox__area ${style_details_2 && "pt-100"} pb-100`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__details-wrapper pr-20">
                        <article>
                           {style_details_2 &&
                              <div className="postbox__thumb w-img">
                                 <Link href="/blog-details">
                                    <Image src={blog_details_img_1} alt="" />
                                 </Link>
                              </div>
                           }
                           <div className="postbox__details-title-box">
                              {/* <h4 className="postbox__details-title">{blog?.title}</h4> */}
                              <p className='font'>{blog?.des}</p>
                           </div>
                           <div className="postbox__details-content " dangerouslySetInnerHTML={{ __html: blog?.blog_content }} />
                           {/* <div className="postbox__details-checkmark">
                              <ul>
                                 {checkmark_list.map((item, i) => <li key={i}><i className="fal fa-check"></i>{item}</li>)}
                              </ul>
                           </div>
                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_2}</h4>
                              <p>{des_3}</p>
                           </div>
                           <div className="postbox__details-img-box d-flex">
                              <div className="mr-20 text-center">
                                 <Image className="mb-20" src={blog_details_img_2} alt="theme-pure" />
                                 <h4 className="postbox__details-img-caption"><span>Images by</span>@sample</h4>
                              </div>
                              <div className="text-center">
                                 <Image className="mb-20" src={blog_details_img_3} alt="theme-pure" />
                                 <h5 className="postbox__details-img-caption"><span>Images by</span>@sample</h5>
                              </div>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_4}</p>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_5}</p>
                           </div> */}
                        </article>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper">
                        {/* <Search /> */}
                        <RecentPost />
                        <Categories />
                        {/* <Tags /> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PostboxArea;