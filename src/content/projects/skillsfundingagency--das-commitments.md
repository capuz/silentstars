---
repo: "SkillsFundingAgency/das-commitments"
name: "das-commitments"
description: "Commitments API for the Apprenticeship Service"
readmeQualityOk: true
url: "https://github.com/SkillsFundingAgency/das-commitments"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["apprenticeship-service", "as-employer-account", "as-provider-account"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 28
contributors: 98
recentReleases: 0
createdAt: "2016-08-19T09:53:33Z"
lastCommitAt: "2026-10-07T10:31:23Z"
lastReleaseAt: "2017-07-18T10:55:22Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 89
undervaluedScore: 57
maintainers: ["Pauljgraham", "Najamuddin-Muhammad", "sony-kotha"]
openGraphImageUrl: "https://opengraph.githubassets.com/620e5ca803d619f14e5d27926e84d8c082351dda28676ce8088885ed6caa50af/SkillsFundingAgency/das-commitments"
---

# Commitments API #

Commitments API for the Digital Apprenticeship Service

For Commitments V2, see: https://github.com/SkillsFundingAgency/das-commitments/tree/master/src/CommitmentsV2

## Getting started Api (covering v1 and v2) ##
* Clone das-commitments repo
* Open das-commitments solution - build fails. This is due to a Slow Cheetah issue. To workaround, change build configuration to Release and build, then back to Debug and build. Solution will then build ok.
* Run the SFA.DAS.CommitmentsV2.Api project.
* Publish the database project to local db server (use default db name "SFA.DAS.Commitments.Database")
* Execute sql to seed data - see https://github.com/SkillsFundingAgency/das-commitments/tree/master/src/CommitmentsV2 
* Obtain cloud config - See below
* Run Storage Emulator (for v2)
* Start

**Build status**

## Methods ##

    api/provider/
        GET       {providerId}/commitments
        GET       {providerId}/commitments/{commitmentId}
        GET       {providerId}/apprenticeships
        GET       {providerId}/apprenticeships/{apprenticeshipId}
        PATCH     {providerId}/commitments/{commitmentId}
        DELETE    {providerId}/commitments/{commitmentId}…
