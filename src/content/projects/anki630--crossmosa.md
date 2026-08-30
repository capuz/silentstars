---
repo: "anki630/crossmosa"
name: "crossmosa"
description: "CrossMosa — 繁體中文 e-reader firmware for Xteink X3, based on CrossPoint (public release candidate)"
readmeQualityOk: true
url: "https://github.com/anki630/crossmosa"
homepage: "https://anki630.github.io/crossmosa/"
language: "C"
languages: ["C"]
languagePcts: [87]
stars: 23
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-07T05:52:45Z"
lastCommitAt: "2026-08-30T00:44:45Z"
lastReleaseAt: "2026-08-29T18:27:07Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 46
maintainers: ["anki630", "Uri-Tauber", "uxjulia"]
openGraphImageUrl: "https://opengraph.githubassets.com/c25aa98729f8bdd6865fd2159d24cbe8f9fb919af31ccfa05e483d44aa69ef9f/anki630/crossmosa"
discussionCount: 3
---

# CrossMosa

**終於，你的 X3 能好好讀中文了。**

給 Xteink X3 的繁體中文系統——免費、開源，刷一次機就有。

**快速前往:**
[**這一版更新了什麼**](https://github.com/anki630/crossmosa/blob/HEAD/CHANGELOG.md) ·
[安裝]（#安裝） ·
[主要特色]（#主要特色相對原版） ·
[字集限制]（#ui-字型的字集限制請先讀這段） ·
[與原版的差異]（#與原版-crosspoint-的關係） ·
[下載 2.0](https://github.com/anki630/crossmosa/releases/tag/v2.0.0-rc.1) ·
[English](#crossmosa-english)

你的 X3，書名還是一排 □□□ 嗎?

CrossMosa 只做一件事:**讓 X3 把繁體中文書讀好。**

- **書名、選單、目錄，說中文**——內建 7,413 個漢字（BIG5 一級全收+二級常用 2,000 字），連「憨」「璐」這類冷僻字都有。
- **內文想用什麼字體就用什麼**——明體、黑體、硬筆楷書三套中文字型，各四個字級。
- **翻頁更快了**——下一頁的字趁你還在讀時先備好;備妥的頁面快 0.3 秒，沒備妥也不會更慢。
- **讀到最精彩的一章，不會突然重開機**——排版、圖片、字型快取全都有記憶體不足時的退路。
- **闔上機器，它是一幅畫**——50 張世界名畫待機壁紙，每一張都為這塊 4 階灰階螢幕挑過、裁過、調過;今天梵谷，明天北齋。

安裝就三步:刷韌體 → 複製字型 → 開機切中文。今晚就能開始讀。
刷壞了也有退路:SD 卡救援模式隨時能換回任何韌體;首刷機器不用接電腦（SD 卡就能刷，見安裝章方法 A）。

這是個人專案，免費開源，不是產品——但上面每一項，都在真機上量測過。

---

## 這些痛，你遇過幾個?

用電子書機讀中文，大概都撞過這幾件事:

- 書名在檔案清單裡是一排方塊，要一本本點開用猜的。
- 某些書就是打不開;或讀到一半，整台機器突然重開。
- 連上 Wi-Fi 想抓書，機器直接當掉。
- 長篇小說讀到後半，翻頁越來越卡。
- 選單是英文或簡體;內文沒有台灣讀者習慣的明體。

這五條，CrossMosa 各有一個具體的修法，而且都在真機上驗證過:內建 7,413 個漢字（方塊）、
排版與記憶體護欄（打不開/突然重開）、連線前自動騰出記憶體（Wi-Fi 當機）、
背景預先排版（後段卡頓）、繁中介面+三套中文字型（語言與字型）。
細節在下面的特色表;每一項的來龍去脈都在…
