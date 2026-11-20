// Answers behind the score "?" buttons and the /about/ metrics FAQ. Shared so the
// popover on each card and the FAQ section never drift apart.
export const faqItems = [
  {
    glyph: '↑',
    id: 'undervalued',
    q: 'The Undervalued Score',
    a: 'Activity relative to attention (stars + watchers). Above 50 means a lot of activity for a project its size. Recomputed nightly from commit velocity, contributor effort, issue resolution, fork utility, release cadence, and project maturity — divided by a logarithmic reach factor.',
    body: `score  = min(round(signal / reach × 100), 100)

signal = 0.25·commit_velocity   // commits in last 90 days (cap 30)
       + 0.20·contributor_work  // unique authors × velocity (cap 100)
       + 0.20·issue_resolution  // closed ÷ total issues
       + 0.20·fork_ratio        // forks ÷ stars, cap 1 (rough proxy for reuse)
       + 0.10·release_cadence   // releases in 90 days (cap 3)
       + age_bonus              // +0 to +0.30 after 6 months
       + homepage_bonus         // +0.05 if homepage is set

reach  = log₁₀(stars + watchers + 10)`,
  },
  {
    glyph: '♥',
    id: 'health',
    q: 'The Health Score',
    a: 'Is the project alive and maintained right now? A 0–100 pulse recomputed nightly from commit recency, rhythm, how fast issues close, and how quickly PRs get merged.',
    body: `health = 0.35·recency       // days since last commit (90d decay)
       + 0.25·cadence       // commit rhythm consistency
       + 0.20·issue_health  // closed ÷ total issues (10 pts if none)
       + 0.20·pr_health     // merged ÷ total PRs (10 pts if none)`,
  },
  {
    glyph: '◷',
    id: 'bands',
    q: 'Health bands',
    a: 'The colour and label on every card come straight from the health score.',
    body: `Healthy   80 – 100   recent commits, issues and PRs handled
Stable    60 – 79    maintained, steady, no alarms
Quiet     40 – 59    slowing down — watch this one
At Risk    0 – 39    going dark · candidate for rescue`,
  },
  {
    glyph: '//',
    id: 'tags',
    q: 'Tags — what each label means',
    a: 'Tags are independent behavioral signals computed nightly. A project can hold multiple at once. They drive the home page sections.',
    body: `solo_builder      one person holds > 80% of commits (last 180d)
needs_contributors has open "help wanted" or "good first issue" labels
hidden_gem        < 100 stars · active in last 3 months · README + license
legacy_hero       repo > 5 years old · committed this year
fork_magnet       forks/stars > 0.5 · at least 5 forks
release_machine   5+ releases in the last 90 days
under_pressure    > 10 open issues · ≤ 2 contributors · health ≥ 60
community_watch   watchers > stars · at least 10 watchers
community_hub     GitHub Discussions enabled · > 20 discussions
funded            repo has a funding link (Sponsors, Open Collective…)`,
  },
  {
    glyph: '★',
    id: 'why-stars',
    q: 'Why rank against stars at all?',
    a: 'Stars mostly reflect attention a project already got; commits and closed issues reflect work happening now. We measure the work, then divide by the attention, so busy projects with little attention rank higher. It is one lens, not a verdict on quality.',
    body: `// stars   = attention so far
// commits = work right now
// score   = work ÷ attention`,
  },
];

export function faqItem(id: string) {
  const it = faqItems.find(i => i.id === id);
  if (!it) throw new Error(`unknown FAQ item: ${id}`);
  return it;
}
