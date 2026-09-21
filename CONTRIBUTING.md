# Contributing to Agential Skill

Thanks for your interest in improving Agential Skill. This project keeps AI
coding assistants producing clean, minimal, editorial-grade UI instead of
generic cluttered output. Contributions that sharpen that goal are welcome.

By participating, you agree to follow our
[Code of Conduct](./CODE_OF_CONDUCT.md).

## Ways to Contribute

- Fix or clarify guidance in `SKILL.md`, `AGENTS.md`, `DESIGN.md`, or the
  `references/` documents.
- Improve a platform adapter (`adapters/`, `.cursor/`, `.github/`).
- Add or refine a framework preset in `presets/`.
- Improve the CLI (`bin/cli.js`) or install scripts.
- Report a bug or suggest an improvement via an issue.

## Before You Start

- Open an issue first for anything non-trivial so we can agree on the approach.
- Keep changes focused. One logical change per pull request.
- Keep the design philosophy intact: minimal editorial output, image-led
  composition, hard-edged rectangular framing, hairline grids, sparse copy,
  and no generic SaaS patterns (cards, bento, shadows, glass, gradients,
  clutter).

## Development Setup

This is a zero-dependency Node.js project.

```bash
git clone https://github.com/talhairfandev/agential-skill.git
cd agential-skill
```

Requires Node.js `>=16`.

## Making Changes

1. Fork the repository and create a branch from `main`:
   ```bash
   git checkout -b fix/short-description
   ```
2. Make your change. If you edit design guidance, keep it consistent across
   `SKILL.md`, `AGENTS.md`, `DESIGN.md`, the adapters, and the presets so the
   rules do not contradict each other.
3. Run the checks below before opening a PR.

## Verifying Your Change

```bash
npm test        # CLI smoke test
npm run verify  # validates skill structure and frontmatter
```

Both must pass. If you change installer behavior, test it locally in a scratch
directory.

## Commit Messages

- Use a short, imperative summary line (under ~70 characters).
- Add a body explaining what changed and why when the change is not obvious.
- Group related edits into a single commit where it makes sense.

## Pull Requests

- Target the `main` branch.
- Give the PR a clear title and a description covering:
  - **What** changed.
  - **Why** it changed.
  - **How** you verified it (test output, manual checks).
- Link any related issue.
- Ensure `npm test` and `npm run verify` pass.
- Keep unrelated changes out of the PR.

A maintainer will review, request changes if needed, and merge once the change
is consistent, verified, and aligned with the project's design standard.

## Reporting Bugs

Open an issue with:

- What you expected to happen.
- What actually happened.
- Steps to reproduce.
- Your environment (OS, Node.js version, target platform/agent).

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](./LICENSE) that covers this project.
