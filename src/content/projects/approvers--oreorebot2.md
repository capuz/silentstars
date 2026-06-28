---
repo: "approvers/OreOreBot2"
name: "OreOreBot2"
description: "限界開発鯖を代表する BOT はらちょ を TypeScript+discord.js で作り直し。 オレオレ BOT です。別に詐欺とかはしません。"
url: "https://github.com/approvers/OreOreBot2"
homepage: "https://haracho.approvers.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 14
forks: 3
openIssues: 10
closedIssues: 133
watchers: 1
contributors: 30
recentReleases: 0
createdAt: "2022-01-02T10:23:02Z"
lastCommitAt: "2026-06-28T01:46:09Z"
lastReleaseAt: "2022-03-29T15:15:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 74
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34901c5910d50fa030d00a728ff3a24a5e9b9d83fa294eeaba9d8a2f77080171/approvers/OreOreBot2"
fundingLinks: ["GITHUB:https://github.com/approvers", "GITHUB:https://github.com/m1sk9", "GITHUB:https://github.com/shun-shobon", "GITHUB:https://github.com/su8ru", "GITHUB:https://github.com/re-taro"]
---

# OreOreBot2 (新生はらちょ)

---

限界開発鯖を代表する BOT [はらちょ](https://github.com/approvers/OreOreBot) を TypeScript+discord.js で作り直し。

オレオレ BOT です。別に詐欺とかはしません。

## はらちょとは？

**限界開発鯖民の活動を支えようとしてる BOT です**

- はらちょは 2020/03/03 に限界開発鯖に接続された BOT です。
  - おそらく限界開発鯖に接続された初めての BOT です。
  - Python+discord.py で構築された BOT で、当初は [いっそう](https://github.com/isso0424), [こるく](https://github.com/Colk-tech), [フライさん](https://github.com/loxygenK) で開発され、後に [かわえもん](https://github.com/kawaemon) , [そうし](https://github.com/soshiharami), [ko](https://github.com/ko50) (敬称略) が参加し開発されました。
- はらちょは非常に厄介な仕組みなどがされており、 2021 年に入ったあとは、開発が行われることはありませんでした。(アップデートなどの小さなものはあった)
- Go での再実装も計画されましたが、結局完了することはなく、永久凍結することになります。
- 2021/12/19, discord.py の開発停止や Discord API v6, v7 の廃止による **はらちょの Gateway API 切断問題(2022 年問題)(クソデカ主語)** を解決すべく、新生はらちょが作られることになりました。
  - [初代はらちょぶっ殺しプロジェクト](https://github.com/approvers/OreOreBot2/milestone/1) の開始です。
  - これも Go と同じく、途中で永久凍結するところでしたが、 [雪](https://github.com/YukiYuigishi) が初代はらちょを殺した罪で死刑が確定したことで、作り直しが加速することになり、 2022/02/27 ついに最初の [初代はらちょぶっ殺しプロジェクト](https://github.com/approvers/OreOreBot2/milestone/1) が終了しました。

## パッケージ構造

OreOreBot2 は以下のパッケージ構成で運用されています。

- `@oreorebot2/common`: スクリプトや共通の依存関係を提供するパッケージです。
-…
