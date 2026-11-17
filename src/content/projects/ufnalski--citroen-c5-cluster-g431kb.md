---
repo: "ufnalski/citroen_c5_cluster_g431kb"
name: "citroen_c5_cluster_g431kb"
description: "Citroen C5 II (2011) instrument panel cluster hacking with STM32/HAL."
readmeQualityOk: true
url: "https://github.com/ufnalski/citroen_c5_cluster_g431kb"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["c5", "can", "can-bus", "can-bus-hacking", "canbus", "citroen", "cubemx", "hal", "instrument-panel", "ipc"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-09-30T21:33:46Z"
lastCommitAt: "2026-11-17T14:47:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["ufnalski"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d2daba07321c34e2ed212aaa5e1709765c3e557d2d62fbf3749833353270800/ufnalski/citroen_c5_cluster_g431kb"
---

# Citroen C5 II (2011) instrument panel cluster hacking (STM32G431KB)
Similar story as for the sixth-generation Ford [Mustang (S550)](https://github.com/ufnalski/ford_mustang_cluster_h503rb) and the second-generation Peugeot [308 (T9)](https://github.com/ufnalski/peugeot_308_t9_cluster_g431kb). Let me therefore not to retell the whole story here.

> [!WARNING]
> Be careful when playing with the CAN message ID **0xF6**. It contains mileage that cannot be decreased for the Citroen C5 IPC. Moreover, once set to more than 999999 km it will overflow the range on the display and you will be able to see only "------ km" from now on (permanently) :slightly_frowning_face:

> [!TIP]
> The IPC sends the CAN message ID **0x257** at the power-up. The massage contains the current mileage stored in the IPC to prevent odometer fraud. You can read this value to send it back to the IPC and display it :slightly_smiling_face:

Check [/Assets/Images/](https://github.com/ufnalski/citroen_c5_cluster_g431kb/blob/HEAD/Assets/Images/) for the pinout.

# Missing files?
Don't worry :slightly_smiling_face: Just hit Alt-K to generate /Drivers/CMCIS/ and /Drivers/STM32G4xx_HAL_Driver/ based on the .ioc file.…
