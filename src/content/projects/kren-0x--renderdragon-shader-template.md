---
repo: "kren-0x/RenderDragon-Shader-Template"
name: "RenderDragon-Shader-Template"
description: "A template and build setup for Minecraft Bedrock Edition Render Dragon shaders"
readmeQualityOk: true
url: "https://github.com/kren-0x/RenderDragon-Shader-Template"
language: "Scala"
languages: ["Scala", "Shell", "SuperCollider"]
languagePcts: [35, 29, 22]
topics: ["mcbe", "renderdragon", "bgfx", "minecraft-bedrock", "minecraft-shaders", "shaders", "render-dragon"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-27T12:57:56Z"
lastCommitAt: "2026-11-15T11:22:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 16
maintainers: ["kren-0x"]
openGraphImageUrl: "https://opengraph.githubassets.com/fca85d9908459c274511963e31aad2627bfa2cd9c38b15a0a624b0e98fa47001/kren-0x/RenderDragon-Shader-Template"
---

# RenderDragon Shader Template

A template and build setup for Minecraft Bedrock Edition Render Dragon shaders (`.material.bin`) targeting Windows, Android, and iOS.

## Project structure

```
├── build.bat         # Windows build script (opens interactive menu without args)
├── build.sh          # Linux/Android build script
├── requirements.txt
├── LICENSE
├── include/          # Shared shader headers (.dragonh, .sh)
├── materials/        # Shader source code (vertex.sc, fragment.sc, varying.def.sc)
│   └── project.json  # Material pass and compiler config
└── tools/
    ├── build.py      # Build script
    └── lib/          # Platform runtime shims
```

## Setup and building

### Windows

Requirements: Python 3.9+ with pip added to PATH.

1. Install dependencies:
   ```cmd
   pip install -r requirements.txt
   ```

2. Build shaders:
   Run without arguments to open the interactive menu:
   ```cmd
   build.bat
   ```

   Or pass arguments directly:
   ```cmd
   build.bat windows
   build.bat android
   build.bat RenderChunk
   build.bat RenderChunk android
   build.bat setup
   build.bat setup v26.50
   build.bat clean
   ```

Compiled `.material.bin` files are placed in…
