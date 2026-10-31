---
repo: "Lesorub361/quantum_ide"
name: "quantum_ide"
description: "QuantumIDE — AI-powered mobile IDE for web dev on Android (Flutter). Code editor, terminal sandbox, Git, LSP, local AI, and in-app APK builds."
readmeQualityOk: true
url: "https://github.com/Lesorub361/quantum_ide"
language: "Dart"
languages: ["Dart"]
languagePcts: [95]
stars: 26
forks: 9
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-05-29T18:05:36Z"
lastCommitAt: "2026-10-31T07:44:58Z"
lastReleaseAt: "2026-08-16T06:07:51Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 70
undervaluedScore: 39
maintainers: ["Lesorub361"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4d4dc46be1e4477b65034e782582ac99b6e2640f7a16ce34a3c866e78df224e/Lesorub361/quantum_ide"
---

# 🚀 QuantumIDE

QuantumIDE is a next-generation, AI-powered mobile Integrated Development Environment (IDE) built specifically for web development, running natively on Android using Flutter. It provides a complete development environment including a code editor, local terminal sandbox, Git, and advanced AI assistance.

---

## 🛠️ Technology Stack

- **Framework**: [Flutter](https://flutter.dev) (Material 3, customized layout)
- **State Management**: [Riverpod](https://riverpod.dev)
- **Navigation**: [GoRouter](https://pub.dev/packages/go_router)
- **Code Editor**: `re_editor` + `re_highlight`
- **Terminal & Shell**: `xterm.dart` + `flutter_pty`
- **AI Engine**: `google_generative_ai` (Gemini) + custom connectors for DeepSeek, Groq, OpenRouter, and Local AI (Ollama/LM Studio)
- **Design & Themes**: `flex_color_scheme` + glassmorphic visual effects
- **Typography**: *Outfit* (for UI) & *JetBrains Mono* (for Code)

---

## 📂 Project Structure

Below is the directory structure of the application source code (`lib/`):

*   **`lib/main.dart`**: Application entrypoint.
*   **`lib/app.dart`**: Main configuration of `MaterialApp`, themes, and router.
*   **`lib/core/`**: Core services…
