---
repo: "diffblue/hw-cbmc"
name: "hw-cbmc"
description: "The HW-CBMC and EBMC Model Checkers for Verilog"
readmeQualityOk: true
url: "https://github.com/diffblue/hw-cbmc"
language: "C++"
languages: ["C++", "SystemVerilog"]
languagePcts: [67, 20]
stars: 110
forks: 25
openIssues: 33
closedIssues: 43
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2017-05-01T13:43:59Z"
lastCommitAt: "2026-07-05T21:00:34Z"
lastReleaseAt: "2026-02-05T19:08:24Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 43
maintainers: ["kroening", "tautschnig", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d624acc9d3718a201b2bc22511a7e793aafa6bab92beb7b5cb1082016ea96ce7/diffblue/hw-cbmc"
---

About
=======

EBMC is a free, open-source formal verification tool for hardware designs.
It can read Verilog 2005, SystemVerilog 2017, NuSMV and netlists (given in
ISCAS89 format).  Properties can be given in LTL or a fragment of
SystemVerilog Assertions.  It includes both bounded and (despite its name)
unbounded Model Checking engines, i.e., it can both discover bugs and prove
the absence of bugs.

For full information see [cprover.org](http://www.cprover.org/ebmc/).

Usage
=====

Let us assume we have the following SystemVerilog model in `main.sv`.

```main.sv
module main(input clk, x, y);

  reg [1:0] cnt1;
  reg z;

  initial cnt1=0;
  initial z=0;

  always @(posedge clk) cnt1=cnt1+1;

  always @(posedge clk)
    casex (cnt1)
      2'b00:;
      2'b01:;
      2'b1?: z=1;
    endcase

  p1: assert property (@(posedge clk) (z==0));

endmodule
```

We can then invoke the BMC engine in EBMC as follows:

`$ ebmc main.sv --top main --bound 3`

This sets the unwinding bound to `3` and the top-level module to `main`.

For more information see [EBMC Manual](http://www.cprover.org/ebmc/manual/).
