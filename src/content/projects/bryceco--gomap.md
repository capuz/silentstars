---
repo: "bryceco/GoMap"
name: "GoMap"
description: "OpenStreetMap editor for iPhone/iPad"
readmeQualityOk: true
url: "https://github.com/bryceco/GoMap"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["editor", "ios", "macos", "mapping", "openstreetmap", "swift"]
stars: 413
forks: 50
openIssues: 93
closedIssues: 730
watchers: 16
contributors: 85
recentReleases: 0
createdAt: "2013-01-26T04:30:28Z"
lastCommitAt: "2026-09-10T17:10:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 36
maintainers: ["bryceco", "weblate", "arifpedia"]
openGraphImageUrl: "https://opengraph.githubassets.com/91fdf2d213cf078b30fbbddfd83c6a02c0f3c6077f77d250ed8c94d011843827/bryceco/GoMap"
discussionCount: 8
---

# Go Map!!

Go Map!! is an iPhone/iPad editor for adding cartographic information to [OpenStreetMap][1].

[Tutorial/help][8] on the OpenStreetMap Wiki.

## Join our TestFlight beta!

Do you want to help testing pre-releases of Go Map!!?
[Become a TestFlight tester][4] today! 🚀

## Source code structure

* iOS - App-specific UI code
	* CustomViews - A collection of UIViews and CALayers primarily used by MapView
	* Direction - The view controller for measuring direction
	* Height - The view controller for measuring height
	* OpeningHours - Support for recognizing hours via camera 
	* PhotoShare - App extension so we appear in the system Share menu
	* POI - View Controllers for tagging objects
	* Quests - Quest VCs and related code
	* Upload - View controller for uploading changesets
* Shared - General purpose code (drawing code, OSM data structures, etc)
	* Database - A SQLite3 database storing downloaded OSM data
	* EditorLayer - The low-level graphical display for drawing nodes/ways
	* MapMarkers - Markers for Quests, Notes, etc.
	* OSMModels - Code for managing and storing OSM objects (nodes, ways, etc.)
	* PresetsDatabase - Code for processing iD presets
	* Tiles - Aerial…
