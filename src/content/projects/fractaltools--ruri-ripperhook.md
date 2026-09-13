---
repo: "FractalTools/Ruri.RipperHook"
name: "Ruri.RipperHook"
description: "恨“别人的弱小”，本质是恨“曾经弱小的自己”"
readmeQualityOk: true
url: "https://github.com/FractalTools/Ruri.RipperHook"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 24
forks: 11
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-12-11T08:26:08Z"
lastCommitAt: "2026-09-13T08:30:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["ShiyumeMeguri"]
openGraphImageUrl: "https://opengraph.githubassets.com/c860811214b87e8efe190a340dbc015113dd0af5c0d43d70d98d54c6ba24afef/FractalTools/Ruri.RipperHook"
---

# Ruri-RipperHook

一个面向跨引擎资产管线的 AOP Hook 框架。在不修改上游源码的前提下,扩展 AssetRipper、FModel 等 Unity / UE 数据处理工具链的读取、转换与导出能力,把来源各异的资产——不同引擎版本、不同项目自定义的容器与序列化格式——收敛成统一的 Unity 数据表示(YAML / Unity 对象语义)。Shader 链路是这条转换通路当前最明确的先行落点。

## 下游:面向 Blender 的技术美术管线

本仓库产出的标准 Unity YAML,是 [RuriRipperImporter](https://github.com/ShiyumeMeguri/RuriRipperImporter) Blender 插件的直接输入——该插件零依赖解析 Unity 原生 `Force Text` 序列化文本,把网格、真实骨架、材质与动画 clip 原样重建进 Blender,不经过 FBX 转换、不重新绑骨、不丢顶点流。这条管线服务于角色建模、绑骨、MMD 风格动画等 3D 内容创作与技术美术研究工作流:Ruri-RipperHook 负责让来源各异的资产最终都能落成同一份干净的 Unity 项目结构,Blender 插件只需要认识"标准 Unity YAML"这一种形态。

## 架构定位

Ruri-RipperHook 是一个独立于上游工具的 AOP 扩展层——上游代码(AssetRipper、FModel)作为只读 submodule 冻结,差异化行为一律通过运行时方法 Hook 注入,而不是直接修改或 fork 上游。核心是一套基于 attribute 的 Hook 注册框架(`Ruri.Hook`),覆盖方法重定向、构造接管、IL 重写、引用计数与生命周期管理;在此之上,是一条把 FModel / UE 等异源工具链产出向 Unity 数据模型靠拢的转换通路。

这种拆分的工程意义:上游升级时不需要 rebase 补丁集,新增数据来源不需要 fork 新工具,跨工具链共通的导出 / shader / 网格处理逻辑只在 Ruri 侧实现一次。

## 工作机制

所有扩展都是从一个继承 `RipperHookCommon` 的类开始的,通过 `[RipperHook(...)]` 标注其适用范围,内部成员通过 attribute 描述要 hook 的目标方法:

```csharp
[RipperHook(...)]
public class MyHook : RipperHookCommon
{
    [RetargetMethod(typeof(TargetClass), nameof(TargetClass.TargetMethod),…
