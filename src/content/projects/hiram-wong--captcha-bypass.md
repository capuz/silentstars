---
repo: "Hiram-Wong/captcha-bypass"
name: "captcha-bypass"
description: "ddddocr-node二进制版本"
url: "https://github.com/Hiram-Wong/captcha-bypass"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 30
forks: 22
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2025-07-14T13:22:21Z"
lastCommitAt: "2026-06-27T06:24:20Z"
lastReleaseAt: "2026-06-26T18:15:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 64
maintainers: ["Hiram-Wong", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/62fb6e30294961bfa65da4ddce6694419ac6c9fda90db497817db38054ae4298/Hiram-Wong/captcha-bypass"
---

<br>
  </a>
</p>

</div>

</div>

## 📌 介绍

基于 `onnxruntime-wasm` 实现跨平台 ONNX 模型推理，支持 Bun 编译为独立二进制，无需 GPU 即可运行。

## 📖 使用

### 部署运行

#### 方式一：二进制 + 模型（推荐）

1. 从 [Releases](https://github.com/Hiram-Wong/captcha-bypass/releases) 下载对应平台的二进制和模型文件。
2. 将二进制和 `models/` 目录放在同一文件夹下：

```
captcha-bypass/
├── captcha-bypass-mac-arm64   # 二进制（按实际平台选择）
└── models/
    ├── detect.onnx
    ├── ocr.onnx
    ├── ocr.json
    └── rotate.onnx
```

3. 配置环境变量后启动：

```bash
# macOS / Linux
chmod +x captcha-bypass-mac-arm64
./captcha-bypass-mac-arm64

# Windows
./captcha-bypass-win-x64.exe
```

> 模型文件通过环境变量指定；不设置时默认加载二进制同级 `models/` 目录下的对应文件。

#### 方式二：Docker

```bash
docker pull ghcr.io/hiram-wong/captcha-bypass:latest
docker run -d -p 7788:7788 ghcr.io/hiram-wong/captcha-bypass:latest
```

> 模型已内置于镜像，无需额外挂载。通过 `-e` 传环境变量覆盖配置。

### 环境变量

| 配置               | 类型                              | 默认值           | 说明                                                                |
| :----------------- | :-------------------------------- | :--------------- | :------------------------------------------------------------------ |
| PORT               | `number`                          | 7788             | 服务端口…
