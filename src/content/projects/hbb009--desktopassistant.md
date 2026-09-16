---
repo: "hbb009/DesktopAssistant"
name: "DesktopAssistant"
description: "开心！v9.16 版更新了！"
readmeQualityOk: true
url: "https://github.com/hbb009/DesktopAssistant"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-07-25T12:44:29Z"
lastCommitAt: "2026-09-16T08:46:47Z"
lastReleaseAt: "2026-07-07T09:39:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 48
maintainers: ["hbb009"]
openGraphImageUrl: "https://opengraph.githubassets.com/61e62388638df1be57a37c8135b496739385cf1d26d21fca88415cabde8eb08e/hbb009/DesktopAssistant"
---

# 桌面助手 v9.16 · 给 AI 人的口袋瑞士军刀 🔧🧠

> 让每一个操作，都能为您省下宝贵的时间

---

## 🆕 v9.16 主要调整

1. **新增「语音克隆」页**（助手区）：基于本地 CosyVoice3-0.5B，左侧上「声音卡」（拖入/录制参考原声，30 秒以内）下「文案」，右侧「生成记录」列表；同 OCR / 语音转写一样跑在独立子进程（`--cosyvoice-job`），避免与主进程 Qt 抢占 PyTorch/onnxruntime 的 DLL；模型权重放 `model/Fun-CosyVoice3-0.5B`，官方推理源码另需克隆 `CosyVoice` 仓库到 `model/CosyVoice`；素材与生成记录存 `data/voice_clone/`。
2. **新增「游戏助手」页**（助手区）：攻略知识库 + 截图 + 后台 Ollama 检索问答，回答可能给出多个候选答案，一键切换；知识库索引单独放项目根 `game_assist/` 目录（不进 `data/`，不随「数据管理」的导出/重置清空）；需要本机已安装并运行 Ollama。
3. **截图 OCR 引擎换成 PaddleOCR-VL-1.6**（原 RapidOCR 已下线）：权重放 `model/PaddleOCR-VL-1.6`；新增 `--ocr-server` **常驻子进程模式**——识别管线只在首次加载一次，后续截图识别直接复用同一进程，不再每次重新起进程加载模型；原有单次子进程模式 `--ocr-job` 仍保留用于探测/兜底；`tools/fix_ocr.bat` 同步改为安装 `paddlepaddle` / `paddleocr`。
4. **运行数据目录统一收进 `data/`**：原来分散的 `records/`、`gallery/`、`cards/`、`prompts/` 四个目录合并为单一 `data/`（含 `app.log`、`crash_*.log`、`user.txt`、`pre_download.json`、`gallery_eh.txt`、`gallery_hitomi.txt`、`cards/`、`prompts/`、`voice_clone/` 等），启动时自动一次性迁移旧目录内容，无需手动搬家。
5. **新增 `model/` 目录**统一存放本地大模型权重（faster-whisper、PaddleOCR-VL-1.6、CosyVoice3-0.5B 等），体积较大，独立于 `data/`，不计入「数据管理」的导出/重置范围。
6. **入口更新为 `mainv916.py` / 便携包 `mainv916.exe`**：新增 `--whisper-job`（语音转写子进程，沿用自…
