---
repo: "SkyTechNerds/faceid"
name: "faceid"
description: "Self-hosted face recognition for Frigate + Home Assistant — InsightFace/ArcFace matching, clustered unknown review UI, photo-library enrollment, Frigate sub_label write-back, HA MQTT sensors"
readmeQualityOk: true
url: "https://github.com/SkyTechNerds/faceid"
homepage: "https://community.home-assistant.io/t/faceid-trainable-face-recognition-for-frigate-with-a-proper-review-ui-add-on-standalone/1018333"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [71, 27]
topics: ["face-recognition", "frigate", "home-assistant", "insightface", "mqtt", "self-hosted"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-22T07:51:04Z"
lastCommitAt: "2026-08-07T05:14:08Z"
lastReleaseAt: "2026-07-23T09:11:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["skycryer"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dfdd479bd426a7cc621a3947b5db7dc78c174c6bda211a127b8bffad86ad1e8/SkyTechNerds/faceid"
---

# FaceID — self-hosted face recognition for Frigate + Home Assistant

FaceID is a small, self-hosted service that adds **reliable, trainable face recognition**
on top of [Frigate](https://frigate.video). It uses the same model family as Immich and
CompreFace (**InsightFace `buffalo_l`**: SCRFD detection + ArcFace embeddings) and was
built because Frigate's built-in face recognition UX didn't cut it:

- **No train-tab treadmill.** Matching is nearest-neighbor over face embeddings — every
  image you assign is a visible reference point, with no training cycles and no queue
  that refills with already-known faces. To be clear: this is not immune to bad data —
  an imbalanced or mislabeled gallery still degrades matching (a person with many
  reference images wins borderline matches more often). The difference is that the
  failure mode is an image you can see and delete, not an opaque model update.
- **Strangers are first-class.** Unknown faces are collected, **auto-clustered** (DBSCAN,
  the same trick photo apps use) and reviewed in a web UI: one click assigns a whole
  cluster to a person — or **ignores** it. People you enroll (the mailman you *want*
  notifications for) get…
