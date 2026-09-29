---
repo: "tchapgouv/tchap-web-v4"
name: "tchap-web-v4"
description: "A Matrix web client for Tchap"
readmeQualityOk: true
url: "https://github.com/tchapgouv/tchap-web-v4"
homepage: "https://www.tchap.gouv.fr/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["matrix", "tchap"]
stars: 35
forks: 30
openIssues: 244
closedIssues: 594
watchers: 10
contributors: 621
recentReleases: 0
createdAt: "2022-01-27T10:51:57Z"
lastCommitAt: "2026-09-29T10:04:31Z"
lastReleaseAt: "2022-12-01T08:54:25Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 64
maintainers: ["MarcWadai", "renovate[bot]", "RiotRobot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e51a627c26955dd1a817c159f3f6e8d11b0c7241956515b2e839e44427b4375e/tchapgouv/tchap-web-v4"
fundingLinks: ["PATREON:https://patreon.com/matrixdotorg", "LIBERAPAY:https://liberapay.com/matrixdotorg"]
---

</a>
</p>

  Bienvenue sur Tchap! Le système de messagerie instantanée du secteur public français
</p>

    Site web de présentation
  </a> -
    Contactez-nous
  </a>
</p>

Tchap is a web app that allows you to chat through the matrix protocol for the French public service. It is a soft fork of [Element web](https://github.com/vector-im/element-web), we diverge only for specific requirements.

## Config variables

- tchap_features : Object containing the feature that can be activated by homeserver
    - "feature_email_notification": Email notification
    - "feature_space": Creation of spaces
    - "feature_thread": Activate thread on messages
    - "feature_audio_call": Activate 1 to 1 voice call
    - "feature_video_call": Activate 1 to 1 video call
    - "feature_video_group_call": Activate group call on rooms, for this feature to work, the values of `UIFeature.widgets` needs to be true
    - "feature_screenshare_call": Activate 1 to 1 screenshare
    - feature_create_room_non_encrypted : Activate option to create private non encrypted room
    - feature_use_ec_in_dm: give options to use Element call in DM room
    - feature_red_list: Activate the option for red list
-…
