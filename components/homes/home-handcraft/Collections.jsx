"use client";
import { handcraftBanners } from "@/data/collections";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="collections-section">
      <div className="container">
        {/* <div className="section-header">
          <h2 className="section-title">Handcrafted Collections</h2>
          <p className="section-subtitle">Explore our curated artisan collections</p>
        </div> */}

        <Swiper
          dir="ltr"
          className="collections-swiper"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          {...{
            slidesPerView: 1,
            spaceBetween: 16,
            speed: 700,
            observer: true,
            observeParents: true,
            slidesPerGroup: 1,
            navigation: {
              clickable: true,
              nextEl: ".nav-next-cls",
              prevEl: ".nav-prev-cls",
            },
            pagination: { el: ".sw-pagination-cls", clickable: true },
            breakpoints: {
              640: { slidesPerView: 1, spaceBetween: 16, slidesPerGroup: 1 },
              768: { slidesPerView: 1.2, spaceBetween: 20, slidesPerGroup: 1 },
              1024: { slidesPerView: 2, spaceBetween: 28, slidesPerGroup: 1 },
              1440: { slidesPerView: 2, spaceBetween: 32, slidesPerGroup: 1 },
            },
          }}
          modules={[Pagination, Navigation]}
        >
          {handcraftBanners.map((item, index) => (
            <SwiperSlide key={index} className="collection-slide">
              <div className={`collection-card ${activeSlide === index ? "active" : ""}`}>
                <div className="image-container">
                  <Image
                    src={item.image}
                    alt={item.title || "Collection"}
                    className="collection-image"
                    width={1062}
                    height={602}
                    priority={index === 0}
                  />
                  <div className="image-overlay" />
                </div>

                <div className="content-container">
                  <div className="content-inner">
                    {/* <div className="badge">{item.category || "Collection"}</div> */}
                    <h3
                      className="collection-title"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p
                      className="collection-description"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>

                  <Link
                    href={`/`}
                    className="cta-button"
                  >
                    <Link
                      href="/"
                      className="tf-btn animate-btn border-0 header-cta-btn bg-brown-14"
                    >
                      {item.linkTitle}
                    </Link>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pagination-wrapper">
          <div className="sw-pagination-cls sw-dot-default" />
        </div>
      </div>

      <style jsx>{`
        .collections-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInDown 0.8s ease-out;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          letter-spacing: -0.5px;
          font-family: 'Sohne', 'Helvetica Neue', sans-serif;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .collections-swiper {
          position: relative;
          padding: 20px 0;
        }

        .collections-swiper :global(.swiper-wrapper) {
          align-items: stretch;
        }

        .collection-slide {
          height: auto;
          min-height: 600px;
          opacity: 0.85;
          transition: opacity 0.5s ease;
          display: flex;
          align-items: stretch;
          padding-bottom: 20px;
        }

        .collection-slide.swiper-slide-active {
          opacity: 1;
        }

        .collection-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .collection-slide:hover .collection-card {
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
          transform: translateY(-8px);
        }

        .collection-card.active {
          transform: scale(1.02);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          background: linear-gradient(135deg, #e8e8e8 0%, #f0f0f0 100%);
          flex-shrink: 0;
        }

        .collection-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .collection-card:hover .collection-image {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0.15) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .collection-card:hover .image-overlay {
          opacity: 1;
        }

        .content-container {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          min-height: 0;
          background: white;
          gap: 20px;
        }

        .content-inner {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .badge {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #8b6f47;
          background: rgba(139, 111, 71, 0.08);
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .collection-title {
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.2;
          letter-spacing: -0.3px;
          font-family: 'Sohne', 'Helvetica Neue', sans-serif;
        }

        .collection-description {
          font-size: 1rem;
          color: #666;
          margin: 0;
          line-height: 1.6;
          font-weight: 400;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #8b6f47 0%, #a0845c 100%);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: none;
          cursor: pointer;
          letter-spacing: 0.3px;
          position: relative;
          overflow: hidden;
          width: fit-content;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #9a7d57 0%, #b0945c 100%);
          transition: left 0.4s ease;
          z-index: -1;
        }

        .cta-button:hover::before {
          left: 0;
        }

        .cta-button:hover {
          transform: translateX(4px);
          box-shadow: 0 12px 28px rgba(139, 111, 71, 0.25);
        }

        .button-text {
          font-weight: 600;
        }

        .button-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
          font-size: 1.2rem;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(3px);
        }

        .pagination-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .sw-dot-default {
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
        }

        /* Swiper Pagination Styles */
        :global(.sw-pagination-cls .swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: rgba(0, 0, 0, 0.2);
          opacity: 1;
          transition: all 0.4s ease;
          border-radius: 50%;
        }

        :global(.sw-pagination-cls .swiper-pagination-bullet-active) {
          background: #8b6f47;
          width: 28px;
          border-radius: 5px;
          box-shadow: 0 4px 12px rgba(139, 111, 71, 0.3);
        }

        /* Navigation Styles */
        :global(.nav-prev-cls),
        :global(.nav-next-cls) {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        :global(.nav-prev-cls:hover),
        :global(.nav-next-cls:hover) {
          background: #8b6f47;
          border-color: #8b6f47;
          color: white;
          box-shadow: 0 8px 20px rgba(139, 111, 71, 0.25);
        }

        @media (max-width: 767px) {
          .collections-section {
            padding: 50px 0;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .collection-slide {
            min-height: 500px;
          }

          .image-container {
            height: 260px;
          }

          .content-container {
            padding: 20px 18px;
            gap: 15px;
          }

          .collection-title {
            font-size: 1.3rem;
          }

          .collection-description {
            font-size: 0.95rem;
          }

          .cta-button {
            padding: 12px 24px;
            font-size: 0.9rem;
          }

          :global(.nav-prev-cls),
          :global(.nav-next-cls) {
            display: none;
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .section-subtitle {
            font-size: 1rem;
          }

          .pagination-wrapper {
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
}
