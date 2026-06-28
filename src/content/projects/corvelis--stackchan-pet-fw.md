---
repo: "Corvelis/stackchan-pet-fw"
name: "stackchan-pet-fw"
description: "Pet-like affection firmware for Stack-chan on M5Stack CoreS3  Visibility: Public"
url: "https://github.com/Corvelis/stackchan-pet-fw"
language: "C++"
languages: ["C++"]
languagePcts: [73]
stars: 30
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-05-14T23:08:51Z"
lastCommitAt: "2026-06-28T02:01:47Z"
lastReleaseAt: "2026-06-20T23:18:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 34
maintainers: ["Corvelis"]
openGraphImageUrl: "https://opengraph.githubassets.com/d92a3e0d4733a38a83f2d7dfcc73f28d49d6cf5f2fc992a832b11493787693bc/Corvelis/stackchan-pet-fw"
---

# Stack-chan Multi-Device Controller

[日本語](README.md) | [English](README.en.md)

M5Stack CoreS3 ベースのｽﾀｯｸﾁｬﾝ、M5Stack StopWatch、M5Stack AtomS3R Chatbot 向けの
ファームウェアです。表情表示、マイク/スピーカー音声ストリーミング、なでなで/ふりふり反応、
ぐるぐるモード、StreetPass、外部制御用の HTTP / WebSocket / USB Serial インターフェースを扱います。
CoreS3 ではサーボ動作とカメラ撮影も扱います。

このリポジトリに含めているのはデバイス本体側のファームウェアだけです。
README では、本体が公開する HTTP / WebSocket / USB Serial の口を記載しています。
外部クライアント側の実装方法は対象外です。

## できること

- PlatformIO / Arduino でビルドする CoreS3 / StopWatch / AtomS3R Chatbot ファームウェア
- LittleFS 上の JPG 表情画像を各デバイスの画面サイズで表示
- WebSocket JSON による状態制御
- WebSocket binary による PCM 音声再生とマイク音声送信
- Android 直結向けの USB CDC / USB Serial 制御チャンネル
- HTTP によるステータス取得、CoreS3 でのカメラ撮影
- CoreS3 の表情画面上のカメラボタンからクライアントへ撮影要求イベントを送信
- BLE による Stack-chan 同士のすれ違い通信
- すれ違いプロフィール、直近 30 件の履歴、未読通知、外部アプリ同期 API
- Wi-Fi STA 接続、SoftAP 直接接続、USB Serial 接続
- ブラウザからの Wi-Fi 設定、SSID スキャン、複数 Wi-Fi 保存
- ぐるぐるモード。デバイスごとの IMU / タッチ / ボタン操作で顔向き追従、blink、混乱アニメーションを表示
- 本体側のなでなで/ふりふり反応。反応方法はデバイスごとに異なります
- WebSocket イベントによる好感度管理
- なでなで、ふりふり、カメラボタン、接続開始、好感度レベル変化の本体側 interaction event
- Network / Display / Audio / Power / StreetPass を切り替えられる本体設定画面
- バッテリー、マイク、好感度、熱状態、低電力状態の画面オーバーレイ

## 必要なもの

- PlatformIO 開発環境
- 対象デバイス:…
