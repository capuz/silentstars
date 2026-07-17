---
repo: "JcPowmaz/DLL-Injector-FULL"
name: "DLL-Injector-FULL"
description: "DLL Injector, which supports various injection strategies and is used to inject cheats, has been prepared for exploration and learning in the .NET GUI development process."
readmeQualityOk: true
url: "https://github.com/JcPowmaz/DLL-Injector-FULL"
language: "C"
languages: ["C", "C#"]
languagePcts: [62, 31]
topics: ["cheats", "d3d11", "d3d12", "d3d9", "dll-hijacking", "dll-hooking", "dll-injection", "dll-injector", "dll-injector-apex-legends", "dll-injector-eac"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-23T16:09:44Z"
lastCommitAt: "2026-07-17T06:00:09Z"
lastReleaseAt: "2025-12-23T16:10:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bbf5fc4cabdce009c2044c62b2685015d774181b50bdec23665a40ed3e82b612/JcPowmaz/DLL-Injector-FULL"
---

```
            ____                             __ _  __    ____        _           __            
           / __ \___  ____ ___  _____  _____/ /| |/ /   /  _/___    (_)__  _____/ /_____  _____
          / /_/ / _ \/ __ `/ / / / _ \/ ___/ __/   /    / // __ \  / / _ \/ ___/ __/ __ \/ ___/
         / _, _/  __/ /_/ / /_/ /  __(__  ) /_/   |   _/ // / / / / /  __/ /__/ /_/ /_/ / /    
        /_/ |_|\___/\__, /\__,_/\___/____/\__/_/|_|  /___/_/ /_/_/ /\___/\___/\__/\____/_/     
                      /_/                                     /___/
        
                                      DLL INJECTOR x64/x86
```

  
  

</div>

- DLL injector written in C# that injects a DLL into a running process.

## How does it work?

1. **Windows API:** The LoadLibraryA module is loaded from the Windows API (specifically from kernel32.dll). Then, the handle of the selected process is found using the OpenProcess method. This handle gives access to the memory of the selected process. Memory is also allocated for a specific DLL within the selected process and the name of the DLL is written to the selected process' memory using the WriteProcessMemory method.

2. **Descriptor Copy:** In this…
