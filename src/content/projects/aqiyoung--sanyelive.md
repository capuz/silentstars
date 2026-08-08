---
repo: "aqiyoung/sanyelive"
name: "sanyelive"
description: "🎬 视界 · 直播+影视综合平台 · Flutter · 极简新中式设计 · 家用电视/盒子/手机场景 · IPTV直播 + TVBox点播"
readmeQualityOk: true
url: "https://github.com/aqiyoung/sanyelive"
language: "Dart"
languages: ["Dart"]
languagePcts: [89]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-15T15:47:25Z"
lastCommitAt: "2026-08-08T04:33:48Z"
lastReleaseAt: "2026-06-18T02:15:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/48dc21a569d36be03f50dfe8a0cefa512a00857d873d33c7afe41cb08dd8ed4b/aqiyoung/sanyelive"
---

# 视界 (Shijie)

> 个人使用 / 学习项目 — Flutter 直播 + 影视综合平台

极简新中式直播 + 影视综合平台 — Flutter 全平台 — 个人自用 + Flutter / Dart 学习用途。

## ⚠️ 使用须知

- **个人学习项目**，不公开发布、不提供下载分发
- **数据源来自第三方公开接口**，版权归原版权方所有
- 仅供学习 Flutter / Riverpod / media_kit 使用
- 不存储任何流媒体内容，所有内容均实时从第三方源获取

## 技术栈

- Flutter 3.29 (Dart 3.7)
- Riverpod 2 / go_router 14
- media_kit (libmpv 后端)

## 数据来源

- [iptv-org/iptv](https://github.com/iptv-org/iptv) — M3U 频道列表
- [iptv-org/database](https://github.com/iptv-org/database) — 频道元数据
- 第三方公开 IPTV 平台源（健康度评分后动态选源）

## 本地开发

```bash
flutter pub get
flutter run        # 调试模式
flutter test       # 单元测试
flutter analyze    # 静态检查
```

## 构建发布

⚠️ **本项目不在本地构建 APK** — 改代码后 push 到 GitHub，CI 自动 build + release：

```bash
git add -A
git commit -m "fix: ..."
git push origin main
# CI 自动: flutter analyze + test + APK build + GitHub Release
```

## License

仅供学习参考，不提供任何形式的授权或担保。

<sub>Built by threely (Young) — 个人项目 — 不公开分发</sub>
