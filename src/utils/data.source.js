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
                Apply Now
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
        name: "block3",
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
        name: "block4",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://media.licdn.com/dms/image/C5603AQHM2dn8VCQqSA/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=od2N_b23h-cc5bxMvSMJ9-KUlUTJwOBigQ90va3Hi5k",
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
              children: "Bio: ",
            },
          ],
        },
      },
      {
        name: "block5",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/57247054_2153248991428321_7702553494917480448_o.jpg?_nc_cat=106&_nc_oc=AQmfAZPede11HOZbto3OiWLCLKxT_3grCKCwWtY_gp4hXTaprFbuxKx4vAxfGucJQk94_eY-Lf2VI-Kzx4QKqIHq&_nc_ht=scontent-sjc3-1.xx&oh=1c907f2ee85d1384ba7e5ee681dd3737&oe=5DE9D194",
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
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/291109_10150746028530284_5895722_o.jpg?_nc_cat=103&_nc_oc=AQlpxsMWIBcFlAMvj-tO6Wi-6Q3AB4YavT9MW3MPTVg38MMuoucZTEYXfpaQuyWkSKerAnZaFS7APtgA0AVz15fp&_nc_ht=scontent-sjc3-1.xx&oh=063a030ee9240e2b8838814c55f0757c&oe=5DD45937",
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
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/68504989_713765905702806_2547784487001915392_n.jpg?_nc_cat=109&_nc_oc=AQlN46PMu22aIOLzh1EAX20OX0mIgX2fpRDcEIAnbWRW6DUYH01HNAc3e5-3PIAwulXBbsxfDdv250IW2PH7y5Nu&_nc_ht=scontent-sjc3-1.xx&oh=29dff612046b24dd2512b9d66677ea39&oe=5E15D020",
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            { name: "title", className: "teams2-title", children: "Zolzaya" },
            {
              name: "content",
              className: "teams2-job",
              children: "Projects: #marketing",
            },
            {
              name: "content1",
              className: "teams2-content",
              children: "Bio: Student",
            },
          ],
        },
      },
      {
        name: "block6",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10157332_623240774440901_2426597592566701627_n.jpg?_nc_cat=111&_nc_oc=AQkt-OedYZdRIOHy_ZenZ6KVQ3vHvetSCjx0wDPeiXl76iCjvosqt5RVSLUFtEW0V9YJFRvyIWGnv-ICN15urwqa&_nc_ht=scontent-sjc3-1.xx&oh=fbd35157979ff01ed3a086d7bb9e9925&oe=5DDC867C",
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
