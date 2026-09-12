---
repo: "vay1314/CtYun-Keeper"
name: "CtYun-Keeper"
description: "一个运行在 Docker 中的天翼云电脑管理工具，整合云电脑保活、AI 对话积分任务、使用时长任务、积分与任务状态查询、自动兑换以及 Web 管理面板"
readmeQualityOk: true
url: "https://github.com/vay1314/CtYun-Keeper"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 15
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-04T08:35:09Z"
lastCommitAt: "2026-09-12T08:04:24Z"
lastReleaseAt: "2026-09-10T17:37:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 49
maintainers: ["vay1314", "bytehola"]
openGraphImageUrl: "https://opengraph.githubassets.com/0edff4e48776350f96bd8f3af4655717391864df102b527ebe3916ce149b5f02/vay1314/CtYun-Keeper"
---

# CtYunKeeper

`CtYunKeeper`（天翼云守护）是面向天翼云电脑的轻量管理服务，提供多账号保活、平台积分任务、AI 对话、使用时长跟踪、任务状态查询、自动兑换和 Web 管理界面。

> 非中国电信或天翼云官方项目。平台接口可能调整，请遵守服务条款并自行评估使用风险。

## 界面预览

### 仪表盘

### 账号管理

### 任务中心

### 系统设置

## 快速启动

```bash
mkdir -p ./ctyun-keeper-data

docker run -d \
  --name ctyun-keeper \
  -p 9845:9845 \
  -v "$(pwd)/ctyun-keeper-data:/app/data" \
  --restart unless-stopped \
  yin26287903/ctyun-keeper:latest
```

打开 `http://服务器IP:9845`，首次访问先设置至少 8 位的管理密码，然后在“账号管理”添加天翼云账号。设备触发短信验证时，页面会自动进入验证码输入流程。

如果只在可信局域网内使用，可以在“系统设置 → 访问安全”中选择“局域网免登录”。关闭密码登录后，请勿将端口直接暴露到公网。

宿主机端口冲突时只需修改左侧端口，例如 `-p 19845:9845`。

## Windows 版本

GitHub Releases 提供以下 Windows 压缩包：

- `windows-amd64`：适用于绝大多数 Intel、AMD 处理器电脑。
- `windows-arm64`：适用于 Windows ARM64 设备。

下载对应 ZIP 并完整解压，目录内容如下：

```text
CtYunKeeper-vX.Y.Z-windows-amd64/
├─ ctyun-keeper.exe
├─ ctyun-keeper-updater.exe
├─ package-manifest.json
├─ config.env
├─ config.env.example
├─ start.bat
├─ README.txt
└─ static/
```

按需修改 `config.env` 后双击 `start.bat`，再访问 `http://127.0.0.1:9845`。不要只复制 EXE，Web 页面还需要同目录中的 `static` 文件夹。

## 从源码构建

```bash
git clone https://github.com/vay1314/CtYun-Keeper.git
cd CtYun-Keeper
sh deploy.sh
```

也可以直接构建：

```bash
docker build -f…
