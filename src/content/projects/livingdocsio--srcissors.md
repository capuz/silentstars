---
repo: "livingdocsIO/srcissors"
name: "srcissors"
description: "Image cropping ui for responsive images"
url: "https://github.com/livingdocsIO/srcissors"
homepage: "https://livingdocsio.github.io/srcissors/examples/index.html"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["swiss-publishing", "image-cropping"]
stars: 17
forks: 2
openIssues: 1
closedIssues: 4
watchers: 9
contributors: 35
recentReleases: 0
createdAt: "2015-02-03T09:04:30Z"
lastCommitAt: "2026-06-27T00:36:53Z"
lastReleaseAt: "2026-03-27T19:11:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 54
maintainers: ["renovate[bot]", "marcbachmann", "robinbisping"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c91cf99a64aa536ffee2392f7de0297e8d91519265b806d50ffce796b367fd/livingdocsIO/srcissors"
---

# srcissors

Image cropping for responsive images.
(~5kB minified and gzipped)

### Js

```javascript
// Initialize srcissors
var cropper = srcissors.new({
  arena: $('.crop-arena'),
  url: "/images/diagonal.jpg",
  fixedWidth: 300,
  minRatio: 1/1.5,
  maxRatio: 1.5/1
});

// Set a crop
cropper.setCrop({
  x: 1096,
  y: 461,
  width: 700,
  height: 500
})

// Get the current crop
cropper.getCrop();

// Set a ratio
cropper.setRatio(4/3);

// Reset to show the full image without any crop applied
cropper.reset();

// Set a new url
cropper.setImage('/images/storytelling-painting.jpg');

// Listen for the ready event (only fired once)
cropper.on('ready', function() {
    // your code
});

// Listen for image load events
cropper.on('load', function() {
    // your code
});

cropper.on('change', function(crop) {
    var x, y, width, height;
    x = crop.x;
    y = crop.y;
    width = crop.width;
    height = crop.height;
});

```

### Configuration Options

| Parameter | Type |  |
|---------------|-------------|--------------------------------|
| `arena` | jQuery element |  |
| `url` | String | Url of the image to load |
| `crop` | Object | {x, y, width, height} Initial crop. The same…
