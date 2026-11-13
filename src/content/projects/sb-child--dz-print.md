---
repo: "sb-child/dz-print"
name: "dz-print"
description: "Third-party USB/Bluetooth Driver for Detonger(detonger.com) Printing Machines | 德佟印立方打印机的第三方USB/蓝牙驱动, 主板由道臻信息技术有限公司生产"
originalDescription: "Third-party USB/Bluetooth Driver for Detonger(detonger.com) Printing Machines | 德佟印立方打印机的第三方USB/蓝牙驱动, 主板由道臻信息技术有限公司生产"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sb-child/dz-print"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["printer", "printer-driver", "rust", "thermal-printer", "usb"]
stars: 11
forks: 2
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-10-21T20:41:08Z"
lastCommitAt: "2026-11-13T05:42:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 62
maintainers: ["sb-child", "clementatt"]
openGraphImageUrl: "https://opengraph.githubassets.com/8502d85f48e8da476a5f150787076f6e952612bd88e2c8387b0be23f34a6389b/sb-child/dz-print"
---

# dz-print

德佟印立方（Detonger / dothantech）标签打印机的第三方 USB / 蓝牙驱动。

官方 SDK 不开源，这里的协议来自逆向、抓包和真机测试。

## 状态

- [x] USB
- [ ] 蓝牙：协议已确认，后端未实现，见 [issue #3](https://github.com/sb-child/dz-print/issues/3)
- 已测试：DP27P，其它机型欢迎反馈

## 文档

协议和实现细节都在文档里，README 只留怎么跑：

- [protocol.md](https://github.com/sb-child/dz-print/blob/HEAD/protocol.md)：协议和命令
- [flow-control.md](https://github.com/sb-child/dz-print/blob/HEAD/flow-control.md)：缓冲区感知的分块发送（`0x77` 预算）
- [print-status.md](https://github.com/sb-child/dz-print/blob/HEAD/print-status.md)：状态码、等待打印完成、卡住之后怎么恢复
- [rle.md](https://github.com/sb-child/dz-print/blob/HEAD/rle.md)：RLE 编码和真机实测结论
- [dzserver.md](https://github.com/sb-child/dz-print/blob/HEAD/dzserver.md)：打印服务器的目录、流水线、任务状态
- [cmd-impl-status.md](https://github.com/sb-child/dz-print/blob/HEAD/cmd-impl-status.md)：命令实现进度
- [TODO.md](https://github.com/sb-child/dz-print/blob/HEAD/TODO.md)：开发进度和已知限制

每个 bin 的行为细节写在它自己的模块注释里（源码文件开头），`--help` 只有参数；
库的分层和最小可运行示例在 `src/lib.rs` 的模块注释，`cargo doc --no-deps --open` 可读。

## 环境

- 依赖 `dbus-devel`
- 需要 udev 规则，例如：

  ```udev
  SUBSYSTEM=="usb", ATTRS{idVendor}=="3533", ATTRS{idProduct}=="5c15", MODE="0666"
  ```

## 使用

### 打印图片：`dzprint_image`

```bash
cargo run…
