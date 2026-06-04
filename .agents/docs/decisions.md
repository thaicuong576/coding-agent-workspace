# Decisions

## 2026-05-28 - Separate Coding-Agent Home From Project Repos

Decision: use `D:\eddie-agents\coding-agent-workspace` as the home base for coding agents.

Rationale: project repos should stay lean and project-specific. The coding-agent home should keep cross-project memory, decisions, handoffs, and project pointers.

Implication: `D:\eddie-projects\eddie-team` remains the agent-office project repo, not the global coding-agent workspace.

## 2026-05-28 - Workspace Owns Superpowers Source

Decision: keep Superpowers plugin source under `.agents/plugins/superpowers` and expose shared runtime content through adapter junctions under `.codex/` and `.claude/`.

Rationale: Codex's global plugin cache is runtime-specific and may be regenerated or unavailable to Claude Code, Gemini, Hermes, and other local coding agents. The workspace copy gives all Eddie coding agents the same shared source for Superpowers behavior.

Implication: do not treat `C:\Users\ASUS\.codex\plugins\cache\...` as canonical Superpowers source for this workspace. Runtime root folders are adapters; shared subfolders inside them should point back into `.agents` instead of becoming copied brains.

## 2026-06-02 - Superpowers Is Coding-Workspace Only

Decision: keep Superpowers out of Eddie's global or personal prompt layer. Load it only in dedicated coding-agent contexts such as this workspace.

Rationale: Superpowers is valuable for serious coding because it enforces brainstorming, planning, TDD, debugging, review, and verification workflows. That same process is too heavy for casual conversation, general thinking, writing, or life planning.

Implication: the default coding loadout is `.agents/plugins/superpowers/` plus `.agents/skills/engineering-judgment.md`. Broader personal skills should stay in the portable skill library and be loaded only when relevant.

## 2026-06-02 - Global Superpowers Uninstalled

Decision: Eddie uninstalled the global Superpowers plugin. Keep the workspace copy as the intended coding-only source.

Rationale: Superpowers should not be active in every conversation. It should be available only when a coding-agent session intentionally uses `D:\eddie-agents\coding-agent-workspace`.

Verification: searched the usual Codex global plugin and skills folders for Superpowers traces and found none. The workspace copy remains present at `.agents/plugins/superpowers/` with plugin version `5.1.0`.

## 2026-06-03 - Build A Digital Product Engineering OS

Decision: evolve this workspace into Eddie's digital product engineering OS: a command center for turning digital ideas into real, verified products across webapps, agent tools, automations, integrations, data products, creative tools, and infrastructure.

Rationale: Eddie wants the repo optimized for making projects real and functional, not merely for storing prompts or agent framework pieces. The operating model should be fast for solo Eddie-plus-agent builds while remaining ready to scale into stricter multi-agent workflows.

Implication: use the build-mode escalation model: Level 1 Fast Build by default, Level 2 Product Build when product risk appears, and Level 3 Multi-Agent Build when parallel ownership and handoffs are needed.

## 2026-06-03 - Project Repos Own Their Current State

Decision: every real product repo should carry its own current project memory in `docs/PROJECT_STATE.md`.

Rationale: agents may enter a product repo from this workspace, another workspace, or another tool entirely. The project should remain understandable from inside itself. Workspace memory tracks cross-project continuity, but project status belongs with the product.

Implication: agents must read `docs/PROJECT_STATE.md` before meaningful project work and update it after meaningful project work. New project repos should create this file from `.agents/templates/PROJECT_STATE.md`.

## 2026-06-03 - Exclude Traditional Tax Registry Verification from Alternative Data Footprint

Decision: Removed DuckDuckGo/registry search for tax code (masothue.com) and shifted identity consistency checking to focus purely on digital brand matching (e.g. matching company name on website/LinkedIn).

Rationale: Traditional tax verification represents legal KYC/traditional registration checking, not alternative data. Alternative data must focus purely on digital footprint signals (website structure, LinkedIn footprint, operating activities, and reputation signals) to determine the company's active presence.

Implication: Cleared out `_verify_tax_code` and references to `tax_info` from the enrichment pipeline.

## 2026-06-03 - Avoid Curly Braces in LLM Prompts on RamClouds Proxy

Decision: Replaced template curly braces `{}` in prompts with natural language structure descriptions.

Rationale: The upstream proxy parsing template engine threw a `400 Bad Request` when curly braces were detected in LLM messages due to template evaluation conflicts.

Implication: Raw brace-based examples were stripped from the user prompt text.

