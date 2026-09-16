---
repo: "suoten/ProtoForge"
name: "ProtoForge"
description: "ProtoForge: 零硬件模拟 Modbus/S7/OPC-UA/BACnet 设备，测试上位机与网关通信。Python，开箱即用。"
readmeQualityOk: true
url: "https://github.com/suoten/ProtoForge"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["automation", "bacnet", "edge-computing", "fieldbus", "hardware-simulation", "industrial-iot", "industrial-protocol", "iot-gateway", "modbus", "mqtt"]
stars: 129
forks: 51
openIssues: 9
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-24T06:23:52Z"
lastCommitAt: "2026-09-16T08:47:53Z"
lastReleaseAt: "2026-05-21T01:13:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 59
undervaluedScore: 25
maintainers: ["dragonfly9494", "suoten"]
openGraphImageUrl: "https://opengraph.githubassets.com/4879f0d63d02ec512c6b4b20898da3d8dd20cdffe57e518e1b89292107118dfa/suoten/ProtoForge"
discussionCount: 1
---

<br />
<h1>🖥️ ProtoForge</h1>
<p><b>一台电脑 = 21 种工业设备</b></p>
<p>零成本模拟 PLC、传感器、摄像头，测试你的上位机和物联网网关</p>

[🚀 在线体验](https://protoforge.jjtt.net) · [📖 5分钟上手](#-5分钟上手) · [💬 加入QQ群](https://qm.qq.com/cgi-bin/qm/qr?k=8jGiq7UgneoOCuc5SV-FOFsb49mlmEhK&jump_from=webapi&authKey=efY0P+0PSa3KjkWLsg4Kt1M7+pQZPv7iBiwRkn6e5u8MbzK8cklSKSwvY3WGrnFa) · [English](https://github.com/suoten/ProtoForge/blob/HEAD/README_EN.md)

> ✅ **Windows** · ✅ **Linux** · ✅ **macOS**
>
> 🔥 **V1.2.0 测试平台版** · 122 设备模板 · 21 种工业协议 · 测试计划+合规检测 · CSV 批量导入导出 · EdgeLite 生态对接 · 31 项 E2E 测试全通过

</div>

---

## 🔥 为什么选 ProtoForge？

### 💢 开发者的真实痛点

| # | 你遇到的痛点 | 有多痛 | ProtoForge 怎么解决 |
|---|------------|--------|-------------------|
| 1 | **协议报文对不上，不知道哪里错了** | 客户说读不到数据，你抓包看 hex 对了半天，3天找不到原因 | WebSocket 实时调试日志，按协议/方向/关键词筛选，点击查看报文详情，秒级定位问题 |
| 2 | **模拟器太乖，上线就出事** | 测试环境永远返回正确值，上线后真实 PLC 断连/超时/返回异常码，全炸 | 内置9种故障注入：传感器卡死/漂移/噪声/失效、间歇断连/延迟/丢包、设备故障/执行器卡死，上线前测全异常场景 |
| 3 | **测试全靠手点，回归一下午** | 每次改完代码：手动建设备→启动→读数据→验证，一个回归搞一下午 | 自动化测试引擎：13种断言、变量提取、测试套件、HTML报告+趋势分析，SDK一行代码跑全部测试 |
| 4 | **客户现场出问题，没法复现** | 客户说昨天下午3点数据不对，没有录制，没法回放，只能猜 | 协议录制回放：录制通信报文→按需回放→验证修复，Gzip压缩存储 |
| 5 | **新人不懂协议，教1周才干活** | 地址偏移、功能码、字节序全搞混，手把手教还是出错 |…
