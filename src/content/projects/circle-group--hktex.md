---
repo: "circle-group/hktex"
name: "hktex"
description: "Heat Kernel Textures: the Geodesic Gaussians That Do Not Splat"
readmeQualityOk: true
url: "https://github.com/circle-group/hktex"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-09T14:48:46Z"
lastCommitAt: "2026-09-10T08:19:54Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 21
maintainers: ["Kausta", "simofoti"]
openGraphImageUrl: "https://opengraph.githubassets.com/359c8f1fd7fcae0312da88d30f02b73f914661071154a3aa9cb98165b2ee6d4a/circle-group/hktex"
---

# Heat Kernel Textures: the Geodesic Gaussians That Do Not Splat

**Simone Foti<sup>&#42;</sup> · Caner Korkmaz<sup>&#42;</sup> · Stefanos Zafeiriou · Tolga Birdal**

<sup>&#42;</sup> Equal contribution

ECCV 2026 (Best Paper and Long Oral)

</div>

Heat Kernel Textures (HKTex) are an intrinsic texture representation for triangular meshes. Instead of relying on a UV atlas, HKTex represents appearance with anisotropic heat kernels—the geodesic counterparts of Gaussians—defined directly on the surface. Kernel positions, optimisation, pruning, and densification all operate on the mesh.

HKTex avoids UV seams, distortion, wasted atlas space, duplicated vertices, and uneven texel resolution. The representation can be fitted from an existing texture or from multi-view images and integrates with physically based rendering.

## Highlights

- Intrinsic, UV-free texturing for arbitrary triangular meshes.
- Anisotropic heat kernels with learnable positions and appearance.
- Surface-aware optimisation, importance pruning, and error-based densification.
- Texture fitting from textured meshes or multi-view observations.
- Differentiable and physically based rendering workflows.

## Installation…
