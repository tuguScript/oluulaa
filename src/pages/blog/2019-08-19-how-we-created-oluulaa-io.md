---
layout: blog
title: How we created oluulaa.io
date: 2019-08-20T02:10:20.536Z
thumbnail: /img/zswyzloitgeawdssxdzd.svg
author: Tuguldur
---
We had an idea to build a website for Oluulaa. It’d be a platform to showcase our events, share content and get more connected to people. There are a lot of things to consider when creating a website from scratch as a team. Creating UI/UX design, optimizing the search engine, integrating analytics, organizing development workflow can be overwhelming to think about and plan for all at once. I’d like to share our process with you about building a JAMstack site with Gatsby, Netlify and Netlify CMS.



# What is JAMstack?



The JAMstack has inspired some of the greatest web development tools we’ve ever seen. Publishing amazingly fast, secure, and accessible websites have never been so fun. JAM stands for Javascript API & Markup. The term JAMstack was popularised by Mathias Biilmann (CEO & Co-founder of Netlify) to describe “a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup”. You can read more about JAMstack here.



# What is Gatsby?

Gatsby is a static site generator and has been getting a lot of recognition and adoption lately. You build your site in React, query for data with GraphQL. It’s so flexible and it works well with nearly everything. Apart from being flexible and fast, Gatsby is build with modern technologies, it’s future-proof and it’s a static PWA. Gatsby turns it all into static files to be served to a browser. 



# What is Netlify CMS?

Netlify CMS is an open-source content management system for Git workflows. I decided to give it a try as it seemed surprisingly simple. It’s like WordPress, but there is no site waiting for the user. It allows you to define the types of content you want to create, then gives you forms to create it. It then serves your content up over an API, which our static site generator will talk to when it builds. The way I set it up was by authenticating Netlify CMS with Github via Netlify Identity. We used Netlify CMS to manage our “event” and “posts” data. The way I am managing this data is by having one Markdown file per event. You can see the source for the events page here. I also created a configuration file. Through this file I was able to create collections and to define which fields can be modified via the CMS.

You can see the source for Netlify config here.

If you’re interested in adding a CMS to your static site, I’d definitely recommend using Netlify CMS. You can read the docs here.

# Security

Netlify automatically set up HTTPS (SSL/TLS) via Let’s Encrypt after the DNS changes were propagated and confirmed.

# Conclusion

The build and deploy process couldn’t be easier as well. Any push to the master branch or update of content on NeetlifyCMS (via a webhook) triggers a new version to be deployed out via Netlify.

Overall, I didn’t cover everything in the process, especially the React changes I made in the starter under the assumption that it’s pretty straightforward for anyone with frontend experience and not particularly interesting

Thanks for reading.Visit my personal website. 🐤
