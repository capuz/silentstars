---
repo: "DuckDuckStudio/Sundry"
name: "Sundry"
description: "Sundry 是一个 WinGet 相关的工具，帮您更方便地移除清单、修改清单、分析验证错误等"
readmeQualityOk: true
url: "https://github.com/DuckDuckStudio/Sundry"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["logs-analysis", "winget", "winget-pkgs"]
stars: 12
forks: 0
openIssues: 36
closedIssues: 89
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-22T15:05:21Z"
lastCommitAt: "2026-08-14T05:14:16Z"
lastReleaseAt: "2025-03-14T02:07:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 63
maintainers: ["DuckDuckStudio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a64c1ab274b8886043a85c5bd32c84548e59f3da19915733e7ee87a3535857fe/DuckDuckStudio/Sundry"
---

# Sundry

Sundry 是一个 WinGet 相关的工具，帮您更方便地移除清单、修改清单、分析验证错误等。  

## 如何获取
### Windows
可以前往 [GitHub Release](https://github.com/DuckDuckStudio/Sundry/releases) 页面下载安装程序或 zip/7z 归档。  
或者使用 WinGet 获取:  
```bash
winget install --id DuckStudio.Sundry --source winget --exact
```

### Ubuntu
[从源构建](#ubuntu-1)。  

## 使用说明
当您获取本工具后，请先使用这个命令初始化配置文件:  

```bash
sundry config init
```

> 题外话: 这个配置文件就是我将其从我自己的工具变为这里的工具的方法 XD  
> 参见 [配置文件文档](https://github.com/DuckDuckStudio/Sundry/blob/HEAD/docs/config/) 了解有关配置文件的更多说明。  

初始化完配置文件后用以下命令确认下:  

```bash
sundry config show
```

如果有任何地方不对，请使用这个命令修改对应键的值:  

```bash
sundry config "<配置项>" "<值>"
```

> 如果你想手动编辑配置文件，请运行 `sundry config edit`。  

## 可用命令

<details>
  <summary><code>sundry help</code></summary>

  

- 别名: 任何非命令字符
- 作用: 显示 Sundry 帮助

</details>

<details>
  <summary><code>sundry ver</code></summary>

  

- 别名: `ver`, `版本`, `version`, `Version`, `--version`, `--ver`, `-v`
- 作用: 显示 Sundry 版本和安装位置

</details>

<details>
  <summary><code>sundry remove</code></summary>

  

> 截图来自拉取请求: https://github.com/microsoft/winget-pkgs/pull/265074  

- 别名: `移除`, `remove`
- 作用: **移除一个指定的包的指定版本**，并在移除前自动检查该版本是否确实存在问题。可以指定理由或跳过自动检查。**默认理由为“安装程序URL在GitHub…
