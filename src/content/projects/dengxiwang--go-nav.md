---
repo: "dengxiwang/go-nav"
name: "go-nav"
description: "一个简洁高效的个人/团队导航站，基于 Next.js 16、React 19、HeroUI v3 和 Tailwind CSS v4 构建。项目使用 JSON 配置驱动内容和布局，支持前台导航、后台管理、图片上传、备份还原和 Docker 部署."
readmeQualityOk: true
url: "https://github.com/dengxiwang/go-nav"
homepage: "https://nav.gotab.cn"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["go", "gotab", "homepage", "nav", "newtab", "nextjs"]
stars: 31
forks: 14
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-13T09:36:49Z"
lastCommitAt: "2026-07-25T06:01:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 43
maintainers: ["dengxiwang", "ddapan"]
openGraphImageUrl: "https://opengraph.githubassets.com/c27118e1173b522609cfa35677d1a27b1cdf8ce06501983b087ee33c126d91a6/dengxiwang/go-nav"
---

# Go Nav

一个配置驱动的个人 / 团队导航站，基于 Next.js 16、React 19、HeroUI v3 和 Tailwind CSS v4 构建。

Go Nav 既可以作为带登录后台的 Node.js 应用运行，也可以打包成不依赖 Node.js 的静态网站。推荐使用新的 **HTML 运行时配置模式**：开发者只需构建一次，使用者下载 `web/` 后直接修改 `nav.json`、`website.json`，不必再次安装依赖或执行构建。

</div>

## 交流与支持

- QQ 群：727809499
- [加入 Go Nav QQ 交流群](https://qm.qq.com/cgi-bin/qm/qr?k=6N9Y0wlXF5txRjJcBqSYByj0fDsNwjIs&authKey=ziF+0yZBKLQB8GFFDJEHTXMaz35chgIPb88v98Vwdytvym5UlNMWOBOEwMAEHlMj&noverify=0)
- [🔥 雨云服务器，高性价比，简洁易用的面板，值得您的信赖](https://www.rainyun.com/gotab_)

## 在线体验

- 官网：[https://www.gotab.cn](https://www.gotab.cn)
- 项目预览：[https://nav.gotab.cn](https://nav.gotab.cn)
- GitHub：[https://github.com/dengxiwang/go-nav](https://github.com/dengxiwang/go-nav)

## 功能特性

- JSON / YAML 配置驱动，无需数据库
- 多级分类、网址管理、站内搜索和外部搜索引擎
- 响应式布局、明暗主题、最近访问和移动端导航
- 网站信息、页脚、布局、广告、搜索引擎和自定义插件配置
- Server 模式支持登录、图片上传、投稿审核、备份还原和远端同步
- HTML 模式内置免登录可视化编辑页，支持导入和导出配置 ZIP
- 支持 Node.js、Docker、纯静态托管等多种部署方式

## 三种部署模式

| 模式                 | 构建命令            | 产物                | 服务器需要 Node.js | 配置修改后需重新构建 | `/admin/`                             |
| -------------------- | ------------------- | ------------------- | ------------------ | -------------------- |…
