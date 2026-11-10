---
repo: "vifast-oss/ViFastOs"
name: "ViFastOs"
description: "Microkernel kiểu seL4 viết bằng Rust — capability-based, no_std, chạy trên QEMU với riscv64 / aarch64 / x86_64."
readmeQualityOk: true
url: "https://github.com/vifast-oss/ViFastOs"
homepage: "https://os.vifast.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["aarch64", "capability-based", "microkernel", "no-std", "riscv64", "rust", "sel4", "x86-64"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 12
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-08T04:39:30Z"
lastCommitAt: "2026-11-10T11:38:18Z"
lastReleaseAt: "2026-11-08T11:21:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 58
maintainers: ["vifastoss"]
openGraphImageUrl: "https://opengraph.githubassets.com/131ad96158ba25682bade84ecbb0c00c33bd76795133fb171faf898c94b85d1a/vifast-oss/ViFastOs"
---

# ViFastOs — microkernel viết bằng Rust, chạy 3 loại CPU

> **Đọc nhanh cho người mới (kể cả sinh viên năm nhất):**
> ViFastOs là một “bác bảo vệ + quản lý tòa nhà” cho máy tính.
> Mọi chương trình muốn `xin RAM, đọc file, nói chuyện với nhau` đều phải xin phép bác này.
> Hiện tòa nhà đã **bật điện được trên cả 3 máy ảo QEMU**
> (RISC-V, ARM, x86_64), chương trình đã ở được phòng riêng,
> gọi điện cho nhau được, lưu file được, gõ lệnh được.
> Nhưng đây vẫn là **“nhà mẫu demo”**, chưa phải nhà để ở thật:
> chưa mạng, chưa màn hình đẹp, driver mới chỉ chạy trên QEMU.
>
> Trạng thái trong file này cập nhật tới `HEAD 61f0f2e (r274, 10/11/2026)`.
> README cũ ghi `51 syscall` là đã cũ — nay là **58 syscall (0…57), 58/58 đã làm thật**.

## Dự án này là gì?

* **Microkernel kiểu seL4:** kernel (lõi) làm rất ít việc —
  chỉ giữ `chìa khóa (capability)`, `xếp hàng chạy (scheduler)`,
  `chia phòng (bộ nhớ ảo)`, `chuyển thư (IPC)`.
  Còn lại như `lưu file, driver, shell` cho ra ngoài làm,
  hỏng cái này không sập cả hệ thống.
* **Một lõi, ba nhà:** cùng một `vifast-kernel` portable,
  nhưng mỗi kiến trúc build một binary riêng.
  Không có binary duy nhất chạy cả 3 CPU.
* **Viết bằng Rust,…
