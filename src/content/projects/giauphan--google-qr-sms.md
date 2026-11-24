---
repo: "giauphan/google-qr-sms"
name: "google-qr-sms"
description: "Chrome Extension (MV3) to downgrade Google cross-device QR code verification back to 6-digit SMS verification."
readmeQualityOk: true
url: "https://github.com/giauphan/google-qr-sms"
homepage: "https://github.com/giauphan/google-qr-sms"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["chrome-extension", "clean-architecture", "google-cloud", "google-verification", "javascript", "manifest-v3", "sms-verification"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-23T10:20:59Z"
lastCommitAt: "2026-11-24T14:11:45Z"
lastReleaseAt: "2026-11-24T14:11:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 26
maintainers: ["giauphan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4143c2e45c9ee4bc5399d653c0d7fa0310a6b740947f657ca81fc17af48e65a7/giauphan/google-qr-sms"
---

# Google QR SMS Helper (`google-qr-sms`)

---

## 📖 Background

When verifying or upgrading a Google account on desktop browsers, Google increasingly enforces `/v3/signin/challenge/iap/qrcode` (`DevicePhoneVerificationUi`), requiring a mobile phone scan to trigger:
1. **Android GMS Constellation (`PhoneIdentityJsBridge.verifyPhoneNumber`)** — hardware/SIM-bound silent carrier SMS verification.
2. **Mobile-Originated SMS (MO-SMS)** — sending an outbound international SMS to Google's gateway.

If you work in an environment without an active Android GMS device or international outbound SMS capability, `google-qr-sms` automates the cross-device fallback protocol (`idv_xdevice=1` + non-Android `GetVerificationStatus` status `[3, null, 4]`) and maintains a consistent `iPad Mini` (`iPadOS`) header/navigator profile across the entire `uplevelingstep` and `batchexecute` verification lifecycle.

---
