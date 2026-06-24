---
repo: "yuui226/ClickFX"
name: "ClickFX"
description: "一个轻量级 Windows 桌面工具，为鼠标点击提供全局视觉反馈动画"
url: "https://github.com/yuui226/ClickFX"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-04T13:11:34Z"
lastCommitAt: "2026-06-24T06:39:49Z"
lastReleaseAt: "2026-06-08T15:02:31Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 79
undervaluedScore: 52
maintainers: ["yuui226"]
openGraphImageUrl: "https://opengraph.githubassets.com/77d2eaac31e7036f96db526700c4c7a79a86117d3626528d4f33f3806d864bd2/yuui226/ClickFX"
---

# ClickFX

> 🖱️ 让你的鼠标点击自带特效！

每次点鼠标的时候，会冒出好玩好看的动画效果，无聊点点比较解压，也可用于录屏、直播、做演示的时候。

**双击就能用，不用安装，一个文件搞定。**

---

## 📥 下载 & 使用

1. 下载 [ClickFX.exe](https://github.com/yuui226/ClickFX/releases/latest/download/ClickFX.exe)
2. 双击打开
3. 点鼠标，看特效！就这么简单 ✨

> 需要 Windows 10 / 11，其他什么都不用装。

---

## 🎨 10 种内置效果

| 效果 | 画面 |
|------|------|
| **线条爆发** | 几根线条从点击处弹出，带发光尾巴 |
| **水波纹** | 像水面的涟漪一样扩散开 |
| **火花** | 像火星一样四散飞溅 |
| **星光** | 闪亮的小星星四散飘开 |
| **花瓣** | 花瓣形状的粒子旋转飘散 |
| **漩涡** | 粒子螺旋旋转，带拖尾效果 |
| **碎片** | 不规则碎片受重力抛散，像玻璃碎裂 |
| **流星** | 弧线拖尾飞入，命中后爆发粒子 |
| **闪电** | 分形锯齿闪电从远端劈下，带分支和闪烁 |
| **手指** | emoji 手指从远处弹性飞入，指尖指向点击处 |

---

## ⚙️ 设置

**怎么打开设置？**

右键点击屏幕右下角的 ClickFX 图标 → 点「设置」

**能改什么？**

- **左键效果** — 选左键点击用哪种动画
- **右键效果** — 选右键点击用哪种动画
- **效果大小** — 调节动画的缩放比例
- **颜色** — 左键和右键可以设不同颜色，支持手动输入色值或用取色器选

---

## 🤔 你可能想知道

**会影响我正常用鼠标吗？**
不会，特效只是纯粹的视觉效果，完全不影响你的点击操作。

**会占很多资源吗？**
几乎不占。没在点击的时候就是零开销，点了才会画几帧动画，用完就停。

**会出现在任务栏吗？**
不会，只在右下角托盘区有个小图标。

**怎么退出？**
右键点右下角的 ClickFX 图标 → 退出。

**设置保存在哪？**
`C:\Users\你的用户名\AppData\Roaming\ClickFX\config.json`，删掉这个文件就恢复默认设置。

---

## 🔧 从源码构建

只需运行 `build.bat`，它会自动编译并打包成单个 `ClickFX.exe`：

```
build.bat
```

需要 .NET Framework 4.8（Windows 10 / 11 自带），无需安装 Visual Studio…
