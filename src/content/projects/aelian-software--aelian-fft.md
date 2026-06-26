---
repo: "Aelian-Software/Aelian.FFT"
name: "Aelian.FFT"
description: "A highly optimized 1D fast fourier transform (FFT) implementation for .NET, with implementations for both real- and complex-valued data."
url: "https://github.com/Aelian-Software/Aelian.FFT"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-20T11:21:01Z"
lastCommitAt: "2026-06-26T06:46:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: ["Sebtous"]
openGraphImageUrl: "https://opengraph.githubassets.com/60278a039d452049c2ebc96d2499575b5ca5dd0f08f912af871eab373928c8e8/Aelian-Software/Aelian.FFT"
discussionCount: 2
---

# Aelian.FFT

A highly optimized fast fourier transform implementation for .NET 8 and up, written in 100% pure c#, so there are no dependencies on native libraries.

It utilizes an in-place iterative Radix-2 Cooley-Tukey algorithm tuned for SIMD, and has support for both complex-valued and real-valued input.

To my knowledge, it is the fastest .NET FFT implementation that is freely and publicly available.

## Usage

### Initialization

```c#
using Aelian.FFT;

// Call Initialize () once when your program is loading
FastFourierTransform.Initialize ();
```

### Transforming complex-valued data

```c#
var ComplexBuffer = new System.Numerics.Complex[4096];

// Fill ComplexBuffer with meaningful data here

FastFourierTransform.FFT ( ComplexBuffer, /* forward: */ true );
```

### Transforming real-valued data

```c#
var RealBuffer = new double[4096];

// Fill RealBuffer with meaningful data here

FastFourierTransform.RealFFT ( RealBuffer, /* forward: */ true );
```

Or, alternatively, using the supplied `Aelian.FFT.SignalData` class to make working with in-place real-valued FFTs easier:

```c#
var MySignalData = SignalData.CreateFromRealSize ( 4096 );

// Fill MySignalData with…
