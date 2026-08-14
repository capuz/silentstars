---
repo: "44886/Exeify"
name: "Exeify"
description: "一个轻量级把HTML静态文件（含SPA项目build的产物）打包成exe可执行文件的项目，打包机无需安装cli脚手架，也无需安装rust、tauri等框架。"
readmeQualityOk: true
url: "https://github.com/44886/Exeify"
homepage: "https://www.bukenghezi.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [69]
topics: ["html5", "rust", "tauri"]
stars: 72
forks: 13
openIssues: 8
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-08-10T03:15:10Z"
lastCommitAt: "2026-08-14T05:13:32Z"
lastReleaseAt: "2026-08-14T05:09:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 26
maintainers: ["44886"]
openGraphImageUrl: "https://opengraph.githubassets.com/655827f6435840ab68502dd943a886e5f0b5fb17578328b4ed58a5da0121b239/44886/Exeify"
---

# Exeify

**把网址或本地网页项目，一键打包成可运行的 Windows exe**

零工具链 · 秒级出包 · 产物仅约 1 MB · 支持 Vite / Vue / React 等框架

<p>
</p>

给小白用的图形界面工具：选一个在线网址、或一个本地网页文件夹，点一下就得到一个双击即开的 `.exe`。
生成的程序使用 Windows 自带的 WebView2 显示，终端用户无需安装任何东西。

</div>

## 特点

- **极致轻量**：打包器和产物都只有约 1 MB（对比 Electron ~100 MB、Pake ~10 MB）。
- **秒级出包**：不编译、不联网。选好点一下，一秒钟生成 exe。
- **零工具链**：使用者不用装 Rust / Node；产物在别人电脑上也只依赖系统自带的 WebView2（Win10/11 通常已内置）。
- **双模式**：**在线网址** 和 **本地网页目录** 都支持，本地项目完全离线自包含。
- **自动识别入口**：选好本地目录，自动扫描出网页入口（优先 `index.html`），多个可下拉切换，不用手打路径。
- **自定义图标**：可给产物 exe 换成自己的 `.png` / `.ico`（自动转换、生成多分辨率），支持索引色等各类 PNG。
- **图形界面**：现代极简白，专为不懂命令行的人设计。

## 使用方法（图形界面）

1. 下载并运行 `exeify.exe`。
2. 选择模式：
   - **本地网页目录** —— 选一个包含网页的文件夹；**入口文件会自动识别**（多个时可下拉切换）。
   - **在线网址** —— 填一个 `https://` 开头的网址。
3. 填窗口标题、宽高，勾选是否允许调整窗口大小。
4. *(可选)* 选一个 `.png` / `.ico` 作为产物的**程序图标**（不选则用默认图标）。
5. 选择输出位置（`xxx.exe`），点 **开始打包**。
6. 双击生成的 exe 即可运行。

> 点击右上角「关于」可查看作者信息与公众号。

## 相对 Pake 的差异

| | Pake | **Exeify** |
|---|---|---|
| 打包时要装的东西 | Node.js + Rust + Tauri 工具链 | **无，下载即用** |
| 打包耗时 | 分钟级（真的在编译） | **秒级（不编译，直接生成）** |
| 本地目录 | 支持，但要走完整编译 | **一等公民，秒出** |
| 面向人群 | 开发者 / 命令行 | **小白 / 图形界面** |

> Pake 很棒，主打把在线网址做成精致桌面 App；Exeify 主打 **零门槛、秒出包、本地与网址双支持**。

##…
