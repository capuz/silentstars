---
repo: "webdriverio-community/wdio-camera-service"
name: "wdio-camera-service"
description: "WebdriverIO Service to mock camera input for Chromium"
readmeQualityOk: true
url: "https://github.com/webdriverio-community/wdio-camera-service"
homepage: "https://www.npmjs.com/package/wdio-camera-service"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["camera", "mock", "wdio-plugin", "wdio-service", "webdriverio"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2025-07-03T13:11:40Z"
lastCommitAt: "2026-11-05T14:05:10Z"
lastReleaseAt: "2026-02-10T09:36:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 65
maintainers: ["dependabot[bot]", "christian-bromann"]
openGraphImageUrl: "https://opengraph.githubassets.com/aef8ebfc5ca1f4b55becff7dc778acfb32ecdad316883bd0f287de55a9e6d8b3/webdriverio-community/wdio-camera-service"
---

# WebdriverIO Camera Service

A WebdriverIO service that enables camera feed injection for testing
applications that use camera/video inputs. This service allows you to mock
camera feeds with pre-recorded video files during automated testing.

## Features

- 🎥 Inject custom video feeds into Chrome browsers during testing
- 🔄 Dynamically change camera sources during test execution
- 📁 Automatic video directory management
- 🔄 **Automatic format conversion** - Use MP4, WebM, PNG, JPG and more (requires FFmpeg)
- 💾 **Smart caching** - Converted files are cached to avoid re-conversion
- 🧪 Perfect for testing camera-dependent applications like QR code scanners,
  video conferencing, etc.

## Installation

```bash
npm install --save-dev wdio-camera-service
```

## Configuration

Add the camera service to your WebdriverIO configuration:

```typescript
// wdio.conf.ts
export const config: WebdriverIO.Config = {
  // ... other config
  services: [
    ['camera', {
      defaultCameraFeed: './camera/default.mjpeg',
      videoDirectory: './camera/video',
    }],
  ],
  // ... other config
};
```

### Service Options

| Option              | Type                 | Required | Default…
