---
repo: "awxkee/jixel"
name: "jixel"
description: "Tiny jxl encoder"
readmeQualityOk: true
url: "https://github.com/awxkee/jixel"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["jpeg-xl", "jpeg-xl-encoder", "jxl", "jxl-encoder"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-05-26T10:01:25Z"
lastCommitAt: "2026-09-07T08:35:15Z"
lastReleaseAt: "2026-07-05T16:42:35Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 47
maintainers: ["awxkee"]
openGraphImageUrl: "https://opengraph.githubassets.com/2aeb25385eae0f0d9baf37048b86789d2af019f8d36324d176d799eef2276ca0/awxkee/jixel"
fundingLinks: ["GITHUB:https://github.com/awxkee"]
---

# jixel

A tiny JPEG XL encoder in Rust, ported and reworked from
[libjxl/libjxl-tiny](https://github.com/libjxl/libjxl-tiny).

## Example

```rust
fn main() {
    let output = "encoded_lossy2.jxl";
    let image = image::open(Path::new("./assets/abstract_alpha.png")).unwrap();
    let bytes = jixel::encode_image_with_alpha(
        image.to_rgba8().as_raw(),
        image.width() as usize,
        image.height() as usize,
        &EncodeConfig::default().with_quality(90.),
    );
    std::fs::write(&output, &bytes).expect("failed to write output");
}
```

## License

This project is licensed under either of

- BSD-3-Clause License (see [LICENSE](https://github.com/awxkee/jixel/blob/HEAD/LICENSE.md))
- Apache License, Version 2.0 (see [LICENSE](https://github.com/awxkee/jixel/blob/HEAD/LICENSE-APACHE.md))

at your option.
