---
repo: "sonnam0904/telebit"
name: "telebit"
description: "Telebit - Vietnamese Telex engine - C++ core và addon fcitx5 cho Linux"
readmeQualityOk: true
url: "https://github.com/sonnam0904/telebit"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-11T09:32:27Z"
lastCommitAt: "2026-07-13T06:38:20Z"
lastReleaseAt: "2026-03-30T15:16:40Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 24
maintainers: ["semantic-release-bot", "sonnam0904", "hthienloc"]
openGraphImageUrl: "https://opengraph.githubassets.com/22bdd793f38183087d0be1e6818edbb2e5d6a8979daee052d7e67f871d7ada35/sonnam0904/telebit"
---

<h2 align="center">Telebit</h2>

    <b>Vietnamese Telex engine — C++ core và addon fcitx5 cho Linux</b>
    <br />
    <br />
    <br />
    </a>
    </a>
    </a>
    </a>
    </a>
  </p>

    &nbsp;&middot;&nbsp;
    &nbsp;&middot;&nbsp;
    <br />
    <br />
  </p>
</div>

<br />

`Telebit` là một bộ gõ Telex tiếng Việt gồm:

- **Core C++ engine**: hàm `telex_to_unicode` chuyển chuỗi Telex ASCII → Unicode tiếng Việt (dùng được độc lập).
- **fcitx5 addon**: module `telebit-fcitx5` cho Linux desktop (GNOME/KDE/…).

Thiết kế dựa trên **cấu trúc âm tiết tiếng Việt** (*Âm đầu + Vần + Thanh*). Mô tả chi tiết xem thêm trong [`vietnamese.md`](https://github.com/sonnam0904/telebit/blob/HEAD/vietnamese.md).

---

## 1. Cấu trúc thư mục

Trong thư mục gốc của repository:

- **`vietnamese.h/.cpp`**: API `telex_to_unicode(const std::string&)` – chuyển một chuỗi Telex thành Unicode.
- **`engine.h/.cpp`**: lớp `EngineVietCpp` – quản lý buffer gõ theo từng phím, dùng trong fcitx5.
- **`rime_table.*`**: bảng vần + vị trí “nguyên âm chính” để đặt dấu.
- **`canonicalize.*`**: pipeline canonicalize input (escape rules, tách âm đầu/vần, chuẩn hoá vị trí w/aa/ee/oo, trích xuất thanh…).
-…
