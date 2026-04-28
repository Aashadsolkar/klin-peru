"use client";
import { useContextElement } from "@/context/Context";
import { handcraftProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products1() {
  const {
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    setQuickViewItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();

  return (
    <section className="flat-spacing-2 bg-yellow-6">
      <div className="container">
        <div className="flat-animate-tab flat-controltab-nav">
          <div className="flat-title">
            <h4 className="fw-normal font-9 text-start" style={{ fontSize: "48px" }}>
              Product category
            </h4>
          </div>
          <div className="tab-content">
            <div className="tab-pane active show" id="arrivals" role="tabpanel">
              <Swiper
                dir="ltr"
                className="swiper tf-swiper"
                {...{
                  slidesPerView: 2,
                  spaceBetween: 12,
                  speed: 800,
                  loop: true,
                  observer: true,
                  observeParents: true,
                  slidesPerGroup: 1,
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                  },
                  navigation: {
                    clickable: true,
                    nextEl: ".nav-next-hot",
                    prevEl: ".nav-prev-hot",
                  },
                  pagination: { el: ".sw-pagination-hot", clickable: true },
                  breakpoints: {
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                      slidesPerGroup: 1,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                      slidesPerGroup: 1,
                    },
                  },
                }}
                modules={[Autoplay, Navigation, Pagination]}
              >
                {handcraftProducts.map((product, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="card-product style-wishlist style-3 card-product-size none-hover">
                        <div className="card-product-wrapper">
                          <Link
                            href={`/`}
                            className="product-img"
                          >
                            <Image
                              className="img-product lazyload"
                              alt="image-product"
                              src={product.imgSrc}
                              width={513}
                              height={650}
                            />
                            <Image
                              className="img-hover lazyload"
                              alt="image-product"
                              src={product.imgSrc}
                              width={513}
                              height={650}
                            />
                          </Link>
                          {/* <ul className="list-product-btn">
                            <li
                              className={` ${
                                isAddedtoWishlist(product.id)
                                  ? "addwishlist"
                                  : ""
                              }`}
                            >
                              <a
                                onClick={() => addToWishlist(product.id)}
                                className="box-icon hover-tooltip wishlist box-shadow1"
                              >
                                <span
                                  className={`icon ${
                                    isAddedtoWishlist(product.id)
                                      ? "icon-trash"
                                      : "icon-heart2"
                                  } `}
                                />
                                <span className="tooltip">
                                  {" "}
                                  {isAddedtoWishlist(product.id)
                                    ? "Remove Wishlist"
                                    : "Add to Wishlist"}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#quickView"
                                data-bs-toggle="modal"
                                onClick={() => setQuickViewItem(product)}
                                className="box-icon hover-tooltip quickview box-shadow1"
                              >
                                <span className="icon icon-view" />
                                <span className="tooltip">Quick View</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#compare"
                                data-bs-toggle="modal"
                                aria-controls="compare"
                                onClick={() => addToCompareItem(product.id)}
                                className="box-icon hover-tooltip compare box-shadow1"
                              >
                                <span className="icon icon-compare" />
                                <span className="tooltip">
                                  {" "}
                                  {isAddedtoCompareItem(product.id)
                                    ? "Already compared"
                                    : "Add to Compare"}
                                </span>
                              </a>
                            </li>
                          </ul> */}
                        </div>
                        <div className="card-product-info text-center">
                          <Link
                            href={`/`}
                            className="name-product link fw-medium text-md font-9"
                          >
                            {product.title}
                          </Link>
                          {/* <p className="price-wrap fw-medium">
                            <span className="price-new">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="price-old">
                              {" "}
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          </p> */}
                          <a
                            // href="#"
                            data-bs-toggle="offcanvas"
                            onClick={() => {}}
                            className="tf-btn btn-out-line-dark mt_10 product-view-btn"
                          >
                            <span className="text-md fw-medium">
                              View Product
                            </span>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                <div className="d-flex d-xl-none sw-dot-default sw-pagination-hot justify-content-center" />
              </Swiper>
              <div className="box-nav-swiper style-2">
                <div className="swiper-button-prev d-xl-flex style-1 nav-swiper nav-prev-hot relative" />
                <div className="swiper-button-next d-xl-flex style-1 nav-swiper nav-next-hot relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-product-wrapper {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 12px 14px 28px rgba(0, 0, 0, 0.24);
        }

        .product-view-btn:hover {
          background-color: #0097cc !important;
          border-color: #0097cc !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
