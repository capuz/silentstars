---
repo: "starseaway/android-basic"
name: "android-basic"
description: "Android 基础模块，封装常用基类和工具类，快速搭建规范项目结构。"
url: "https://github.com/starseaway/android-basic"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-03-25T09:29:51Z"
lastCommitAt: "2026-07-03T06:23:41Z"
lastReleaseAt: "2026-07-02T07:56:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 73
undervaluedScore: 30
maintainers: ["starseaway"]
openGraphImageUrl: "https://opengraph.githubassets.com/47765101bccff680b58df60531e67c1adbf75f59473a1888ccc8d2f4517fc3b8/starseaway/android-basic"
---

# Android 项目基础库

</div>

## 一、模块简介

这是一个精简的 Android 基础模块库，不包含具体业务逻辑，主要对常用的基类、管理类、工具类以及开发能力做了一层统一封装。

目的就是帮你省去项目初始化时那些重复的搭建工作，让结构一开始就比较清晰、规范。直接在这个基础上扩展业务，也能更快进入开发状态。

---

## 特性

- 统一的 Activity / Fragment 等核心组件的基类体系
- 简单好用的 Fragment 多页面切换方案
- 可控的返回键事件分发机制
- 全局 Activity 栈管理
- 常用能力接口化（Action）
- 一些常用的 Kotlin 扩展函数，日常开发更轻松
- 内置一套实用的 RecyclerView 适配器，支持多布局 / 多类型

--- 

## 二、SDK 适用范围

## 二、SDK 适用范围

| 项目         | 要求                 |
|------------|--------------------|
| Min SDK    | 19（Android 4.4）及以上 |
| JVM Target | 1.8                |
| Kotlin     | 1.9+               |

--- 

## 三、集成方式

### 1. 根据 Gradle 版本或项目配置自行选择在合适的位置添加仓库地址
```groovy
maven {
    // jitpack仓库
    url 'https://jitpack.io' 
}
```

### 2. 在 `build.gradle` (Module 级) 中添加依赖：
```groovy
implementation 'com.github.starseaway:android-basic:1.8.7'
```

```kotlin
implementation("com.github.starseaway:android-basic:1.8.7")
```

### 3. 初始化模块
```kotlin
class AppApplication : Application() {
    
    override fun onCreate() {
        super.onCreate()
        // 初始化 AppContext
        AppContext.init(this)
        // 可选：初始化 Activity 栈管理
        ActivityManager.instance.init(this)
    }
}
```

---

## 四、核心能力说明…
