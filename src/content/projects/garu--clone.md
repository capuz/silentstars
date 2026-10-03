---
repo: "garu/Clone"
name: "Clone"
description: "recursively copy Perl datatypes"
readmeQualityOk: true
url: "https://github.com/garu/Clone"
language: "Perl"
languages: ["Perl"]
languagePcts: [82]
stars: 8
forks: 14
openIssues: 3
closedIssues: 44
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2012-11-22T14:42:06Z"
lastCommitAt: "2026-10-03T22:03:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 81
maintainers: ["Koan-Bot", "atoomic"]
openGraphImageUrl: "https://opengraph.githubassets.com/662cae4dd9c05ff0cba0aeff9204ae05c09634ab3c8c5df5bce9390f7c95c8c4/garu/Clone"
---

Clone - recursively copy Perl datatypes
=======================================

## Synopsis

```perl
use Clone 'clone';

my $data = {
   set => [ 1 .. 50 ],
   foo => {
       answer => 42,
       object => SomeObject->new,
   },
};

my $cloned_data = clone($data);

$cloned_data->{foo}{answer} = 1;
print $cloned_data->{foo}{answer};  # '1'
print $data->{foo}{answer};         # '42'
```

You can also add it to your class:

```perl
package Foo;
use parent 'Clone';
sub new { bless {}, shift }

package main;

my $obj = Foo->new;
my $copy = $obj->clone;
```

## Description

This module provides a `clone()` method which makes recursive
copies of nested hash, array, scalar and reference types,
including tied variables and objects.

`clone()` takes a scalar argument and duplicates it. To duplicate lists,
arrays or hashes, pass them in by reference, e.g.

```perl
my $copy = clone (\@array);

# or

my %copy = %{ clone (\%hash) };
```

## Installation

From CPAN:

```bash
    cpanm Clone
```

From source:

```bash
    perl Makefile.PL
    make
    make test
    make install
```

## Examples

### Cloning Blessed Objects

```perl
    package Person;
    sub new {
        my ($class, $name) =…
