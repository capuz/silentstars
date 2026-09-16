---
repo: "BambooMaster/pico-i2s-pio"
name: "pico-i2s-pio"
description: "Library for outputting I2S with MCLK using Raspberry Pi Pico's PIO, featuring low-jitter mode with fractional clock division eliminated."
readmeQualityOk: true
url: "https://github.com/BambooMaster/pico-i2s-pio"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["audio", "i2s", "rp2040", "rp2350"]
stars: 13
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-18T12:56:44Z"
lastCommitAt: "2026-09-16T08:47:46Z"
lastReleaseAt: "2026-03-02T14:56:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 49
maintainers: ["BambooMaster"]
openGraphImageUrl: "https://opengraph.githubassets.com/d86769d24c23fcb90c3752fd4c0ba2566110560151e76e4443883458a598c31a/BambooMaster/pico-i2s-pio"
---

# pico-i2s-pio
Raspberry Pi Picoのpioを使ってMCLK対応のi2sを出力するライブラリです。RP2040/RP2350のシステムクロックをMCLKの整数倍に設定し、pioのフラクショナル分周を使わないlowジッタモードを搭載しています。また、PCM5102AやPT8211のような差動出力非対応のDACをデュアルモノで動作させる機能を搭載しています。i2sのslaveモードにも対応しました。

## 使用例
- [pico_usb_i2s_speaker](https://github.com/BambooMaster/pico_usb_i2s_speaker.git)  
RP2040/RP2350とtinyusbを使用した24bit96kHzのUSB DDCです。
- [usb_sound_card_hires](https://github.com/BambooMaster/usb_sound_card_hires.git)  
RP2040/RP2350を使用した24bit96kHzのUSB DDCです。pico-playgroundをベースにハイレゾ化・フィードバック実装をしました。

## 対応フォーマット
16,24,32bit 44.1kHz～384kHz  
送信キューの長さは3840サンプル（384kHz 10ms）です。

### i2s
BCLK: 64fs  
MCLK: 22.5792/24.576MHz  

|name|pin|
|----|---|
|DATA|data_pin|
|LRCLK|clock_pin_base|
|BCLK|clock_pin_base+1|
|MCLK|mclk_pin|

### PT8211
BCLK: 32fs  
MCLK: no  

|name|pin|
|----|---|
|DATA|data_pin|
|LRCLK|clock_pin_base|
|BCLK|clock_pin_base+1|

### AK449X EXDF (試験的機能)
BCK: 32fs  
MCLK: 32fs (BCK)  

|name|pin|
|----|---|
|DOUTL|data_pin|
|DOUTR|data_pin+1|
|WCK|clock_pin_base|
|BCK|clock_pin_base+1|
|MCLK|clock_pin_base+2|

### i2s dual
BCLK: 64fs  
MCLK: 22.5792/24.576MHz  
各DACのLがポジティブ、Rがネガティブとなります。  

|name|pin|
|----|---|
|DATAL|data_pin|
|DATAR|data_pin + 1|…
