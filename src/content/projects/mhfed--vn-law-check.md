---
repo: "mhfed/vn-law-check"
name: "vn-law-check"
description: "Audit pháp lý website theo luật Việt Nam (BVDLCN 91/2025, TMĐT 122/2025, ANM 116/2025, AI 134/2025) cho Claude Code, Cursor, Copilot, Windsurf, Cline"
readmeQualityOk: true
url: "https://github.com/mhfed/vn-law-check"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["agent-md", "agent-skills", "claude-code", "claude-plugin", "claude-skills", "compliance", "copilot-instructions", "cursor-rules", "data-protection", "ecomerce"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-02T09:22:02Z"
lastCommitAt: "2026-11-02T15:17:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 30
maintainers: ["mhfed"]
openGraphImageUrl: "https://opengraph.githubassets.com/015dc15af7c503b3387944faeae7a31f91b87b4e92cd2c9265b09542fa3b83ad/mhfed/vn-law-check"
---

# vn-law-check

**Code do AI viết thì để AI soi luật luôn.** Bảo agent "audit pháp lý site này", nó quét code rồi chỉ ra chỗ site đang dính luật Việt Nam: file nào, dòng nào, điều luật nào. Thấy lỗi thì bảo nó sửa tiếp.

Dùng với Claude Code, Cursor, Copilot, Windsurf, Cline. Theo luật mới 2025-2026: dữ liệu cá nhân, TMĐT, an ninh mạng, người tiêu dùng, quảng cáo, AI.

**Site bạn có ô nhập email hoặc số điện thoại?** Vậy là đang thu thập dữ liệu cá nhân. Từ 01/01/2026, Luật Bảo vệ dữ liệu cá nhân 91/2025 bắt phải báo rõ thu dữ liệu để làm gì và xin đồng ý đúng cách. Site vibe code thường chưa có trang chính sách nào. Site cũ thì hay có chính sách copy từ đâu đó, vẫn ghi "Nghị định 13" dù văn bản này hết hiệu lực từ 01/01/2026. Rơi vào trường hợp nào thì cũng nên chạy thử. Xem [báo cáo trên shop demo](https://github.com/mhfed/vn-law-check/blob/HEAD/demo/report.md) để biết agent tìm được những gì.

### Cài nhanh

Dùng Claude Code: cài qua plugin marketplace (gõ trong Claude Code, không phải terminal):

```
/plugin marketplace add mhfed/vn-law-check
/plugin install vn-law-check
```

Hoặc clone thẳng vào thư mục skills, không cần qua marketplace:

```bash
git clone --depth=1…
