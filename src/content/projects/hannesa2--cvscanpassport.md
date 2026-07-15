---
repo: "hannesa2/CVScanPassport"
name: "CVScanPassport"
description: "An OpenCV based library for Android to scan/crop ID documents or Passports."
readmeQualityOk: true
url: "https://github.com/hannesa2/CVScanPassport"
language: "Java"
languages: ["Java"]
languagePcts: [97]
stars: 5
forks: 3
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-01-05T09:26:33Z"
lastCommitAt: "2026-07-15T05:54:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 66
undervaluedScore: 41
maintainers: ["hannesa2", "dependabot[bot]", "gradle-update-robot"]
openGraphImageUrl: "https://opengraph.githubassets.com/040c8db0814d5e7591d97fa3ddeddf9268b22df3e0471839338b97fd5347e00d/hannesa2/CVScanPassport"
---

# CV Scan passport
An OpenCV based library for Android to scan/crop ID documents or Passports. 

## Usage
### Automatic Crop
The easiest way is to launch the `DocumentScannerActivity`

```java
CVScanner.startScanner(this, isPassport, REQ_SCAN);
```
You'll get the path of the scanned image in `onActivityResult(int requestCode, int resultCode, Intent data)`

```java
if(requestCode == REQ_SCAN && resultCode == RESULT_OK){
  String path = data.getStringExtra(CVScanner.RESULT_IMAGE_PATH);
}
```

You can use the `DocumentScannerFragment` too

```java
Fragment fragment = DocumentScannerFragment.instantiate(isScanningPassport);
getSupportFragmentManager().beginTransaction()
        .add(R.id.container, fragment)
        .commit();
```
The host Activity should implement `ImageProcessorCallback` to get scanning results.

### Manual Crop
The easiest way is to launch the `CropImageActivity`

```java
CVScanner.startManualCropper(this, currentPhotoUri, REQ_CROP_IMAGE);
```
You'll get the path to the scanned image in `onActivityResult`

```java
if(requestCode == REQ_CROP_IMAGE && resultCode == RESULT_OK){
  String path = data.getStringExtra(CVScanner.RESULT_IMAGE_PATH);
}
```
You can use the…
