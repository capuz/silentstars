---
repo: "zhh293/SimplePlanePlatform"
name: "SimplePlanePlatform"
description: "A personal-use proxy MVP"
originalDescription: "做一个自用的梯子MVP"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhh293/SimplePlanePlatform"
language: "Java"
languages: ["Java", "Rust"]
languagePcts: [47, 25]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-03-01T03:34:04Z"
lastCommitAt: "2026-10-25T09:00:59Z"
lastReleaseAt: "2026-10-22T07:33:12Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 62
maintainers: ["zhh293", "rain-lei", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddcd6972f0a94b2fedce8b7aa18bf07a2fe4c0e4c1b3c31a31aecf15789abf57/zhh293/SimplePlanePlatform"
---

# SimplePlanePlatform

Desktop installer users, please read the [Desktop usage and troubleshooting guide](https://github.com/zhh293/SimplePlanePlatform/blob/HEAD/docs/桌面端使用说明与故障排查.md) first.

The encryption layer adds `chacha20-poly1305-v2` and `aes-gcm-v2`. They use standard AEAD, authenticated record headers, HKDF-derived keys, and independent stream state. Both ends must select a suite with the same name, and the shared key for v2 must be exactly 32 bytes. The existing `Cipher` SPI and transport framing are preserved. The legacy `chacha20` carries a keystream overlap risk and is kept only as a compatibility implementation for migration. Do not treat it as standard ChaCha20-Poly1305. For configuration, migration boundaries, and test methods, see the [crypto v2 spec](https://github.com/zhh293/SimplePlanePlatform/blob/HEAD/docs/design/crypto-v2.md) and the [validation report](https://github.com/zhh293/SimplePlanePlatform/blob/HEAD/docs/design/crypto-v2-validation.md).

## Desktop: adding nodes and certificates

The Windows and macOS installers include a Java runtime. After installation, you still need to enter the address, port, protocol, encryption method, and key that match the…
