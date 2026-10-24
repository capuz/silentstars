---
repo: "wojnilowicz/ungoogled-chromium-copr"
name: "ungoogled-chromium-copr"
description: "Google Chromium, sans integration with Google for the COPR build system."
readmeQualityOk: true
url: "https://github.com/wojnilowicz/ungoogled-chromium-copr"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 13
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-25T12:34:58Z"
lastCommitAt: "2026-10-24T08:07:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["wojnilowicz"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b5f605cc95ad21b5aa995549ec4b1b96de842a4dc648afb0c2a7e5864066331/wojnilowicz/ungoogled-chromium-copr"
---

This repository provides the prerequisites to build [Ungoogled Chromium](https://github.com/Eloston/ungoogled-chromium) on [COPR](https://copr.fedorainfracloud.org/) for Fedora. It uses the [Chromium](https://src.fedoraproject.org/rpms/chromium) package from the Fedora Project as its base.

To build your own ungoogled-chromium for e.g. Fedora 39:
1. Set up your COPR access as described in the [User Documentation](https://docs.pagure.org/copr.copr/user_documentation.html)
2. Run
    ```
    copr create ungoogled-chromium \
                --chroot fedora-39-x86_64
    ```
    to create your project.
3. Run
    ```
    copr add-package-custom ungoogled-chromium \
                            --name ungoogled-chromium \
                            --script-builddeps "git rpkg" \
                            --script copr_script.sh
    ```
    to add your package.
4. Run
    ```
    copr build-package ungoogled-chromium \
                       --timeout 108000 \
                       --name ungoogled-chromium
    ```
    to build your package.
