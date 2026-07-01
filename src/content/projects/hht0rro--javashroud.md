---
repo: "HHT0rro/JavaShroud"
name: "JavaShroud"
description: "面向 Java 产物的混淆、方法虚拟化与 Native 加固工具链。A Java obfuscation, virtualization, and native hardening toolchain."
url: "https://github.com/HHT0rro/JavaShroud"
language: "Kotlin"
languages: ["Kotlin", "C"]
languagePcts: [52, 24]
topics: ["asm", "java", "java-obfuscator", "jni", "kotlin", "reverse-engineering", "virtualization", "vue", "wails", "bytecode-obfuscation"]
stars: 71
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-06-20T06:44:35Z"
lastCommitAt: "2026-07-01T07:04:15Z"
lastReleaseAt: "2026-06-28T08:13:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 29
maintainers: ["HHT0rro"]
openGraphImageUrl: "https://opengraph.githubassets.com/27e4d5db467b5ef3780a51db85ec37ec7281f2fac6812d7ed171e6e6e85cf614/HHT0rro/JavaShroud"
discussionCount: 0
---

</p>

<h1 align="center">JavaShroud</h1>

  <strong>面向 Java 产物的混淆、虚拟化与 Native 加固工具链</strong>
</p>

</p>
  <strong>简体中文</strong> · <a href="README_EN.md">English</a>
</p>

## 项目定位

JavaShroud 是一个以 Java 字节码变换、方法虚拟化、Native 微内核和桌面化工作流为核心的混淆与加固项目。它既包含传统 Java 混淆器常见的重命名、字符串保护、控制流扰动和元数据清理，也提供面向高价值方法的 VMBC / NBVM (native bytecode VM) 执行链。

本项目的开发理念接近 Kerckhoffs 原则：保护强度不应建立在“算法和实现永远不公开”的假设上，而应尽量来自每个产物自身的密钥材料、结构扰动、运行时认证、上下文绑定和跨 Java / Native 的执行边界。

需要明确的是，JavaShroud 保护的是自包含交付物。密钥材料、运行时逻辑和受保护代码最终都必须随产物一起分发，因此它不可能像在线服务、HSM 或外部授权系统那样完全满足 Kerckhoffs 原则。

## VMBC 与 Native 执行链

JavaShroud 的 VMBC / NBVM 指向同一条代码链路：`method-virtualization` 将选中的 Java 方法转换为 VBC4 / VMBC 资源，由 `JniMicrokernelHelper.executeVmResource` 进入 native dispatcher，并在 `js_vm_execute_resource` 对应的 native bytecode VM 中执行。NBVM 在这里是 native bytecode VM 执行链的简称。

这条链路的核心价值是让原始方法体退出常规 Java 字节码形态，把关键语义放进认证资源、入口 token、opcode dialect、常量池、block dispatch 和 native 状态共同约束的执行协议中；代码中已经落地的关键机制包括：

| 层面 | 已实现机制 | 作用 |
| --- | --- | --- |
| 方法虚拟化 | VBC4-only、native-only、严格虚拟化、入口 token、dispatcher stub | 避免原始 Java 方法体长期以可反编译形式存在 |
| VMBC 编码 | opcode alias、super-operator folding、block split / coalesce、exception masking | 降低一对一恢复 opcode、控制流和异常边的稳定性 |
|…
