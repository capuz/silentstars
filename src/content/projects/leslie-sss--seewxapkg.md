---
repo: "Leslie-SSS/seeWxapkg"
name: "seeWxapkg"
description: "极简实用的微信小程序反编译 Web 工具"
readmeQualityOk: true
url: "https://github.com/Leslie-SSS/seeWxapkg"
homepage: "https://seewxapkg.keepbuild.cn"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [50, 28]
topics: ["decompile", "decompiler", "mini-program", "reverse-engineering", "unpack", "wechat", "wechat-app", "wechat-mini-program", "wexin", "wxapkg"]
stars: 93
forks: 26
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-31T08:15:39Z"
lastCommitAt: "2026-08-28T14:34:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 32
maintainers: ["github-actions[bot]", "Leslie-SSS"]
openGraphImageUrl: "https://opengraph.githubassets.com/8074254f2839fcd11b4ec1f348524bdf307cd0b480b2c9a6f2bd813bdacaf3a4/Leslie-SSS/seeWxapkg"
---

<h1>See Wxapkg</h1>
  <p><strong>开源、自托管的微信小程序 <code>.wxapkg</code> 反编译工具</strong></p>
  <p>上传文件，自动解密、解包、反编译和整理代码，完成后直接下载 <code>src/</code> 工程</p>
  <p>
  </p>
  <p>
    · <a href="#快速开始">快速开始</a>
    · <a href="#支持范围与限制">支持范围</a>
    · <a href="#api">API</a>
    · <a href="#参与贡献">参与贡献</a>
  </p>
</div>

  </a>
</p>

See Wxapkg 可以直接在浏览器中反编译 `.wxapkg` 文件。它会自动识别包类型，在需要时使用 AppID 解密，并完成解包、反编译、排版整理和结果检查。

> [!IMPORTANT]
> 本项目所称“反编译”是对编译产物的**尽力静态恢复**，不是提取原始源码。结果可能缺少原变量名、注释、目录结构或运行时生成内容；“反编译结果已生成”也不代表与原工程完全一致或可以直接运行。

## 主要功能

- 支持普通包、加密包和常见微信 4.x 结构；加密包需要匹配的 AppID。
- 静态反编译，不通过 `eval`、`Function` 或 VM 执行包内 JavaScript。
- 自动反编译并整理 JSON、JavaScript、WXML 和 WXSS，无法确认的内容会如实标记。
- 提供实时进度、结果状态、静态质量分、检查提示和技术报告。
- 下载 ZIP 只包含 `src/`，原始解包依据不会混入交付文件。
- 支持在线使用与单机 Docker Compose 自托管，不依赖外部数据库、缓存或消息队列。

## 快速开始

### 在线使用

打开 [seewxapkg.keepbuild.cn](https://seewxapkg.keepbuild.cn/)，选择或拖入 `.wxapkg` 文件即可。代码整理和深度反编译默认开启；加密包还需要填写对应的 AppID。

> 公开体验站会在处理期间暂存上传内容；正常终态会立即删除原始上传，异常遗留及结果数据最长按 72 小时策略清理。敏感、私有或未获授权的软件包请勿上传，建议在受控环境中自托管处理。

### Docker Compose（推荐）

只需要 Docker Engine 与 Docker Compose：

```bash
git clone https://github.com/Leslie-SSS/seeWxapkg.git
cd seeWxapkg
docker compose up -d --build
```

启动后可访问：

- Web…
