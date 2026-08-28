---
repo: "uv-software/PCANBasic-Wrapper"
name: "PCANBasic-Wrapper"
description: "CAN API V3 Wrapper Library for Peak-System PCAN® Interfaces (Windows®)"
readmeQualityOk: true
url: "https://github.com/uv-software/PCANBasic-Wrapper"
language: "C++"
languages: ["C++"]
languagePcts: [83]
topics: ["can", "can-bus", "can-fd", "windows", "pcan", "pcanbasic"]
stars: 19
forks: 7
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-01-15T16:21:15Z"
lastCommitAt: "2026-08-28T14:26:31Z"
lastReleaseAt: "2024-04-23T18:44:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 43
maintainers: ["uv-software"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea53152deead38040e4e357e89c09e339325213d2b23a6cdd765ec9343386b63/uv-software/PCANBasic-Wrapper"
fundingLinks: ["GITHUB:https://github.com/mac-can"]
---

### CAN API V3 Wrapper Library for PEAK-System PCAN&reg; Interfaces (Windows&reg;)

_Copyright &copy; 2005-2026 Uwe Vogt, UV Software, Berlin (info@uv-software.de)_

# CAN API V3 for PCAN Interfaces

CAN API V3 is a wrapper specification to have a uniform CAN Interface API for various CAN interfaces from different vendors running under multiple operating systems.

## PCANBasic-Wrapper

This repo contains the source code for a CAN API V3 compatible wrapper library under Windows for PCAN Interfaces from PEAK-System Technik GmbH.
The wrapper library is build upon Peak´s PCANBasic DLL.

### CAN Interface API, Version 3

```C++
/// \name   PeakCAN API
/// \brief  CAN API V3 Wrapper for PEAK-System PCAN Interfaces
/// \note   See CCanApi for a description of the overridden methods
/// \{
class CPeakCAN : public CCanApi {
public:
    // constructor / destructor
    CPeakCAN();
    ~CPeakCAN();

    // CCanApi overrides
    static bool GetFirstChannel(SChannelInfo &info, void *param = NULL);
    static bool GetNextChannel(SChannelInfo &info, void *param = NULL);

    static CANAPI_Return_t ProbeChannel(int32_t channel, const CANAPI_OpMode_t &opMode, const void *param, EChannelState…
