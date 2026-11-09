---
repo: "Aioprh/mtforum-app"
name: "mtforum-app"
description: "MT论坛 Flutter 原生客户端（Discuz mobile 解析）"
readmeQualityOk: true
url: "https://github.com/Aioprh/mtforum-app"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
stars: 12
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-25T19:28:02Z"
lastCommitAt: "2026-11-09T11:58:47Z"
lastReleaseAt: "2026-11-03T07:32:26Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["github-actions[bot]", "Aioprh"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfc7770ccb43ab5ff10db98ef44ab4fdb70a0610951750394143092eadbb64d8/Aioprh/mtforum-app"
---

# MT论坛 客户端

MT论坛（bbs.binmt.cc）的 Flutter 原生客户端。基于 Discuz 移动端页面解析，不使用 WebView 套壳。

## 功能

- 首页信息流：最新 / 回复 / 热门 / 精华，官方公告
- 版块分类与版块主题列表
- 帖子详情：原生富文本渲染、楼层分页、图片查看、回复、收藏、分享
- 消息提醒：我的帖子 / 坛友互动 / 系统提醒 / 应用提醒，提醒直达帖子、用户或私信
- 登录、搜索、发帖
- 我的：资料、我的主题 / 回复 / 收藏、我的关注 / 我的粉丝、主题切换、关于
- Cookie 本地持久化；纯 Dart 实现站点 `acw_sc__v2` 安全校验

## 目录结构

```
lib/
  core/       配置、HTTP 会话、WAF 求解、主题
  data/       模型与 Discuz 页面解析
  state/      全局状态
  ui/pages/   页面
  ui/widgets/ 通用组件与帖子 HTML 渲染
```

## 本地构建

```bash
flutter pub get
flutter build apk --release              # 通用包
flutter build apk --release --target-platform android-arm64  # arm64 单架构
```

产物位于 `build/app/outputs/flutter-apk/`。

## 云端构建

推送到 `main`、推 `v*` 标签或手动触发 `Build APK` workflow，都会构建 APK，产物有两条出口：

1. Actions 运行页的 Artifacts（需登录，保留 90 天）；
2. GitHub Releases（公开下载，长期保留）。

`main` 上的构建会先把 `pubspec.yaml` 的 patch 号 +1，Release 的 tag 就用这个版本号
（如 `v2.2.6`）；推 `v*` 标签时则用标签名本身。同一版本重复构建只更新同一个 Release
的附件，不会堆出一串同名版本。

```bash
git tag v2.2.6
git push origin v2.2.6
```

## 签名与 fork

APK 的签名证书决定了能不能覆盖安装。本仓库的 CI 按下面的顺序取签名：

1. 仓库 Secret 里的 `ANDROID_KEYSTORE_BASE64`（正式发布用，长期固定）；
2. 没有 Secret 时，用 Actions 缓存里的备用签名 `mtforum-fallback-keystore-v1`；
3.…
