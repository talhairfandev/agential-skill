#!/usr/bin/env bash
# Universal Installer for Agential Skill (by Talha Irfan / talhairfandev)
# Supports local execution and 1-line remote web execution:
# curl -fsSL https://raw.githubusercontent.com/talhairfandev/agential-skill/main/scripts/install.sh | bash

set -e

TARGET_DIR="${1:-$(pwd)}"
TARGET_TYPE="${2:-all}"

echo "===================================================="
echo "  ⚡ Agential Skill Installer (talhairfandev)"
echo "  Universal Web & UI AI Agent Development Skill"
echo "===================================================="
echo "Target: $TARGET_DIR"
echo "Type:   $TARGET_TYPE"
echo ""

mkdir -p "$TARGET_DIR"

SOURCE_ROOT=""
CLEAN_TEMP=false

if [ -n "${BASH_SOURCE[0]}" ] && [ -f "${BASH_SOURCE[0]}" ]; then
  SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  POTENTIAL_ROOT="$(dirname "$SCRIPT_DIR")"
  if [ -f "$POTENTIAL_ROOT/SKILL.md" ]; then
    SOURCE_ROOT="$POTENTIAL_ROOT"
  fi
fi

if [ -z "$SOURCE_ROOT" ]; then
  echo "[INFO] Downloading latest Agential Skill bundle from GitHub..."
  TEMP_DIR="$(mktemp -d)"
  curl -fsSL "https://github.com/talhairfandev/agential-skill/archive/refs/heads/main.tar.gz" | tar -xz -C "$TEMP_DIR"
  SOURCE_ROOT="$TEMP_DIR/agential-skill-main"
  CLEAN_TEMP=true
fi

# 1. Antigravity & Universal Agent System (.agents/skills & .agents/rules)
if [ "$TARGET_TYPE" = "all" ] || [ "$TARGET_TYPE" = "antigravity" ]; then
  DEST_SKILL="$TARGET_DIR/.agents/skills/agential-skill"
  mkdir -p "$DEST_SKILL"
  cp "$SOURCE_ROOT/SKILL.md" "$DEST_SKILL/"
  if [ -d "$SOURCE_ROOT/references" ]; then
    cp -r "$SOURCE_ROOT/references" "$DEST_SKILL/"
  fi
  if [ -d "$SOURCE_ROOT/resources" ]; then
    cp -r "$SOURCE_ROOT/resources" "$DEST_SKILL/"
  fi

  DEST_RULES="$TARGET_DIR/.agents/rules"
  mkdir -p "$DEST_RULES"
  cp "$SOURCE_ROOT/AGENTS.md" "$DEST_RULES/agential-skill.md"
  echo "  ✔ Google Antigravity Skill & Rules -> .agents/"
fi

# 2. Universal Agent Standard (AGENTS.md at root)
if [ "$TARGET_TYPE" = "all" ] || [ "$TARGET_TYPE" = "antigravity" ]; then
  cp "$SOURCE_ROOT/AGENTS.md" "$TARGET_DIR/AGENTS.md"
  echo "  ✔ Universal Agent Standard -> AGENTS.md (always auto-loaded)"
fi

# 3. Cursor IDE (.cursorrules & .cursor/rules/agential-skill.mdc)
if [ "$TARGET_TYPE" = "all" ] || [ "$TARGET_TYPE" = "cursor" ]; then
  cp "$SOURCE_ROOT/adapters/cursor/.cursorrules" "$TARGET_DIR/.cursorrules"
  mkdir -p "$TARGET_DIR/.cursor/rules"
  cp "$SOURCE_ROOT/.cursor/rules/agential-skill.mdc" "$TARGET_DIR/.cursor/rules/agential-skill.mdc"
  echo "  ✔ Cursor IDE rules -> .cursorrules & .cursor/rules/agential-skill.mdc (alwaysApply: true)"
fi

# 4. GitHub Copilot (.github/copilot-instructions.md)
if [ "$TARGET_TYPE" = "all" ] || [ "$TARGET_TYPE" = "copilot" ]; then
  mkdir -p "$TARGET_DIR/.github"
  cp "$SOURCE_ROOT/adapters/copilot/copilot-instructions.md" "$TARGET_DIR/.github/copilot-instructions.md"
  echo "  ✔ GitHub Copilot -> .github/copilot-instructions.md"
fi

# 5. Claude Code (CLAUDE.md)
if [ "$TARGET_TYPE" = "all" ] || [ "$TARGET_TYPE" = "claude" ]; then
  cp "$SOURCE_ROOT/adapters/claude/CLAUDE.md" "$TARGET_DIR/CLAUDE.md"
  echo "  ✔ Claude Code -> CLAUDE.md"
fi

# 6. Windsurf IDE (.windsurfrules)
if [ "$TARGET_TYPE" = "all" ] || [ "$TARGET_TYPE" = "windsurf" ]; then
  if [ -f "$SOURCE_ROOT/adapters/windsurf/.windsurfrules" ]; then
    cp "$SOURCE_ROOT/adapters/windsurf/.windsurfrules" "$TARGET_DIR/.windsurfrules"
    echo "  ✔ Windsurf IDE -> .windsurfrules"
  fi
fi

# 7. Starter context.md
if [ ! -f "$TARGET_DIR/context.md" ]; then
  cat << 'EOF' > "$TARGET_DIR/context.md"
# Project Context & AI Memory
*Maintained by Agential Skill (Talha Irfan / @talhairfandev)*

## 1. Vision & Core Objectives
- **Purpose**: [Describe this project's purpose]

## 2. Design Tokens & Visual Preferences
- **Theme**: Deep Obsidian Dark Mode (`#0a0a0c`)
- **Typography**: Plus Jakarta Sans / Inter
- **Border Radius**: 6px–8px (Buttons), 8px–12px (Cards)
- **Section Scale**: 100vh–140vh Desktop scale, fluid mobile
- **Animation**: Framer Motion smooth slide-up text reveals

## 3. Completed Milestones
- [x] Initial Agential Skill installation and memory setup

## 4. Next Planned Milestones
- [ ] Navbar + Hero Section
EOF
  echo "  ✔ Session Memory -> context.md (initialized)"
fi

if [ "$CLEAN_TEMP" = true ]; then
  rm -rf "$TEMP_DIR"
fi

echo ""
echo "✨ Agential Skill installation complete!"
echo "Every connected AI agent will now use this skill automatically on turn 1."
