---
repo: "richardwrq/KRouter"
name: "KRouter"
description: "使用Kotlin打造的android路由框架"
readmeQualityOk: true
url: "https://github.com/richardwrq/KRouter"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [83]
stars: 94
forks: 18
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2018-02-07T11:26:46Z"
lastCommitAt: "2026-08-13T05:11:14Z"
lastReleaseAt: "2026-08-12T03:27:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8f33659ec520b11d2e2eef41fa1d5e60c33086f0bbbb2b48066934ff83d6c322/richardwrq/KRouter"
---

# KRouter

**简体中文** | [English](https://github.com/richardwrq/KRouter/blob/HEAD/README_EN.md)

KRouter 是一个面向 Android 的注解驱动路由框架，支持 Activity、Service、Fragment、拦截器、Provider 和字段注入，也支持 Java/Kotlin 混合工程。

> **Revival beta:** 当前维护线为 `0.2.0-beta.1`。源码已迁移到现代 Android/Gradle 工具链，但 API 与二进制兼容性尚未稳定，也没有可供生产使用的稳定 Maven 制品。若提供 GitHub prerelease 附件，它们仅用于源码评估和兼容性测试；历史 Bintray/JCenter 下载方式已经失效，请勿继续使用旧坐标。

## 当前能力

- 通过 `@Route` 注册 Activity、Service 和 Fragment 路由。
- 使用路径、参数、Intent flags 和 Service 连接选项发起路由请求。
- 通过 `@Interceptor` 按优先级执行路由拦截。
- 通过 `@Provider` 注册服务，并使用 `@Inject` 注入参数或服务。
- 通过 `SerializationProvider` 扩展自定义对象序列化。
- 编译期生成路由、Provider、拦截器和注入器代码。
- 支持 Java/Kotlin 混合模块和 MultiDex 应用。

外部 Intent/深链入口属于安全敏感边界。`KRouter.init(context)` 默认拒绝所有外部深链；应用只有传入显式 allowlist 后才会开放精确的 URI 和 Activity 路由映射。

## 从源码构建

需要：

- JDK 17
- Android SDK Platform 35
- 仓库自带的 Gradle Wrapper（无需单独安装 Gradle）

```bash
git clone https://github.com/richardwrq/KRouter.git
cd KRouter
./gradlew --no-daemon clean check assembleDebug lint
```

示例 APK 生成在 `app/build/outputs/apk/debug/`。CI 使用同一套 JDK 17、测试、组装和 lint 检查。

## 源码评估与集成状态

仓库内的示例模块直接依赖本仓库中的源码模块：

```groovy
plugins {
    id 'com.android.application'
    id…
