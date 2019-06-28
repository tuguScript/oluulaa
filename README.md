<p align="center">
  <a href="https://www.oluulaa.io">
    <img alt="Gatsby" src="https://github.com/tuguScript/oluulaa/blob/master/src/images/oluulaa-logo.jpg" width="100" />
  </a>
</p>

# Oluulaa website &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Oluulaa gatsbyjs react javascript

oluulaa.io нь ... энд товч тайлбар байна. Манай хамт олон хэд хэдэн арга хэмжээ, төсөлүүдийг амжилттай хийсэн ба бидний зорилго ...-д оршино.

Манай serverless stack ...


## 1. 🚀 локал компьютер дээр ажилуулах

1.  **Татаж авах**

    NPM ашиглан Gatsby CLI суулгасан байх хэрэгтэй

    ```sh
    git clone git@github.com:tuguScript/oluulaa.git
    ```

1.  **Хөгжүүлэлт хийх**

    Directory - доо ороод, эхлүүлэх комманд аа өгөөрөй

    ```sh
    cd oluulaa/
    gatsby develop
    ```

### 1.1 Git дүрэмүүд
Хамтран хөгжүүлэлт хийх явцад анхаарах дүрэмүүд
* Кодоо зөвхөн feature branch - д бич.
    
    Яагаад:_
    >Ингэснээр бүх код гол мөчирөөс тусдаанаа өөр мөчир дээр бичигдэх ба гол мөчир дээрх кодтой зөрчилдөөнгүйгээр pull request үүд хийх боломжтой болох юм. [Дэлгэрэнгүй судлах](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow)

* `develop` мөчирөөс салаалах    
    Яагаад:_
    >Ингэснээр, master мөчир дээрх код үргэлж амжилттай build хийгдэж байх нөхцөл бүрдэх ба master мөчир шууд сервэр (production) дээр ажиллаж болно.

* Битгий `develop` эсвэл `master` branch руу push хийгээрэй. Make a Pull Request.
    
    Яагаад:_
    > Ингэснээр тухайн feature - н кодыг peer-review хийх болон багийн гишүүд forum дээр feature - н тухай харилцан, зөвлөлдөх боломжыг олгоно.

