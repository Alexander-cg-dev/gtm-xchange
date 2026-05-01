@AGENTS.md

# Version Control & Deploy

When the user says "versionar", "publicar", "deploy", "subir cambios", "nueva versión", "push", "actualizar servidor", or similar — follow the full workflow defined in `.claude/skills/version-deploy.md`.

The workflow is always:
1. Serve localhost → await approval
2. `npm run build` → commit with `git add -f .next/` → push to GitHub with version tag `v-YYYY-MM-DD-HH-mm`
3. Ask about deploy to GoDaddy VPS → SSH deploy if confirmed

Never skip steps or combine them without user approval at each checkpoint.
