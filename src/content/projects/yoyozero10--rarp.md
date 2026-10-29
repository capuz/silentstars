---
repo: "yoyozero10/rarp"
name: "rarp"
description: "Local multi-agent orchestration runtime and CLI built with TypeScript"
readmeQualityOk: true
url: "https://github.com/yoyozero10/rarp"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 36]
stars: 39
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-21T11:45:35Z"
lastCommitAt: "2026-10-29T21:24:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 20
maintainers: ["yoyozero10"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d5b0f067aeb8db0a76c8fe3798d4828d874491de7ed7f7151912e61e4c296c9/yoyozero10/rarp"
---

# Rarp

CLI điều phối nhiều AI agent trên máy local: lập kế hoạch, giao việc, nhận kết quả, nghiệm thu và yêu cầu sửa. Stack: TypeScript + Node.js; SQLite cho dữ liệu bền vững. UI trực quan sẽ dùng cùng runtime.

## Trạng thái

Có gói cài đặt `.tgz` và lệnh `rarp doctor` để kiểm tra môi trường trước khi chạy. Gói chứa CLI/runtime đã build, dashboard, JSON schemas và tài liệu; máy nhận chỉ cần Node.js >=24, npm, Git và CLI agent muốn dùng. Chưa phát hành lên npm registry; `private: true` vẫn chặn publish ngoài ý muốn.

Phase 8 đã triển khai khôi phục plan dừng, giữ task không đổi qua revision, ngân sách sửa/retry bền vững và kiểm tra toàn bộ checkout trước `completed`. Live manager `9router` với hai worker agy đã đạt trong repo TEMP, dùng ngoại lệ quyền được duyệt riêng. UI đã nghiệm thu trên runtime fixture; CI Windows/Ubuntu với Node 24/26 đạt tại commit `4b99c39`. Xem [kiểm chứng Phase 8](https://github.com/yoyozero10/rarp/blob/HEAD/docs/PHASE8-VALIDATION.md).

Bản nền Phase 8: 84/84 test, CI xanh. Công cụ tự host cho một người dùng trên một máy: chưa publish npm, `waiting_permission` đã có (plan chờ cấp quyền rồi `resume`), còn thiếu `waiting_input` và job object Windows, chỉ…
