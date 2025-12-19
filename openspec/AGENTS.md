# OpenSpec Agent Instructions

This project uses OpenSpec for spec-driven development.

## Directory Structure

```
openspec/
├── specs/              # Source-of-truth specifications
│   ├── pages/          # Page specifications
│   ├── components/     # Component specifications
│   └── design/         # Design system specs
├── changes/            # Proposed changes
├── archive/            # Completed changes
└── project.md          # Project conventions
```

## Before Implementation

1. **Read the relevant spec** in `openspec/specs/`
2. **Follow project conventions** in `openspec/project.md`
3. **Verify requirements** match the specification

## Spec Locations

| Domain | Path |
|--------|------|
| Pages | `openspec/specs/pages/spec.md` |
| Components | `openspec/specs/components/spec.md` |
| Design System | `openspec/specs/design/spec.md` |

## Key Rules

- All UI must use 8bitcn pixel-style components
- No rounded corners anywhere
- Use Press Start 2P font for all text
- Follow the Christmas color palette
- English only in code, comments, and code blocks
