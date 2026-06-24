---
repo: "sungeer/hostess"
name: "hostess"
description: "An agentic coding tool that lives in your terminal."
url: "https://github.com/sungeer/hostess"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T04:42:18Z"
lastCommitAt: "2026-06-24T23:37:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 19
maintainers: ["sungeer"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbef56013ad6207d74facf8c0cbaacc0ec38db3d500ef6d43115265c78bf9715/sungeer/hostess"
---

# hostess

一个运行在命令行里的极简 AI 编码助手，可以帮你读代码、写代码、搜文件和执行命令。

## 依赖

- Python 3.10+

```bash
pip install python-dotenv pydantic langchain_openai
```

其余全部使用 Python 标准库。

## 快速开始

### 1. 配置环境变量

```bash
API_BASE_URL=https://api.deepseek.com
API_KEY=sk-no-key
MODEL=deepseek-v4-flash
MAX_TOKENS=65536
```

### 2. 启动

```bash
python src
```

### 3. 使用

直接输入自然语言指令：

```
>>> 帮我看看这个项目的目录结构
>>> 给 src/models.py 里的 User 类加个 phone 字段
>>> 用 pytest 跑一下 tests/ 目录下的测试
>>> 帮我分析这个 bug，定位出问题的代码
```

## 环境变量说明

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `API_BASE_URL` | `http://localhost:8000/v1` | LLM API 地址（OpenAI 兼容格式） |
| `API_KEY` | `sk-no-key` | API 密钥 |
| `MODEL` | `deepseek-chat` | 模型名称 |
| `MAX_TOKENS` | `16384` | 最大输出 token |
| `SYSTEM_PROMPT` | 内置默认 | 自定义系统提示 |

## 内置命令

| 命令 | 作用 |
|------|------|
| `/help` | 显示帮助 |
| `/c` | 重置对话历史 |
| `/exit` `/q` `/quit` | 退出程序 |

## 可用工具

Agent 拥有 5 个工具，由 LLM 自动选择调用：

| 工具 | 功能 | 参数 |
|------|------|------|
| `read` | 读取文件内容（带行号） | `file_path`, `offset`, `limit` |
| `write` | 写入文件（自动建目录） | `file_path`, `content` |
| `glob` | 文件模式匹配 | `pattern`, `path` |
| `grep` | 递归搜索文件内容 | `pattern`, `path`, `include` |
| `bash` | 执行 shell 命令 | `cmd` |

### 工具示例

```…
