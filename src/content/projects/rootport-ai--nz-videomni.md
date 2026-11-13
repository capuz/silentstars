---
repo: "Rootport-AI/Nz-Videomni"
name: "Nz-Videomni"
description: "A backend server for running Video Gen AI models like LTX in low-VRAM (16GB) environments. Includes a simple Gradio UI."
readmeQualityOk: true
url: "https://github.com/Rootport-AI/Nz-Videomni"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [52, 39]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T11:19:52Z"
lastCommitAt: "2026-11-13T11:25:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["Rootport-AI"]
openGraphImageUrl: "https://opengraph.githubassets.com/e148b49195bd59516d65b44576fb6812ea10b32d2f612b9e02cd870c4811bc73/Rootport-AI/Nz-Videomni"
---

---  
# Nz-Videomni   
AviUtl2から動画生成AIを動かせるバックエンドPythonサーバーです。フロントエンドとしてAviUtl2 用`.aux2` プラグインを同梱。さらに、検証用の簡易なGradio UIを同梱しています。API は汎用設計なので、DaVinci Resolve など他の動画編集ソフトからも（フロントエンド用プラグインを開発すれば）使用できる見込みです。  

| 必須スペック | 要件 |  
|------|------|  
| GPU | **VRAM 16GB 以上** NVIDIA製GPU。動作検証には RTX 4070 ti SUPER および RTX 3080 mobile を使用 |  
| メインメモリ | 64GB （※ 32GB でもWindowsの`ページファイル`を有効にすれば動きます ） |  
| ストレージ | 50GB （ページファイル利用の場合は＋60GB）|  
| ストレージ（モデル追加時） | LTX 2.5の追加時：＋30GB |  
| その他 | [AviUtl2](https://spring-fragrance.mints.ne.jp/aviutl/)をインストール済みであること |

# インストール方法
### 概要    
1. [Git](https://git-scm.com/install/windows)をインストールする  
2. このアプリのデータを`git clone`でダウンロードする（後述）  
3. 同梱のsetup.batを実行してインストール  
4. 同梱のrun.batを実行してアプリを起動  
5. AviUtl2を起動し、` \AviUtl2-Plugin\NzVideomni.aux2`をプレビュー画面にドラッグ＆ドロップ   
※ 最初のAIとして`LTX 2.3`がインストールされます。  
  
> - 動画生成AIを追加したいとき：`install-〇〇.bat`を実行してください。  
> ※例）`install-LTX25.bat`を実行すると`LTX 2.5`がインストールされます。  
> 
> - アップデートするとき：`git pull`を実行し、その後、`Setup.bat`を再度実行する（後述）  
 
  
### 1) gitをインストールする  
  
gitのインストールページ（ https://git-scm.com/install/windows ） から、あなたのマシンに合わせたインストーラーをダウンロードして実行し、gitをインストールしてください。  
> **Gitとは？**  
>…
