---
repo: "xingwangzhe/FriendLinks"
name: "FriendLinks"
description: "友链图谱，汇聚千丝万缕的关系~~"
url: "https://github.com/xingwangzhe/FriendLinks"
homepage: "https://links.needhelp.icu/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["blogs"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-12-04T11:54:00Z"
lastCommitAt: "2026-07-01T07:08:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["xingwangzhe"]
openGraphImageUrl: "https://opengraph.githubassets.com/4109f5a91668a4e65cb8e44a567094a4efbc98a29ded03c9d4f95041c652d463/xingwangzhe/FriendLinks"
---

# 友链图谱 — 3D 球状网络图

> 汇聚独立博客，构建友链图谱。每个节点是一个博客，每条连线是一段友链关系。

**法律合规说明：** 网站所有者和投稿者必须确保其发布内容及网站运营遵守中华人民共和国以及适用情况下的美利坚合众国法律法规。

**请确保：** 你的站点使用 `https` 并可以在中国大陆访问。

---

## 快速添加你的博客

在 `links/{你的域名}.yml` 中填写：

```yaml
site:
  name: 我的博客
  description: 分享编程和技术相关的文章
  url: https://example.com
  color: "#ff6600"       # 可选，自定义节点颜色（16 进制）
  links: /links          # 友链页面路由（必填）
  friends:
    - name: 编程小站
      url: https://codehub.example.com
```

提交 PR 即可。

> **友链页面路由**常见值：`/links`、`/link`、`/friends`、`/friend`、`/links.html` 等。

---

## 3D 网络图特性

- **3D 球状布局**：节点围绕球体分布，鼠标拖拽旋转、滚轮缩放
- **自适应主题**：自动跟随系统明暗模式，也可手动切换
- **搜索**：模糊搜索站点名或域名
- **聚焦**：右键节点 → 相机拉近、放大高亮、金色粗管荧光连线
- **悬停**：显示站点名称、描述、链接，白色荧光连线
- **连线透明度**：可调滑块控制基础线网透明度
- **自定义颜色**：YAML 中指定 `color: "#ff6600"` 即可覆盖默认调色板

### 交互方式

| 操作 | 效果 |
|------|------|
| 左键点击节点 | 在新标签页打开网站 |
| 右键点击节点 | 聚焦该节点（相机拉近、金色粗管荧光连线） |
| 悬停节点 | 显示信息浮层 + 白色荧光连线 |
| 拖拽 | 旋转 3D 视角 |
| 滚轮 | 缩放 |
| 顶部搜索框 | 模糊搜索 |
| 「连线设置」按钮 | 调整基础线网透明度（默认全透明） |
| URL `?local=域名` | 自动聚焦指定节点 |

---

## 数据格式

### 图数据端点

| 端点 | 格式 | 说明 |
|------|------|------|
| `/graph.bin` | msgpack 二进制 | 客户端加载，紧凑高效 |
| `/all.json` | JSON | 完整站点数据（外部使用） |

### YAML → 图数据流程

```
links/*.yml  →…
