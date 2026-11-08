---
repo: "wilsonfreitas/python-bizdays"
name: "python-bizdays"
description: "Business days calculations and utilities"
readmeQualityOk: true
url: "https://github.com/wilsonfreitas/python-bizdays"
homepage: "http://wilsonfreitas.github.io/python-bizdays/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 95
forks: 42
openIssues: 0
closedIssues: 47
watchers: 8
contributors: 8
recentReleases: 1
createdAt: "2013-09-01T13:50:43Z"
lastCommitAt: "2026-11-08T10:41:23Z"
lastReleaseAt: "2026-11-08T09:52:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 55
maintainers: ["wilsonfreitas"]
openGraphImageUrl: "https://opengraph.githubassets.com/8938a8b0200c263d33d7521b9d94b23a8b9f2dbb7ca9ccc8c7c830a55b4e6e16/wilsonfreitas/python-bizdays"
---

# [python-bizdays](https://wilsonfreitas.github.io/python-bizdays/)

`bizdays` computes business days with holiday calendars. This README covers
bizdays 2.0, which runs on Python 3.10 to 3.14 with NumPy 1.24 or newer and
pandas 2 or 3. `bizdays.Calendar` accepts single dates, Python sequences,
NumPy arrays and pandas date-like inputs, and returns NumPy scalars or arrays.

## Install

```bash
pip install bizdays
```

Install the optional integrations with:

```bash
pip install "bizdays[pmc]"
pip install "bizdays[xcal]"
pip install "bizdays[work]"
```

## Quickstart

```python
>>> from bizdays import Calendar
>>> cal = Calendar.load(name="ANBIMA")
>>> cal.bizdays("2014-01-13", "2015-01-13")
np.float64(253.0)
>>> cal.following("2015-12-25")
np.datetime64('2015-12-28')
>>> cal.offset(["2014-01-02", "2014-01-03"], [1, 5])
array(['2014-01-03', '2014-01-10'], dtype='datetime64[D]')
>>> cal.seq("2014-01-02", "2014-01-07")
array(['2014-01-02', '2014-01-03', '2014-01-06', '2014-01-07'],
      dtype='datetime64[D]')
>>> cal.getdate("15th day", "2002-05")
np.datetime64('2002-05-15')
>>> cal.getbizdays(2024)
np.float64(253.0)

```

## Calendars that come with the package

- `ANBIMA`:…
