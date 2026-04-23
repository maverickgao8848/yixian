---
name: ia-document
description: Compiles Information Architecture planning outputs into a structured .md deliverable. Use this skill when someone needs to assemble a final IA document from collected planning data — whether from an ia-conversation-skill session or from notes gathered elsewhere. Trigger when someone says "compile the IA doc", "put this into a document", "generate the IA deliverable", "整理成 IA 文件", or when ia-conversation-skill requests it at the end of Phase 3. Also useful standalone when someone has a Sitemap and User Flows and wants them formatted into a professional document.
---

# IA Document Skill

Take collected Information Architecture data — including Sitemap, User Flows, Wireframes, and planning notes — and assemble them into a single, well-structured `.md` file that a design or development team can actually use.

Think of this as the "handoff artifact." Its reader is typically someone who wasn't in the planning conversation: a designer starting on mockups, a developer scoping the build, or a client approving the direction. Write the document for that person.

---

## File Naming

If the project name is known, use:
```
{project-name}-ia-{YYYY-MM-DD}.md
```
Examples: `acme-store-ia-2026-03-27.md`, `photography-portfolio-ia-2026-03-27.md`

If the user hasn't provided a project name, ask before saving. Save to the current working directory unless they specify otherwise.

---

## Document Structure

Use this structure. Omit a section only if its information truly wasn't collected — don't leave sections blank.

For the full template with placeholder text, see:
→ `templates/ia-template.md`

**The 6 sections:**

### 1. Project Overview
- Website goal (one paragraph — what it's for, what success looks like)
- Target users table (user type | description | primary goal on site)
- North star action (the single most important thing a visitor should do)
- Design principles (optional, 2-4 bullets)

### 2. Sitemap
- Mermaid diagram (verbatim from sitemap-skill — don't redesign it)
- Page Index table

### 3. User Flows
- 1-3 flows, each with: trigger, goal, success state, and a `flowchart LR` Mermaid diagram
- Left-to-right flows are easier to follow than top-down for sequential journeys

### 4. Key Page Wireframes
- ASCII wireframes verbatim from wireframe-skill
- Include the notation guide once at the top of this section, not before every wireframe

### 5. Content & Feature Inventory
- Table: Page | Content Blocks | Key Features/Interactions
- Cover all Level 1 pages at minimum

### 6. Next Steps & Recommendations
- At least 2 bullets for the design team
- At least 2 bullets for the development team
- Open questions list (anything unresolved or requiring client input)

---

## Compilation Rules

- **Preserve verbatim artifacts**: Copy the Mermaid sitemap and ASCII wireframes exactly as generated. Don't paraphrase or re-draw them — consistency with the planning session matters.
- **User flows as `flowchart LR`**: Left-to-right reads more naturally for sequential journeys than top-down.
- **Next Steps are not optional**: Even if the session was brief, give the team something concrete to act on.
- **Version header**: Always include version, date, and status at the top so readers know they're looking at a draft.
