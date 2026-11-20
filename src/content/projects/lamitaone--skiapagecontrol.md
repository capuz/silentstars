---
repo: "LaMitaOne/SkiaPageControl"
name: "SkiaPageControl"
description: "Delphi RAD Studio SkiaPageControl (Prototype)"
readmeQualityOk: true
url: "https://github.com/LaMitaOne/SkiaPageControl"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [100]
topics: ["delphi", "radstudio", "skia4delphi"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-27T15:35:05Z"
lastCommitAt: "2026-11-19T12:00:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 28
maintainers: ["LaMitaOne"]
openGraphImageUrl: "https://opengraph.githubassets.com/9594de4f5bd7cfce8454af08a5f2c050228fc5b22a4e45b0ac856711ec4f33d8/LaMitaOne/SkiaPageControl"
---

# SkiaPageControl
Delphi RAD Studio skia4delphi - SkiaPageControl (Prototype)   
       
A next-generation VCL PageControl prototype that brings GPU-accelerated, fluid transitions to Delphi applications using the Skia graphics library.    

   
    
This project is a proof-of-concept to demonstrate that legacy VCL controls can be modernized with smooth, high-performance animations without heavy CPU overhead.   
   
✨ Features    
    
    Smooth Animations: Hardware-accelerated transitions using Skia.    
    Blur Effect: A unique "Page Blur" transition that blurs the old page out to reveal the new one.    
    Variety of Effects: Includes Fade, Slide, and Page Blur.    
    High Performance: Minimal CPU and GPU usage. Animations run smoothly.    
    
🚧 Current Status: Prototype    
    
Please note that this is currently a prototype and not a final production-ready component.   
    
    Architecture: It uses a snapshot technique (capturing VCL panels to bitmaps) to render the animation frames.   
    Limitations: Complex controls (like TWebBrowser or DirectX components) may not render correctly in the snapshot.
