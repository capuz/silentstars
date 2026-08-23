---
repo: "DevPrice/godot-slang"
name: "godot-slang"
description: "Slang compute shader support for Godot."
readmeQualityOk: true
url: "https://github.com/DevPrice/godot-slang"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [63, 36]
topics: ["gdextension", "godot", "shaders", "slang"]
stars: 88
forks: 4
openIssues: 0
closedIssues: 14
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2025-06-27T02:51:04Z"
lastCommitAt: "2026-08-23T04:10:30Z"
lastReleaseAt: "2026-03-07T01:32:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 37
maintainers: ["DevPrice"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a65a83d985503e6f7799bed8e2645dadc5eb4202fa1ce0b38e6ea09fef5df24/DevPrice/godot-slang"
discussionCount: 8
---

# Godot Slang

This project is a work-in-progress to support [Slang](https://shader-slang.org/)-based compute shaders in Godot. The primary goal of this project is to simplify working with compute shaders within Godot.

## Features
* Simple and straightforward handling of `.slang` files. You can `load("res://something.slang")` and it works exactly how you would expect.
* Uses a high-level API for binding shader parameters, similar to GDShader (`set_shader_parameter(...)`).
* Minimizes boilerplate by automatically binding shader parameters for common textures (color, depth, normal/roughness, etc.), current time, shader globals, and more.
* Allows exposing shader parameters to the editor via a familiar export pattern.
* First-class support for compositor effects.
* Supports most major Slang features, including modules.
* Supports most `.glsl` and `.hlsl` shaders in addition to `.slang`.

## Usage

After installing this plugin in Godot, you'll see a few new types available in the editor:
* `ComputeShaderFile`
  * A resource imported from a `.slang` file in the project. Includes a list of `ComputeShaderKernel`s.
  * Unlike `.glsl` compute shaders, a Slang compute shader can have more…
