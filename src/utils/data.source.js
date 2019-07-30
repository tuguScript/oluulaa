import React from 'react';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo'
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item3', a: { children: 'About', href: 'about' } },
      { name: 'item0', a: { children: 'Events', href: 'events' } },
      { name: 'item2', a: { children: 'Mentorship', href: 'mentorship' } },
      { name: 'item0', a: { children: 'Blog', href: 'blog' } },
      { name: 'item3', a: { children: 'Donate', href: 'donate' } },
      { name: 'item2', a: { children: 'Contact', href: 'contact' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
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
        name: 'slogan',
        className: 'banner3-slogan',
        children: 'Build your network',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <>
            <p>Meet the right people and build your career</p>
          </>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: (
          <>
            <p>Apply Now</p>
          </>
        ),
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <>
            <p>Meet&nbsp;Inspiring&nbsp;Professionals</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <>
            <p>
              We’re building a global work-minded friend-zone. And for once,
              you’d be glad to be in it!
            </p>
          </>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <>
            <p>The Better Way To Network</p>
          </>
        ),
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button',
        href: '#',
        children: (
          <>
            <p>Get In the zone</p>
          </>
        ),
      },
    },
  },
};
export const Teams20DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>Our team</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: 'Dorjoo' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Incididunt aliqua sit tempor consequat ullamco minim culpa tempor cupidatat id dolor est.',
            }
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: 'Dorjoo' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Consequat tempor sint et mollit ipsum.',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Ex dolor sunt esse cillum occaecat anim in.',
            },
          ],
        },
      },
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <>
                  <p>Boldoo</p>
                </>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'In quis exercitation aliquip voluptate minim dolor velit ipsum qui.',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Sunt elit aliqua velit mollit amet minim veniam ea commodo officia adipisicing proident.',
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <>
                  <p>Tsetsgee</p>
                </>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Ut amet exercitation commodo excepteur adipisicing cillum aute dolor fugiat.',
            }
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: 'Tuguldur' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Id in culpa non ipsum.',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Adipisicing ut veniam sit id cupidatat velit non consequat esse commodo id Lorem.',
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: 'Tuguldur' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Ut voluptate irure incididunt pariatur.',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Incididunt pariatur ipsum ea ut ea nisi sit proident officia ullamco adipisicing eu voluptate.',
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: 'Tuguldur' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Deserunt nisi qui in elit aute sit commodo laborum Lorem.',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Ad nisi do dolor elit ea.',
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: 'Tuguldur' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Veniam occaecat ipsum ea duis deserunt veniam amet voluptate proident ea proident pariatur veniam duis.',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Sunt cupidatat non laboris culpa commodo.',
            },
          ],
        },
      },
      {
        name: 'block~jxpbsunmen',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: 'Tuguldur' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Commodo laboris deserunt magna ex sint in irure.',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Laborum sit occaecat proident excepteur.',
            },
          ],
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'Oluulaa',
        },
        content: {
          className: 'slogan',
          children: (
            <>
              <p>Minim nulla culpa anim dolor voluptate Lorem est cillum fugiat minim.</p>
            </>
          ),
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
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
              <p>
                {' '}
                <a href="#">C</a>ontact Us
              </p>{' '}
              <p>FAQ</p> <p>How We're Run</p> <p>Donate</p>
            </>
          ),
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <>
              <p>Latest</p>
            </>
          ),
        },
        content: {
          children: (
            <>
              <p>Blog</p> <p>Events</p>
            </>
          ),
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <>
              <p>Work with Us</p>
            </>
          ),
        },
        content: {
          children: (
            <>
              <p>Join</p>
            </>
          ),
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>©2019 by Oluulaa All Rights Reserved</span>
      </>
    ),
  },
};
