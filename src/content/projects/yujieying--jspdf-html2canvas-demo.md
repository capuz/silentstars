---
repo: "yujieying/jspdf_html2canvas_demo"
name: "jspdf_html2canvas_demo"
description: "Fix the issue where PDF content longer than one page gets truncated"
originalDescription: "解决 pdf超过一页被截断问题"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yujieying/jspdf_html2canvas_demo"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-10-11T01:56:18Z"
lastCommitAt: "2026-10-29T05:49:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 34
maintainers: ["yujieying"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c5871ad1f5c31a8c5803ed3ef27a95b7cb37dc8e798d4333b7dedf86aba2595/yujieying/jspdf_html2canvas_demo"
---

# demo
├── README.md
├── build.sh
├── close.bat
├── css
│   └── index.less
├── fis-conf.js
├── gulpfile.js
├── html
│   └── pdf.html
├── img
│   ├── cover.jpg
│   └── cover_mark.jpg
├── js
│   ├── html2canvas.js
│   ├── jspdf.js
│   ├── index.es
│   └── mock
│       └── pdf_mock.json
├── package.json
└── 服务.bat

About this page:
1. The page has quite a lot of business logic and a lot of redundant code that isn't used. I'll come back and clean it up when I have time.
2. The main purpose is to explain how to use the column-count property to solve the problem of content that exceeds one screen being truncated.
After the page finishes its first load, it starts calculating whether the page is too long. If it is, we use column-count layout to clone several copies, append them after the DOM, and shift them over.

Feedback, corrections, and additions are welcome. Thanks
