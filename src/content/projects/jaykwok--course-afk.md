---
repo: "jaykwok/course-afk"
name: "course-afk"
description: "自用网上大学挂课程序"
url: "https://github.com/jaykwok/course-afk"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-05-14T01:03:16Z"
lastCommitAt: "2026-06-25T01:32:53Z"
lastReleaseAt: "2026-06-25T01:06:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 40
maintainers: ["jaykwok"]
openGraphImageUrl: "https://opengraph.githubassets.com/41dcc91c1493b755e4ccd5da32f49c96a10347163ec3a4ca69702c52f1799c8b/jaykwok/course-afk"
---

# 网上大学挂课统一入口

这是一个学习自动化工具。日常使用只需要打开统一入口，按菜单完成登录、选课、挂课、考试即可。

推荐直接使用 `run.bat`；也可以在已配置好 Python 环境后运行 `python launcher.py`。

## 怎么使用

### 1. 第一次准备

先在项目目录里准备 Python 环境：

```bash
uv venv
uv pip install -r requirements.txt
```

复制 `.env.example` 为 `.env`，填写你的 AI 参数：

```env
OPENAI_COMPLETION_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
OPENAI_COMPLETION_API_KEY=你的API Key
MODEL_NAME=qwen3.6-plus
AI_REQUEST_TYPE=responses
AI_ENABLE_WEB_SEARCH=0
AI_ENABLE_THINKING=0
# AI_REASONING_EFFORT=medium
```

默认会在 Windows 上使用系统 Edge 浏览器，通常不需要额外安装浏览器。

### 2. 启动程序

双击 `run.bat`。

如果你习惯命令行，也可以运行：

```bash
uv run launcher.py
```

启动后会看到主菜单和当前状态。按菜单提示操作即可。

### 3. 更新登录凭证

第一次使用，或者状态面板提示登录凭证过期时，选择“切换账号 / 更新登录凭证”。

程序会打开浏览器，你按正常方式登录。登录成功后，程序会保存登录状态，后续一般不需要每次重新登录。

### 4. 手动选择课程 / 录入链接

如果状态面板里“课程链接”为 0，可以选择“手动选择课程 / 录入课程或考试链接”。

你可以粘贴入口链接、课程链接、考试链接、学习专区链接，或者一段包含链接的文本。普通 `Enter` 用于换行，输入完成后统一按 `Ctrl+Enter` 提交。
如果输入过程中发现内容有误，可以按 `ESC` 取消并返回主菜单。

如果检测到学习专区链接，程序会让你选择：

1. 全部学习：自动解析专区里的课程/主题链接并写入 `课程链接.json`
2. 手动选择学习模块：打开页面后你自己点击课程，程序记录新打开的真实学习链接

手动选择过程中如果打开的是考试答题页，程序会自动识别并写入 `考试链接.json`，不会混入课程链接。

普通使用建议先选择“全部学习”。如果专区页面结构特殊，自动解析不到，再用“手动选择学习模块”。

### 5. 仅挂课

有课程链接后，选择“仅挂课”或直接选择“推荐流程”。…
