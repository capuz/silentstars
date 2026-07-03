---
repo: "kk25114/video_info"
name: "video_info"
description: "视频剪辑工作流"
url: "https://github.com/kk25114/video_info"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 29
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-14T14:24:39Z"
lastCommitAt: "2026-07-03T12:21:24Z"
lastReleaseAt: "2025-08-13T04:00:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 54
maintainers: ["kk25114"]
openGraphImageUrl: "https://opengraph.githubassets.com/07e39ff47b42d76d6ad30827694338cf89ee1c48d2c548a64d6939b6323a1bee/kk25114/video_info"
---

# Video Info Pipeline 🗂️→📝→🔊→🎬

本仓库是一个完整的**视频内容自动化处理流水线**，支持从**视频抓取→字幕提取→AI摘要→语音合成→视频制作**的全流程自动化。

---

## 🚀 功能特性

### 1. 视频内容获取
- ✅ 支持YouTube、B站等主流平台
- ✅ 自动提取官方字幕/备用AI语音识别
- ✅ 智能去重，避免重复处理
- ✅ 支持批量播放列表处理

### 2. AI内容增强
- ✅ DeepSeek AI自动摘要
- ✅ 内容语法校正
- ✅ 智能分段优化

### 3. 语音合成
- ✅ TTS高质量语音合成
- ✅ 支持超长文本分段处理
- ✅ 多种中文语音可选
- ✅ 自动语速语调调节

### 4. 视频制作
- ✅ 自动生成背景视频+配音+字幕
- ✅ 智能封面生成
- ✅ 720p高清输出
- ✅ 支持图片叠加层

---

## 📁 完整目录结构

```
video_info/
├── 1.大问题/                    # 哲学思辨类内容
├── 2.sunrich/                  # 财经时事分析
├── 3.越哥说电影/               # 电影解说
├── 4.吟游诗人基德/             # 科技科普
├── 5.科学声音/                 # 科学教育
├── mk_video/                   # 🎬 视频制作工具
│   ├── build.py               # 核心构建脚本
│   ├── videos/                # 背景视频素材
│   └── images/                # 叠加图片素材
├── tts_cli/                   # 🔊 语音合成工具
│   ├── long_tts.py            # 长文本TTS主程序
│   ├── config.json            # TTS配置
│   └── README.md              # TTS使用说明
├── get_transcripts.py         # 📥 视频内容获取
├── wrap_sunrich.sh           # 🔄 完整流水线脚本
├── requirements.txt          # Python依赖
├── config.json              # 全局配置
├── auto_commit.sh          # 自动Git提交
└── README.md               # 📖 项目文档
```

---…
