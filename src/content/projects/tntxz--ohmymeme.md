---
repo: "TNTXZ/OhMyMeme"
name: "OhMyMeme"
description: "轻量化跨平台表情包管理系统"
readmeQualityOk: true
url: "https://github.com/TNTXZ/OhMyMeme"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [64, 33]
topics: ["manager", "meme", "memes"]
stars: 54
forks: 4
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-07-23T10:53:06Z"
lastCommitAt: "2026-07-31T06:28:37Z"
lastReleaseAt: "2026-07-29T04:44:35Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["TNTXZ", "Ze514", "RainLuohua"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b9efe5dcd1cdd3be49fe8963f60f5a5ca5b884057f737fd6c15c98bb76038e5/TNTXZ/OhMyMeme"
---

# OhMyMeme

轻量化跨平台表情包管理系统 — 突破表情包上限，快捷键呼出、搜索即复制。

### **QQ交流群：891636253**

## 功能

- **系统托盘运行** — 最小化资源占用，后台常驻
- **全局快捷键** — 默认 `Ctrl+Alt+N` 呼出/隐藏主面板
- **表情管理** — 导入/搜索/标签分类/收藏/自定义分组
- **一键复制** — 点击表情包自动复制到剪贴板（GIF 保留动画）
- **拖放导入** — 直接拖拽图片到窗口即可导入
- **右键菜单** — 重命名/收藏/添加分组/从分组移除/删除
- **GIF 动图** — 网格内自动播放，可在设置中关闭
- **分组筛选** — 按收藏夹或自定义分组过滤，点击标签+分组叠加搜索
- **本地缓存** — 缩略图+原图双层缓存，离线可用
- **缓存扫描** — 启动时自动扫描缓存目录，已有文件无需重复导入
- **同步进度条** — 上传/下载实时显示进度、速度、当前文件，支持后台运行
- **远程同步** — FTP / S3 / R2 多端同步
- **手机导入** — ADB 一键从 Android 手机拉取 QQ 表情包缓存并打包 ZIP
- **危险操作** — 设置页一键清空本地或云端全部数据（需双重确认）
- **无边框窗口** — 自定义标题栏，鼠标拖拽移动

## 快速开始

### 下载

从 [Releases](https://github.com/TNTXZ/OhMyMeme/releases/latest) 下载对应系统的安装包或可执行文件，直接运行。

### 从源码运行

**环境要求**: Python 3.10+

**Linux 额外依赖**:
```bash
# Debian / Ubuntu
sudo apt install python3-gi
# apt install gir1.2-webkit2-4.0  # 按系统版本选择 webkit2gtk 包

# Arch Linux
sudo pacman -S python-gobject
yay -S webkit2gtk  # 依赖 libsoup，通过 yay 安装
```

```bash
git clone https://github.com/TNTXZ/ohmymeme.git
cd ohmymeme
pip install -r requirements.txt
python -m src
```

可用调试参数：

| 参数 | 说明 |
|------|------|
| `--debug-update` | 强制弹出更新对话框（测试用） |
| `--debug-startup` | 输出开机自启检测详情（注册表键、启动文件夹）…
