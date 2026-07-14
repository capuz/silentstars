---
repo: "kakaxi-1/zubo"
name: "zubo"
description: "适用于GitHub actions的轻量级脚本，定时获取组播源、酒店源(附升级docker版)"
readmeQualityOk: true
url: "https://github.com/kakaxi-1/zubo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 53
forks: 64
openIssues: 6
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-10-06T14:17:38Z"
lastCommitAt: "2026-07-14T05:54:18Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 67
undervaluedScore: 43
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/faa36b381514b0e20c1709e24471132b029010f8a94a7491378e1bc7f531d173/kakaxi-1/zubo"
---

# （本仓库为轻量级：适用于github actions）定时抓取 组播源  酒店源

## ⚠️ 备注
**新增频道或新增地方频道或其他**  
1. 组播源确保rtp/省份运营商.txt有需要的频道，没有则新增。
2. 脚本里频道分类CHANNEL_CATEGORIES里添加新增频道名，如果有需要在频道名称映射CHANNEL_MAPPING里做映射更改。
3. WV公众号：卡卡西的电视房

---

## 组播Docker版（解决断流）
1.拉取镜像 `docker pull kakaxi088/zubo` 默认拉取最新版

2.启动容器 `docker run -d --name zubo -p 5020:5020 kakaxi088/zubo:latest` 5020端口被占用可设置其他端口（port）

3.容器第一次启动运行抓取需要5分钟左右，输入 `docker logs -f zubo` 查看抓取状态

4.通过可视面板`http://载具ip:port`增减频道，添加映射

5.等待抓取完成后 `http://载具ip:port/zubo.txt` 订阅。

---

## 酒店源Docker版
1.拉取镜像 `docker pull kakaxi088/kakaxi` 默认拉取最新版

2.启动容器 `docker run -d --name kakaxi -p 5000:5000 kakaxi088/kakaxi:latest` 5000端口被占用可设置其他端口（port）

3.容器第一次启动运行抓取需要30-60分钟，输入 `docker logs -f kakaxi` 查看抓取状态

4.通过可视面板`http://载具ip:port`增减频道，添加映射

5.等待抓取完成后 `http://载具ip:port/list.txt` 订阅。

---

## 📔 更新日志
**增加组播源docker版(解决组播断流)**

v3.3.0增强优化

V3.2.0优化切换频道提速，增加手动更新按钮以及面板登录密码

v3.1.0修复播放器兼容性问题等系列bug

v3.0.1解决组播断流

**增加酒店源docker版本**

v1.5.2修复bug

v1.5.1空壳版，纯面板操作，优化频道检测，提示播放体验

v1.4.6新增增减频道功能，通过可视面板（http://载具ip:port）增减频道，添加映射

v1.4.5稳健版

**25-12-7新增定时抓取酒店源**

**25-11-24更新第一、二、三阶段**
1. 删除73次清空ip目录，ip归属地运营商判断规则。
2. 解决rtp/udp合并问题。
3. 改为每10次触发第二第三阶段生成iptv的同时覆盖可用ip到对应ip目录。
4. 新增fofa抓域名筛选有效并保存…
