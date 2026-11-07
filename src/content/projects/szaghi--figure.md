---
repo: "szaghi/figure"
name: "figure"
description: "Fortran Immediate-mode GUI for User interfaces, Rendering and Exploration.  Fortran bindings to Dear ImGui and ImPlot, on SDL3 + OpenGL 3"
readmeQualityOk: true
url: "https://github.com/szaghi/figure"
language: "Fortran"
languages: ["Fortran", "C++"]
languagePcts: [69, 21]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-04T09:39:05Z"
lastCommitAt: "2026-11-07T09:29:37Z"
lastReleaseAt: "2026-11-06T17:05:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 50
maintainers: ["szaghi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e623823358bd352bf945de16e185a64ce55810c81389e0698d62db66566cc43f/szaghi/figure"
---

# FIGURE

**F**ortran **I**mmediate-mode **G**UI for **U**ser interfaces, **R**endering and **E**xploration.

Interactive windows, widgets and plots for Fortran programs: [Dear ImGui](https://github.com/ocornut/imgui) and
[ImPlot](https://github.com/epezent/implot) on [SDL3](https://github.com/libsdl-org/SDL) and OpenGL 3, on Linux, macOS
and Windows, with gfortran and nvfortran. Immediate mode: no widget objects, handles or callbacks; the interface is
declared every frame, and its state is the program's own variables.

## A program

```fortran
!< readme, the example of README.md: a window, a slider and a plot that follows it.
program readme
!< readme, the example of README.md: a window, a slider and a plot that follows it.
use, intrinsic :: iso_fortran_env, only : int32, real64
use figure, only : app_object, ig_begin, ig_end, ig_set_next_window, ig_slider, ip_begin_plot, ip_end_plot, ip_line

implicit none
type(app_object) :: app           !< Application.
real(real64)     :: x(200)        !< Abscissae.
real(real64)     :: frequency     !< Set by the slider.
integer(int32)   :: i             !< Counter.

x = [(0.05_real64 * i, i = 0, 199)]
frequency = 1.0_real64
call…
