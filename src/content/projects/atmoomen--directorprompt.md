---
repo: "AtmoOmen/DirectorPrompt"
name: "DirectorPrompt"
description: "基于 C# 的 AI 非扮演型交互式小说游玩框架"
readmeQualityOk: true
url: "https://github.com/AtmoOmen/DirectorPrompt"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-04T19:47:20Z"
lastCommitAt: "2026-07-15T05:56:26Z"
lastReleaseAt: "2026-07-10T14:57:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["AtmoOmen", "kanyeishere", "zfxsquare"]
openGraphImageUrl: "https://opengraph.githubassets.com/5967cc704ccddf06f60577455cabd6ab0310b49beb09ccd781729043d66fd87b/AtmoOmen/DirectorPrompt"
---

# DirectorPrompt

</p>

  <strong>AI 驱动的非扮演型交互式叙事框架</strong>
</p>

---

## 核心体验

DirectorPrompt 是一款 AI 交互式叙事桌面软件，核心定位是**导演模式**：用户不扮演任何角色，不出现在剧情中，而是以上帝视角、通过不同类型的指令推动整个世界运行，AI 负责生成叙事内容。

与市面上主流的 AI 小说工具不同, DirectorPrompt 从零搭建了一整套支撑系统 —— 世界知识管理、故事记忆召回、状态变量更新、时间线切换, 切实保障单一对话的长期游玩体验。

---

## 快速开始

### 环境要求

- Windows 11
- .NET 10 SDK
- (可选) Ollama 用于本地模型

### 下载

进入 [Release 页面](https://github.com/AtmoOmen/DirectorPrompt/releases), 下载 `DirectorPrompt-win-Portable.zip`, 解压缩后运行 `DirectorPrompt.exe`

### 首次使用

1. 启动软件, 进入主界面
2. 打开设置界面, 配置提供商、模型, 为各个代理任务、向量生成分配模型, 保存
3. 创建新项目, 支持导入本软件的数据包或 SillyTavern 导出的角色卡
4. 编写/修改项目提示词、填充知识条目、设定人物分类、规定状态系统, 保存
5. 发送消息, 开始游玩

---

## 差异

| | 常见角色扮演工具 | DirectorPrompt |
|--|-------------|----------------|
| 用户身份 | 扮演特定角色参与剧情 | 上帝视角, 通过指令推动故事发展 |
| 知识系统 | 关键词/正则匹配, 差一个字符就无法召回 | 向量语义检索, 只要语义相近就能匹配 |
| 记忆管理 | 靠上下文硬塞与模型注意力硬顶 | 向量语义+时间衰减混合召回, 智能控制上下文长度, 原文始终保存, 再多信息也不会丢 |
| 状态系统 | 无 | 底层支持状态系统, 支持变量、表达式、枚举, 还有与知识共联的阶段切换 |
| 时间管理 | 无 | 一维坐标轴, 支持随意切换故事时间场景, 智能管理记忆可见性 |
| 人物系统 | 以角色卡为单位, 只能定义单个人物详细信息 | 有丰富的多人物类别描写、指定、继承, 还能为人物类别指定状态系统, 人物间构建关系网络 |
| 成本 | 单一对话越长, 成本越高 | 始终只塞有用的信息, 单次游玩缓存命中高 |

---

## 功能

### 指令组合

底部输入区并非简单聊天框, 其支持多类型指令组合、排序, 传递丰富的语义与控制:

-…
