---
repo: "mangokingTW/ImeModePersistence"
name: "ImeModePersistence"
description: "Windows tray utility that keeps your last-chosen IME conversion mode (native/alphanumeric) across windows, and pins specific programs — even anti-cheat fullscreen games — to a fixed input language. English / 繁體中文."
readmeQualityOk: true
url: "https://github.com/mangokingTW/ImeModePersistence"
homepage: "https://mangokingtw.github.io/ImeModePersistence/"
language: "C++"
languages: ["C++"]
languagePcts: [68]
topics: ["bopomofo", "conversion-mode", "cpp", "helldivers-2", "ime", "imm32", "input-method", "keyboard-layout", "system-tray", "traditional-chinese"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-09T04:59:01Z"
lastCommitAt: "2026-09-11T08:14:58Z"
lastReleaseAt: "2026-08-09T08:08:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 61
maintainers: ["mangokingTW", "github-actions[bot]", "azchohfi"]
openGraphImageUrl: "https://opengraph.githubassets.com/17160414ac40f42da0b5bf2e97e7ba720fbdc346ab2e0f8d7535f8d8b25fa837/mangokingTW/ImeModePersistence"
---

<h1>
</h1>

**跨視窗維持中/英，並為程式綁定輸入語言**

**繁體中文** · [English](#english)

Windows 小工具，控制輸入法在程式之間的行為：切換視窗時延續你最後選擇的**輸入模式**（中文／英數），並可把指定程式**綁定到固定的輸入語言** —— 連讀不到執行檔的程式也行，例如有防作弊的全螢幕遊戲。

操作教學在 **[Wiki](https://github.com/mangokingTW/ImeModePersistence/wiki)**，設計取捨與被否決的做法在 **[docs/design.md](https://github.com/mangokingTW/ImeModePersistence/blob/HEAD/docs/design.md)**。與同類工具的比較見 **[Wiki 的同類工具頁](https://github.com/mangokingTW/ImeModePersistence/wiki/Similar-tools)**。

## 這是什麼

在 A 視窗用中文輸入 → 切到 B 視窗，中文模式被還原。你在 B 按 Shift 改成英數 → 切到 C 視窗，還原的是英數。全域目標跟著你最近一次的手動切換走，可以在托盤選單關閉。

已在實機上與**微軟注音**確認可用，支援**游標輸入指示器**（在文字游標旁動態顯示 `中` / `A` 狀態指示器）。

## 為什麼會需要它

Windows 把輸入法狀態綁在**每個執行緒**上。切到另一個視窗時，中／英轉換模式會回到該輸入法的預設值 —— 對中文鍵盤來說就是**中文**。所以你剛按 Shift 切成英數，換個視窗又打出中文。

「設定 → 時間與語言 → 輸入 → 進階鍵盤設定」裡的**「允許我為每個應用程式視窗使用不同的輸入法」解決不了這件事**。那個設定管的是「哪一個輸入法在作用」，不管「該輸入法處於中文還是英數」—— 關掉它之後，切換視窗照樣切回中文。

**沒有任何 Windows 設定能處理轉換模式** —— 這是這個工具的**第一個**目的：讓你選的中／英模式跟著你走。

**第二個**目的是把特定程式固定在某個輸入語言，包含連設定都碰不到的那類：**使用 raw input 的全螢幕遊戲**直接讀取鍵盤裝置，完全不參與輸入法的狀態管理，只能從外部處理。[Helldivers 2](https://github.com/mangokingTW/ImeModePersistence/wiki/Helldivers-2) 就是這種。

## 安裝

**最簡單：從 [Microsoft Store](https://apps.microsoft.com/detail/9P05QQZ2P5XC)…
