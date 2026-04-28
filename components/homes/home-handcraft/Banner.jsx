import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="flat-spacing-14 s-banner-with-text banner-text-skincare">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hover-shine hover-img">
              <div className="image-banner image shine-item img-style">
                <Image
                  src="/images/banner/handcraft-1.jpeg"
                  alt=""
                  className="lazyload"
                  width={780}
                  height={863}
                  style={{
                    width: "100%",
                    height: "520px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-banner wow fadeInRight">
              <div className="box-title-banner">
                <h4 className="letter-0 fw-normal" display-lg-3="">
                  ABOUT US
                </h4>
                <p className="text-grey-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="box-btn-banner">
                <Link
                  href={`/`}
                  className="tf-btn animate-btn btn-red btn-lg fw-medium bg-brown-14 border-0"
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
