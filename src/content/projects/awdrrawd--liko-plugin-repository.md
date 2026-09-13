---
repo: "awdrrawd/liko-Plugin-Repository"
name: "liko-Plugin-Repository"
description: "A collection of personal BondageClub plugins. Install everything at once via the Plugin Collection Manager (PCM), or install individual plugins on their own."
readmeQualityOk: true
url: "https://github.com/awdrrawd/liko-Plugin-Repository"
homepage: "https://awdrrawd.github.io/liko-Plugin-Repository/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 6
forks: 3
openIssues: 2
closedIssues: 8
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-08-29T12:09:20Z"
lastCommitAt: "2026-09-13T08:28:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 86
maintainers: ["awdrrawd", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4b6f6425e0775f5ff606198905741812e4d79eb6abba7ab1d35f787aee8983b/awdrrawd/liko-Plugin-Repository"
---

# Plugin Collection Manager（PCM）

集中安裝、啟用與管理 Bondage Club 插件。建議優先使用 PCM；也保留書籤、控制台及單獨安裝方式。

[立即安裝 PCM](https://awdrrawd.github.io/liko-Plugin-Repository/PCM_Loader.user.js) · [瀏覽插件網站](https://awdrrawd.github.io/liko-Plugin-Repository/)

</div>

## 安裝 PCM

### 推薦：腳本管理器

安裝 Tampermonkey、Violentmonkey 或 Userscripts 後，點擊下方連結即可安裝並自動更新 PCM：

### [👉 點此安裝 PCM](https://awdrrawd.github.io/liko-Plugin-Repository/PCM_Loader.user.js)

進入遊戲後可輸入 `/pcm help` 查看說明，或輸入 `/pcm list` 查看插件狀態。

### 其他載入方式

#### 書籤

建立新書籤，將下列內容貼到書籤網址：

```javascript
javascript:(function(){var s=document.createElement('script');s.src='https://awdrrawd.github.io/liko-Plugin-Repository/PCM_Loader.user.js?'+Date.now();s.type='text/javascript';s.crossOrigin='anonymous';document.head.appendChild(s)})();
```

#### 瀏覽器控制台

開啟開發者工具，在 Console 貼上：

```javascript
import(`https://awdrrawd.github.io/liko-Plugin-Repository/PCM_Loader.user.js?v=${(Date.now() / 10000).toFixed(0)}`);
```

#### 單獨安裝插件

如果不使用 PCM，可直接點擊下方插件表格中的「安裝」，或前往 [Plugins](https://github.com/awdrrawd/liko-Plugin-Repository/blob/HEAD/Plugins) 選擇個別腳本。

## 插件收藏

目前收錄 43 款插件：32 款 Liko 插件、8 款社群插件與 3 款修正補丁，涵蓋聊天室、外觀、互動、媒體、介面優化與開發輔助。

### Liko 插件

| 插件 | 功能介紹 | 版本 | 連結 |…
