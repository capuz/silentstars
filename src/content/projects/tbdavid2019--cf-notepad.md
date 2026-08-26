---
repo: "tbdavid2019/cf-notepad"
name: "cf-notepad"
description: "可以安裝在 Cloudflare Worker 上的 wiki markdown 支援 SKILL 和 MCP 調用  https://wiki.david888.com "
readmeQualityOk: true
url: "https://github.com/tbdavid2019/cf-notepad"
homepage: "https://wiki.david888.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-09-03T03:35:03Z"
lastCommitAt: "2026-08-26T04:15:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 80
maintainers: ["tbdavid2019"]
openGraphImageUrl: "https://opengraph.githubassets.com/0118d486f35741480da01d37a6da8a565795c654ad18c86844d7d1884eb37d12/tbdavid2019/cf-notepad"
---

# Cloud Notepad - 基於 Cloudflare Workers 的無伺服器 Wiki 記事本

### Block Edit （類似Notion / Wordpress like 編輯器）

### Markdown Edit 編輯器

### 強大的匯入功能

這是一個運行在 Cloudflare Workers 上的輕量級、極速且對 AI 友善的雲端記事本與無頭 CMS 平台。不僅支援 Markdown 即時預覽、密碼保護、D1 版本歷史與簡報模式，更整合了 **AI 寫作特助 (排版/改寫/翻譯)**、**剪貼簿直接貼圖與 R2 上傳**、**888box 大檔附件**、**ECharts 動態圖表**、**段落劃線討論**與 **MCP / AI Agent Skills** 生態。

👉 **⚠️ 給 AI 與開發者：若需使用 API 進行讀寫，請存取專屬 Skill 規格表：[SKILL.md](https://wiki.david888.com/.well-known/agent-skills/david888-wiki-publisher/SKILL.md) 或 [LLM_API_DOCS.md](https://github.com/tbdavid2019/cf-notepad/blob/HEAD/LLM_API_DOCS.md) ⚠️**

---

## 語言 / Languages

- [繁體中文 (Traditional Chinese)](#繁體中文)
- [English Version](#english-version)

---

# 繁體中文

## ⚡ 強大亮點功能一覽 (Feature Highlights)

### 🤖 1. AI 智慧寫作特助與 Agent 生態

- **🎙️ 音訊匯入與語音轉逐字稿 (Groq whisper-large-v3 主力 + 多層級備援 + 原生時間戳記 `[mm:ss]`)**：點擊左下角「＋ 新增」選單，位於匯入區塊最上方，可直接上傳常見音訊檔案（`.mp3`, `.m4a`, `.wav`, `.aac`, `.ogg`, `.webm`, `.flac`, `.opus`, `.mp4` 等）。
  - **極速多層級 STT 引擎**：
    1. **主力模型 (Primary)**：**Groq `whisper-large-v3`**（超高速推論，秒級完成長篇語音轉錄，原生 `verbose_json` 時間段落）。
    2. **第一備援 (Fallback 1)**：**Groq `whisper-large-v3-turbo`**。
    3. **第二備援 (Fallback 2)**：Cloudflare Workers…
