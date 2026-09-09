---
repo: "carnot-tech/consulting-pptx-skill"
name: "consulting-pptx-skill"
description: "AIにまじなPPTXを作らせるClaude Codeスキル — スライド規約＋62型スライド型カタログ（SlideSpec 36型＋自由記述27パーツ）＋生成パイプライン＋機械チェック"
readmeQualityOk: true
url: "https://github.com/carnot-tech/consulting-pptx-skill"
language: "HTML"
languages: ["HTML"]
languagePcts: [83]
stars: 365
forks: 34
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-09-02T11:53:05Z"
lastCommitAt: "2026-09-09T08:17:58Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 17
maintainers: ["gozen3ji"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0a9e6380dc8d41db727dd49afcabf07aa51c63f9fcf234b19624a43ba2e62b4/carnot-tech/consulting-pptx-skill"
---

# consulting-pptx-skill

**AIに「まじ」なPowerPointを作らせるためのClaude Codeスキル。**
スライドの設計規約（約110項目）、規約違反を見つける機械チェック、**62型のHTMLパーツ集**（基本27＋追加35）、型カタログPDFをまとめたものです。資料は HTML（16:9）で組み、Chrome で PDF に書き出します。

進め方は、規約を読む → パーツ集から必要なパーツを取り出して1枚ずつ組む → 機械チェックを通す → 作り方を知らない別のエージェントにレビューさせる、の順です。

A Claude Code skill for generating boardroom-quality decks: a slide-design rulebook, an automated rule checker, a 62-part HTML slide library (16:9, one section per slide, printed to PDF via Chrome), and a visual catalog PDF.

私たちが実際に毎週の提案書・報告書づくりで使っている仕組みの公開版です。解説記事はこちら → [AIにまじなスライド作らせる（note）](https://note.com/jinbaflow/n/nc8372b84e572)

## 本質は `references/slide-rules.md`（約110項目のスライド規約）

このリポジトリでいちばん価値があるのは、実はテンプレでもスクリプトでもなく、**[slide-rules.md](https://github.com/carnot-tech/consulting-pptx-skill/blob/HEAD/references/slide-rules.md)** というテキストファイルです。実務の資料レビューで受けた指摘を1行ずつ書き溜めた約110項目。「結論はタイトルに書く」「角丸禁止」「塗りのあるボックスに枠線を付けない」「1資料1用語」「前提・定義は左、帰結は右」…。

使い方は3つだけです。**AIに資料を作らせる前に毎回このファイルを読ませる。出力後に `scripts/check_deck.py` で違反を機械検出する。最後に `references/content-review-prompt.md` の指示文で、作り方を知らない別のエージェントにデッキを読ませ、日本語・論理・矛盾の指摘を受けて採用分だけ直す。** AIはセッションごとに記憶がリセットされるので、口頭で注意しても定着しません。ルールをファイルにして毎回読ませるのが定着させる方法です。…
