import { defineCollection, z } from 'astro:content';

const VitalStatus = z.enum(['thriving', 'quiet', 'at_risk', 'newborn', 'revived', 'archived', 'watched']);
const Tag = z.enum(['solo_builder', 'needs_contributors', 'hidden_gem', 'legacy_hero', 'community_watch',
                    'funded', 'release_machine', 'under_pressure', 'community_hub', 'fork_magnet']);

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    repo: z.string(),
    name: z.string(),
    description: z.string(),
    originalDescription: z.string().optional(),
    descriptionLang: z.string().optional(),
    readmeQualityOk: z.boolean().optional().default(true),
    url: z.string().url(),
    homepage: z.string().url().optional(),
    language: z.string().optional(),
    languages: z.array(z.string()).default([]),
    languagePcts: z.array(z.number()).default([]),
    topics: z.array(z.string()).default([]),
    openGraphImageUrl: z.string().url().optional(),
    fundingLinks: z.array(z.string()).default([]),
    discussionCount: z.number().int().nonnegative().optional(),

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
    promoted: z.boolean().optional().default(false),
    postedAt: z.string().optional(),

    // People
    maintainers: z.array(z.string()).default([]),

    // Revived metadata
    revivedAfterMonths: z.number().optional(),
    revivedDaysAgo: z.number().optional(),
  }),
});

export const collections = { projects };
