---
repo: "sevenc-nanashi/budoux.obj2"
name: "budoux.obj2"
description: "横幅を指定してテキストを折り返すAviUtl2用スクリプト"
readmeQualityOk: true
url: "https://github.com/sevenc-nanashi/budoux.obj2"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T03:43:23Z"
lastCommitAt: "2026-07-29T06:14:34Z"
lastReleaseAt: "2026-03-30T14:30:22Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 64
undervaluedScore: 15
maintainers: ["sevenc-nanashi", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2a8157a58501828798b21b245c9140c70da2d6766bfe559ad41b4509bef0c69/sevenc-nanashi/budoux.obj2"
fundingLinks: ["GITHUB:https://github.com/sevenc-nanashi", "CUSTOM:https://creator-support.nicovideo.jp/registration/90184991", "CUSTOM:https://www.amazon.jp/hz/wishlist/ls/36ZP9IN0L1CSI?ref_=wl_share"]
---

</div>

# budoux.obj2

BudouXという機械学習モデルに基づき、文章を自動的に改行するAviUtl2のスクリプト。

## Tips

- 文章がどのように区切られるかは[BudouXの公式デモ](https://google.github.io/budoux/)を使うと便利です。
  「Replace ZWSP with BR」をオンにすると、どこで改行される可能性があるかがわかります。
- 行末のスペースは削除されます。\
  例：`AviUtl 2.0`と書かれていて、`AviUtl`で行が埋まった場合、`AviUtl<改行>2.0`と改行されます。
- `\b`と書くと文節の区切りとして認識されます。\
  例：`AviUtl\b2.0`の場合、`AviUtl` と `2.0` の間で単語が区切られたとして認識されます。ただし、`AviUtl`で行を使い果たさなかった場合は、`AviUtl2.0`と表示されます。
- PSDToolkit2と併用することもできます。PSDToolkit2の字幕表示を配置し、そのテキスト欄の内容をこのスクリプトのテキスト欄に貼り付けてください。

## インストール

[Releases](https://github.com/sevenc-nanashi/budoux.obj2/releases/latest) から `sevenc-nanashi.budoux-obj2-v{{version}}.au2pkg.zip` をダウンロードし、AviUtl2 のプレビューにドラッグ＆ドロップしてください。

## PI

スクリプトはPI（Parameter Injection）を使用することで各種パラメーターをLuaの数式で指定できます。\
PIによって設定された値はトラックバーによる指定より優先されます。

基本的には使う必要はありませんが、PIを使うことでより柔軟な設定が可能になります。

### キー一覧

| キー              | 型      | 説明               |
| ----------------- | ------- | ------------------ |
| `width`           | number  | 横幅               |
| `justify`         | number  | 両端揃え（0〜2）   |
| `align`           | number  | 揃え（0〜11）      |
| `char_spacing`    | number  | 字間               |
| `line_spacing`    | number  | 行間…
