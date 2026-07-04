---
repo: "Earu/Vigil"
name: "Vigil"
description: "Password manager/Vault based on keepass with modern UI, biometric features, secure file storage and pwnd checks."
readmeQualityOk: true
url: "https://github.com/Earu/Vigil"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [76, 21]
topics: ["biometrics", "breach", "generator", "haveibeenpwned", "keepass", "manager", "password", "security"]
stars: 6
forks: 1
openIssues: 6
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-12-22T12:29:59Z"
lastCommitAt: "2024-12-22T12:29:59Z"
lastReleaseAt: "2025-01-04T22:36:03Z"
status: "archived"
tags: ["needs_contributors"]
healthScore: 59
undervaluedScore: 38
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/906960205/53068a34-3620-4042-975b-6cab13d49f27"
discussionCount: 0
---

# Vigil Password Manager

A modern, secure password manager with a beautiful user interface, built using Electron and React.

## Features

- 🔒 Secure KeePass (.kdbx) database support
- 🎨 Modern and intuitive user interface
- 🔍 HaveIBeenPwned integration for password security checks
- 🔐 Windows Hello/Biometric authentication support
- 🔑 Secure credential storage using system keychain
- 🛡️ Strong encryption with Argon2 password hashing
- 🌐 Cross-platform support (Windows, macOS, Linux)

## Development

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Earu/Vigil.git
cd Vigil
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

### Development Scripts

- `npm run dev` - Start Vite development server
- `npm run electron:dev` - Start Electron development environment
- `npm run build` - Build the application
- `npm run electron:build` - Build the Electron application for distribution

## Building

The application can be built for different platforms:

- Windows (NSIS installer)
- macOS (DMG)
- Linux (AppImage)

Build configuration is handled…
