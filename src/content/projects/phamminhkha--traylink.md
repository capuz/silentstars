---
repo: "PhamMinhKha/TrayLink"
name: "TrayLink"
description: "Giúp bạn biến điện thoại củ thành Stream Deck, hoặc sử dụng các thiết bị ESP32 để điều khiển mở ứng dụng"
url: "https://github.com/PhamMinhKha/TrayLink"
homepage: "https://loaai.me"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [45, 43]
stars: 21
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-26T08:56:56Z"
lastCommitAt: "2026-06-25T06:41:26Z"
lastReleaseAt: "2026-05-28T09:53:25Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 76
undervaluedScore: 40
maintainers: ["PhamMinhKha"]
openGraphImageUrl: "https://opengraph.githubassets.com/5758ecd9019c3e9897da4bd22c33614e6f18820ebf96553f3dfa74608c40b59d/PhamMinhKha/TrayLink"
---

# TrayLink

App launcher chạy nền trên PC, lắng nghe HTTP API trên mạng LAN để mở ứng dụng, mở file, hoặc chạy lệnh đã whitelist.

**Stack:** Tauri 2 + Rust + React + shadcn/ui

## Tính năng

- HTTP REST API trên LAN (mặc định port `8765`, IP LAN tự phát hiện)
- **GET** bằng link URL hoặc **POST** bằng curl/JSON — bật/tắt GET trong Settings
- Token API **tùy chọn** (mặc định tắt, phù hợp dùng trong LAN)
- System tray (menu bar / system tray): Open Dashboard, Restart Server, Exit
- Chạy nền — đóng cửa sổ chỉ ẩn app, không thoát (macOS: không hiện Dock)
- Autostart khi boot
- Allowlist apps + command whitelist
- Dashboard: trạng thái server, request log, quản lý app, settings, copy link API
- **Remote Deck**: mở link trên điện thoại/tablet cùng Wi‑Fi → grid icon app kiểu Stream Deck, chạm để mở app trên PC
- **Upload từ điện thoại**: gửi ảnh, video, tài liệu từ Remote Deck lên PC (lưu vào `Downloads/TrayLink`)
- **Phím tắt theo app**: cấu hình trong Dashboard, gọi qua Remote Deck hoặc HTTP API `/send-hotkey`
- **Monitor popup** — click icon tray xem quota **Claude Code** / **Codex** và thông số **System** (CPU, RAM, disk, mạng…) trong một popup
- **Theo dõi tùy chọn** — bật/tắt từng…
