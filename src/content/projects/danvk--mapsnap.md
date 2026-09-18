---
repo: "danvk/mapsnap"
name: "mapsnap"
description: "Automatically georeference old Sanborn Insurance Maps"
readmeQualityOk: true
url: "https://github.com/danvk/mapsnap"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 12
forks: 2
openIssues: 94
closedIssues: 102
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-05-14T13:21:08Z"
lastCommitAt: "2026-09-18T14:02:44Z"
lastReleaseAt: "2026-09-17T01:08:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 89
undervaluedScore: 49
maintainers: ["danvk"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c37641174be0199c1be6c1d191841df0ef1763a5c82e040c612089c80d24589/danvk/mapsnap"
---

# Mapsnap

The goal of Mapsnap is to automatically georeference Sanborn Insurance Maps.

If you'd like to georeference a map using Mapsnap, read about [How it Works](#how-it-works) then head down to the [Pipeline](#pipeline) section.

TL;DR:

```bash
$ uv tool install mapsnap-cli
$ mkdir mymap
# (download manifest.json for a Sanborn map from loc.gov into mymap dir)
# (Find a relation on OSM that contains the map area, e.g. its city or county.)
$ mapsnap run-loc mymap r1234567
```

After a few minutes, depending on the number of images in the Sanborn volume, you'll get a IIIF Georeference AnnotationPage that you can view on [Allmaps][brooklyn1-iiif].

## Performance

Test data comes from hand-geocoding by volunteers on OldInsuranceMaps.net:

<table>
  <thead>
    <tr>
      <th>Volume</th>
      <th>Pages Placed</th>
      <th>≤25ft</th>
      <th>≥200ft</th>
      <th>Score</th>
      <th>Allmaps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://oldinsurancemaps.net/map/sanborn01778_006">Champaign, Ill. 1915</a></td>
      <td align="right">27/33 (82%)</td>
      <td align="right">97.6%</td>
      <td align="right">0.0%</td>
      <td…
