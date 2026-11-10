---
repo: "intel/rohd-wave-viewer"
name: "rohd-wave-viewer"
description: "ROHD Wave Viewer is a waveform viewer Flutter app, part of the ROHD ecosystem. It works in-browser, integrated as a Flutter widget, used as part of a debug stack which integrates it (e.g. ROHD DevTool Extension, eventually), or run as a native desktop application. Waveforms can be passed via an API or read from a standard file format (e.g. VCD)."
readmeQualityOk: true
url: "https://github.com/intel/rohd-wave-viewer"
language: "Dart"
languages: ["Dart"]
languagePcts: [82]
topics: ["debugging-tool", "gui", "rohd", "rtl-design", "timing", "waveform"]
stars: 14
forks: 7
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2024-04-03T22:01:50Z"
lastCommitAt: "2026-11-10T14:49:16Z"
lastReleaseAt: "2026-11-06T20:02:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 60
maintainers: ["desmonddak", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1dfdf68b47f9823347ed2e2446a34573ebeae7dadf9139e4ea736dbb9621f8d/intel/rohd-wave-viewer"
discussionCount: 0
---

# ROHD Wave Viewer

ROHD Wave Viewer is an interactive viewer for **VCD**, **FST**, and **GHW**
waveform files. It is designed for everyday waveform inspection in Visual
Studio Code or a web browser, with additional integration for ROHD designs and
other ROHD viewer extensions.

Use it to find signals in a design hierarchy, build and save a working signal
list, inspect values and transitions, measure time intervals, and move between
waveforms, schematics, and source code.

**[Open the hosted ROHD Wave Viewer](https://intel.github.io/rohd-wave-viewer/)**

*Click the image to watch the ROHD Wave Viewer demo.*

## Embed the Viewer in a Flutter Application

Add the package to the host application:

```yaml
dependencies:
  rohd_wave_viewer: ^0.1.0
```

Then import the viewer and waveform data contracts and provide a
`SignalWaveformApi` together with the hierarchy maintained by the host:

```dart
import 'package:rohd_hierarchy/rohd_hierarchy.dart';
import 'package:rohd_wave_viewer/rohd_wave_viewer.dart';
import 'package:rohd_waveform/rohd_waveform.dart';

final hierarchy = BaseHierarchyAdapter.fromTree(
  myModuleStructure.modules.single,
);

runApp(
  EmbeddedWaveViewer(…
