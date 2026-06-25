---
repo: "anYuJia/better-douyin"
name: "better-douyin"
description: "rust版本请参考：https://github.com/anYuJia/better-douyin-R"
url: "https://github.com/anYuJia/better-douyin"
language: "TypeScript"
languages: ["TypeScript", "Python", "JavaScript"]
languagePcts: [41, 32, 26]
stars: 352
forks: 50
openIssues: 14
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2025-04-15T06:39:35Z"
lastCommitAt: "2026-06-25T06:40:47Z"
lastReleaseAt: "2026-05-06T03:19:09Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 81
undervaluedScore: 35
maintainers: ["anYuJia"]
openGraphImageUrl: "https://opengraph.githubassets.com/871837f1e71ab3692c29f8e079bc1988314859a064f25018514fac570e119c67/anYuJia/better-douyin"
---

# better-douyin

抖音内容下载、预览与本地归档工具。用 Python 构建，适合源码阅读、二次开发和桌面/浏览器两种运行方式。

<p>
</p>

<p>
</p>

[下载发行版](../../releases/latest) · [界面预览](#界面预览) · [快速开始](#快速开始) · [加入交流群](#加入交流群)

</div>

---

## 为什么选择它

- 支持用户搜索、主页作品、收藏、点赞、分享链接解析与批量下载
- 推荐流预览、沉浸式播放、一键下载，适合边看边归档
- 私信图片、本地媒体与聊天历史体验持续优化
- “我的下载”提供文件/作品两种视图，支持搜索、播放、定位和删除
- 自动识别已下载作品，减少重复保存
- Cookie、下载历史、配置与文件均保存在本机

> 日常桌面使用更推荐 Rust / Tauri 版：[better-douyin-R](https://github.com/anYuJia/better-douyin-R)。

## 界面预览

  <br>
  <strong>主界面</strong>
</p>

  <br>
  <strong>搜索用户</strong>
</p>

  <br>
  <strong>用户主页 / 批量下载</strong>
</p>

  <br>
  <strong>推荐视频流</strong>
</p>

  <br>
  <strong>沉浸式播放器</strong>
</p>

## 快速开始

从 [Releases](../../releases/latest) 下载对应平台文件，解压或安装后运行。

| 平台 | 推荐下载 |
|:---|:---|
| Windows | `.exe` 安装版或 `.zip` 便携版 |
| macOS | `.dmg` 或 `.app` |
| Linux | `.tar.gz` |

macOS 首次运行如提示无法验证开发者：

```bash
sudo xattr -rd com.apple.quarantine /path/to/better-douyin.app
```

源码运行：

```bash
git clone https://github.com/anYuJia/better-douyin.git
cd better-douyin

python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

pip install -r requirements.txt
cd frontend && npm install && npm run build && cd ..

python…
