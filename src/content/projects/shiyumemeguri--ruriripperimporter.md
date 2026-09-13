---
repo: "ShiyumeMeguri/RuriRipperImporter"
name: "RuriRipperImporter"
description: "😇嫁読幾何動域絵描"
readmeQualityOk: true
url: "https://github.com/ShiyumeMeguri/RuriRipperImporter"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 42
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-25T03:51:46Z"
lastCommitAt: "2026-09-13T08:29:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 29
maintainers: ["ShiyumeMeguri"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7a8b48db5e8c7c096b020c388d40dd9758d0d9338f66a32f51663394ae4760d/ShiyumeMeguri/RuriRipperImporter"
---

# RuriRipperImporter

> # 🟦🟧 一个目录,同时是 Blender 插件和 Substance Painter 插件
>
> **装的是同一份代码。** Blender 从 `scripts/addons` 加载它,Substance Painter 从
> `python/plugins` 加载**同一个目录**(做一个目录联接就行,见下)。
>
> 面板长得一样、按钮一样、流程一样 —— 在哪边点,做的都是同一件事,区别只在最后落成什么:
>
> | 你按下 Load Model 之后 | 得到 |
> |---|---|
> | **Blender** | 骨架 + 蒙皮网格 + 材质 + 形态键 + 动画,一整套在场景里 |
> | **Substance Painter** | 一个工程,模型已经在里面,**每个材质一个 Texture Set,并且接好了这个游戏的着色器** |
>
> 不用装两个插件、不用记两套操作,也不用先倒进 Blender 再手动搬去 Painter。

**指着游戏安装目录,把里面的角色和场景直接搬进你手上这个软件。**
不导 FBX,不转格式,不用先开 Unity。

基于 Blender **5.1**(4.2+ 可用)和 Substance Painter **12** 验证。

---

## 装它

### 两边都要的一步

工具 DLL 从 https://github.com/FractalTools/Ruri.RipperHook/actions 下载构建产物,解压到
任意目录 —— 面板里那个 **Bin Dir** 填的就是它。做一次,两个软件共用。

### Blender

**编辑 ▸ 偏好设置 ▸ 插件 ▸ 安装…** → 选 `RuriRipperImporter` 文件夹或 zip → 勾选启用。

面板在 **3D 视图 ▸ 按 N ▸ 侧栏的 `RuriRipper` 页签**。

> **OneDrive 注意**:`%APPDATA%\Blender` 被 OneDrive 同步的话,Blender 的「从磁盘安装」
> 可能静默解压失败。要么先暂停 OneDrive,要么设环境变量
> `BLENDER_USER_SCRIPTS=D:\某个不同步的路径`,把文件夹丢进它的 `addons\` 里。

### Substance Painter

**不要复制一份**,做个目录联接指到 Blender 那份(管理员 CMD 里跑一次):

```bash
mklink /J "%USERPROFILE%\Documents\Adobe\Adobe Substance 3D…
