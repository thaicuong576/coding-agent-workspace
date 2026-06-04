# Shared Coding Skills

This folder contains the default shared coding skills for Eddie's coding-agent
workspace.

Default active skill:

```text
engineering-judgment.md
```

Do not treat this folder as Eddie's whole personal skill library. It should stay
small and coding-focused.

For the current coding workspace, load only:

```text
.agents/plugins/superpowers/
.agents/skills/engineering-judgment.md
```

Superpowers belongs in this coding workspace because it is process-heavy. Do
not add it to Eddie's global or personal prompt layer.

If a runtime needs skills in a tool-specific location, mirror or link from this
folder into that runtime adapter.

## Optional Skills

These live in the workspace as shared source and should be loaded only when the
current task clearly needs them. Runtime adapters may mirror or link them into
tool-specific skill folders.

## Taste Skill Collection

Source:

```text
https://github.com/Leonxlnx/taste-skill/tree/main/skills
```

The collection is mirrored into this folder as canonical workspace source and
into Codex runtime skills at:

```text
C:\Users\ASUS\.codex\skills\
```

Use the smallest relevant subset, not the whole collection, for each task.

### `design-taste-frontend`

Workspace source:

```text
.agents/skills/design-taste-frontend/SKILL.md
```

Installed in Codex runtime from `Leonxlnx/taste-skill`, path `skills/taste-skill`:

```text
C:\Users\ASUS\.codex\skills\design-taste-frontend\SKILL.md
```

Use for:

- landing pages
- portfolios
- marketing pages
- visual redesigns of existing frontend projects
- anti-generic layout, typography, motion, spacing, and visual polish

Do not use as a blanket default for:

- dashboards
- dense product UI
- data tables
- multi-step workflows
- admin panels

For those product surfaces, use the project's existing design system or a
task-specific product UI skill instead.

### Installed Taste Variants

```text
brandkit
brutalist-skill
gpt-tasteskill
image-to-code-skill
imagegen-frontend-mobile
imagegen-frontend-web
minimalist-skill
output-skill
redesign-skill
soft-skill
stitch-skill
taste-skill-v1
```

Selection guide:

- `redesign-skill`: audit and upgrade an existing website or app without
  breaking functionality.
- `image-to-code-skill`: recreate a visual reference, screenshot, or generated
  mockup in code.
- `imagegen-frontend-web`: generate separate website section concepts as
  images before implementation.
- `imagegen-frontend-mobile`: generate premium mobile app screen concepts.
- `brandkit`: create brand-system, logo, identity, and visual-world references.
- `minimalist-skill`, `brutalist-skill`, `soft-skill`, `gpt-tasteskill`: use
  only when the brief clearly asks for that visual language.
- `stitch-skill`: create Stitch-oriented design system guidance.
- `output-skill`: use only for tasks that require exhaustive, unabridged output.
- `taste-skill-v1`: backward compatibility with the original v1 behavior.

Upstream `skills/taste-skill` is already installed locally as
`design-taste-frontend`, so it is not duplicated under a second folder name.
