---
repo: "minhthongvgt/xiaozhi-diy"
name: "xiaozhi-diy"
description: "Giúp các bạn vọc vạch không biết viết code có thể tự thêm các linh kiện ngoại vi dễ dàng hơn qua menuconfig"
readmeQualityOk: true
url: "https://github.com/minhthongvgt/xiaozhi-diy"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [48, 24]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-12T05:30:53Z"
lastCommitAt: "2026-09-24T08:41:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 40
maintainers: ["minhthongvgt"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fcbfa8c05f40bdac662bcdf9083f5a06124a295213b73311f5f467783e01745/minhthongvgt/xiaozhi-diy"
---

# Xiaozhi-ESP32 (Board: ESP32-S3-N16R8)

Dự án trợ lý thông minh Chatbot Xiaozhi trên vi điều khiển **ESP32-S3-N16R8** (16MB Octal Flash, 8MB Octal PSRAM) sử dụng framework ESP-IDF 6.1.

---

## 1. Công cụ Web Configurator (Zero-Install)

Dự án cung cấp bộ cấu hình phần cứng trực quan trên nền Web chạy hoàn toàn phía client (SPA Zero-Install). Người dùng có thể thiết lập chân GPIO, màn hình, chip âm thanh codec, các giao tiếp và toàn bộ ngoại vi/cảm biến mà không cần sửa mã nguồn C/C++ thủ công.

### 1.1 Khởi động công cụ
- **Cách 1 (Khuyến nghị tối ưu - Khởi chạy ngay tại thư mục gốc mã nguồn)**:
  Nhấp đúp vào tệp ngay tại thư mục gốc dự án:
  ```text
  run_configurator.bat
  ```
  *(Kịch bản tự động nhận diện vị trí thực tế của thư mục dự án dù bạn đặt ở bất kỳ đâu, tự động nạp sẵn cấu hình hiện có vào UI, mở trình duyệt tại `http://localhost:8080`, và cho phép lưu cấu hình trực tiếp vào mã nguồn tức thì).*
- **Cách 2**: Nhấp đúp vào `tools/web-configurator/start_configurator.bat`.
- **Cách 3**: Mở tệp `configurator.html` hoặc `tools/web-configurator/index.html` trực tiếp trên trình duyệt (Google Chrome / Edge).

### 1.2 Danh mục Cấu hình Chuẩn theo Hệ thống Menuconfig (Đã Tối…
