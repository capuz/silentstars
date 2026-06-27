---
repo: "ooples/AiDotNet.Tensors"
name: "AiDotNet.Tensors"
description: "The fastest .NET tensor library. Beats MathNet (6x), NumSharp (3200x), matches TorchSharp CPU - pure managed C# with hand-tuned AVX2/FMA SIMD kernels. Optional CUDA/OpenCL GPU acceleration."
url: "https://github.com/ooples/AiDotNet.Tensors"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 14
closedIssues: 201
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-21T16:25:54Z"
lastCommitAt: "2026-06-27T00:48:22Z"
lastReleaseAt: "2026-03-05T20:57:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["ooples"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e76871e47e6074f84ebca7ba22158ad86f8864778802f59ec9880c5ad0c6eef/ooples/AiDotNet.Tensors"
---

# AiDotNet.Tensors

A high-performance .NET tensor library with hand-written AVX2/AVX-512 SIMD kernels in `SimdKernels.cs` / `SimdGemm.cs` / `SimdConvHelper.cs`. Every hot path runs through our own managed-C# kernels — we do NOT call into `System.Numerics.Tensors`, MKL.NET, or oneDNN through the standard wrappers. Beats ML.NET, TensorFlow.NET, MathNet, and NumSharp outright on every measured op. Against libtorch (TorchSharp's hand-tuned C++ kernels), wins on Mish 2.3×, Mish (double) 2.2×, **GELU (double) 1.6× ahead**, **Tanh (double) within noise**, Tanh (float) 1.4×, TensorMean/Min/Max, MaxPool2D, TensorAdd 100K, and TensorAdd 1M (vs single-thread torch) — all using pure managed C# with hand-tuned AVX2/FMA SIMD kernels and JIT-compiled machine code.

> **Note on dependencies.** The .nupkg ships with the following PackageReferences:
> `Microsoft.Extensions.Logging.Abstractions`, `System.Text.Json`,
> `System.Threading.Channels`, `K4os.Compression.LZ4` (LZ4 compression for
> serialized tensor blobs), `AiDotNet.Native.OpenBLAS` (transitive native
> OpenBLAS for fallback paths only — our SimdGemm beats it for d=128
> transformer hot paths), and **MKL via Microsoft.ML.Mkl.Redist (~66…
