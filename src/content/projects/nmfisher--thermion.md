---
repo: "nmfisher/thermion"
name: "thermion"
description: "3D rendering toolkit for Dart and/or Flutter"
readmeQualityOk: true
url: "https://github.com/nmfisher/thermion"
homepage: "https://thermion.dev"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 224
forks: 35
openIssues: 15
closedIssues: 53
watchers: 6
contributors: 18
recentReleases: 0
createdAt: "2021-09-15T12:06:39Z"
lastCommitAt: "2026-11-21T11:31:21Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 41
maintainers: ["nmfisher", "github-actions[bot]", "NH-Mason"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e68ae1dd1f32fe0ee4817c8d92ce66a5bfba95d0ea6b468aa23d1f48602a865/nmfisher/thermion"
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
  print(filamentVersion); // v1.77.2
}
```

It is also exported by `package:thermion_dart/thermion_dart.dart`. The constant
works with hosted, Git and path dependencies, and is the version used by the
native build hook. Recompile your custom materials when it changes.

After initializing Filament, `FilamentApp.instance!.materialVersion` gives the
material format number reported by `matc --version`. This number is distinct
from the Filament release version. Compile custom materials with `matc` from
the same Filament release as the application.
