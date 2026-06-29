---
repo: "XieFField/RC10_LIB-FrameWork"
name: "RC10_LIB-FrameWork"
description: "预制菜工程 2026 ROBOCON 2026 GDUT1队R1仓库"
url: "https://github.com/XieFField/RC10_LIB-FrameWork"
language: "C"
languages: ["C"]
languagePcts: [90]
stars: 11
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-09-19T05:34:18Z"
lastCommitAt: "2026-06-29T07:19:40Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 47
maintainers: ["XieFField", "70er66", "naoganlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e23354d9eb0a5e216329f9179375caa9ee485947b66f209517f35596027349ae/XieFField/RC10_LIB-FrameWork"
discussionCount: 1
---

## RC10_LIB-FrameWork GDUT-R1-代码框架/仓库
GDUT 2026ROBOCON R1仓库 本项目基于STM32H723ZGT6开发

RC10_LIB-FrameWork是一个基于Robocon 2026比赛建立的通用电控软件架构，此架构基于GDUT Robocon2025和 Robocon2024框架改进而来。

## 项目介绍
这份代码框架采用了分层以及面向对象设计，其中RC10_LIB是通用库，而User是应用层，将通信、执行、机构与任务调度链路分层。

---

### 这份框架所要解决的问题
在项目中常见痛点是：
- 电机型号一换，上层逻辑就需要跟着重写
- 更换了主控板类型，代码需要很大程度的重写
- 让机构逻辑可拓展或灵活更改
- 任务策略可灵活替换

---

## 分层设计

### RC10_LIB：通用库层

包含：
- BSP_Driver：硬件抽象层（例如fdCAN，RTOS，时间戳等）
- Motor：电机抽象基类以及具体电机实现
- Module：可复用的模块（接收机、常见传感器）
- APP：工具类与算法
  
### User：应用层

包含：
- Control: 机构父类和策略实现
- Setup: 具体的任务实现以及控制流程
- debug：调试和功能验证demo
  
---

## 面向对象封装的意义

以控制电机为例：
- 电机闭环控制和报文解析已经被封装在Motor_Base子类内部
- CAN报文发送已经被封装到fdCANbus内部

写机构代码时，开发者只需要关注目标是什么，而不需要关心底层怎么跑。例如控制电机位置只需要调用`setTargetTotalAngle`的接口，而无需关心闭环在哪实现，CAN帧在哪里被发送；这样也能让不同背景成员可以在统一接口下更高效并行开发。

这就是此框架希望实现的开发体验：
- 不必先精通底层，仍可以进行高效开发
- 聚焦于控制逻辑实现，至于底层业务，会调用接口就能完成控制目标

---

## 机构控制链路

Setup 任务层-> Control父类 -> Motor_Base子类 -> fdCANbus

职责上：
- Setup：组织任务周期与状态机
- Control：表达机构控制语义
- Motor：执行器抽象与闭环能力承载
- fdCANbus：总线通信与收发调度

该链路的意义是：
- 每层只做本层职责
- 上层尽量不感知下层实现细节
- 新成员可以更快在 User 层产出功能
  
---

## 给新成员的上手方式

在User/debug中有可快速上手的demo：frame_demo

建议按以下方式快速进入开发：
1. 先读 User/Setup，理解任务入口与控制流程
2. 再读…
