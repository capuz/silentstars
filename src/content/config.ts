import { defineCollection, z } from 'astro:content';

const VitalStatus = z.enum(['thriving', 'quiet', 'at_risk', 'newborn', 'revived', 'archived', 'watched']);
const Tag = z.enum(['solo_builder', 'needs_contributors', 'hidden_gem', 'legacy_hero', 'community_watch']);

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    repo: z.string(),
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    homepage: z.string().url().optional(),
    language: z.string().optional(),
    languages: z.array(z.string()).default([]),
    languagePcts: z.array(z.number()).default([]),
    topics: z.array(z.string()).default([]),

    // GitHub metrics
    stars: z.number().int().nonnegative(),
    forks: z.number().int().nonnegative(),
    openIssues: z.number().int().nonnegative(),
    closedIssues: z.number().int().nonnegative().default(0),
    watchers: z.number().int().nonnegative().default(0),
    contributors: z.number().int().nonnegative().default(0),
    recentReleases: z.number().int().nonnegative().default(0),

    // Dates (ISO strings)
    createdAt: z.string(),
    lastCommitAt: z.string(),
    lastReleaseAt: z.string().optional(),

    // Vital state — exactly one, computed by priority
    status: VitalStatus,

    // Accumulative tags — a project can have several
    tags: z.array(Tag).default([]),

    // Scores
    healthScore: z.number().min(0).max(100),
    undervaluedScore: z.number().nonnegative(),

    // People
    maintainers: z.array(z.string()).default([]),

    // Revived metadata
    revivedAfterMonths: z.number().optional(),
    revivedDaysAgo: z.number().optional(),
  }),
});

export const collections = { projects };
