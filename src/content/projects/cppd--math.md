---
repo: "cppd/math"
name: "math"
description: "The more dimensions, the better the geometry."
readmeQualityOk: true
url: "https://github.com/cppd/math"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["fun", "3d", "4d", "5d", "6d", "computational-geometry", "geometry", "graphics", "rendering", "algorithms"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-05-31T07:09:26Z"
lastCommitAt: "2026-07-31T06:30:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 61
maintainers: ["cppd"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/92916041/398acf26-bf96-4819-8823-12054cf4424f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063203Z&X-Amz-Expires=300&X-Amz-Signature=c01c491b5a69f1254800f7f048ff653930c0b0b09b6fef380b291fec50cdde6c&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTgyMywibmJmIjoxNzg1NDc5NTIzLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.ZV5XHfZf6TwEm17vjOH2mzO6ZrfpaMo0E1lbBm6pGCc"
---

# Math Viewer

Just for fun with mathematics and stuff

## Contents

* [File types](#file-types)
* [Rendering](#rendering)
  * [GPU](#gpu)
  * [CPU](#cpu)
* [Algorithms](#algorithms)
  * [2-space](#2-space)
  * [3-space](#3-space)
  * [Spaces with arbitrary number of dimensions](#spaces-with-arbitrary-number-of-dimensions)
* [Technical details](#technical-details)
* [Images](#images)
  * [3-manifold reconstruction and path tracing in 4-space](#3-manifold-reconstruction-and-path-tracing-in-4-space)
  * [4D Cornell box](#4d-cornell-box)
  * [Real-time rendering](#real-time-rendering)
  * [3D models](#3d-models)
  * [4D polytope](#4d-polytope)

## File types

* OBJ and STL files with objects in 3-space
* Extended OBJ and STL files with objects in n-space
* Text files with the coordinates of points in n-space

## Rendering

### GPU

* Triangle meshes (rasterization)
* Volumes (ray marching)
* Isosurfaces (ray marching)
* Shadows (ray tracing, ray marching, shadow mapping)
* Order-independent transparency (lists of fragments)

### CPU

* Bidirectional path tracing with multiple importance sampling
* (n-1)-simplex meshes in n-space on (n-1)-dimensional screen
* n-dimensional microfacet…
