import Image from "next/image";
import Link from "next/link";
import React from "react";
const offerItems = [
  {
    image: "/images/section/offer-6.jpg",
    title: "Jack",
    count: "Manager",
  },
  {
    image: "/images/section/offer-5.jpg",
    title: "Nick",
    count: "seller",
  },
  {
    image: "/images/section/offer-7.jpg",
    title: "lio",
    count: "assistant manager",
  },
];

export default function Categories() {
  return (
    <section className="flat-spacing-3">
      <div className="container">
        <div className="flat-title">
          <h4 className="fw-normal font-9 text-center" style={{ fontSize: "48px" }}>
            Meet the Team
          </h4>
        </div>
        <div className="tf-grid-layout md-col-3">
          {offerItems.map((item, index) => (
            <div className="wg-offer hover-img" key={index}>
              <Link href={`/`} className="image d-block img-style">
                <Image
                  src={item.image}
                  alt=""
                  className="lazyload"
                  width={696}
                  height={693}
                />
              </Link>
              <div className="content text-center wow fadeInUp">
                <div className="box-title gap-4">
                  <div>
                    <Link
                      href={`/`}
                      className="link text-xl font-9 fw-medium"
                    >
                      {item.title}
                    </Link>
                  </div>
                  <p className="text-xl text-grey-3">{item.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
