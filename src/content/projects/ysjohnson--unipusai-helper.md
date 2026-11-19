---
repo: "YSJohnson/UnipusAI-Helper"
name: "UnipusAI-Helper"
description: "UnipusAI-Helper: U-Campus AI Edition course-completion tool"
originalDescription: "UnipusAI-Helper U校园AI版刷课工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/YSJohnson/UnipusAI-Helper"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 350
forks: 33
openIssues: 2
closedIssues: 42
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-02T03:45:16Z"
lastCommitAt: "2026-11-19T05:01:07Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 29
maintainers: ["YSJohnson", "NovaJuly", "laotierocket"]
openGraphImageUrl: "https://opengraph.githubassets.com/66fb2f4279bbe73398bd09f601c182f6bf72a0b52943b39b875ad24bb17c6ea6/YSJohnson/UnipusAI-Helper"
---

# UnipusAI-Helper

A course-completion tool for the U-Campus AI edition, built on Selenium, PySide6 / QML, and OpenAI-compatible APIs

---

## FAQ

> Answers to a few common questions 🤔

**Doesn't feel very easy to use**

U-Campus covers a lot of textbooks, and support for different courses and question types is still being improved. The project also has plenty of room to grow. If you run into problems, please report them in an issue, and if you're able, PRs are welcome.

**Why use Selenium browser automation instead of calling the API directly to report completion?**

Reporting progress directly is faster, but the platform may have detection mechanisms, and that approach carries higher risk, not only to your account but also legal risk. The project currently operates the page through Selenium and tries to follow the platform's original learning and answering workflow. It runs more slowly, but it keeps risk as low as possible.

By the way, models with fast reasoning give a better experience. Recommended: deepseek-flash

---
