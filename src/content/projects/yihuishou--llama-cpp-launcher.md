---
repo: "yihuishou/llama.cpp-launcher"
name: "llama.cpp-launcher"
description: "A lightweight llama.cpp launcher with GUI"
readmeQualityOk: true
url: "https://github.com/yihuishou/llama.cpp-launcher"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 50
forks: 7
openIssues: 5
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-28T05:07:52Z"
lastCommitAt: "2026-08-29T10:21:24Z"
lastReleaseAt: "2026-06-12T13:48:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 41
maintainers: ["yihuishou", "ayiux"]
openGraphImageUrl: "https://opengraph.githubassets.com/97f2a3374685bb22ab60af10b7574ec612aa65dff8b58c2d85e7670e082245cc/yihuishou/llama.cpp-launcher"
discussionCount: 1
---

# llama.cpp-launcher

</div>

❓ **这是什么？**

这是一个用 Rust 构建的轻量级 llama.cpp 启动器，提供图形界面来管理和运行 llama.cpp 服务器。支持可视化配置、RPC模式、预设管理、实时日志和多语言界面。

📸 **屏幕截图**

**服务器配置面板**

**服务器日志面板**

**模型管理面板**

✨ **有什么特点？**

- 🖥️ 基于 eframe/egui 的跨平台 GUI 界面
- ⚙️ 可视化配置 llama.cpp 服务器参数（端口、线程、GPU 层数等）
- 📁 文件浏览器选择模型文件（支持 .gguf 格式）
- 💾 预设系统 - 保存和加载常用配置
- 📊 实时日志显示（支持文件日志记录）
- 🌐 支持中英文界面（自动检测系统语言）
- 🚀 开机自启支持（Windows）
- 🔧 GPU 层数管理（自动/全部/手动模式）
- 📱 支持自动计算显存可用最大上下文
- 📱 支持 RPC 模式（分布式推理）
- 🎯 支持 Web UI 集成
- 🔍 模型文件彩色标签解析（自动识别参数量、量化类型等）
- 📋 启动命令预览（只读展示最终命令）

🚀 **如何安装？**

### 从源码构建

```bash
# 克隆仓库
git clone https://github.com/yihuishou/llama.cpp-launcher.git
cd llama.cpp-launcher

# 构建发布版本
cargo build --release

# 可执行文件位于
# target/release/llama_cpp_launcher.exe
```

### 依赖要求

- Rust 1.70+
- Windows: 需要 Visual Studio Build Tools 或 MinGW
- Linux: 需要 X11 开发库

⚡ **快速使用？**

1. 下载 [llama.cpp 发布版](https://github.com/ggml-org/llama.cpp/releases) 并解压
2. 将启动程序放在 和 llama.cpp 同级目录
3. 启动应用程序，选择 Server 面板
4. 点击 自动检测 按钮，程序将自动查找 llama.cpp 服务器执行程序
5. 配置服务器参数（端口、线程数等）
6. 选择 模型管理 面板，点击 自动检测 按钮，程序将自动查找同级目录内的 models 或 model 文件夹并显示其中的模型文件
7. 选择要运行的模型文件（.gguf 格式）
8. 点击 启动Server 按钮
9. 待 打开网页客户端 按钮亮起，即可点击按钮打开 Web 界面

📖 **详细文档在哪里？**

-…
