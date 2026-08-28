---
repo: "xizheyin/deepseek-harness-rs"
name: "deepseek-harness-rs"
description: "Deepseek harness rewritten by rust"
readmeQualityOk: true
url: "https://github.com/xizheyin/deepseek-harness-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 163
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T16:15:27Z"
lastCommitAt: "2026-08-28T14:35:13Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 25
maintainers: ["xizheyin"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed6d78d46025dc1f080c9a971b0c47e82ace379caee00e6030265257db07ce83/xizheyin/deepseek-harness-rs"
---

<h1><code>dsh-rs</code></h1>
  <p><strong>用 Rust 构建的 DeepSeek 终端编程 Agent</strong></p>
  <p>在真实代码仓库里持续对话：搜索和阅读代码、应用补丁、运行命令，并在长会话中保存、恢复与压缩上下文。</p>
  <p>
  </p>
  <p>
  </p>
</div>

> [!WARNING]
> `dsh` 当前是 `0.1.0-alpha.0` 预发布版本，源码安装候选已通过 Phase 0–11
> 验收，但尚无受支持的稳定发行版、预编译包或 crates.io 发布。

`dsh-rs` 是项目名，安装后的命令是 `dsh`。这是一个独立的社区开源项目，Agent 内核以固定版本的
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 为行为参考，
再用适合 Rust CLI 的类型、并发模型和安全边界重新实现；它不是官方产品，也不是
TypeScript 源码的逐行翻译。

</p>

## 快速开始

仓库固定使用 Rust 1.85.0。安装 [Rustup](https://rustup.rs/) 后，在仓库根目录执行：

```console
cargo install --locked --path .
export DEEPSEEK_API_KEY='你的 DeepSeek API Key'
dsh --workspace .
```

默认 `--tui auto` 会在有颜色、`xterm*`、非 tmux/Screen/Zellij 且初始窗口至少
44×12 时启用增强界面。看到 `❯` 后直接输入任务并按回车；其他环境会保守使用
零 ESC 的 `dsh >` 线性界面。可用 `--tui enhanced` 或 `--tui linear` 明确选择；
`--reduced-motion` 会关闭增强界面的周期动画；`--no-color`、`NO_COLOR` 和
`TERM=dumb` 会强制线性界面。例如：

```text
请先了解这个项目，再告诉我最值得修复的三个问题。
```

若你愿意让经过工作区路径、冲突和大小检查的 `apply_patch` 自动提交，可显式使用：

```console
dsh --workspace . --approval-mode auto-edit
```

该模式不自动批准 Shell 或插件，也不用于 `--prompt`/管道脚本；新进程和恢复会话默认
回到 `ask`，需要时必须再次传入。

API Key 只从进程环境按请求读取。不要把真实密钥写入提示词、工具参数或 Shell…
