---
repo: "InterTriplete2010/IIR_Butterworth_Filter_C_Sharp"
name: "IIR_Butterworth_Filter_C_Sharp"
description: "IIR Butterworth Filter for C#"
url: "https://github.com/InterTriplete2010/IIR_Butterworth_Filter_C_Sharp"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-05-24T17:28:27Z"
lastCommitAt: "2026-06-26T21:31:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 40
maintainers: ["InterTriplete2010"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bf049203f60b9b2dd0d2fde822f9c998078ecf159d371c2ad9d39843cd7ed5b/InterTriplete2010/IIR_Butterworth_Filter_C_Sharp"
---

C# code to calculate the coefficients of the Butterworth filter and to filter the data

This code calculates the coefficients of the Band-pass, Band-stop, Low-pass and High-pass Butterworth filters.  It also filters the data, but no zero-phase delay is applied. namespace IIR_Butterworth_C_Sharp. The code follows the same steps as in Matlab.

Each filter function will return a 2 rows x N coefficients 2D vector, where Row 1 = Numerator and Row 2 = Denumerator. The method "Check_stability_iir" can be used to check the stability of the filter. Please, keep in mind that if the filter is unstable, numerical instability leading to numerical overflow might happen when the order selected is extremely high. If that situation occurs, the program might assign a default value of 10^10 at the denominator.

1) Band-pass: the function is "double[][] Lp2bp(double W_f1, double W_f2, int order_filt)". The first two arguments are the two normalized cut-off frequencies (f1/NF, f2/NF), where NF is the Nyquist frequency. This means that the cutoff frequencies must be within the interval of (0,1). The last argument is the order. Please, keep in mind that if you enter order_filt = 2, the order of the…
