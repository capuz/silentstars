---
repo: "K-saif/pixpick"
name: "pixpick"
description: "Interactive vision input toolkit for CV frameworks, generate bbox, polygons, lines and points for YOLO, SAM2, Supervision and many more."
readmeQualityOk: true
url: "https://github.com/K-saif/pixpick"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["computer-vision", "coordinates", "developer-tools", "image-processing", "interactvie", "object-detection", "opencv", "polygon", "python", "roi"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-20T06:14:25Z"
lastCommitAt: "2026-07-08T05:41:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["K-saif", "Ansarimajid", "Shikha409"]
openGraphImageUrl: "https://opengraph.githubassets.com/8043b6b2b94b245baad85e9f8452d3603db52efed88888bb239f31bbd604ea3b/K-saif/pixpick"
---

# pixpick 🎯

**Interactive coordinate picker for Computer Vision — no external tools needed.**

</div>

---

## The problem

Every major CV framework needs coordinates before it can run.

```python
regioncounter = RegionCounter(region=[120, 80, 640, 480])    # YOLO   — where does this region come from?
predictor.predict(box=np.array([120, 80, 640, 480]))         # SAM2   — same problem
```

The standard workflow: open CVAT or Roboflow → grab coordinates → paste them back into code. Every. Single. Time.

## The fix

```python
import pixpick

region = pixpick.box("frame.jpg")      # drag a box on the image
zone   = pixpick.polygon("frame.jpg")  # click polygon vertices

# coordinates are ready — unpack directly into any framework
# YOLO:
regioncounter = RegionCounter(
     region=zone.yolo_region,  # pass region points
     model="yolo26n.pt",
 )

# same for YOLOE
model.predict("frame.jpg", visual_prompt= region.yolo_prompt())

# SAM1/SAM2:
predictor.predict(box=region.sam())
```

A window opens on your image. You interact. You get framework-ready coordinates back in Python. No round-trips.

---

## Install

```bash
pip install pixpick
```

---

## Selectors

| Selector | How to…
