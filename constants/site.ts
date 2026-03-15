/**
 * Site-wide constants (production: single source for nav, links, copy)
 */

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-the-author", label: "About The Author" },
  { href: "/table-of-contents", label: "Table Of Contents" },
  { href: "/about-the-book", label: "About The Book" },
] as const;

export const CONTACT_EMAIL = "matt@developerturnover.com";

export const AMAZON_BOOK_URL =
  "https://www.amazon.com/dp/1098314301?ref=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&ref_=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&social_share=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&bestFormat=true";
