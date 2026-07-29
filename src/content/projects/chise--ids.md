---
repo: "chise/ids"
name: "ids"
description: "Mirror of https://gitlab.chise.org/CHISE/ids"
readmeQualityOk: true
url: "https://github.com/chise/ids"
homepage: "https://www.chise.org/ids/"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
stars: 27
forks: 7
openIssues: 9
closedIssues: 26
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2020-05-29T07:28:21Z"
lastCommitAt: "2026-07-29T05:04:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 51
maintainers: ["chise", "DavidSannier", "stephenmk"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3fd639efcdbe1d5735a825e20750f019995f627b5a6b832ffbea9f96e7cbac4/chise/ids"
---

This directory holds the CHISE-IDS package which contains data and
utilities about structures of Han Ideographs (漢字).

# How to install

Please install [CL-CHISE](https://gitlab.chise.org/CHISE/cl-chise).

Note that if you install CL-CHISE in SBCL, CL-CHISE installs this
package automatically.

You can also use this package with XEmacs CHISE.
If XEmacs CHISE is installed in your system, please type

    % make install

in the directory of the CHISE-IDS distribution.

[Note] If you don't have XEmacs CHISE, the CHISE-base package may be
useful.  It is an installer package to install CHISE functionalities
including libchise, XEmacs CHISE, the CHISE-IDS package, some other
Emacs Lisp utilities, some fonts, etc.  It is available at:

	http://www.chise.org/dist/base/

# IDS files

The following files contains the data about structures of Han
Ideographs (漢字).

## IDS files for abstract characters

    IDS-UCS-Basic.txt	CJK Unified Ideographs (U+4E00 〜 U+9FA5)
			of ISO/IEC 10646-1:2000
    IDS-UCS-Ext-A.txt	CJK Unified Ideographs Extension A
			(U+3400 〜 U+4DB5, U+FA1F and U+FA23)
			of ISO/IEC 10646-1:2000
    IDS-UCS-Ext-B-1.txt	CJK Unified Ideographs Extension B [part 1]…
