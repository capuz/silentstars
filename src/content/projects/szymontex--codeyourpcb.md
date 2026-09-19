---
repo: "szymontex/codeyourpcb"
name: "codeyourpcb"
description: "code-first PCB design. Write circuits as text, get autorouted boards, Gerber exports, and DRC validation."
readmeQualityOk: true
url: "https://github.com/szymontex/codeyourpcb"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
stars: 45
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T23:15:49Z"
lastCommitAt: "2026-09-18T02:55:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 33
maintainers: ["szymontex"]
openGraphImageUrl: "https://opengraph.githubassets.com/4285b13495f969746e0f89f0c78de1128ab406e6b0331c914f416de2f4469817/szymontex/codeyourpcb"
---

# CodeYourPCB

**Code-first PCB design.** Describe your circuit board in a simple DSL — get a deterministic, git-friendly, AI-editable design.

```cypcb
// blink.cypcb — 555 timer LED blink circuit
version 1

board blink {
    size 60mm x 40mm
    layers 2
}

component J1 connector "PIN-HDR-1x2" { value "5V PWR"; at 5mm, 20mm }
component U1 ic "SOIC-8" { value "NE555"; at 28mm, 20mm }
component R1 resistor "0402" { value "10k"; at 35mm, 30mm }
component C1 capacitor "1206" { value "10uF"; at 43mm, 20mm }
component LED1 led "0805" { value "RED"; at 55mm, 20mm }

net VCC [width 0.5mm  current 2A] { J1.1; U1.8; U1.4; R1.1 }
net GND { J1.2; U1.1; C1.2; LED1.K }

// Routed traces saved in the file — survives reload, diffs cleanly
trace VCC {
    layer Top
    width 0.5mm
    path 5mm,20mm -> 15mm,20mm -> 28mm,20mm -> 35mm,30mm
}
```

</p>

Save the file, board updates instantly. No compile step, no refresh.

**New here?** [Syntax reference](https://github.com/szymontex/codeyourpcb/blob/HEAD/docs/SYNTAX.md) | [Getting started](https://github.com/szymontex/codeyourpcb/blob/HEAD/docs/user-guide/getting-started.md) | [Examples](https://github.com/szymontex/codeyourpcb/blob/HEAD/examples/)…
