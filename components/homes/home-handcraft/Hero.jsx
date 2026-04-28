"use client";
import { handcraftSlides } from "@/data/heroSlides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <div className="slider-style-3 slider-default mt_18 hero-slider-shell">
      <Swiper
        dir="ltr"
        className="swiper tf-swiper slider-effect-fade"
        {...{
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          speed: 800,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          pagination: { el: ".sw-pagination-slider", clickable: true },
        }}
        modules={[Autoplay, Pagination]}
      >
        {handcraftSlides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="slider-wrap hero-slider-wrap">
              <div className="image">
                <Image
                  src={slide.image}
                  alt="slider"
                  className="lazyload w-100 hero-slide-image"
                  width={1920}
                  height={704}
                  sizes="100vw"
                />
              </div>
              <div className="box-content">
                <div className="container">
                  <div className="content-slider py-4 py-md-0">
                    <div className="box-title-slider">
                      <div
                        className="sub mb_10 fade-item fade-item-1 fw-medium body-text font-9 hero-subtitle"
                        dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                      />
                      <div
                        className="heading font-9 fade-item fade-item-2 fw-normal display-xl-2 text-dark-8 hero-title"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                    </div>
                    <div className="box-btn-slider fade-item fade-item-3">
                      <Link
                        href={`/`}
                        className="tf-btn btn-large font-2 text-uppercase animate-btn bg-brown-14 border-0 hero-btn"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="d-flex sw-dots style-dark sw-pagination-slider justify-content-center" />
        </div>
      </div>
      <style jsx>{`
        .hero-slider-shell {
          padding: 0 20px;
        }

        .hero-slider-wrap {
          overflow: hidden;
          border-radius: 16px;
        }

        .hero-slide-image {
          object-fit: cover;
          min-height: 460px;
        }

        @media (max-width: 767px) {
          .hero-slider-shell {
            padding: 0 10px;
          }

          .hero-slider-wrap {
            border-radius: 12px;
          }

          .hero-slide-image {
            min-height: 420px;
          }

          .hero-title {
            font-size: 32px !important;
            line-height: 1.2;
          }

          .hero-subtitle {
            font-size: 14px;
          }

          .hero-btn {
            width: 100%;
            justify-content: center;
            padding: 14px 18px;
          }
        }
      `}</style>
    </div>
  );
}
