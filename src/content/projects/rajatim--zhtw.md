---
repo: "rajatim/zhtw"
name: "zhtw"
description: "Taiwan Traditional Chinese quality tool for AI-generated content (CLI + 6-language SDK, 31K terms / 100M-char zero-mistranslation validation)"
originalDescription: "Taiwan Traditional Chinese quality tool for AI-generated content (CLI + 6-language SDK, 31K terms / 100M-char zero-mistranslation validation)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/rajatim/zhtw"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["chinese", "cli", "i18n", "linter", "localization", "pre-commit", "python", "simplified-chinese", "taiwan", "text-processing"]
stars: 12
forks: 1
openIssues: 9
closedIssues: 27
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-25T23:49:33Z"
lastCommitAt: "2026-07-30T06:06:58Z"
lastReleaseAt: "2025-12-29T15:57:14Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 50
maintainers: ["rajatim"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1122968217/ddf96ea8-72ce-4395-ada7-00a42a1a05ff?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T061126Z&X-Amz-Expires=300&X-Amz-Signature=c16681a93e18bc94bab2e773c548d5414ec15ff9135e0bafdd434659fcd44db1&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjE4NiwibmJmIjoxNzg1MzkxODg2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.d34PHeEcfRCeeO7bdUk8hZUb3d1rcAhsSDPIRkzoV64"
discussionCount: 1
---

# ZHTW

**繁體中文** · [English](https://github.com/rajatim/zhtw/blob/HEAD/README.en.md)

**AI 寫的中文，zhtw 替你把關。**

無論是 Copilot 寫的程式碼、Claude 寫的文件，還是 LLM 翻譯的本地化字串 —— 把「許可權」「軟件」「调用」這類簡體污染自動修成真正的台灣繁體。

一行程式、一個 CLI、六種語言 SDK。

```
輸入：服务器上的软件需要优化，用户权限请联系管理员
輸出：伺服器上的軟體需要最佳化，使用者權限請聯絡管理員
```

一行 `zhtw scan` / `zhtw fix` 解決 —— 也就是 LLM 給你 100 個檔案後最該做的事。

> **協助建立可信的精準度 benchmark：** 如果你有自己原創、可公開且不含敏感資料的
> 簡體中文句子，請透過[專用表單](https://github.com/rajatim/zhtw/issues/new?template=permissioned-user-report.yml)
> 提供 1 至 10 句 input-only 真實用例。請勿附上繁體答案或任何轉換器輸出。
> 可直接轉貼的簡體／繁體／英文邀請文見[語料徵集說明](https://github.com/rajatim/zhtw/blob/HEAD/docs/benchmark/PERMISSIONED-USER-REPORT-INVITATION.md)。

---

## 使用情境

| 情境 | 說明 |
|------|------|
| 🤖 **AI 生成內容後處理** | Copilot / Cursor / Claude / GPT 寫的中文常混簡體用語，zhtw 在 commit 前自動校正 |
| 📝 **多語系本機化** | i18n 檔案的繁體欄位品質檢查，CI 失敗或自動修正 |
| 📚 **技術文件與註解** | function name、註解、字串 literal 的繁體一致性，pre-commit hook 自動修正 |
| 🏢 **企業合規** | 對外文件、客戶交付物的台灣用語標準化，完全離線 |

---

## 為什麼選 ZHTW？

> **寧可少轉，不要錯轉**

通用轉換工具會過度轉換，把台灣正確的詞也改掉。我們不一樣：**只轉確定要改的詞，其他一律不動。**

| | |
|------|------|
| **低誤轉優先** | 31,000+ 詞條 + 6,360 字元對映；52 本書、1 億字指定語料驗證未發現錯轉 |
| **秒級掃描** | 3,100 KB/s 穩定吞吐，1MB 文字 < 1 秒 |
| **完全離線** |…
