---
repo: "aaazha686-oss/ktown4u-fansign-tracker"
name: "ktown4u-fansign-tracker"
description: "Ktown4u 签售实时销量云端追踪 (GitHub Actions)"
readmeQualityOk: true
url: "https://github.com/aaazha686-oss/ktown4u-fansign-tracker"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [72, 28]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T01:52:18Z"
lastCommitAt: "2026-11-09T00:55:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5023fe81f9ae403a699bdd6ee00d04f7c3eee72715a3f1e7dbcc7e6434a4c367/aaazha686-oss/ktown4u-fansign-tracker"
---

# Ktown4u 云端自动抓取(GitHub Actions)

让 GitHub 在云端 24 小时自动抓 Ktown4u 签售销量,数据存进仓库。
你的电脑断网也没关系——有网时打开仓库就能看/下载全部历史。

## 文件结构(照原样放进仓库)
```
你的仓库/
├─ .github/workflows/track.yml   # 定时任务(每5分钟)
├─ ktown4u_ci.py                 # 抓取脚本
├─ track_config.json             # 配置:抓哪些活动
└─ data/                         # 自动生成:track_<活动号>.csv
```

## 一次性设置(约 5 分钟)

1. **建一个 GitHub 仓库**,选 **Public(公开)**。
   > 为什么公开:公开仓库的 Actions **免费不限量**;私有仓库每月只有 2000 分钟,跑不久。
   > 签售销量不是敏感数据,公开无妨。

2. **上传这三样**(保持上面的目录结构):`.github/workflows/track.yml`、`ktown4u_ci.py`、`track_config.json`。
   - 网页操作:仓库页 → Add file → Upload files,把 `cloud/` 文件夹里的内容拖进去即可
     (注意 `.github/workflows/track.yml` 这层目录别丢)。

3. 打开 **Actions** 标签页 → 如果提示,点 **“I understand my workflows, enable them”** 启用。

4. **填你要抓的活动号**:编辑 `track_config.json` 的 `events`,比如:
   ```json
   { "shopNo": 164, "interval": 10, "burstSeconds": 200, "events": [44469917, 44468447] }
   ```
   - 活动号哪来:用本地网页版 `ktown4u_app.py`「加载当前活动 / 搜索」拿到。
   - 提交保存后,下一轮就会开始抓这些活动。

完成!之后它**每 5 分钟自动跑一轮**,每轮内部每 10 秒密抓一次,数据不断追加到
`data/track_<活动号>.csv`(含 `time, member, sales, delta`)。

## 怎么看数据
- 仓库 **Code → data 文件夹** → 点开 CSV 直接看,或下载。
- 或 `git clone` / `git pull` 到本地,拿 CSV 喂给…
