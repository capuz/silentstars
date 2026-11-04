---
repo: "ARM-software/CMSIS-NN"
name: "CMSIS-NN"
description: "CMSIS-NN Library"
readmeQualityOk: true
url: "https://github.com/ARM-software/CMSIS-NN"
homepage: "https://arm-software.github.io/CMSIS-NN"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 457
forks: 120
openIssues: 5
closedIssues: 65
watchers: 17
contributors: 32
recentReleases: 1
createdAt: "2022-06-01T14:52:41Z"
lastCommitAt: "2026-11-04T13:05:20Z"
lastReleaseAt: "2026-08-21T05:16:00Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 36
maintainers: ["veblush", "mansnils", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d8f33011292131d05aeab5e3692eebf1381acf25e6ebcd7f0fe654f60c49c2c/ARM-software/CMSIS-NN"
---

# CMSIS NN
CMSIS NN software library is a collection of efficient neural network kernels developed to maximize the
performance and minimize the memory footprint of neural networks on Arm Cortex-M processors.

## Supported Framework
The library follows the [int8](https://www.tensorflow.org/lite/performance/quantization_spec) and int16 quantization specification of TensorFlow Lite for Microcontrollers.
This means CMSIS-NN is bit-exact with Tensorflow Lite reference kernels. In some cases TFL and TFLM reference kernels may not be bit-exact. In that case CMSIS-NN follows TFLM reference kernels. The unit test readme provides an [overview](https://github.com/ARM-software/CMSIS-NN/blob/main/Tests/UnitTest/README.md#tests-depending-on-tflm-interpreter).

### Experimental Float API
CMSIS-NN also provides experimental float32 and float16 APIs. The float API intentionally follows the same CMSIS-NN integer style, which is itself shaped by TFLM integration patterns, to keep the public surface consistent across data types. This includes float16 even though TFLM does not define a float16 operator contract.

The float API is primarily intended for Cortex-M CPUs with Arm Helium Technology (MVE).…
