---
repo: "UserOrient/userorient-flutter"
name: "userorient-flutter"
description: "💬 User feedback SDK for Flutter"
readmeQualityOk: true
url: "https://github.com/UserOrient/userorient-flutter"
homepage: "https://pub.dev/packages/userorient_flutter"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
topics: ["features", "feedback", "flutter"]
stars: 24
forks: 7
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2024-06-08T20:58:46Z"
lastCommitAt: "2026-08-29T17:29:04Z"
lastReleaseAt: "2026-07-01T14:36:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 45
maintainers: ["kamranbekirovyz", "romanbsd"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b2532cd6df13222a84c099fc0c8bf06e19a551a98fdca52ec113791837db6c9/UserOrient/userorient-flutter"
---

# [UserOrient](https://userorient.com)

**Feature voting board for Flutter apps.**

Let your users vote on what to build next. Collect feedback, prioritize your roadmap, ship what matters.

</p>

## 🚀 Getting Started

### 1. Install

```yaml
dependencies:
  userorient_flutter: <latest-version>
```

### 2. Configure

```dart
import 'package:userorient_flutter/userorient_flutter.dart';

void main() {
  UserOrient.configure(apiKey: 'YOUR_API_KEY');
  runApp(MyApp());
}
```

Get your API key from the [UserOrient dashboard](https://app.userorient.com).

### 3. Open the board

```dart
UserOrient.openBoard(context);
```

That's it — two lines of setup, one to launch.

---

## 👤 User

Identify the current user so votes persist across sessions. Call `setUser` before opening the board.

```dart
UserOrient.setUser(
  uniqueIdentifier: '123456',
  fullName: 'Kamran Bekirov',
  email: 'kamran@userorient.com',
);
```

All fields are optional. Pass whatever you have:

| Field | Description |
|---|---|
| `uniqueIdentifier` | Your internal user ID |
| `fullName` | Display name |
| `email` | Email address |
| `phoneNumber` | Phone number |
| `isPaying` | Whether this is a paying customer ([learn…
