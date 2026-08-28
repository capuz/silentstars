---
repo: "marcavallee/mtsphere"
name: "mtsphere"
description: "Fortran and Python programs to simulate the magnetotelluric response of a sphere in a layered earth."
readmeQualityOk: true
url: "https://github.com/marcavallee/mtsphere"
language: "Fortran"
languages: ["Fortran", "Python"]
languagePcts: [52, 47]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-03-30T19:09:57Z"
lastCommitAt: "2026-08-28T14:26:09Z"
lastReleaseAt: "2026-07-27T15:45:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 47
maintainers: ["marcavallee"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a0a9b0e0f11d159346126f0792f77335099b4f8ef12d0b0f2f3c201c718289f/marcavallee/mtsphere"
---

# mtsphere

Programs in Fortran and Python have been developed to simulate the magnetotelluric response of a sphere in a layered earth.  Originally designed for airborne  electromagnetic (EM) exploration, where the source is a dipole (see Vallée and Moussaoui, 2023, Exploration Geophysics 54(4), 362-375), it has been adapted to plane waves and coded in Fortran and Python. Based on developments in the evaluation of derivatives with expansions of spherical and cylindrical functions, this program is open source and can be used to validate numerical models or to better understand the MT response of buried conductors in a layered environment. This approach has been submitted to Geophysics for publication.

Source codes and executables are provided for Fortran and Python. Windows Fortran executables are provided for Intel and Windows gfortran compilers. The author is aware of compilation in gfortran on an Apple MacIntosh using appropriate libraries. Python executable was created using pyInstaller. Of course, the best performance is achieved with Fortran version.
