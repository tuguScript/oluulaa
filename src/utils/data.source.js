import React from "react"

export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo",
  },
  Menu: {
    className: "header0-menu",
    children: [
      { name: "item3", a: { children: "About", href: "/#about" } },
      { name: "item0", a: { children: "Events", href: "/events" } },
      { name: "item0", a: { children: "Blog", href: "/blog" } },
      { name: "item3", a: { children: "Donate", href: "/#donation" } },
      { name: "item2", a: { children: "Contact", href: "/#footer" } },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
}
export const Banner30DataSource = {
  wrapper: { className: "banner3" },
  textWrapper: {
    className: "banner3-text-wrapper",
    children: [
      {
        name: "nameEn",
        className: "banner3-name-en",
        children: (
          <>
            <p>
              We connect professionals who truly want to share tips and help one
              another.
            </p>
          </>
        ),
      },
      {
        name: "slogan",
        className: "banner3-slogan",
        children: "Build your network",
        texty: true,
      },
      {
        name: "name",
        className: "banner3-name",
        children: (
          <>
            <p>Meet the right people and build your career</p>
          </>
        ),
      },
      {
        name: "button",
        className: "banner3-button",
        href:
          "https://docs.google.com/forms/d/1To-b0tkpPLRHCwyNPiT_SkVwD1mJUnGe-Vi1G8BpIvg",
        target: "_blank",
        children: (
          <>
            <p>
              <a href="https://docs.google.com/forms/d/1f6f-sYTlQ6xVd_Ox5LpYnoaPGZhZ1RSfi8Bftbvs5hM/edit">
                Apply Now
              </a>
            </p>
          </>
        ),
      },
    ],
  },
}
export const Content110DataSource = {
  OverPack: {
    className: "home-page-wrapper content11-wrapper",
    id: "about",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <>
            <p>About&nbsp;Us&nbsp;</p>
          </>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        children: (
          <>
            <p>
              Oluulaa is a collaborative platform with a mission to connect and
              invigorate the Mongolian community members.
            </p>
          </>
        ),
        className: "title-content",
      },
      {
        name: "content2",
        children: (
          <>
            <p>
              We are focusing on connect young professionals through events that
              focus on personal and professional growth!
            </p>
          </>
        ),
        className: "title-content",
      },
    ],
  },
  buttons: [
    {
      className: "",
      children: {
        a: {
          className: "button",
          href: "#",
          children: (
            <>
              <p>
                <a href="event" target="_blank">
                  Events
                </a>
              </p>
            </>
          ),
        },
      },
    },
    {
      className: "",
      children: {
        a: {
          className: "button",
          href: "#",
          children: (
            <>
              <p>Mentorship</p>
            </>
          ),
        },
      },
    },
    {
      className: "",
      children: {
        a: {
          className: "button",
          href: "#",
          children: (
            <>
              <p>How we're run</p>
            </>
          ),
        },
      },
    },
  ],
}
export const Teams20DataSource = {
  wrapper: { className: "home-page-wrapper teams2-wrapper" },
  page: { className: "home-page teams2" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>Our team</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: "block-wrapper",
    gutter: 72,
    children: [
      {
        name: "block_tugi",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://www.tugi.me/static/profile_pic-cff3153fd2fe285172a5b0aa6533a981.jpg",
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            { name: "title", className: "teams2-title", children: "Tuguldur" },
            {
              name: "content",
              className: "teams2-job",
              children: "Projects: #tech, #events, #design",
            },
            {
              name: "content1",
              className: "teams2-content",
              children:
                "My skills and experience include UI+UX design, front-end development, back-end development, and involvement in product launches. ",
            },
          ],
        },
      },
      {
        name: "block_chinzo",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "/img/chinzo.jpg",
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>Chinzorig</p>
                </>
              ),
            },
            {
              name: "content",
              className: "teams2-job",
              children: "Projects: #events #marketing",
            },
            {
              name: "content1",
              className: "teams2-job",
              children: "Bio: Software Engineer at UCSF. ",
            },
          ],
        },
      },
      {
        name: "block_ulzii",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children: "/img/ulzii.jpeg",
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: "Ulziibayar",
            },
            {
              name: "content",
              className: "teams2-job",
              children: "Projects: #finance, #events",
            },
            {
              name: "content1",
              className: "teams2-content",
              children: "Bio: Software Engineer at r2c",
            },
          ],
        },
      },
      {
        name: "block_solongo",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "/img/solongo.jpeg",
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>Solongo</p>
                </>
              ),
            },
            {
              name: "content",
              className: "teams2-job",
              children: "Projects: #events #marketing",
            },
            {
              name: "content1",
              className: "teams2-content",
              children: "Bio: Senior Associate at PwC",
            },
          ],
        },
      },
      {
        name: "block_khulan_ba",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "/img/khulan_batsaikhan.jpg",
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>Khulan Batsaikhan</p>
                </>
              ),
            },
            {
              name: "content",
              className: "teams2-job",
              children: "Projects: #events #marketing",
            },
            {
              name: "content1",
              className: "teams2-content",
              children: "Bio: Designer at Studio Sarah Willmer Architecture",
            },
          ],
        },
      },
      {
        name: "block_enkhuush",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "/img/enkhuush.jpg",
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>Enkhuush</p>
                </>
              ),
            },
            {
              name: "content",
              className: "teams2-job",
              children: "Projects: #events #marketing",
            },
            {
              name: "content1",
              className: "teams2-content",
              children: "Bio: Senior Data Analyst at Samba TV.",
            },
          ],
        },
      },
      {
        name: "block_khulan_bya",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "/img/khulan_byambaa.jpeg",
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: "Khulan Byambaa",
            },
            {
              name: "content",
              className: "teams2-job",
              children: "Projects: #finance #design",
            },
            {
              name: "content1",
              className: "teams2-content",
              children: "Bio: Accountant at Chigbu & Co, LLP",
            },
          ],
        },
      }
    ],
  },
}
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2, id: "footer" },
  block: {
    className: "home-page",
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo",
          children: "Oluulaa",
        },
        content: {
          className: "slogan",
          children: (
            <>
              <p>Build your network</p>
            </>
          ),
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <>
              <p>About Us</p>
            </>
          ),
        },
        content: {
          children: (
            <>
              <p>History</p>
              <p>How we run</p>
              <p>
                <a href="events"> Events</a>
              </p>
              <p>
                <a href="mentorship">Mentorship</a>
              </p>
            </>
          ),
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <>
              <p>Contact us</p>
            </>
          ),
        },
        content: {
          children: (
            <>
              <p>
                <a target="_blank" href="https://facebook.com/oluuulaaa/">
                  Facebook
                </a>
              </p>
              <p>
                <a target="_blank" href="https://www.instagram.com/oluuulaaa/">
                  Instagram
                </a>
              </p>
              <p>
                <a target="_blank" href="https://m.me/oluuulaaa">
                  Messenger
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/oluulaa/"
                >
                  Linkedin
                </a>
              </p>
            </>
          ),
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <>
              <p>Get involved</p>
            </>
          ),
        },
        content: {
          children: (
            <>
              <p>
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/1To-b0tkpPLRHCwyNPiT_SkVwD1mJUnGe-Vi1G8BpIvg"
                >
                  Join Us
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/1f6f-sYTlQ6xVd_Ox5LpYnoaPGZhZ1RSfi8Bftbvs5hM"
                >
                  {" "}
                  Apply for mentorship
                </a>
              </p>
              <p>
                <a target="_blank" href="https://venmo.com/Oluulaa-Oluulaa">
                  Donate
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://github.com/tuguScript/oluulaa/issues"
                >
                  Report an Issue
                </a>
              </p>
            </>
          ),
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <>
        <span>©2019 by Oluulaa All Rights Reserved</span>
      </>
    ),
  },
}
