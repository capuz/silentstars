---
repo: "7452323/douyin-sign"
name: "douyin-sign"
description: "TikTok/Douyin all-in-one HTTP signing algorithms — Mobile (X-Gorgon, X-Argus, X-Ladon, X-Khronos, X-SS-STUB), Web (X-Bogus, X-Gnarly), TTEncrypt, and nightly CI for automatic constant extraction"
readmeQualityOk: true
url: "https://github.com/7452323/douyin-sign"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 23
forks: 13
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-30T10:35:30Z"
lastCommitAt: "2026-09-29T10:05:44Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 49
undervaluedScore: 18
maintainers: ["7452323"]
openGraphImageUrl: "https://opengraph.githubassets.com/df68065e7d66a4b9042162a8670710b91791af12349c1ee34bc3705b72f16613/7452323/douyin-sign"
---

# douyin-sign / 抖音全算法签名包

---

## 中文介绍

### 概述

**douyin-sign** 是一个纯 Python 实现的抖音/TikTok 全算法签名包。它封装了抖音移动端 App 中使用的全部签名算法，帮助开发者一站式生成请求所需的签名头。

### 功能特性

- ✅ **X-Gorgon** — 请求签名（`8404a0ae1000` arm64 / `0404a0ae1000` arm 前缀）
- ✅ **X-Argus** — 风控/设备指纹签名（protobuf + SIMON + AES）
- ✅ **X-Ladon** — 附加风控签名
- ✅ **X-Khronos** — 请求时间戳签名
- ✅ **X-SS-STUB** — 请求体 MD5 摘要签名
- ✅ **X-Bogus** — 网页端/轻量签名
- ✅ **X-Gnarly** — 网页端新版签名
- ✅ **A-Bogus** — SM3 派生的网页端签名
- ✅ **TTEncrypt** — TikTok 自定义加密算法

### 安装

```bash
pip install douyin-sign
```

### 快速开始

```python
from sign import sign_all

headers = sign_all(
    method='POST',
    url='https://...',
    body=b'...',
    cookies='...',
)

# headers 现在包含 X-Gorgon, X-Khronos, X-SS-STUB 等
```

### 常量目录结构

```
constants/
└── current/
    ├── sign_key.b64          # Base64 编码的签名密钥（44 字节）
    ├── gorgon_table.hex      # Gorgon 算法使用的十六进制查表常量（20 字节）
    ├── protobuf_fields.json  # Protobuf 字段编号映射表
    ├── apk_version.txt       # 最近一次检查对应的 TikTok 版本
    └── last-check.json       # 最近一次检查的时间 / 版本 / 结果（审计用）
```

常量文件随抖音 App 版本更新。`current/` 目录始终指向最新已验证的常量集。历史常量保存在带版本号的目录中（例如 `constants/v38.3.0/`）。

### 常量加固（Constants hardening）

自 TikTok 4x 版本起，APK 内的常量不再以明文形式存在：

-…
