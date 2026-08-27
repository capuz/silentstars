---
repo: "Mrmiaomrzh/BetterHeybox"
name: "BetterHeybox"
description: "Add more features to Heybox"
readmeQualityOk: true
url: "https://github.com/Mrmiaomrzh/BetterHeybox"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["lsposed", "lsposed-module", "xposed", "xposed-module"]
stars: 22
forks: 2
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-14T18:29:19Z"
lastCommitAt: "2026-08-27T14:32:06Z"
lastReleaseAt: "2026-08-26T07:54:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 35
maintainers: ["Mrmiaomrzh", "258a"]
openGraphImageUrl: "https://opengraph.githubassets.com/e764895a584e8b1cc9abd1e9ec24662a871e6b59c0bfe444e09fa89ac96cb501/Mrmiaomrzh/BetterHeybox"
---

# BetterHeybox

增强小黑盒（Heybox）的 LSPosed 模块。

# 免责声明
本应用与清枫（北京）科技有限公司无关，仅学习研究小黑盒APP部分原理，请在下载后24h内删除

> [!Note]
>本应用兼容 [小黑盒 1.3.393](https://github.com/Mrmiaomrzh/BetterHeybox/releases/download/v0.2.0/heybox_1.3.393.apk) 及以上版本，其他版本出现的问题不会进行处理

> [!WARNING]
> 使用免Root框架`「NPatch」`时，需要把`破解签名校验`改成`Extreme`，不然会有缺少参数闪退的问题

## 功能

所有功能开关均可在小黑盒「我的 → 设置 → 通用设置」中的 `BetterHeybox 设置` 入口直接打开模块面板，
开关配置存放在**小黑盒应用目录**
（`/data/data/com.max.xiaoheihe/shared_prefs/betterheybox.xml`），

### 广告过滤

| 类型 |
|------|
| 屏蔽开屏广告 |
| 屏蔽信息流广告 |
| 屏蔽气泡广告 |
| 屏蔽角标广告 |
| 屏蔽推广贴 |

### 界面增强

- **底部导航栏优化**（需重启小黑盒生效）：隐藏底栏tab项

### 帖子增强

- **解除复制**：Hook 小黑盒自定义 `TextSelectHandler` 的长按拦截，
  恢复安卓系统标准文本选择
- **拖动跨行选择修复**：文本选择激活时放行滚动容器的触摸拦截，选择手柄可跨行拖动
- **图片系统分享**：图片查看器中长按图片，在原有分享面板追加「系统分享」动作，
  下载当前图片后**优先保存到系统相册**（可被相册真正查看、可被任意 App 分享），
  自动识别 jpg/png/gif/webp/bmp 真实格式并修正 MIME；可通过「系统分享图片」开关关闭

### 每日任务

- **自动完成每日分享任务**：自动完成小黑盒每日任务的 **3 种分享任务**
  - 任务一：**分享任意帖子**（配置帖子链接）
  - 任务二：**分享游戏详情**（配置游戏详情链接）
  - 任务三：**分享游戏评价**（配置游戏评价链接）
- **3 个独立链接设置**：帖子链接 / 游戏详情链接 / 游戏评价链接，各自独立配置；
  未配置的任务自动跳过；每日状态按日期记录，跨天重置
- **分享渠道可配置**：内嵌面板/独立设置页「分享渠道」可选 **QQ / QQ空间**、**微信 / 朋友圈** 或 **微博**，
  自动分享按所选渠道在分享面板点击对应按钮并伪造成功回调（默认 QQ；抖音因无分享成功回调暂不支持）
-…
