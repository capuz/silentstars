---
repo: "Chessever/chessever-frontend"
name: "chessever-frontend"
description: "Open-source ChessEver client for following live chess tournaments, players, and games."
readmeQualityOk: true
url: "https://github.com/Chessever/chessever-frontend"
homepage: "https://chessever.com"
language: "Dart"
languages: ["Dart"]
languagePcts: [95]
topics: ["android", "chess", "chess-tournaments", "flutter", "ios", "pgn", "live-chess"]
stars: 6
forks: 5
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2025-04-21T11:24:43Z"
lastCommitAt: "2026-10-10T10:04:28Z"
lastReleaseAt: "2025-05-30T00:01:49Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 79
maintainers: ["devberkay", "kednaik", "dagidici"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b0a54d52271809dd834394ee2f75c05dc67fdf6ad953b3cbf3339b4b8174f72/Chessever/chessever-frontend"
---

# Chessever Frontend

This is a Flutter project for the Chessever application.

## Getting Started

### Prerequisites

- Flutter SDK: Make sure you have Flutter installed. You can find installation
  instructions [here](https://flutter.dev/docs/get-started/install).
- An editor like VS Code or Android Studio.

### Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Chessever/chessever-frontend
   cd chessever-frontend
   ```
2. Get the dependencies:
   ```bash
   flutter pub get
   ```
3. Create a local env file. Do not commit it.
   ```bash
   cp .env.example .env
   ```
4. Generate your personal Gamebase API key:
   - Open https://chessever.com/account#developers
   - Sign in with your ChessEver account
   - Go to Developer API Keys and click Generate key
   - Paste it into `.env` as `GAMEBASE_API_KEY=...`
5. Run the app with compile-time env values:
   ```bash
   flutter run --flavor production -t lib/main.dart --dart-define-from-file=.env
   ```

`.env.example` contains only public client config and empty personal-key slots.
`.env` is intentionally ignored and is not bundled as a Flutter asset. Use
`--dart-define-from-file` for local debug…
