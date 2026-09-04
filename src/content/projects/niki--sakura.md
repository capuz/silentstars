---
repo: "niki/sakura"
name: "sakura"
description: "SAKURA Editor (Japanese text editor) 私家実験版"
readmeQualityOk: true
url: "https://github.com/niki/sakura"
homepage: "https://note.com/katakotori/n/n7463242cc326"
language: "C"
languages: ["C", "C++"]
languagePcts: [51, 49]
topics: ["sakura-editor", "japanese", "texteditor", "unofficial", "colorfont", "directwrite", "sakura", "text-editor", "windows-app", "experimental"]
stars: 11
forks: 0
openIssues: 17
closedIssues: 12
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2017-01-04T05:52:06Z"
lastCommitAt: "2026-09-04T08:03:26Z"
lastReleaseAt: "2026-08-31T21:51:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine", "under_pressure"]
healthScore: 78
undervaluedScore: 73
maintainers: ["niki"]
openGraphImageUrl: "https://opengraph.githubassets.com/032c5dc23a6bc845693c4372793e7e19ba4143a6aa120636cee49e035b2c1128/niki/sakura"
---

# sakura editor
<p>
  
  </a>
  </a>
  <br>
  
  </a>
  <br>
  </a>
</p>

<hr>

機能追加やバグの修正などを行っています。<br>
別のエディタも使用しているため、目新しい機能はつっこんでいければいいなと。<br>

<b>[Added features]</b><br>

<b>■ 描画・見た目</b><br>
・絵文字などのカラー文字をそのままカラーで表示（通常は単色になってしまう問題を解消）。肌色違いや職業アイコンなど複数の文字が合体する絵文字も1つの絵として表示し、絵文字の表示に使うフォントを共通設定「全般」から固定指定することも可能<br>
・文字の描画をキャッシュ（既定でON、重ければ共通設定「全般」でOFFも可能）<br>
・絵文字が混ざる行でもルーラーの桁位置がズレないよう補正<br>
・半角スペースを「・」で表示、改行されない特殊なスペース(NBSP)も同様に見やすく表示<br>
・タブ文字の矢印表示をやめてシンプルな線だけに<br>
・行間を下側に揃えて詰まった印象を軽減<br>
・カーソルがある行の行番号も背景色で強調し、現在位置を分かりやすく<br>
・変更した行・ブックマークした行を縦線で表示（行番号を非表示にしていても分かる）<br>
・検索結果・ブックマーク・カーソル位置をスクロールバー上にマーク表示し、ファイル全体から一目で探せる。マーク部分はクリックで該当行へジャンプ可能<br>
・スクロールバーをシステム標準の細いデザインに変更<br>
・選択中のタブの下にアクセントカラーの線を表示して見分けやすく<br>
・タブを切り替えたときのちらつきを軽減<br>
・フォントの描画品質（アンチエイリアスの種類）を共通設定「全般」の「描画」から選べるように<br>
・「メニューにアイコンを表示」をONにしても、Windows標準の見た目のまま表示されるように改善（以前は古いXP風の見た目に切り替わっていました）<br>
・ステータスバー・ツールバーをVS Code風のフラットなデザインに一新<br>

<b>■ 操作性</b><br>
・マルチカーソル編集に対応（Ctrl+Alt+↑/↓でカーソルを追加）。VS Code / Sublime Textのように複数箇所へ同時にタイピング・選択・Undo/Redoが可能<br>
・コマンドパレット（Shift+Ctrl+P）を追加。コマンド実行・開いているファイルの切り替え・最近使ったファイル・アウトライン（@）・ブックマーク（#）を1つの絞り込みリストからまとめて検索・実行でき、ローマ字入力のまま日本語のコマンド名もあいまい検索可能<br>…
