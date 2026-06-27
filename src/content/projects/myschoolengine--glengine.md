---
repo: "MySchoolEngine/GLEngine"
name: "GLEngine"
description: "The goal of this repository is to build rendering focused game engine. Feel free to join me and extend this project."
url: "https://github.com/MySchoolEngine/GLEngine"
homepage: "https://myschoolengine.github.io/GLEngine-Documentation/"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["opengl", "vulkan", "rendering", "glfw", "glsl", "engine"]
stars: 22
forks: 1
openIssues: 71
closedIssues: 104
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-08-06T21:45:58Z"
lastCommitAt: "2026-06-27T00:49:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 68
undervaluedScore: 36
maintainers: ["RohacekD"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/143786771/cc49c480-399c-11eb-9bc4-0754d0d6de6d"
---

# GLEngine

## Setup
```
git clone <https://github.com/RohacekD/GLEngine>
cd GLEngine
git submodule init
git submodule update
premake5 vs2019 (or whatever verison are you using)
```
### Vulkan build

You can run both DirectX and OpenGL renderers side by side but in case of Vulkan you need to choose between OpenGL and Vulkan. If you would like to select Vulkan you need to set premake in this way:
```
premake5 --glfwapi=vulkan vs2019
```

### Skip tests (faster builds)

If you want to skip building test projects and static library variants (used for testing internal types), you can use:
```
premake5 --skiptests vs2019
```

This option can be combined with other options:
```
premake5 --glfwapi=vulkan --skiptests vs2019
```

## Memory sanitazer
If you want to use memory sanitazer, please use Asan configuration and add path to the ASAN DLLs to your PATH variable. E.g.:
```
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.44.35207\bin\Hostx64\x64
```

## Features

*  OpenGL rednerer
*  Entity component system (basic but working solution)
*  Shader preprocessor and loader
*  Scene, model and image loading

### Experimental features

*  Vulkan renderer - WIP, not…
