---
repo: "hebiiro/al2_preset_adder"
name: "al2_preset_adder"
description: "aviutl2のMODです。一部のダイアログにプリセットを追加します。"
readmeQualityOk: true
url: "https://github.com/hebiiro/al2_preset_adder"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["aviutl2-plugin"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-01-20T06:54:46Z"
lastCommitAt: "2026-08-30T09:25:35Z"
lastReleaseAt: "2026-08-30T04:04:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 54
undervaluedScore: 12
maintainers: ["hebiiro"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5a9ca2f906b144c0e31b6999d836784f9cd0ea9283b97864c05cb8b08c35faa/hebiiro/al2_preset_adder"
---

# 🐍AviUtl2 プリセット追加MOD

* aviutl2の`プロジェクトを新規作成`ダイアログなどにプリセットを追加するMODです。
* aviutl2の入力プラグインの形式になっていますが、実際には見た目を変えるタイプのMODです。

> [!IMPORTANT]
> * aviutl2のバージョンによってはダイアログのレイアウトが崩れる場合があります。

## 🚀インストール

* `プラグインフォルダ`に以下のファイルを入れてください。
	* `al2` ✏️フォルダ
		* `al2_preset_adder.aui2` ✏️入力プラグインファイル
		* `al2_preset_adder` ✏️フォルダ
			* `assets` ✏️フォルダ(ここにプリセットの初期値が入っています)
				* `project.tsv` ✏️プロジェクトのプリセット
				* `video_size.tsv` ✏️映像サイズのプリセット
				* `video_rate.tsv` ✏️フレームレートのプリセット
				* `audio_rate.tsv` ✏️サンプリングレートのプリセット
				* `scene_name.tsv` ✏️シーン名のプリセット
				* `layer_name.tsv` ✏️レイヤー名のプリセット

## 🔥アンインストール

* `プラグインフォルダ`から以下のファイルを削除してください。
	* `al2` ✏️フォルダ
		* `al2_preset_adder.aui2` ✏️このファイルを削除
		* `al2_preset_adder` ✏️このフォルダを削除

## 💡使い方

1. aviutl2でプロジェクトを新規作成します。
1. 自動的に`プロジェクトを新規作成`ダイアログが拡張され、プリセットが追加されているはずです。
1. プリセットを選択してダイアログの数値を変更します。
---
* `シーンを作成`・`シーンの設定`・`レイヤー名を変更`ダイアログも同じように操作します。
> [!TIP]
> * SHIFTキーを押している間は、このMODが無効になります。
> * MODが無効になった状態で`プロジェクトを新規作成`などを実行した場合は、ダイアログが通常通りに表示されます。

### 🏷️プリセットをカスタマイズする

1. aviutl2を終了すると`プラグインフォルダ\al2\al2_preset_adder\config`内にtsvファイルが作成されます。
1. これをテキストエディタで編集してください。**※文字コードはutf-8です。**

### 🏷️設定を初期化する

1.…
