---
repo: "ret2shell/ret2shell"
name: "ret2shell"
description: "A feature-riches CTF challenge platform!"
readmeQualityOk: true
url: "https://github.com/ret2shell/ret2shell"
homepage: "https://ret.sh.cn"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["ctf", "ctf-platform", "ctf-solutions", "ctfs"]
stars: 250
forks: 21
openIssues: 17
closedIssues: 52
watchers: 2
contributors: 39
recentReleases: 0
createdAt: "2023-06-22T21:28:29Z"
lastCommitAt: "2026-08-16T04:09:45Z"
lastReleaseAt: "2026-01-15T18:11:48Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 40
maintainers: ["Reverier-Xu", "lqc11cql", "Cnily03"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/657344518/f7c1a23e-3161-40da-a896-d6ea45ecf459"
discussionCount: 2
---

</a>
  <p><em>A feature-riches CTF challenge platform</em></p>

</div>

## 📣 Support

QQ Group: [1104642385](https://qm.qq.com/q/u0BUcpU6l2)

Telegram: [t.me/ret2shell](https://t.me/ret2shell)

## Preview

## 🚀 Deployment

Ret2Shell is single binary with requirements of `redis/valkey 8+`, `postgres 18+`, `nats 2+` and optional `VictoriaLog` and `registry`.

All the components could be deploy anywhere, so you can deploy ret2shell as you like.

## 🛠️ Development

### 1. Install Toolchains

#### Install Rust for backend

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Then use `rustup` to install the latest stable toolchain.

```bash
rustup install stable
```

You are done for backend development.

#### Install Node.js and Pnpm for frontend

```bash
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash -
```

Then install pnpm

```bash
corepack enable pnpm
```

### 2. Setup Development Environment

#### Setup frontend

Frontend files are located in [web/](https://github.com/ret2shell/ret2shell/blob/HEAD/web/) directory. Enter the directory or add `--prefix=web` option after `pnpm` command.

Setup frontend dependencies:

```bash
pnpm install…
