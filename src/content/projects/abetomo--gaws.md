---
repo: "abetomo/GAwS"
name: "GAwS"
description: "A script for calling the AWS API from Google Apps Script."
readmeQualityOk: true
url: "https://github.com/abetomo/GAwS"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["aws", "google-apps-script"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-10-11T08:08:41Z"
lastCommitAt: "2026-09-11T08:15:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 83
undervaluedScore: 66
maintainers: ["abetomo", "dependabot[bot]", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/4095fb45b4520738f807371e537e7f3a41de51b66eff0291ba0dd4639a623c40/abetomo/GAwS"
---

# GAwS
A fork of [aws-apps-scripts](https://github.com/smithy545/aws-apps-scripts).
A script for calling the AWS API from Google Apps Script.

## How to use:

1. Create a new project in google scripts.
2. Copy paste aws.js into it's own file in your project and save it.
3. Open up a new a file and setup the AWS variable with AWS.init.
4. Use method for each service.

## Example:
### EC2

```javascript
function myFunction() {
  AWS.init('MY_ACCESS_KEY', 'MY_SECRET_KEY');
  console.log(AWS.ec2(
    'us-east-1', // region
    'DescribeInstances', // action
    {"Version":"2015-10-01"} // params
  ));
}
```

### S3
#### put object
```javascript
function myFunction() {
  AWS.init('MY_ACCESS_KEY', 'MY_SECRET_KEY');
  console.log(AWS.s3(
    'us-west-2', // region
    'bucket', // bucket
    'key', // key
    'PUT', // method
    '{"key":"value"}' // payload
  ));
}
```

#### get object
```javascript
function myFunction() {
  AWS.init('MY_ACCESS_KEY', 'MY_SECRET_KEY');
  res = AWS.s3(
    'us-west-2', // region
    'bucket', // bucket
    'key', // key
    'GET' // method
  );
  console.log(res.getContentText());
}
```

### Lambda
#### Sync
```javascript
function myFunction() {…