* feature мөчир дээрх кодоо push хийж, pull request хийхээсээ өмнө локал develop мөчирөө шинэчлэсний дараа interactive rebase хийгээрэй

    Яагаад:_
    >  Rebase хийх нь мөчир (`master` or `develop`) рүү нийлэх ба локал commit-уудын түүхийг нийлж байгаа мөчирийн ард нь нийлүүлнэ. Ингэснээр цэгцтэй, цэвэрхан commit түүхүүд бүрдэх юм. [read more ...](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

* Pull Request хийхээсээ өмнө, rebase хийх үед ямар нэгэн кодны зөрчил байхгүй байх хэрэгтэй
* merge хийгдсэний дараа remote болон локал feature мөчирүүдээ устгаж болно.
    
    Яагаад:_
    > ашиглагдахгүй байгаа branch ууд замбараагүй байдал үүсгэхээс сэргийлнэ. It ensures you only ever merge the branch back into (`master` or `develop`) once. Feature branches should only exist while the work is still in progress.

* Pull Request хийхээсээ өмнө, чиний feature branch дээрх код амжилттай build хийгдэж байх ёстой ба бүх тестчиллийн кодыг (хэрэв байвал) pass хийж байх ёстой
    
    Яагаад:_
    > Чиний код асуудагүй ажилладаг мөчир лүү нийлэх гэж байгаа учир бүх код амжилттай ажиллаж байх ёстой. Мөн кодны форматчилал, амархан уншиж болох боломжыг бүрдүүлэхийг хичээгээрэй. 

* `master` branch хамгаалагдсан ба merge хийгдэхээс өмнө  pull request reviews шаардана
  

<a name="git-workflow"></a>
### 1.2 Git workflow
Хамтран ажиллах дүрэмүүд [Feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow) болон [Interactive Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing) болон  [Gitflow] ийн зарим аргууд (https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) (naming and having a develop branch). Гол алхамууд:

* Checkout a new feature/bug-fix branch.
    ```sh
    git checkout -b <branchname>
    ```
* Өөрчилөлт хийх.
    ```sh
    git add <file1> <file2> ...
    git commit
    ```
    _Tip:_
    > You could use `git add -p` instead, which will give you chance to review all of the introduced changes one by one, and decide whether to include them in the commit or not.

* Sync with remote to get changes you’ve missed.
    ```sh
    git checkout develop
    git pull
    ```
    
    Яагаад:_
    > Ингэснээр кодны зөрчилтөй локал аар засах боломжтой болно.
    
* feature мөчирөө develop мөчирийн хамгийн сүүлийн өөрчлөлтүүдтэй interactive rebase хийж шинэчлээрэй.
    ```sh
    git checkout <branchname>
    git rebase -i --autosquash develop
    ```
    
    Яагаад:_
    > You can use --autosquash to squash all your commits to a single commit. Nobody wants many commits for a single feature in develop branch. [Дэлгэрэнгүй судлах](https://robots.thoughtbot.com/autosquashing-git-commits)
    
* Кодны зөрчил байхгүй бол үүнийг алгасаарай. Зөрчил байгаа бол, [засаарай](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/)  тэгээд rebase хийхээ үргэлжлүүлээрэй.
    ```sh
    git add <file1> <file2> ...
    git rebase --continue
    ```
* Branch аа Push хийгээрэй. Rebase will change history, so you'll have to use `-f` to force changes into the remote branch. If someone else is working on your branch, use the less destructive `--force-with-lease`.
    ```sh
    git push -f
    ```
    
    Яагаад:_
    > When you do a rebase, you are changing the history on your feature branch. As a result, Git will reject normal `git push`. Instead, you'll need to use the -f or --force flag. [Дэлгэрэнгүй судлах](https://developer.atlassian.com/blog/2015/04/force-with-lease/)
    
    
* Pull Request хийгээрэй.
* Pull request review хийж байгаа хүнээр зөвшөөрөгдөж, нийлүүлэгдэж and хаагдана.
* Remove your local feature branch if you're done.

  ```sh
  git branch -d <branchname>
  ```
  to remove all branches which are no longer on remote
  ```sh
  git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
  ```

<a name="writing-good-commit-messages"></a>
### 1.3 Writing good commit messages

Having a good guideline for creating commits and sticking to it makes working with Git and collaborating with others a lot easier. Here are some rules of thumb ([source](https://chris.beams.io/posts/git-commit/#seven-rules)):

 * Separate the subject from the body with a newline between the two.

    Яагаад:_
    > Git is smart enough to distinguish the first line of your commit message as your summary. In fact, if you try git shortlog, instead of git log, you will see a long list of commit messages, consisting of the id of the commit, and the summary only.

 * Limit the subject line to 50 characters and Wrap the body at 72 characters.

    Яагаад_
    > Commits should be as fine-grained and focused as possible, it is not the place to be verbose. [Дэлгэрэнгүй судлах](https://medium.com/@preslavrachev/what-s-with-the-50-72-rule-8a906f61f09c)

 * Capitalize the subject line.
 * Do not end the subject line with a period.
 * Use [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood) in the subject line.

    Яагаад:_
    > Rather than writing messages that say what a committer has done. It's better to consider these messages as the instructions for what is going to be done after the commit is applied on the repository. [Дэлгэрэнгүй судлах](https://news.ycombinator.com/item?id=2079612)


 * Use the body to explain **what** and **why** as opposed to **how**.

 <a name="documentation"></a>

### 1.4 Built With
- React
- GatsbyJS
- Material Design
- BabelJS
- Netlify
- Webpack


### 1.5  Deploying / Publishing
master branch руу нийлсэн бүхэн сервэр лүү build хийгдэх болно

## 1.6 Style guide

Explain your code style and show how to check it.

## 1.7 Api Reference

Хэрэв external api хэрэглэсэн тохиолдолд энд тайлбар, хэрхэн authenticate хйих гэх мэт мэдээллүүдийг бичнэ үү

## 1.8 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.


## 1.9 🎓 Gatsby - г сурах

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 1.10 Licensing

Copyright © 2019 oluulaa.io
