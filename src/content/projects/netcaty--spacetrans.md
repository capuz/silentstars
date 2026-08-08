---
repo: "netcaty/SpaceTrans"
name: "SpaceTrans"
description: "A fast translation tool activated by triple-space hotkey"
readmeQualityOk: true
url: "https://github.com/netcaty/SpaceTrans"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 42
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2025-07-09T12:48:50Z"
lastCommitAt: "2026-08-08T04:33:15Z"
lastReleaseAt: "2026-08-08T04:34:39Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 29
maintainers: ["netcaty"]
openGraphImageUrl: "https://opengraph.githubassets.com/a73bcdffca6fef8bd91a80341cffdf73d74498d87b588d95b2f15420946d2dc2/netcaty/SpaceTrans"
---

# SpaceTrans .NET CLI

> [English Document README.md](https://github.com/netcaty/SpaceTrans/blob/HEAD/README-en.md)

一个基于 .NET 的控制台与系统托盘翻译工具，支持三次空格快捷键即时翻译。

## 🚀 使用演示

## 功能特性

- **全局快捷键检测**（连续三次空格）
- **智能内容识别自动翻译**
- **多翻译引擎支持**（有道 API、Google Gemini）
- **系统托盘集成** 带状态指示
- **跨平台支持**（主要面向 Windows）
- **图形界面配置设置**

## 系统要求

- .NET 8.0 或更高版本
- Windows（用于全局快捷键功能）

## 使用方法

### 托盘模式（默认）
```bash
SpaceTrans-Tray.exe
```
- 运行在系统托盘中
- 双击托盘图标打开设置
- 右键点击可访问菜单选项

### 控制台模式
```bash
SpaceTrans-CLI.exe
```
- 在命令行中运行并输出日志
- 适用于调试和查看实时日志信息

### 快捷翻译流程
1. 在任意输入框中打字
2. 按下 **三次空格键** 即可翻译输入的内容
3. 翻译结果将自动替换原文字

## 配置说明

### 初始设置
1. 双击托盘图标打开设置界面
2. 配置你偏好的翻译引擎：
   - **有道翻译**：需要 App Key 和 App Secret
   - **Gemini**：需要 Google API Key
3. 设置目标语言（en, zh, ja, ko, fr, de, es, ru）
4. 测试连接以验证配置是否正确

### 配置文件说明
所有设置保存在 [config.json](https://github.com/netcaty/SpaceTrans/blob/HEAD/file:///mnt/c/Users/netcat/Desktop/YoudaoTranslator/config.json) 中，示例如下：
```json
{
  "CurrentEngine": "Gemini",
  "TargetLanguage": "en",
  "YoudaoConfig": {
    "AppKey": "your-app-key",
    "AppSecret": "your-app-secret"
  },
  "GeminiConfig": {
    "ApiKey": "your-api-key"
  }
}
```

## 构建方式

### 开发环境构建
```bash
dotnet build
dotnet run…
