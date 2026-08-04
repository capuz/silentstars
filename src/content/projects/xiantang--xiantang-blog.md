---
repo: "xiantang/xiantang-blog"
name: "xiantang-blog"
description: "blog"
readmeQualityOk: true
url: "https://github.com/xiantang/xiantang-blog"
language: "HTML"
languages: ["HTML", "Shell"]
languagePcts: [58, 24]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-12-21T17:04:58Z"
lastCommitAt: "2026-08-04T06:13:01Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 79
maintainers: ["xiantang", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/969845bc7786186e69682e1d7ccb6b19c3927234019e92f38785c48a18caaca0/xiantang/xiantang-blog"
---

# xiantang.github.io

blog
<https://vim0.com/>
主要是一些对于平时工作的总结与分享，输出知识是学习的最好手段。

* bash cardimg.sh (filename without extension)
* bash sync.sh  (commit and push to github)

## 本地开发

主题通过 git submodule 引入，首次 clone 后需要拉取，否则页面会是空白：

```bash
git submodule update --init --recursive
```

然后 `docker compose up`，访问 <http://localhost:1313>。

## 图片 
需要保证所有图片都在 `content/image` 目录下面，添加 image checker
引用方式 

``

- [ ] todo 迁移所有图片到 content/image 目录下面，使用脚本迁移
- [x] todo pipeline 上配上图片检查
