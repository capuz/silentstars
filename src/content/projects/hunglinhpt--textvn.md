---
repo: "hunglinhpt/TextVN"
name: "TextVN"
description: "Bộ gõ tiếng việt tương thích window, macos, linux"
readmeQualityOk: true
url: "https://github.com/hunglinhpt/TextVN"
language: "Rust"
languages: ["Rust"]
languagePcts: [64]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-26T18:57:32Z"
lastCommitAt: "2026-10-29T14:07:42Z"
lastReleaseAt: "2026-10-02T19:15:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 51
maintainers: ["hunglinhpt"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3320c65b9c8c61c86e9b1a4eaa060a1900c1918563bb1e6c0f06ceb61598d74/hunglinhpt/TextVN"
discussionCount: 2
---

# TextVN — Bộ gõ tiếng Việt cho Windows, macOS và Linux

Tiếng Việt · English (mục [English](#english) cuối trang)

TextVN là bộ gõ tiếng Việt mã nguồn mở. Một engine Rust dùng chung cho **Windows**
(Text Services Framework), **macOS** (Input Method Kit) và **Linux** (IBus, Fcitx5),
một bảng điều khiển với cùng tuỳ chọn và cùng file cấu hình trên cả ba nền tảng.

- **Gõ như UniKey/OpenKey**: Telex, VNI, VIQR, Telex đơn giản; đặt dấu theo chính tả —
  **mặc định dấu cũ** (`hòa`, `thủy`, `khỏe`; đổi sang dấu mới `hoà`/`thuỷ` trong bảng
  điều khiển), `uow` → ươ, `z` xoá dấu, gõ dấu cuối từ hay giữa từ đều được, gõ được khi
  bật Caps Lock.
- **Không mất chữ, không lặp chữ, không gạch chân**: cả từ nằm trong vùng soạn (composition/preedit)
  không đường kẻ (TF_LS_NONE trên Windows TSF; macOS gõ kiểu non-preedit sau cài; Fcitx5/IBus
  không kềm gạch — chỉ Chromium/Electron/Qt trên Linux tự vẽ gạch phía app) và chốt ở ranh
  giới từ — không gửi Backspace giả, nên không có lỗi kinh điển của bộ gõ kiểu hook
  trên Chrome, Electron, Excel, thanh địa chỉ.
- **Tránh bị phần mềm diệt virus nhận nhầm**: gói mặc định không hook bàn phím toàn cục,
  không tiêm mã vào process khác, không giả lập…
