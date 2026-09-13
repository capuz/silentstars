---
repo: "zuo-qirun/Lyrics-Companion"
name: "Lyrics-Companion"
description: "Android lyrics companion with overlay, secondary-display rendering, multi-source lyrics, and customizable layouts"
readmeQualityOk: true
url: "https://github.com/zuo-qirun/Lyrics-Companion"
language: "Java"
languages: ["Java"]
languagePcts: [93]
stars: 10
forks: 5
openIssues: 2
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-28T15:36:13Z"
lastCommitAt: "2026-09-13T08:28:34Z"
lastReleaseAt: "2026-07-29T15:10:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 62
maintainers: ["zuo-qirun"]
openGraphImageUrl: "https://opengraph.githubassets.com/86bd295268129dbb1fb86e6c56d3762c85a9167f4ee765a9c49d947696e2f289/zuo-qirun/Lyrics-Companion"
---

# Lyrics Companion（歌词伴侣）

一个采用 Material Design 3 的独立 Android 歌词显示应用。Android 5.0 以上读取系统标准 `MediaSession`，Android 4.4 使用系统 `RemoteController` 读取播放器发布的 `RemoteControlClient` 元数据，媒体接口没有有效曲目时再尝试解析播放器通知；随后按歌名、歌手和时长跨乐库匹配歌词，并同时支持：

- 主屏可拖动悬浮窗；双击可强制返回设置页，长按锁定并开启触摸穿透，点击圆形 × 按钮可恢复操作。
- 可选启用“点击图标启动悬浮窗”：首次点击只启动记忆的主屏或副屏悬浮窗，30 秒内再次点击进入主界面。
- 非默认 `Display` 上的副屏歌词悬浮层；可在有触摸能力的副屏上直接拖动。
- 播放器封面 Bitmap、`content://`、本地文件和网络封面 URI 的异步加载与缓存。
- YRC 逐字时间轴按完整 Unicode 字符阶梯点亮；普通 LRC 按整句切换，避免伪造匀速逐字效果。
- 歌曲匹配结果、歌词、翻译与逐字时间轴本地缓存；命中后跳过联网搜索和歌词请求。默认按 128 MB 容量淘汰，也可选永久保留或保留 30 天；已有显式保留设置继续生效。
- 可自动识别播放器词库，也可手动指定网易云、QQ、酷狗、酷我或汽水；手动词库无结果时可选择是否回退到播放器同源词库。
- 切换播放器或曲目时每 600ms 重新选择活跃会话，降低旧会话、旧歌词残留概率。
- 通知监听服务会记录系统媒体读取健康状态，并在主界面或悬浮窗服务启动时自动请求重连；短暂空会话保留当前歌词 5 秒，避免系统控制中心刷新时闪空。
- 歌词伴侣经典、Refined Now Playing、Apple Music-like Lyrics、紧凑单行、PiPWindow 和自定义布局六种悬浮窗风格。
- 可视化布局编辑器：在模拟渲染区拖动内容块，拖入备选区即可隐藏。
- 横屏宽度达到 600dp 时，主设置页与 Refined 设置自动切换为双列；布局编辑器同步切换为左右拖拽区域。
- AMap Companion 同款手感的副屏位置摇杆，以及窗口整体大小、字号、封面、背景和同步参数。
- 匿名实时在线人数与 App 内意见反馈；服务器未上线时自动降级，不影响歌词显示。

## 副屏原理

副屏路径与 `zuo-qirun/amap-companion` 的仪表屏投屏方式一致：

1. 用 `DisplayManager` 枚举系统中的非默认屏幕，并允许用户指定 Display ID。
2. 对目标屏调用 `createDisplayContext(display)`。
3. 从副屏上下文获取独立的 `WindowManager`。
4.…
