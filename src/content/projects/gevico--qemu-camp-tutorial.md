---
repo: "gevico/qemu-camp-tutorial"
name: "qemu-camp-tutorial"
description: "QEMU Camp Tutorial"
url: "https://github.com/gevico/qemu-camp-tutorial"
homepage: "https://qemu.gevico.online"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [100]
stars: 42
forks: 54
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 43
recentReleases: 0
createdAt: "2026-01-07T15:41:26Z"
lastCommitAt: "2026-07-01T07:05:20Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 52
maintainers: ["zevorn", "random25160765-collab", "trace1729"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ded3c605ff773d115096e7f45654031ce890fd538e3bf2d637aac55598ccd4/gevico/qemu-camp-tutorial"
---

# QEMU Camp Tutorial

QEMU Camp Tutorial 是 QEMU 训练营的在线技术文档，聚焦 C/Rust 语言与 QEMU 虚拟化/模拟器技术的深度结合，旨在通过系列技术博客、代码示例、原理解析，帮助开发者理解 QEMU 内部机制（如设备模拟、内存虚拟化、中断处理等），并掌握用 C/Rust 开发 QEMU 组件、优化 QEMU 模块的方法。​

无论是虚拟化领域初学者、C/Rust 技术实践者，还是开源爱好者，都能从本项目中获取 QEMU 底层原理的清晰解读与 C/Rust 落地实践的参考案例。

## 本地开发

项目已经提供 `Makefile`，常用命令如下：

```bash
make setup   # 自动创建 .venv，并安装 Python / Node 依赖
make format  # 自动修复中文排版
make serve   # 自动使用 .venv 启动本地预览
make build   # 构建站点
```

如需做更严格的 Markdown 规范检查/修复，可执行：

```bash
make mdlint    # 默认只检查当前改动过的 Markdown 文件
make mdformat  # 默认只修复当前改动过的 Markdown 文件
```

如需指定文件，可传入 `MD_FILES`：

```bash
make mdlint MD_FILES="README.md CONTRIBUTING.md"
```

如需查看全部命令，可执行：

```bash
make help
```

## 贡献指南​

本项目欢迎社区成员及全球开源开发者参与贡献，贡献方向包括：

- 文档补充：完善某章节的内容、补充相关实践案例；​

- 代码优化：改进示例代码、修复 Bug、新增实用工具；

- 需求反馈：通过 Issue 提出文档漏洞、功能需求。

具体贡献流程以及规范，请查阅 [CONTRIBUTING.md](CONTRIBUTING.md)

## 维护团队​

- 发起组织：[格维开源社区](https://github.com/gevico)

- 核心维护团队：[QEMU 训练营项目组](https://github.com/gevico/qemu-training-camp)

- 社群支持：[QEMU 训练营 QQ 群](https://qm.qq.com/q/DxIhHgpItM)

## 许可证​

- 文档部分（docs/ 目录）：采用 CC BY-SA 4.0 国际许可证（可共享、修改，需注明出处且以相同许可证分发）。​

- 代码部分（examples/、scripts/ 目录）：采用 MIT 许可证（可自由使用、修改、分发，需保留版权声明）。​
