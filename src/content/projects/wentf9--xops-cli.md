---
repo: "wentf9/xops-cli"
name: "xops-cli"
description: "A high-performance, cross-platform operations CLI tool built on Go. Integrates multi-backend firewall management (firewalld/ufw/iptables/nftables), batch SSH execution, MCP service, and remote file management (SCP/SFTP). Aims to provide a lightweight, secure, and automated server management solution through a single binary."
originalDescription: "基于 Go 的高性能、跨平台运维 CLI 工具。集成了多后端防火墙管理 (firewalld/ufw/iptables/nftables)、SSH 批量执行、MCP 服务以及远程文件管理 (SCP/SFTP)。旨在通过一个二进制文件，提供轻量、安全且自动化的服务器管理方案。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wentf9/xops-cli"
homepage: "https://wentf9.github.io/xops-cli/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["automation", "cli", "cross-platform", "devops", "firewall", "golang", "mcp-server", "ssh-client", "sysadmin-tools", "skills"]
stars: 17
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-08-17T07:53:41Z"
lastCommitAt: "2026-09-19T01:17:33Z"
lastReleaseAt: "2026-05-22T03:03:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 65
maintainers: ["wentf9", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d52dd439ed58d6d4206d0928d8bffd6f3501097a5cdfe26b46ad66d55bb2ac8/wentf9/xops-cli"
---

# 🚀 XOps CLI

  <h3>Manage remote hosts in the terminal</h3>

  <p>
  </p>

[English](https://github.com/wentf9/xops-cli/blob/HEAD/README_en.md) | [简体中文](https://github.com/wentf9/xops-cli/blob/HEAD/README.md)

</div>

---

**XOps CLI** provides host management, SSH connections, file transfers, batch execution, and Playbook task orchestration in a single terminal tool. It can also be integrated into AI clients via **Model Context Protocol (MCP)**, with support for operation approval and audit configuration.

[User Guide](https://wentf9.github.io/xops-cli/) · [Command Reference](https://wentf9.github.io/xops-cli/reference/) · [Troubleshooting](https://github.com/wentf9/xops-cli/blob/HEAD/docs/troubleshooting/index.md)

Documentation is updated with the current source code and may contain unreleased changes. For options supported by your installed version, use `xops <command> --help`.

### ✨ Core Features

- 🤖 **AI-Native (MCP Server)**: Built-in Model Context Protocol server with support for command risk assessment, approval, and audit.
- 🛡️ **SSH Enhancement & TUI**: Support for importing OpenSSH config, bastion hosts, tunneling, and SSH Agent forwarding. Built-in **TUI…
