---
repo: "lz-wang/image-tool-box"
name: "image-tool-box"
description: "Image compress, watermark, upload, all in one toolbox"
readmeQualityOk: true
url: "https://github.com/lz-wang/image-tool-box"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [65, 35]
topics: ["compress-images", "watermark-image"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-08T16:57:48Z"
lastCommitAt: "2026-08-28T14:29:07Z"
lastReleaseAt: "2026-08-13T10:18:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 43
maintainers: ["lz-wang"]
openGraphImageUrl: "https://opengraph.githubassets.com/05852d75a3387aac2a34229e37d882618f33072d88e5ff41fb1ec16940c3db40/lz-wang/image-tool-box"
---

</p>

# GO 图像工具箱

> **English**: [README.en.md](https://github.com/lz-wang/image-tool-box/blob/HEAD/README.en.md)

> 外部依赖说明见 [docs/build-bins.md](https://github.com/lz-wang/image-tool-box/blob/HEAD/docs/build-bins.md)。
> 
> CI 当前会并行构建以下平台：
> 
> - macOS amd64 / arm64
> - Linux amd64 / arm64
> - Windows amd64 / arm64
> 
> Release 产物中，macOS / Linux 使用 `.tar.gz`，Windows 使用 `.zip`；Windows 可执行文件和内置压缩工具均带 `.exe` 扩展名。

## 安装

新版本发布后，可通过 Homebrew（macOS / Linux）安装：

```bash
brew tap lz-wang/tap
brew install lz-wang/tap/itb
```

> [!WARNING]
> **macOS 运行提示**
>
> 如果在 macOS 上运行二进制时提示“无法验证开发者”，并且每次都需要到“安全性与隐私”里手动放行，内部使用场景下可以在下载或解压后先移除 `quarantine` 标记：
>
> ```bash
> xattr -d com.apple.quarantine your_binary
> ```

## 压缩图片

自动检测图片格式（PNG/JPEG）并压缩：

```bash
# 压缩 PNG 图片（覆盖原文件）
./itb compress -i photo.png

# 压缩 JPEG 图片（覆盖原文件）
./itb compress -i photo.jpg

# 指定输出文件
./itb compress -i photo.png -o compressed.png

# 指定压缩质量（1-100，默认 80）
./itb compress -i photo.jpg -q 90
```

<details>
<summary>命令参数与压缩管道</summary>

| 参数 | 说明 |
|------|------|
| `-i, --input` | 输入图片文件路径 |
| `-o, --output` | 输出图片文件路径（不指定则覆盖原文件） |
| `-q, --quality` | 压缩质量 1-100（默认 80） |

**压缩管道**

- **PNG**: `pngquant` → `oxipng`（有损 + 无损双重压缩）…
