---
repo: "dvchd/ViFastTts"
name: "ViFastTts"
description: "TTS tiếng Việt một giọng: frontend tách âm tiết 5 thành phần, model non-autoregressive, train + sinh giọng + export ONNX. Vietnamese single-speaker text-to-speech toolkit."
readmeQualityOk: true
url: "https://github.com/dvchd/ViFastTts"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["non-autoregressive", "onnx", "pytorch", "speech-synthesis", "text-to-speech", "tts", "vietnamese"]
stars: 13
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-09T06:40:37Z"
lastCommitAt: "2026-10-27T09:16:25Z"
lastReleaseAt: "2026-10-27T08:57:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8f813eaeb1d3c888cc54c10070e4d8b8e297a785afdb46198ea7574b26cc5c47/dvchd/ViFastTts"
---

# ViFastTts — Text-to-Speech tiếng Việt

**TTS tiếng Việt mã nguồn mở: nhỏ, nhanh, tự train được.** Toolkit nghiên cứu + triển khai
TTS **một giọng**, hiểu văn bản tiếng Việt, sinh giọng 24 kHz và xuất ONNX chạy CPU.
Mỗi checkpoint là một người nói, một phương ngữ — không cần `speaker_id`, `dialect_id`
hay audio mẫu.

## 0. Chạy demo Ngọc Huyền trong 2 phút

```bash
git clone https://github.com/dvchd/ViFastTts.git
cd ViFastTts
./scripts/run_ngochuyen_demo.sh
# Windows PowerShell:
# powershell -ExecutionPolicy Bypass -File .\scripts\run_ngochuyen_demo.ps1
# mở http://127.0.0.1:8090
```

Script tự tải ONNX FP32 **Q-init** (`n0_onnx_fp32_q.zip`, có kiểm sha256), tạo `.venv-demo`,
cài `onnxruntime + fastapi + uvicorn` và chạy web demo — **không cần torch**. Cần Python ≥ 3.11.

- **Demo online:** https://vifasttts.hoctuthien.com/
- **Hugging Face model:** https://huggingface.co/dvchd/vifasttts-ngochuyen-small
- **Space demo miễn phí:** https://huggingface.co/spaces/dvchd/vifasttts-ngochuyen-demo
- **Thống kê demo:** https://vifasttts.hoctuthien.com/admin
- **Góp ý / báo lỗi:** form trên web và Space; admin xem tại `/admin` sau khi đặt
  `ADMIN_PASSWORD` (nội dung bị khoá nếu chưa đặt).…
