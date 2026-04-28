"use client";
import Link from "next/link";
import React from "react";
import {
  blogMenuItems,
  demoItems,
  otherPages,
  productMenuItems,
  shopPages,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
export default function MobileMenu() {
  const pathname = usePathname();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  const isMenuParentActive2 = (menu) => {
    return menu.some((elm) => isMenuParentActive(elm.links));
  };
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <button
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            {/* <form className="form-search">
              <input
                type="text"
                placeholder="Search product"
                className=""
                name="text"
                tabIndex={0}
                defaultValue=""
                aria-required="true"
                required
              />
              <button type="submit">
                <i className="icon icon-search" />
              </button>
            </form> */}
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <a
                  href="#"
                  className={`collapsed mb-menu-link  ${
                    isMenuParentActive(demoItems) ? "menuActive" : ""
                  } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-home"
                >
                  <span>Home</span>
                  {/* <span className="btn-open-sub" /> */}
                </a>
                {/* <div id="dropdown-menu-home" className="collapse">
                  <ul className="sub-nav-menu">
                    {demoItems.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className={`sub-nav-link ${
                            isMenuActive(link) ? "menuActive" : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </li>
              <li className="nav-mb-item">
                <a
                  href="#"
                  className={`collapsed mb-menu-link  ${
                    isMenuParentActive2(shopPages) ? "menuActive" : ""
                  } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-shop"
                >
                  <span>About us</span>
                  {/* <span className="btn-open-sub" /> */}
                </a>
                {/* <div id="dropdown-menu-shop" className="collapse">
                  <ul className="sub-nav-menu">
                    {shopPages.map((elm, i) => (
                      <li key={i}>
                        <a
                          href={`#sub-shop-layout${i}`}
                          className={`sub-nav-link collapsed  ${
                            isMenuParentActive(elm.links) ? "menuActive" : ""
                          } `}
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls={`sub-shop-layout${i}`}
                        >
                          <span>{elm.heading}</span>
                          <span className="btn-open-sub" />
                        </a>
                        <div id={`sub-shop-layout${i}`} className="collapse">
                          <ul className="sub-nav-menu sub-menu-level-2">
                            {elm.links.map((link, i) => (
                              <li key={i}>
                                <Link
                                  href={link.href2 ? link.href2 : link.href}
                                  className={`sub-nav-link  ${
                                    isMenuActive(link) ? "menuActive" : ""
                                  }`}
                                >
                                  {link.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </li>
              <li className="nav-mb-item">
                <a
                  href="#"
                  className={`collapsed mb-menu-link ${
                    isMenuParentActive2(productMenuItems) ? "menuActive" : ""
                  } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-product"
                >
                  <span>Products</span>
                  {/* <span className="btn-open-sub" /> */}
                </a>
                {/* <div id="dropdown-menu-product" className="collapse">
                  <ul className="sub-nav-menu">
                    {productMenuItems.map((elm, i) => (
                      <li key={i}>
                        <a
                          href={`#sub-product-layout${i}`}
                          className={`sub-nav-link collapsed  ${
                            isMenuParentActive(elm.links) ? "menuActive" : ""
                          } `}
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls={`sub-product-layout${i}`}
                        >
                          <span>{elm.heading}</span>
                          <span className="btn-open-sub" />
                        </a>
                        <div id={`sub-product-layout${i}`} className="collapse">
                          <ul className="sub-nav-menu sub-menu-level-2">
                            {elm.links.map((link, i) => (
                              <li key={i}>
                                <Link
                                  href={link.href}
                                  className={`sub-nav-link  ${
                                    isMenuActive(link) ? "menuActive" : ""
                                  }`}
                                >
                                  {link.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </li>
              <li className="nav-mb-item">
                <a
                  href="#"
                  className={`collapsed mb-menu-link  ${
                    isMenuParentActive(otherPages) ? "menuActive" : ""
                  } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-pages"
                >
                  <span>Blogs</span>
                  {/* <span className="btn-open-sub" /> */}
                </a>
                {/* <div id="dropdown-menu-pages" className="collapse">
                  <ul className="sub-nav-menu">
                    {otherPages.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className={`sub-nav-link  ${
                            isMenuActive(link) ? "menuActive" : ""
                          }`}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </li>
              <li className="nav-mb-item">
                <a
                  href="#"
                  className={`collapsed mb-menu-link  ${
                    isMenuParentActive(blogMenuItems) ? "menuActive" : ""
                  } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-blog"
                >
                  <span>Contact us</span>
                  {/* <span className="btn-open-sub" /> */}
                </a>
                {/* <div id="dropdown-menu-blog" className="collapse">
                  <ul className="sub-nav-menu">
                    {blogMenuItems.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className={`sub-nav-link  ${
                            isMenuActive(link) ? "menuActive" : ""
                          }`}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </li>
              <li className="nav-mb-item">
                <a
                  href="/"
                  className="mb-menu-link"
                >
                  request a quote 
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-other-content">
            
            <div className="mb-notice">
              <Link href={`/contact-us`} className="text-need">
                Need Help?
              </Link>
            </div>
            <div className="mb-contact">
              <p>Address: 123 Demo Street, Lima, Peru 15001</p>
            </div>
            <ul className="mb-info">
              <li>
                Email: <b className="fw-medium">hello@klinperu-demo.com</b>
              </li>
              <li>
                Phone: <b className="fw-medium">+51 900 123 456</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
