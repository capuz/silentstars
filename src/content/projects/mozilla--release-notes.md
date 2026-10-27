---
repo: "mozilla/release-notes"
name: "release-notes"
description: "Release notes and system requirements for our various Firefoxen"
readmeQualityOk: true
url: "https://github.com/mozilla/release-notes"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [52, 41]
topics: ["mozilla", "bedrock", "release-notes", "nucleus"]
stars: 28
forks: 12
openIssues: 1
closedIssues: 7
watchers: 15
contributors: 9
recentReleases: 0
createdAt: "2017-08-11T19:07:37Z"
lastCommitAt: "2026-10-27T12:39:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 59
maintainers: ["stevejalim", "dsmithpadilla"]
openGraphImageUrl: "https://opengraph.githubassets.com/a59c6bb3363b087f6dbbe125e9e2f70d721115af1717ba9e27c6226995f73843/mozilla/release-notes"
---

# Mozilla Release Notes

Release notes and system requirements for Mozilla products in JSON format.

## Usage

To update the data in this repo you can run a simple script which will pull the data from an instance of [Nucleus][]
and populate the JSON files in the `releases` folder. After following one of the update procedures below you can commit
and push the changes to the JSON files if you need to manually update the release notes data on the website.

### Docker

This is the recommended way to do it since it requires no steps other than having [Docker][] installed. Simply run the following commands:

```bash
./update_docker.sh
```

This will build the docker image and run it to update the local JSON files.

### Local Python

You'll need Python 3.11 or above and [virtualenv][] to run the following steps.

```bash
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
./update_releases.py
```

[Nucleus]: https://nucleus.mozilla.org
[Docker]: https://www.docker.com/community-edition
[virtualenv]: https://virtualenv.pypa.io/en/stable/

## License

Mozilla Public License v2. See [LICENSE](https://github.com/mozilla/release-notes/blob/HEAD/LICENSE) file…
