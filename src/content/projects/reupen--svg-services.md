---
repo: "reupen/svg-services"
name: "svg-services"
description: "foobar2000 component that provides an API for rendering SVGs"
readmeQualityOk: true
url: "https://github.com/reupen/svg-services"
homepage: "https://yuo.be/svg-services"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["foobar2000"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-08-19T20:08:13Z"
lastCommitAt: "2026-09-18T08:27:38Z"
lastReleaseAt: "2026-01-31T10:53:38Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 76
maintainers: ["github-actions[bot]", "dependabot[bot]", "reupen"]
openGraphImageUrl: "https://opengraph.githubassets.com/84ee83fa3630d8da6286fc968ee26d382f0bb540763fb4c39e3bce6d27f815a4/reupen/svg-services"
fundingLinks: ["GITHUB:https://github.com/reupen", "BUY_ME_A_COFFEE:https://buymeacoffee.com/reupen"]
discussionCount: 5
---

# SVG services

This component provides an SVG renderer, for use by other foobar2000 components.

The [resvg library](https://github.com/RazrFalcon/resvg) is used to render SVGs.

## API usage (for component developers)

You only need to include the [`api/api.h`](https://github.com/reupen/svg-services/blob/HEAD/api/api.h) header to use the API. You
can copy it to your source tree, or you can add this repository as a Git
submodule if you prefer.

A simple usage example:

```cpp
abort_callback_dummy aborter;
const auto render_height = 512;
const auto render_width = 512;
const auto file_path = "R(c:\path\to\svg\file)";

svg_services::svg_services::ptr svg_api;

if (!fb2k::std_api_try_get(svg_api)) {
    // Handle the case when the API isn’t available
}

const auto svg_data = filesystem::g_readWholeFile(file_path, 10'000'000, aborter);

std::vector<uint8_t> bitmap_data(
    static_cast<size_t>(render_width) * static_cast<size_t>(render_height) * size_t{4});
const auto svg_document = svg_api->open(svg_data->data(), svg_data->size());

svg_document->render(render_width, render_height, svg_services::Position::Centred, svg_services::ScalingMode::Fit,
    svg_services::PixelFormat::BGRA,…
