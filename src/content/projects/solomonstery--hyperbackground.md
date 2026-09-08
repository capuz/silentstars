---
repo: "Solomonstery/HyperBackground"
name: "HyperBackground"
description: "适用于Hyperos4的设置背景Hook实现"
readmeQualityOk: true
url: "https://github.com/Solomonstery/HyperBackground"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["hyperos", "lsposed", "lsposed-module", "xposed", "xposed-module"]
stars: 17
forks: 1
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-21T05:36:59Z"
lastCommitAt: "2026-09-08T08:15:51Z"
lastReleaseAt: "2026-08-23T11:46:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Solomonstery", "1812z"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee6747e1c403595bff376a36cab35c50da659e44b96a9ba1a9dec6955b95451f/Solomonstery/HyperBackground"
---

# HyperBackground

### 为 HyperOS 3/4 打造的系统背景与外观自定义模块

</div>

---

HyperBackground 是一个面向 HyperOS 的 LSPosed 背景与外观自定义模块，用于为系统设置及部分 HyperOS 系统应用提供统一、可配置的自定义背景体验。

> 当前最新发行版：**1.4.2**
>
> 包名：`com.ciallo.hyperbackground`
>
> 最低 Android 版本：**Android 13 / API 33**
>
> 当前开发基线：**HyperOS 4 / Android 17**
>
> 配置界面：**Kotlin + Jetpack Compose + Miuix KMP**
>
> Hook 框架：**LibXposed API 102**

## 功能

### 背景自定义

- 设置主页、我的设备、全局背景、通讯录与拨号四套独立背景通道，选图方式一致。
- 设置主页支持独立图片，不强制继承全局背景。
- “我的设备”支持图片、GIF、动态 WebP、MP4 和 WebM，并可恢复系统 RuntimeShader 动态背景。
- 各套背景均支持透明度、模糊开关和模糊强度。
- 全局背景覆盖 Settings 普通二级页面，并扩展到设备互联、电话设置、小米账号、主题壁纸、系统桌面、手机管家、省电管理及健康使用手机等已适配页面。
- MIUIX 二级页面支持透明顶栏与连续背景显示。
- 对移动网络 `MobileNetworkSettings` 使用独立的背景宿主处理，避免背景被 MIUIX 页面转场容器一同移动。
- 登录、授权、锁屏凭据、支付、拨号、紧急呼叫及浮动窗口保持系统原样。

### 通讯录与拨号

- 独立背景通道，通过 Hook `com.android.contacts` 注入，仅作用于拨号盘 / 联系人主界面，不影响详情、编辑等二级页面。
- 「拨号盘与列表」适配：清除联系人列表、字母分组吸顶头等不透明中性底透出背景，深浅色行为一致，半透明层与彩色控件保留。
- 拨号盘独立背景：可单独为拨号盘键盘区导入图片，与联系人整页背景叠加共存；支持等比缩放（1–200%）、纵向定位、四角圆角裁切，以及默认模式下键盘面板不透明度独立调节。
- 「通讯录颜色」独立深浅色控件，与全局强制深浅色独立并存。

### 自定义我的设备

- 「自定义我的设备」入口取代原「我的设备」通道，内含设备界面样式、动态背景与自定义 LOGO。
- 设备界面样式支持「系统默认 / 样式1（教程卡）/ 样式2（鸿蒙卡）」；样式1、样式2 可分别导入机型图片、背景图片、LOGO，并逐项调节缩放、偏移、模糊、行间距、对齐与文案等参数。
-…
