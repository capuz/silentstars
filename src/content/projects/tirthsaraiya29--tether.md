---
repo: "tirthsaraiya29/Tether"
name: "Tether"
description: "Secure, unlock, recover, and control Windows systems through continuous Android-based trust verification."
readmeQualityOk: true
url: "https://github.com/tirthsaraiya29/Tether"
homepage: "https://tether-control.vercel.app/"
language: "Kotlin"
languages: ["Kotlin", "C#"]
languagePcts: [46, 33]
topics: ["android-app", "android-service", "credential-provider", "cryptography", "csharp", "kotlin", "security-tools", "windows-service", "network", "tls13"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 21
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-05-16T08:46:59Z"
lastCommitAt: "2026-10-30T10:23:18Z"
lastReleaseAt: "2026-10-24T12:03:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["tirthsaraiya29"]
openGraphImageUrl: "https://opengraph.githubassets.com/87fb56a081049558141dbd24804de3456d954c33654003c6508ea8aac28d043f/tirthsaraiya29/Tether"
discussionCount: 4
---

# Tether

**Adaptive personal trust and security system for Windows and Android.**

- **Platforms:** Windows and Android
- **Status:** Active Development
- **Transport:** Local Wi-Fi/LAN — TLS 1.3 over direct TCP

> [!CAUTION]
> # 🛑 CRITICAL SECURITY ADVISORY — DO NOT INSTALL OR USE
>
> **AN INDEPENDENT STATIC SECURITY AUDIT HAS IDENTIFIED MULTIPLE CRITICAL VULNERABILITIES ACROSS THE TETHER SERVICE AND PROTOCOL STACK.**
>
> **Do not install, deploy, or run Tether on any workstation or mobile device until a verified patched release is published.**  
>
> ### Mandatory Actions for Existing Users:
> 1. **Stop the Service:** Open an administrative PowerShell prompt and run:
>    ```powershell
>    Stop-Service TetherCommService -ErrorAction SilentlyContinue
>    sc.exe config TetherCommService start= disabled
>    ```
> 2. **Uninstall Immediately:** Run the uninstaller via Windows Settings or `C:\Program Files\Tether\unins000.exe` to remove `Tether.CommunicationService` and unregister `TetherCredentialProvider.dll`.
> 3. **Verify Windows Sign-In:** Confirm standard Windows Password / PIN / Windows Hello sign-in functions normally before signing out.
>
> Remediation roadmap and patched…
