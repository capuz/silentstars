---
repo: "bizhuka/xtt"
name: "xtt"
description: "ABAP template engine for Excel, Word, Html & Pdf"
readmeQualityOk: true
url: "https://github.com/bizhuka/xtt"
homepage: "https://bizhuka.github.io/xtt/"
language: "ABAP"
languages: ["ABAP"]
languagePcts: [100]
topics: ["abap", "sap", "abapgit", "xml", "office", "template"]
stars: 41
forks: 9
openIssues: 2
closedIssues: 10
watchers: 8
contributors: 4
recentReleases: 0
createdAt: "2018-02-08T06:31:13Z"
lastCommitAt: "2026-09-08T08:17:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 37
maintainers: ["bizhuka", "kenzhemax"]
openGraphImageUrl: "https://opengraph.githubassets.com/83210b314aa35a0a779c5e25e059a209f5284a171654830a7a2b47aa0e207b35/bizhuka/xtt"
---

Now full documentation available here https://bizhuka.github.io/xtt

### Xml template toolkit

XTT helps you to automate your reporting routine in SAP

- Get existing report from your customers
- Use preferable editor (MS Excel, Word or Adobe LiveCycle Designer) and replace some parts of it with markers inclosed in curly brackets
- Link all formulas, charts and pivot tables to this marksers
- In abap call **`merge()`** method to pass all data including nested strucures, tables and trees
- Use **`download( ) | send( ) | show( )`** method for appropreate action
- That's all!

---

###  Template

### Code

```abap
" Template storage class (tr OAOR -> zcl_xtt_file_oaor, external sources -> ZCL_XTT_FILE_RAW)
DATA(lo_file) = NEW zcl_xtt_file_smw0( 'Z_TEMPLATE_ID.XLSX' ).

" Excel (Use ZCL_XTT_WORD_DOCX, ZCL_XTT_PDF for word and pdf respectively)
DATA(lo_xtt) = NEW zcl_xtt_excel_xlsx( io_file = lo_file ).

" R is a marker in the IV_TEMPLATE
lo_xtt->merge( iv_block_name = 'R'
               is_block = VALUE ts_root(
                begda = pn-begda
                endda = pn-endda               
                t     = lt_alv    
               ) ).

" Download to sap_tmp. You could…
