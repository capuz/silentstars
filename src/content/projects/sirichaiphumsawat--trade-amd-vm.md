---
repo: "sirichaiphumsawat/trade-amd-vm"
name: "trade-amd-vm"
description: "BTCUSDT Perp trading toolkit — AMD + V+M strategies + macOS/Telegram alerts"
readmeQualityOk: true
url: "https://github.com/sirichaiphumsawat/trade-amd-vm"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-21T20:56:21Z"
lastCommitAt: "2026-08-04T06:11:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/71bc1ef8a9c722ff8f75e6f325008c4ac817d885b88c9d7674b4912a3058a6e6/sirichaiphumsawat/trade-amd-vm"
---

# BTC Trading — AMD + V+M Strategies

ระบบเทรด BTCUSDT Perpetual บน **Pionex Futures** ด้วย 2 กลยุทธ์คู่กัน

## Strategies

| Strategy | เหมาะกับ | Entry direction | Script |
|---|---|---|---|
| **AMD** (Accumulation/Manipulation/Distribution) | ตลาด range / มี sweep ชัด | LONG / SHORT | `amd_full.py` |
| **V+M** (V reversal + M กลับหัว) | Uptrend | LONG only | `vm_backtest.py` |

Strategy เต็มอยู่ใน [`Trade.md`](https://github.com/sirichaiphumsawat/trade-amd-vm/blob/HEAD/Trade.md)

## Account Setup

- **Exchange**: Crypto futures (any — Binance/Bybit/Pionex/etc.)
- **Position sizing**: ตามดุลพินิจ (margin, leverage, budget) — เก็บเป็น private notes
- **Tested on**: high leverage (50x+) crypto futures

## Universal Rules

- **Minimum fib_leg: $150** (filter thin setups)
- **TP scale-out 3 ระดับเสมอ**: 350% / 600% / 800% ของ fib_leg
- **Timeout**: ไม่มี hard timeout — setup ค้างได้ถ้า structure ยังไม่เสีย (retrace ≤ 65%, ไม่มี M ใหม่)

## Install

```bash
pip3 install -r requirements.txt
```

## Usage

### เช็ค setup ปัจจุบัน (รัน 2 คำสั่งคู่กัน)

```bash
python3 amd_full.py live      # text strategy verdict
python3 chart_setup.py        # chart visualization (auto-open Preview)…
