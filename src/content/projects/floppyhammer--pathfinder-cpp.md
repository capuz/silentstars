---
repo: "floppyhammer/pathfinder-cpp"
name: "pathfinder-cpp"
description: "C++ port of the Rust Pathfinder GPU rasterizer"
url: "https://github.com/floppyhammer/pathfinder-cpp"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 10
forks: 2
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-03-17T02:06:32Z"
lastCommitAt: "2026-06-25T02:06:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["floppyhammer"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c9e2878a0375b84090553f0e4f8f4abc426d5bfd3196eae2a236e880b90e1b6/floppyhammer/pathfinder-cpp"
discussionCount: 0
---

# Pathfinder C++

This is a C++ port of [Pathfinder 3](https://github.com/servo/pathfinder) with a Vulkan backend added.

## Requirements

* C++14.
* D3d9 mode: `Vulkan` / `OpenGL 3.3 (or higher)` / `OpenGL ES 3.0 (or higher)` / `WebGL2`.
* D3d11 mode: `Vulkan` / `OpenGL 4.3 (or higher)` / `OpenGL ES 3.1 (or higher)`.

Notable: The D3d11 mode has some limits in an OpenGL ES context because, for ES, it's impossible to read & write
the same image in a single compute invocation.

## Run demo

### Shader generation (Optional)

* Run `src/shaders/compile_and_convert.ps1` to generate embedded shader headers. You should have Vulkan SDK installed
  first.

### Windows / Linux / Mac

* Initialize submodules.
* Build and run the CMake project `demo/native/CMakeList.txt`.

### Android

* Copy `assets` into `demo/android/app/src/main`.
* Open `demo/android` in Android Studio.
* Build and run.

### Web

* Set up emscripten environment.
* Run `build_wasm.sh` to build the demo.
* Run `demo/web/serve.sh` to serve a local website.
* Open http://127.0.0.1:8000/.
