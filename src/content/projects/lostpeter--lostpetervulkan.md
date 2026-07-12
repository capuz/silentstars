---
repo: "LostPeter/LostPeterVulkan"
name: "LostPeterVulkan"
description: "LostPeter's Vulkan Learning Samples !"
readmeQualityOk: true
url: "https://github.com/LostPeter/LostPeterVulkan"
language: "C++"
languages: ["C++"]
languagePcts: [90]
stars: 24
forks: 8
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-04-10T14:11:33Z"
lastCommitAt: "2026-07-12T06:16:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 71
undervaluedScore: 41
maintainers: ["LostPeter"]
openGraphImageUrl: "https://opengraph.githubassets.com/42166e9a92e7e460c339399bf94bad59b00474e52125fee12ac99353aa029503/LostPeter/LostPeterVulkan"
---

# README #

Author: 

    LostPeter

Target: 

    Learning vulkan render api, compile in different platform with CMake and code the samples !

Github Address:

    LostPeter GitHub: https://github.com/LostPeter/LostPeterVulkan

Document Web: 

    LostPeter 知乎: https://www.zhihu.com/people/lostpeter

Usage:

    Vulkan SDK: 
        I'm using vulkan version 1.3.290.0
        you can change it, but to MacOS, you must replace all libvulkan.1.3.290.dylib in all CMakeLists.txt to your version.

    MacOS:   
        Setup your vulkan sdk and config VULKAN_HOME to your .bash_profile, in CMakeLists.txt we will using it "$ENV{VULKAN_HOME}/macOS/include"  

    Windows: 
        Setup your vulkan sdk and config VULKAN_SDK to your environment %Path%, in CMakeLists.txt we will using it "$ENV{VULKAN_SDK}/Include"
        Check your VisualStudio is setup, and msbuild command tool path in the environment %Path% and can compile VisualStudio .sln project.

    VSCode:
        Config above complete, I'm only using VSCode to edit, compile and debug code in platform Windows/MacOS, maybe later also Android/iOS.
        You can look at .vscode/launch.json file, config your vscode, there are all…
