---
repo: "manhpham90vn/Deskhub"
name: "Deskhub"
description: "Stream + điều khiển ứng dụng từ xa. "
readmeQualityOk: true
url: "https://github.com/manhpham90vn/Deskhub"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 34
forks: 7
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 5
createdAt: "2026-07-19T08:48:46Z"
lastCommitAt: "2026-07-24T06:08:04Z"
lastReleaseAt: "2026-07-22T08:51:17Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 29
maintainers: ["manhpham90vn"]
openGraphImageUrl: "https://opengraph.githubassets.com/4845272669cd6634b7731e9165d389298f47352dcf972584e6e5b1ada4e17250/manhpham90vn/Deskhub"
---

# 🖥️ Deskhub

> **Cả chiếc PC của bạn, trong tay bạn — ở bất cứ đâu.** Điều khiển bất kỳ ứng dụng nào trên
> máy từ xa — code với **Claude Code** hay **VS Code**, duyệt **Chrome**, chỉnh tài liệu, hay
> chơi **game nặng** — từ điện thoại, máy tính bảng, laptop khác, hay thẳng trong trình duyệt.
> Độ trễ **mili-giây**, hình **mã hóa/giải mã phần cứng** đầu-cuối, cài đặt gọn trong **một file**.

Remote desktop/app **độ trễ thấp, đa nền tảng**, kiến trúc kiểu **AnyDesk** — nhưng đủ nhanh và
đủ "thô" ở tầng input để **chơi được cả game** (chuột tương đối + scancode DirectInput), thứ mà
remote desktop thông thường không làm nổi. Điều khác biệt kỹ thuật: **một lõi C++20 duy nhất
chạy khắp mọi nơi** — từ Windows tới iPhone tới tab Chrome — không viết lại giao thức lần nào.

| ⚡ Độ trễ | 🖥️ Pipeline | 🌐 Nền tảng | 📦 Triển khai |
|-----------|-------------|-------------|---------------|
| **~3.5 ms** capture→hiển thị<br>(loopback, đo trên RTX 5070 Ti) | **Zero-copy VRAM**, HW encode+decode, 60 fps | **3 host + 6 client** từ một `core/` | **Một app / OS** — cắm là chạy |

> **Mới:** iOS client đã chạy — xem video từ host Windows trên iPhone/iPad qua LAN hoặc Tailscale.

## 💡 Dùng để…
