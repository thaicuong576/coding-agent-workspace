# Meta Skills (.agents/skills/meta/)

This directory houses the workspace's meta-skills—capabilities that govern how coding agents discover, evaluate, and import new technical skills and patterns to improve the workspace itself.

Unlike domain-specific skills (e.g., frontend development or database tuning), meta-skills define standard operating models for self-improvement and safe knowledge ingestion.

## Directory Map

- **[knowledge-gap-analysis.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/meta/knowledge-gap-analysis.md)**: Detects, logs, and classifies deficiencies in current workspace knowledge against required product goals.
- **[github-repo-discovery.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/meta/github-repo-discovery.md)**: Plans searches, generates queries, prioritizes sources, and collects candidate external source repositories.
- **[repository-evaluation.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/meta/repository-evaluation.md)**: Evaluates candidate repositories, documentation sites, and plugins against quality signals and red flags.
- **[knowledge-import.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/meta/knowledge-import.md)**: Ingests vetted resources into the workspace by rewriting them into the canonical schema, enforcing boundaries, and preventing rules overrides.
