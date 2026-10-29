---
repo: "sanko/Affix.pm"
name: "Affix.pm"
description: "A Foreign Function Interface eXtension for Perl"
readmeQualityOk: true
url: "https://github.com/sanko/Affix.pm"
homepage: "https://metacpan.org/dist/Affix"
language: "Perl"
languages: ["Perl", "C"]
languagePcts: [61, 39]
topics: ["c", "ffi", "perl", "perl-xs", "perl5", "affix", "infix", "jit", "shared-library", "binding"]
stars: 5
forks: 2
openIssues: 3
closedIssues: 24
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2021-11-17T04:09:48Z"
lastCommitAt: "2026-10-29T10:20:45Z"
lastReleaseAt: "2026-01-11T04:04:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "community_hub"]
healthScore: 87
undervaluedScore: 74
maintainers: ["sanko"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa19d21fb825719d93e7f65fbf1edffbe6a3de0618fc6ff0b6c4ff6e5eedc8a1/sanko/Affix.pm"
fundingLinks: ["GITHUB:https://github.com/sanko"]
discussionCount: 55
---

# NAME

Affix - A Foreign Function Interface eXtension

# SYNOPSIS

```perl
use v5.40;
use Affix qw[:all];

# Bind a function and call it natively.
# Here, we use libm which might be in libm.so, msvcrt.dll, etc.
# C: double pow(double x, double y);
affix libm(), 'pow', [ Double, Double ] => Double;
say pow( 2.0, 10.0 ); # 1024

# Working with C structs is easy
# C: typedef struct { int x; int y; } Point;
#    void draw_point(Point p);
typedef Point => Struct[ x => Int, y => Int ];
affix $lib, 'draw_point', [ Point() ] => Void;
draw_point( { x => 10, y => 20 } );
affix $lib, 'get_pos', [] => Point();
my $pt = get_pos();
say sprintf 'x: %d, y: %d', $pt->{x}, $pt->{y};

# We can also allocate and manage raw memory and write data to it
my $ptr = Affix::malloc(1024);
$ptr->[0] = ord('t'); # Direct byte-level access
memcpy( $ptr, 'test', 4 );

# We can also do pointer arithmetic to create new references
my $offset_ptr = Affix::ptr_add( $ptr, 12 );
memcpy( $offset_ptr, 'test', 4 );

# Inspect memory with a hex dump to STDOUT
Affix::dump( $ptr, 32 );

# And release the memory. This is automatic when such a scalar falls out of scope
Affix::free($ptr);
```

# DESCRIPTION

Call native code…
