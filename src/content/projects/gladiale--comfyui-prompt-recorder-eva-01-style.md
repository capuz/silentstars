---
repo: "Gladiale/ComfyUI_Prompt_Recorder_EVA-01-Style"
name: "ComfyUI_Prompt_Recorder_EVA-01-Style"
description: "comfyuiのprompt wordを記録と組み合わせるためのchromeの拡張機能 (react)"
readmeQualityOk: true
url: "https://github.com/Gladiale/ComfyUI_Prompt_Recorder_EVA-01-Style"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-30T02:39:29Z"
lastCommitAt: "2026-08-01T06:15:57Z"
lastReleaseAt: "2026-07-31T01:03:30Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["Gladiale"]
openGraphImageUrl: "https://opengraph.githubassets.com/9073b32d471c65fbbfca077407dd13b50c02106ce90ac25e31881fd1ee23ac4d/Gladiale/ComfyUI_Prompt_Recorder_EVA-01-Style"
---

# vibe coding
- MODEL: glm 5.2 + grok 4.5
- IDE:   vscode + claude code + cc switch

# ComfyUI Prompt Recorder

エヴァンゲリオン初号機をテーマにした、ComfyUI プロンプトワード記録 Chrome 拡張機能（Manifest V3）。
プロンプトワードを階層化されたグループへ記録・選定し、重複を排除した最終プロンプトを生成する。
選択組み合わせはメタデータ付きプリセットとして保存・還元できる。
総括欄には文字列変換ルールを適用でき、元ワード本文は変えずに表示・コピー内容だけを変換できる。

# 操作方法
- **グループ**: シングルクリック折り畳み、ダブルクリック編集、ドラッグ&ドロップ順調整＆入れ子機能。
- **ワード**: シングルクリック選択、ダブルクリック編集、ドラッグ&ドロップ順調整、右クリックで強度調整・グループ移動。
- **総括欄変換ルール**: SYNTHESIS ヘッダのスライダーアイコンからルールを追加・適用・並替。有効ルールのみ一覧順にリテラル置換。
- **プリセット**: SELECTED ヘッダから保存（ブックマーク）・一覧（レイヤー）。一覧は六角形ハニカムで並替、詳細カードから還元・更新・編集・削除。

## 機能

- **ツリー状グループ**: グループは無制限にネスト可能（CHARACTER > Upper Body > Hair …）
- **ワード選択/編集**: シングルクリックで選択切替、ダブルクリックで `text` / `note` 編集
- **注釈 (note)**: ワード横の緑の印で注釈の有無を表示
- **横断検索**: ワード本文と注釈を検索し、ヒットしたワードと直属グループ名のみ表示
- **折り畳み**: 選択ワードを内包するグループに緑の徽章を表示
- **総括欄 (右上)**: 選択ワードを出現順に集約し、変換ルール適用 → 強度付与 → 正規化で重複排除。カンマ/改行切替・クリップボードコピー。コピー基準からの差分表示
- **総括欄変換ルール**: 元ワード本文は変更せず、表示・コピー内容だけを文字列置換
  - 有効ルールを一覧順に逐次適用（リテラル置換。正規表現は解釈しない）
  - 変換後が空文字になったワードは表示から除外
  - 強度表記は変換後に付与
  - ルール追加/編集/適用切替/削除/DnD並替。新規ルールは無効状態で登録
  - 有効ルールがある場合、ヘッダのスライダーボタンが発光
- **選択済み一覧 (右下)**: クリックで即時選択解除、強度ステッパー。ヘッダからプリセット保存・一覧を起動
- **プリセット**: 選択組み合わせ +…
