---
repo: "timcsy/semorphe"
name: "semorphe"
description: "同一支程式，三種看法——程式碼、流程圖、積木。改哪一邊都算數，並且即時同步！"
readmeQualityOk: true
url: "https://github.com/timcsy/semorphe"
homepage: "https://semorphe.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["apcs", "arduino", "block-based-programming", "blockly", "cpp", "education", "python", "visual-programming"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-04T15:39:42Z"
lastCommitAt: "2026-09-15T08:54:21Z"
lastReleaseAt: "2026-09-03T09:58:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bc056762c7796944210b76620003cdd768dbddbcfa6f9ac8d17ccf8e2ee87256/timcsy/semorphe"
---

</p>

<h1 align="center">Semorphe</h1>

  <strong>同一支程式，三種看法——程式碼、流程圖、積木。改哪一邊都算數，並且即時同步！</strong>
</p>

</p>

---

把真的 C++ 或 Python 貼進去，它變成積木；拖一塊積木，程式碼跟著變；
切到流程圖，它畫的是同一支程式。

🔴 **三邊都是入口，不是「一個能改 ＋ 兩個唯讀」**：

```
你改程式碼  →  積木與流程當場跟著變
你改積木    →  程式碼與流程當場跟著變
你改流程    →  程式碼與積木當場跟著變
```

不是按一顆「轉換」按鈕，也不是存檔才更新——**打字的當下另外兩邊就在動**。

  <b>▶ <a href="https://semorphe.com/">馬上試（不用安裝）</a></b>
</p>

</p>

  打一段 C++ → 三邊同時長出來 → <b>在程式碼、在積木、在流程各改一次</b>，另外兩邊當場跟著變 → 按執行，它真的會跑
</sub></p>

## 它跟別的積木工具差在哪

多數積木工具是**單向**的：積木能變成程式碼，而程式碼變不回積木。
少數做到雙向的（例如 MakeCode），走出它支援的子集就回不去。

Semorphe 想做的是另一件事：

| | |
|---|---|
| **三個畫面都能編輯，而且即時** | 程式碼、流程圖、積木**任何一邊改，另外兩邊當場跟上**——不是按一顆「轉換」，也不是存檔才更新 |
| **吃的是真的程式碼** | 貼一段你手邊的 `.cpp` 或 `.py` 進去，不是玩具子集 |
| **接不住的時候它會說** | 認不出來的語法**不會被丟掉，也不會被猜**——它變成一顆灰色積木，原文一字不動地放在裡面 |

第三點聽起來不像賣點，而它是：**它保證這個工具不會安靜地弄壞你的檔案。**

</p>

  認不出來的 <code>goto</code> 變成一顆<b>寫著原文</b>的積木 → 在別的地方改一個數字 → <b>它一個字都沒動</b>
</sub></p>

## 🔴 積木長在 Arduino IDE 裡面——不是另一個程式

</p>

  這是 <b>Arduino IDE 2.3.8 本人</b>。左邊是它自己的編輯器，中間與右邊是
  <b>它的編輯器分頁</b>——同一個 <code>.ino</code> 檔，三邊即時同步
</sub></p>

**Arduino ＋ 積木的工具幾乎都住在 Arduino IDE 外面：**

| 形狀 | 例子 |
|---|---|
| 另一個網站 | Tinkercad Circuits · Wokwi · Ardublockly |
|…
