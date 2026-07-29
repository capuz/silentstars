---
repo: "nmfisher/thermion"
name: "thermion"
description: "3D rendering toolkit for Dart and/or Flutter"
readmeQualityOk: true
url: "https://github.com/nmfisher/thermion"
homepage: "https://thermion.dev"
language: "C"
languages: ["C", "C++"]
languagePcts: [57, 28]
stars: 217
forks: 30
openIssues: 16
closedIssues: 39
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2021-09-15T12:06:39Z"
lastCommitAt: "2026-07-29T06:14:01Z"
lastReleaseAt: "2024-06-17T04:04:49Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 90
undervaluedScore: 41
maintainers: ["nmfisher", "github-actions[bot]", "mushogenshin"]
openGraphImageUrl: "https://opengraph.githubassets.com/4728c21f3de085d04ec9cb45f884de26a266147214e62595b02c862e87c9822d/nmfisher/thermion"
---

</p>

## Cross-platform 3D toolkit for Dart and Flutter.

https://github.com/user-attachments/assets/b0c07b5a-6156-4e42-a09b-5f9bd85fbf32

### Features

- Supports iOS (arm64), MacOS (arm64/x64), Android (arm64), Windows (x64) (>= 10), Web/WASM 
- glTF, KTX, PNG & JPEG texture support
- camera/entity manipulation with mouse (desktop) and gestures (mobile)
- skinning + morph animations

Uses the Filament PBR engine (currently v1.56.4).

### Quickstart (Flutter)

From the command line:

```bash
flutter channel master
flutter upgrade
flutter config --enable-native-assets  
```

In your Flutter app:

```dart
@override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(children: [
        Positioned.fill(
            child: ViewerWidget(
          assetPath: "assets/cube.glb",
          skyboxPath: "assets/default_env_skybox.ktx",
          iblPath: "assets/default_env_ibl.ktx",
          transformToUnitCube: true,
          initialCameraPosition: Vector3(0, 0, 6),
          background: Colors.blue,
          manipulatorType: ManipulatorType.ORBIT,
          onViewerAvailable: (viewer) async {
            await Future.delayed(const Duration(seconds: 5));…
