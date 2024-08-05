import Image from "next/image";
import Link from "next/link";
import React from "react";


import icon_1 from "../../../public/assets/img/contact/contact-icon-sm-1.webp";
import icon_2 from "../../../public/assets/img/contact/contact-icon-sm-2.webp";
import icon_3 from "../../../public/assets/img/contact/contact-icon-sm-3.webp";


const inner_content = {
  title: "We're here for you 24/7",
  description: <>Our support team is always available to assist you.</>,

  contact_data: [
    {
      id: 1,
      icon: icon_1,
      title: "info@expedichat.com",
      link: "mailto:info@expedichat.com",
    },
    {
      id: 2,
      icon: icon_2,
      title: "+91-9341171960",
      link: "tel:+91-9341171960",
    },
    {
      id: 3,
      icon: icon_3,
      title: "C-1101, Urbtech Trade Cente, Sec- 132, Noida- 201304",
      link: "https://maps.app.goo.gl/m8qAKZyoJ9DQa8pq8",
    },
  ],
};
const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  return (
    <>
      <div className="contact-inner-area pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-50">
                <h4 className="contact-inner-title-sm">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      <Image src={item.icon} alt="theme-pure" />
                    </div>
                    <div className="contact-inner-link">
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ContactInner;
