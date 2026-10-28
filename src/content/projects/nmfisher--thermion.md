---
repo: "nmfisher/thermion"
name: "thermion"
description: "3D rendering toolkit for Dart and/or Flutter"
readmeQualityOk: true
url: "https://github.com/nmfisher/thermion"
homepage: "https://thermion.dev"
language: "C"
languages: ["C"]
languagePcts: [88]
stars: 223
forks: 35
openIssues: 12
closedIssues: 49
watchers: 6
contributors: 18
recentReleases: 1
createdAt: "2021-09-15T12:06:39Z"
lastCommitAt: "2026-10-28T09:57:46Z"
lastReleaseAt: "2026-10-27T10:43:16Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 43
maintainers: ["nmfisher", "github-actions[bot]", "hadiidbouk"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c482dba0d0b9cbca05a5d48123fedff6cdbc9f9b6c03dadad1d82fc2466cbd/nmfisher/thermion"
---

## Cross-platform 3D toolkit for Dart and Flutter.

### Features

- Supports iOS (arm64), MacOS (arm64/x64), Android (arm64), Windows (x64) (>= 10), Web/WASM 
- glTF, KTX, PNG & JPEG texture support
- camera/entity manipulation with mouse (desktop) and gestures (mobile)
- skinning + morph animations

Uses the Filament PBR engine.

### Filament version and custom materials

Use `filamentVersion` to select the matching Filament release when compiling
custom materials with `matc`:

```dart
import 'package:thermion_dart/filament_version.dart';

void main() {
  print(filamentVersion); // v1.76.0
}
```

It is also exported by `package:thermion_dart/thermion_dart.dart`. The constant
works with hosted, Git and path dependencies, and is the version used by the
native build hook. Recompile your custom materials when it changes.

After initializing Filament, `FilamentApp.instance!.materialVersion` gives the
material format number reported by `matc --version`. This number is distinct
from the Filament release version. Compile custom materials with `matc` from
the same Filament release as the application.

`createMaterial` rejects incompatible format versions and malformed chunk
layouts with a…
