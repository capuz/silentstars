---
repo: "Xilinx/llvm-aie"
name: "llvm-aie"
description: "Fork of LLVM to support AMD AIEngine processors"
readmeQualityOk: true
url: "https://github.com/Xilinx/llvm-aie"
language: "LLVM"
languages: ["LLVM", "C++"]
languagePcts: [40, 32]
stars: 211
forks: 46
openIssues: 18
closedIssues: 35
watchers: 19
contributors: 2350
recentReleases: 0
createdAt: "2024-04-22T18:55:00Z"
lastCommitAt: "2026-09-15T08:54:21Z"
lastReleaseAt: "2026-06-12T10:03:04Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 39
maintainers: ["mludevid", "konstantinschwarz", "andcarminati"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc056762c7796944210b76620003cdd768dbddbcfa6f9ac8d17ccf8e2ee87256/Xilinx/llvm-aie"
---

# AIEngine Fork of LLVM

This repository extends the LLVM framework to generate code for use with AMD/Xilinx AI Engine processors.

<table>
    <thead>
        <tr>
            <th>Architecture</th>
            <th>clang/LLVM target</th>
            <th>High-Level Intrinsic API (AIE_API)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>XDNA (Phoenix, Hawk Point)</td>
            <td>--target=aie2-none-unknown-elf</td>
            <td rowspan=2>
            </td>
        </tr>
        <tr>
            <td>XDNA2 (Strix Point)</td>
            <td>--target=aie2p-none-unknown-elf</td>
        </tr>
    </tbody>
</table>

## Architecture Overview

Generally speaking, AI Engine processors are in-order, exposed-pipeline VLIW processors.  These processors are implemented as part of an array of processors focused on application acceleration targetting AI, Machine Learning, and DSP applications.  They have been integrated in a number of commercial devices including the [Versal AI Core Series](https://www.amd.com/en/products/adaptive-socs-and-fpgas/versal/ai-core-series.html) and [Ryzen-AI SOCs](https://www.amd.com/en/products/processors/consumer/ryzen-ai.html).

Each…
