---
repo: "MethodWhite/Noctua-C"
name: "Noctua-C"
description: "Tool-CyberSec-Forensic-Noctua-C - High-performance C reverse engineering framework. Supports ELF, DEX, PE, Mach-O, WASM, WebP, FSB5, Unity formats. Modules: AES SCA, IL2CPP, Capstone disasm, branch timing, dataflow, audio extraction, XREF, type recovery, memory forensics."
readmeQualityOk: true
url: "https://github.com/MethodWhite/Noctua-C"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-07-09T16:49:40Z"
lastCommitAt: "2026-08-11T04:47:50Z"
lastReleaseAt: "2026-08-10T15:46:20Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 55
maintainers: ["MethodWhite", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f45574b3f64f0ab78bdb3d325cc9fb4fd1fe56789a743bcc7eab7233885c339/MethodWhite/Noctua-C"
fundingLinks: ["CUSTOM:https://methodwhite.github.io"]
---

<h1>⚡ Noctua-C</h1>
  <p><strong>Tool-CyberSec-Forensic-Noctua-C</strong></p>
  <p>Framework profesional de <strong>Reverse Engineering</strong> y <strong>Análisis Forense de Malware</strong></p>
  <p>
  </p>
  <br>
</div>

---

**Noctua-C** es un framework profesional de **Reverse Engineering** y **Análisis Forense de Malware** escrito en **C** con **Clean Architecture**. Incluye 80 módulos de análisis, sandbox multicapa, ejecutor en RAM, decompilador IL propio, detección de evasión, threat intelligence, generación de reportes profesionales y una **GUI nativa GTK4**.

Multi-plataforma: **Linux · macOS · BSD · Windows**

---

## 📊 Estado Actual (80 módulos · hardening activo)

```
🛡️ SandBox + RAM        →  6 módulos
🔬 Análisis Forense      → 30 módulos
📊 Análisis Estático     → 15 módulos
📱 Móvil/Multimedia      → 12 módulos
🧠 Decompilador + IL     →  4 módulos
🔧 Profesional/Threat    → 13 módulos
```

---

## ✨ Características

### 🛡️ SandBox Multicapa (6 capas)

| Capa | Descripción |
|------|-------------|
| **Filesystem** | Aislamiento tmpfs + bind mounts |
| **Network** | Network namespace + CLOEXEC |
| **Seccomp** | Filtro BPF de syscalls |
| **Memory** | Guardia…
