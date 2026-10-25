---
repo: "EggyStudio/3DEngine"
name: "3DEngine"
description: "A C# engine on SDL3, Vulkan, ImGui and Slang. Raylib's design over a Bevy-style ECS and scheduler, scripted with its own Unity-style behaviors. Implementing Radiance Cascades. [e3d.cs]"
readmeQualityOk: true
url: "https://github.com/EggyStudio/3DEngine"
homepage: "https://discord.gg/c3UtTVNbRb"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["nuget", "csharp", "ecs", "dotnet", "sdl3", "vulkan", "3dengine", "slang", "cli", "radiance-cascades"]
stars: 90
forks: 8
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-10-12T07:55:28Z"
lastCommitAt: "2026-10-25T08:01:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["EggyStudio"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9684ef29363dab6f5c99d269d4a3af0fe77c8fca44bad6c8af8f54e361ba4cf/EggyStudio/3DEngine"
---

# 3D Engine

A C# engine on SDL3, Vulkan, ImGui and Slang. A program draws each frame with static calls named as
raylib's functions are, over an ECS with a schedule of stages, and is scripted with behaviors
compiled while it runs.

```csharp
using Engine;
using static Engine.E3D;

InitWindow(800, 450, "[core] basic window");
SetTargetFPS(60);

while (!WindowShouldClose())
{
    BeginDrawing();
    ClearBackground(Color.RayWhite);
    DrawText("Congrats! You created your first window!", 190, 200, 20, Color.LightGray);
    EndDrawing();
}

CloseWindow();
```

That is raylib's first example, and why not raylib itself is a fair question. This engine keeps
its flat API and its loop, in C# with no binding, and adds a Vulkan renderer with shadows and
reflections, an ECS, physics, skeletal animation, scene files and ImGui in the frame. It costs
raylib's reach, the web, phones and small boards, and asks for Vulkan. The comparison, with what
was measured, is [Compared with raylib](https://github.com/EggyStudio/3DEngine/blob/main/docs/compared-with-raylib.md).

A scene is lit by global illumination worked out in real time by radiance cascades, the light that
leaves every surface it reaches…
