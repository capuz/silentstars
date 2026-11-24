---
repo: "solisoft/soli_lang"
name: "soli_lang"
description: "New experiment of a new language for the web"
readmeQualityOk: true
url: "https://github.com/solisoft/soli_lang"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 20
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-20T14:22:08Z"
lastCommitAt: "2026-11-24T14:05:22Z"
lastReleaseAt: "2026-02-05T18:01:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5a59d8eda9f9d573cd9396d197e63ea6fd051410d0b003b73a86d0b283d7a454/solisoft/soli_lang"
---

---

## Why Soli?

Soli brings Rails' expressiveness to a single Rust binary. You write terse, Ruby-like code with
optional type annotations; the binary runs it on a bytecode VM, serves it, tests it, lints it
and ships it. There is no `node_modules`, no separate app server and no build step to wire up.

```ruby
# app/controllers/posts_controller.sl — models are auto-loaded
class PostsController < Controller
  # GET /posts — no render call: posts/index renders with @posts
  def index
    @posts = Post.where({ published: true }).order("created_at", "desc").limit(10).all
  end

  # POST /posts
  def create
    @post = Post.create(permit(params, {"title": true, "body": true}))
    return render("new", {}, {"status": 422}) if @post._errors

    redirect("/posts/#{@post.id}")
  end
end
```
