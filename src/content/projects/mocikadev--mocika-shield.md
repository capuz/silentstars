---
repo: "mocikadev/mocika-shield"
name: "mocika-shield"
description: "Android APK 加固工具（DEX 加密 + 壳保护 + 反调试） · Android APK hardening — DEX encryption, stub loader & anti-debug"
readmeQualityOk: true
url: "https://github.com/mocikadev/mocika-shield"
homepage: "https://github.com/mocikadev/mocika-shield/releases/latest"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [45, 33]
topics: ["android", "android-security", "apk", "apk-protection", "dex-encryption", "leptos", "rust", "security", "tauri"]
stars: 13
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-04-16T10:53:04Z"
lastCommitAt: "2026-07-10T07:01:32Z"
lastReleaseAt: "2026-07-09T12:03:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 36
maintainers: ["suoxuechao"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c9429ad245649030b00085976e742506de8e7db4f18a9c14650973ad915092e/mocikadev/mocika-shield"
---

# Mocika Shield — Android APK 加固工具

对 Android APK 的 DEX 文件进行压缩加密，并在运行时通过壳程序动态解密加载，防止静态反编译与重打包攻击。

提供两种使用方式：**桌面 GUI**（推荐）和 **命令行**。当前 Rust 部分已整理为统一 workspace：`shield-core` 提供共享核心能力，`apps/shield-cli` 与 `apps/shield-gui` 分别作为命令行与桌面入口。

> 本项目仅用于保护你拥有合法权利的 Android 应用。请勿用于绕过第三方应用保护、规避平台安全机制或其他未授权场景。

---

## 功能特性

- **DEX 加密保护**：Zstd 压缩 + ChaCha20-Poly1305 认证加密（AEAD），密钥通过 HKDF-SHA256 派生，签名指纹绑定密钥派生，防逆向重用
- **签名校验**：证书指纹写入 DEXB v5 头部并参与密钥派生，运行时 timing-safe 比对，重打包后解密必然失败
- **运行时反调试**：Rust native 层检测 ptrace 附加（TracerPid）、Frida maps 特征、Frida GLib 线程名，检测到立即中止
- **低特征**：加密数据追加到 `classes.dex` 末尾（DEX `file_size` 边界外），apktool / jadx 完全不可见，无 `assets/app.bin`；壳类名、JNI 符号、日志字符串均经过混淆，静态分析难以定位入口
- **GUI 签名工具**：内置 APK 签名标签页，支持拖拽、自动清理 `.idsig`，无需额外工具
- **内置 APK 对齐**：加固输出与 GUI 签名链路会自动执行 4 KB / 16 KB ZIP 对齐，无需额外运行 `zipalign`
- **完全离线**：加固、签名和校验均在本地完成，不上传 APK 或密钥库
- **版本更新提示**：启动时自动检查 GitHub Releases，有新版本时分级提示（patch/minor 横幅、major 弹窗）
- **多架构支持**：arm64-v8a / armeabi-v7a / x86 / x86_64
- **中英双语界面**：GUI 跟随系统语言，可手动切换

---

## 快速开始

### 方式一：桌面 GUI（推荐）

从 [Releases](https://github.com/mocikadev/mocika-shield/releases/latest) 下载对应平台的安装包：

| 平台 | 安装包 | 实现 |
|------|--------|------|
| Linux |…
