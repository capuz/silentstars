---
repo: "uv-software/KvaserCAN-Wrapper"
name: "KvaserCAN-Wrapper"
description: "CAN API V3 Wrapper Library for Kvaser CAN Interfaces (Windows®)"
readmeQualityOk: true
url: "https://github.com/uv-software/KvaserCAN-Wrapper"
language: "C++"
languages: ["C++", "C"]
languagePcts: [74, 26]
topics: ["can", "can-fd", "can-bus", "kvaser", "kvaser-interface", "windows"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-01-19T12:07:01Z"
lastCommitAt: "2026-08-28T14:27:29Z"
lastReleaseAt: "2024-06-11T16:10:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 49
maintainers: ["uv-software"]
openGraphImageUrl: "https://opengraph.githubassets.com/e822583c8134e8c1992b22157d573e18bbfced098c2c58626208d3de51e7ebdb/uv-software/KvaserCAN-Wrapper"
fundingLinks: ["GITHUB:https://github.com/mac-can"]
---

### CAN API V3 Wrapper Library for Kvaser CAN Interfaces (Windows&reg;)

_Copyright &copy; 2017-2026 Uwe Vogt, UV Software, Berlin (info@uv-software.de)_

# CAN API V3 for Kvaser CAN Interfaces

CAN API V3 is a wrapper specification to have a uniform CAN Interface API for various CAN interfaces from different vendors running under multiple operating systems.

## KvaserCAN-Wrapper

This repo contains the source code for a CAN API V3 compatible wrapper library under Windows for CAN Interfaces from Kvaser AB, Sweden.
The wrapper library is build upon Kvaser´s CANlib SDK.

### CAN Interface API, Version 3

```C++
/// \name   KvaserCAN API
/// \brief  CAN API V3 driver for Kvaser CAN interfaces
/// \note   See CCanApi for a description of the overridden methods
/// \{
class CKvaserCAN : public CCanApi {
public:
    // constructor / destructor
    CKvaserCAN();
    ~CKvaserCAN();

    // CCanApi overrides
    static bool GetFirstChannel(SChannelInfo &info, void *param = NULL);
    static bool GetNextChannel(SChannelInfo &info, void *param = NULL);

    static CANAPI_Return_t ProbeChannel(int32_t channel, const CANAPI_OpMode_t &opMode, const void *param, EChannelState &state);
    static…
