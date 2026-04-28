"use client";
import { blogPosts7 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blogs() {
  return (
    <section className="flat-spacing-29">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <div className="title display-lg-3 font-9 fw-normal">
            Blog's
          </div>
          <p className="desc text-main text-md font-9">
            
          </p>
        </div>
        <div className="hover-sw-nav wrap-pos-nav">
          <Swiper
            dir="ltr"
            className="swiper tf-swiper"
            {...{
              slidesPerView: 1,
              spaceBetween: 12,
              speed: 800,
              observer: true,
              observeParents: true,
              slidesPerGroup: 1,
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
              navigation: {
                clickable: true,
                nextEl: ".nav-next-new",
                prevEl: ".nav-prev-new",
              },
              pagination: { el: ".sw-pagination-new", clickable: true },
              breakpoints: {
                577: { slidesPerView: 2, spaceBetween: 12, slidesPerGroup: 2 },
                1200: { slidesPerView: 3, spaceBetween: 24, slidesPerGroup: 4 },
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {blogPosts7.map((post, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="blog-item-v2">
                  <div className="entry-image hover-img">
                    <Link href={`/`} className="image-box img-style">
                      <Image
                        src={post.image}
                        alt="image"
                        width={696}
                        height={644}
                      />
                    </Link>
                    
                  </div>
                  <div className="entry-content">
                    <div className="info-box">
                      <ul className="meta-list">
                        <li className="item font-9">by {post.author}</li>
                        <li className="item font-9">{post.date}</li>
                      </ul>
                      <Link
                        href={`/`}
                        className="title fw-medium text-xl text-line-clamp-2 font-9 blog-title-static"
                      >
                        {post.title}
                      </Link>
                      <p className="desc text-main text-sm text-line-clamp-2 font-9">
                        {post.description}
                      </p>
                      <Link href={`/`} className="link blog-know-more-btn font-9">
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-new justify-content-center" />
          </Swiper>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-new" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-new" />
        </div>
        <style jsx>{`
          .blog-item-v2 {
            background: var(--primary-2) !important;
            border: 1px solid #eadfce;
            border-radius: 14px;
            overflow: hidden;
          }

          .entry-content {
            background: transparent;
          }

          .blog-title-static:hover {
            color: #000000 !important;
          }

          .blog-know-more-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 14px;
            padding: 9px 16px;
            border: 1px solid #0097cc;
            border-radius: 999px;
            color: #0097cc;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.25s ease;
          }

          .blog-know-more-btn:hover {
            background: #0097cc;
            border-color: #0097cc;
            color: #fff;
            box-shadow: 0 8px 18px rgba(0, 151, 204, 0.35);
            transform: translateY(-1px);
          }
        `}</style>
      </div>
    </section>
  );
}
