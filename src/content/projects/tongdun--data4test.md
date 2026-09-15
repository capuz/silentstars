---
repo: "tongdun/data4test"
name: "data4test"
description: "Data4Test(盾测) 可以快速实现接口的自动化测试和管理，支持丰富的数据生成，支持复杂场景用例编排，适用于功能，并发，异常，模糊，场景，长时间，国际化，大数据，性能等方面的测试工作。"
readmeQualityOk: true
url: "https://github.com/tongdun/data4test"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 88
forks: 22
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-12-08T02:02:17Z"
lastCommitAt: "2026-09-15T08:54:36Z"
lastReleaseAt: "2025-07-02T09:25:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 46
maintainers: ["JosingCai"]
openGraphImageUrl: "https://opengraph.githubassets.com/2405c3d30810a6f5c83f181550c236dff80d86b9689a9e80931042d4a4ddf092/tongdun/data4test"
---

# Data4Test (盾测)
- [中文文档](https://github.com/tongdun/data4test/blob/HEAD/README.md)
- [EnglishDoc](https://github.com/tongdun/data4test/blob/HEAD/README_EN.md)

### 前言
- Data4Test(盾测) 一款旨在通过编写结构化的测试数据或测试指令，通过声明式语句定义，即可开展复杂系统的自动化测试工作，让复杂系统的自动化测试变得容易，可用于功能，并发，异常，模糊，场景，长时间，国际化，大数据，性能等方面的测试工作

### 背景
#### 应用背景
- Data4Test是一款专为解决复杂业务系统的测试工作开展，而设计的自动化测试平台。在决策引擎系统，在风控业务系统上，进行了深度应用。
- 测试任务管理达150+，自动化场景用例达1500+，自动化数据文件用例达5000个+，自动化数据用例执行达100W次+，使用用户达100+
- 使用迭代3年+，横跨几十+个应用和多个产品，支撑公司ToB产品线的测试工作，并在多个B端客户现场进行实施和应用，支撑客户现场的测试验收工作和日常迭代工作等
- 使用角色涉及测试，开发，实施，客户，产品等，通过该系统，可轻松完成自动化测试，获取丰富的测试数据

#### 诞生背景
- 1、已有的测试工具无法在一个场景里快速支持多应用接口的调用和执行
- 2、Postman, Jmeter等本地版的测试工具无法快速在开发，测试，实施等多个角色间进行测试数据共享
- 3、接口变更无感，知道有变动，但无法快速定位到变更的接口，靠人工对接不靠谱
- 4、决策引擎系统场景复杂，链路依赖达20+或更多前置数据，自动化用例维护困难，编写脚本成本过高，变更环境失败比率也较高
- 5、风控系统接口请求数据字段过多，少则20+，多则100+或更多，人工输入符合特征的数据，人工构造时间成本过高
- 6、统计类功能需要长时间的数据积累，需各个时间维度的测试数据，需不同频度的定时任务执行
- 7、已有测试工具测试数据变更环境回放困难，需要数据用例幂等执行，且更换环境能快速落地数据进行复现
- 8、实时，离线，批转流，外部数据等多方数据特征需保持一致，且数据值需关联上
- 9、低并发测试需要常态化，靠手工不可能，靠脚本实现和维护成本过高
- 10、被测系统支持国际化，支持多语种，需要多语种的测试数据，且已建设的用例能直接复用，减少建设成本
- 11、部分接口存在加密或逻辑写在前端需要进行UI自动化或其他，需要脚本的管理和执行
- 12、需借用大模型的能力，进一步提效
- 等等，多个原因促成了本系统的诞生和持续迭代研发

### 系统
#### 在线体验
-…
