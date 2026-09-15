---
repo: "danything/denpa"
name: "denpa"
description: "チューナーエージェントと2つだけで完結するテレビ録画アプリ"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["dtv", "typescript", "tv-recorder"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-09-15T08:55:20Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["5ym", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f062e3bb49a16b581431ba8832d821372e41395b92241e8d12273f6112c67308/danything/denpa"
fundingLinks: ["KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 0
---

# denpa

**テレビを録って観るための、自分の家に置くサーバ**です。番組表から押すだけで予約し、
録ったものはブラウザでそのまま観るか、テレビの VLC へ飛ばすか、落として好きな
プレイヤーで。放送中のものもブラウザで観られます (字幕・データ放送つき)。
メディアサーバは置きません。

</p>

<table>
  <tr>
    <td align="center"><a href="docs/screens.md#予約と録画"><img src="docs/images/dashboard.webp" alt="予約と録画" width="380"></a><br><sub><b>予約と録画</b> — サムネ付き。押せばその場で観る</sub></td>
    <td align="center"><a href="docs/screens.md#ライブ"><img src="docs/images/live.webp" alt="ライブ" width="380"></a><br><sub><b>ライブ</b> — 字幕もデータ放送も。止めれば追っかけ</sub></td>
    <td align="center"><a href="docs/screens.md#録画を観る"><img src="docs/images/watch.webp" alt="録画を観る" width="380"></a><br><sub><b>観る</b> — 放送どおりの字幕、CMは自動で飛ばす</sub></td>
  </tr>
</table>

**画面の一覧は [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md)** (実機の絵。番組表・ルール・チューナー・設定も)。

## しくみ

部品は **チューナーエージェント** (選局) と **denpa** (番組表・予約・録画・エンコード・
配信・ライブ視聴) の2つだけです。

```text
チューナー ── エージェント ── denpa ── 録画(mkv) ─┬─→ ブラウザでそのまま観る
                                                    └─→ テレビの VLC へ飛ばす / 落として好きなプレイヤーで
```

エージェントは**チャンネルを掴んで素のTSを流すだけ**で、番組表を読むのも、局を
選り分けるのも、CMを見つけるのも denpa がやります。録画は CM をチャプターにして
AV1 / H.264 の mkv に焼き、字幕は放送のまま絵で入れます。

## できること…
