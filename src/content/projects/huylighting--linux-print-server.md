---
repo: "Huylighting/Linux-Print-server"
name: "Linux-Print-server"
description: "Biến một máy tính Linux thành Print Server sử dụng CUPS, Samba và Avahi để chia sẻ máy in cho Windows, macOS, Linux, Android và iPhone."
readmeQualityOk: true
url: "https://github.com/Huylighting/Linux-Print-server"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["linux", "linux-server"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-07-30T03:23:30Z"
lastCommitAt: "2026-11-17T12:15:34Z"
lastReleaseAt: "2026-10-18T03:29:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 32
maintainers: ["Huylighting"]
openGraphImageUrl: "https://opengraph.githubassets.com/940dce377ab1fc0ed9845a3325c2dce8781bd7022343acc5f033b6b9dbdb4ded/Huylighting/Linux-Print-server"
---

# 🖨️ Linux Print Server with CUPS

Biến một máy tính Linux thành **Print Server** sử dụng **CUPS**, **Samba** và **Avahi** để chia sẻ máy in cho Windows, macOS, Linux, Android và iPhone.

> Script hiện tại: **v2.0.0**. Có hỗ trợ cài Print Server và driver Canon LBP2900 (CAPT), thêm máy in, chia sẻ và chẩn đoán lỗi. Khả năng tương thích cần được kiểm tra trên từng bản phân phối, kiến trúc và model máy in.

> **Phạm vi mạng:** Dự án hướng tới mạng LAN tin cậy và các thiết bị được phép trong tailnet Tailscale; không thiết kế để public trực tiếp ra Internet. Không cấu hình port forwarding cho TCP 631 (CUPS) hoặc TCP 445 (SMB). Đọc `install.sh` trước khi chạy bằng quyền quản trị. Nếu cần in qua Tailscale khác subnet, dùng `--remote-access` và bảo đảm firewall đang hoạt động.

---

## ✨ Tính năng

- CUPS Print Server và Web Interface
- Quản trị CUPS
- Samba Printer Sharing
- AirPrint (Bonjour / Avahi)
- IPP Everywhere
- Canon LBP2900 CAPT Driver Support
- Tự động thêm hàng đợi máy in Canon qua USB
- Chẩn đoán CUPS, USB, driver, chia sẻ mạng, AppArmor/SELinux và log CAPT
- Công cụ kiểm tra in qua IPP, sửa lỗi cơ bản và thu thập log

---

## 💻 Hệ điều hành

Script có các nhánh xử lý cho…
