---
repo: "RBLXDecomp/RBXGSdecomp"
name: "RBXGSdecomp"
description: "Decompilation of Roblox from November 2007"
readmeQualityOk: true
url: "https://github.com/RBLXDecomp/RBXGSdecomp"
language: "C++"
languages: ["C++"]
languagePcts: [67]
stars: 101
forks: 28
openIssues: 6
closedIssues: 17
watchers: 6
contributors: 11
recentReleases: 0
createdAt: "2024-10-21T07:30:58Z"
lastCommitAt: "2026-10-11T10:16:10Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 46
maintainers: ["luasoft10", "MarioMaster9", "NTx86"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac10a2fb97e50d818f1338617ccafc525d7ebb233d719898318d9f2cd6b2ec6e/RBLXDecomp/RBXGSdecomp"
---

# RBXGS Decompilation
A decompilation of [RBXGS (Roblox Grid Service) version 0.3.634.0](https://archive.org/download/rbxgssetup/S3FileHandler_RBXGSSetup_0.3.634.0.msi), currently focusing on specific critical components (v8kernel, v8world, etc.) for now, and will later expand out to other classes.

You need to use Microsoft Visual Studio 2005 with [SP1 Update](https://web.archive.org/web/20200801000000id_/download.microsoft.com/download/6/3/c/63c69e5d-74c9-48ea-b905-30ac3831f288/VS80sp1-KB926601-X86-ENU.exe) for matching. (Visual C/C++(14.00.50727)[C++]) Additionally, since parts of the code use newer Windows API utilities only introduced in Windows Vista, a [newer version of the Windows SDK](https://web.archive.org/web/20210505032618/https://download.microsoft.com/download/4/2/6/42684501-9ec5-43dd-9dfe-c8c9dfa6a66f/6.1.6000.16384.10.WindowsSDK_Vista_Feb2007Update_rtm.DVD.Rel.iso) is required. 

You have to select ReleaseAssert configuration when compiling the code otherwise it won't produce matching code. To test linking you can select ReleaseAssertDLL configuration (Note: this configuration did not exist in the original Roblox source code and is only present for link…
