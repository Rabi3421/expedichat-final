 
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react'; 

// icon import 
import icon_1 from "../../../../public/assets/img/feature/AI-chat-solution.webp";
import icon_2 from "../../../../public/assets/img/feature/AI-Premium-Tools.webp";
import icon_3 from "../../../../public/assets/img/feature/AI-Assistant-tools.webp";
import feature_bottom_shape from "../../../../public/assets/img/feature/fea-bg-shape-1.png";
import useTitleAnimation from '../../../../hooks/useTitleAnimation';
import RightArrow from '@/svg/right-arrow';

// feature data
const feature_data = [
   {
      id: 1,
      img: icon_1,
      title: <>AI chat<br /> solution</>,
      sub_title:'Enjoy Real-Time Responses and Easy File Sharing with Our AI Chat System for Smooth Conversations.',
      delay: ".4s",
      link:"/ai-chat"
   },
   {
      id: 2,
      img: icon_2,
      title: <>AI Premium<br /> Tools</>,
      sub_title:'Discover how our pro tools manage workflows, elevate SEO strategies, and simplify your professional life.',
      delay: ".6s",
      link:"/ai-tools"
   },
   {
      id: 3,
      img: icon_3,
      title: <>AI Assistant<br /> Tools</>,
      sub_title:'Explore a versatile suite of tools tailored for both specialized fields and normal users.',
      delay: ".8s",
      link:"/ai-assistant"
   },
]

// feature content
const feature_content = {
   title: "Explore our intelligent offerings",
   sub_title: "Unlock unparalleled productivity for effortless efficiency and maximum results",
}
const { title, sub_title } = feature_content

const FeatureArea = () => {
   let titleRef = useRef(null)
   useTitleAnimation(titleRef)

   return (
      <>
         <div className="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
            <div className="tp-feature__bottom-shape">
               <Image style={{width: "auto", height: "auto"}} src={feature_bottom_shape} alt="them-pure" />
            </div>
            <div className="container">

               <div className="row justify-content-center">
                  <div className="col-xl-8 wow tpfadeUpp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <div ref={titleRef} className="tp-feature__section-box tp__title_anime text-center mb-55 tp-title-anim">
                        <h2 className="tp-section-title">{title}</h2>
                        <p>{sub_title}</p>
                     </div>
                  </div>
               </div>

               <div className="row">
                  {feature_data.map((item, i) =>
                     <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay} >
                        <div id="divtest" className="tp-feature__item">
                           <div className="tp-feature__icon">
                              <Image src={item.img} alt={item.title} />
                           </div>
                           <h3 className="tp-feature__title-sm">{item.title}</h3>
                           <p>{item.sub_title}</p>
                           <div className="tp-feature__link tp-common-btn">
                              <Link href={item.link}>
                                 <RightArrow />
                              </Link>
                           </div>
                        </div>
                     </div>
                  )}
               </div>

            </div>
         </div>

      </>
   );
};

export default FeatureArea;