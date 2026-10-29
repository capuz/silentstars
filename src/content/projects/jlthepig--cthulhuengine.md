---
repo: "Jlthepig/CthulhuEngine"
name: "CthulhuEngine"
description: "custom 3D game engine written in C++ for the sole purpose of building first-person shooter games."
readmeQualityOk: true
url: "https://github.com/Jlthepig/CthulhuEngine"
language: "C++"
languages: ["C++", "C"]
languagePcts: [63, 36]
topics: ["cpp", "cpp20", "cthulhu", "engine", "fps", "game-engine", "open-source", "opengl", "renderer"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-03-26T19:07:56Z"
lastCommitAt: "2026-10-29T12:25:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Jlthepig"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1192992675/70288d3a-92e8-47ad-8470-def8ddf21fd7"
---

# What is Cthulhu?

Cthulhu is a custom 3D game engine written in **C++** for the sole purpose of building **first-person shooter games**.

The long-term goal is to create a serious, editor-driven FPS engine with a focused scope rather than a general-purpose engine.  
This will allow Cthulhu to excel at its job.

I plan to work on this until my last breath.

I'm currently 16 years old.

## It's the first year of making Cthulhu, so let's see if I can work on this for 60 more years!

---

## Current Status

Cthulhu is still in early development.

The foundations for the editor finally are now in place, and I will begin moving on to work on the editor itself which will use OctoGUI a custom ui library. Contributing is not possible yet and there are currently no docs.

Current features and systems include:

- OpenGL 4.3 rendering with Cook-Torrance PBR and normal mapping
- glTF model loading with FastGLTF, including PBR materials and embedded textures
- Jolt Physics integration with an FPS character controller
- Flecs ECS integration
- Directional and point light shadow mapping
- HDR skybox with irradiance and prefiltered environment maps, tonemapping, and gamma correction
- Miniaudio…
