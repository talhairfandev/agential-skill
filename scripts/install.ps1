<#
.SYNOPSIS
    Universal Installer for Agential Skill (by Talha Irfan / talhairfandev).
    Supports both local execution and 1-line remote web execution:
    irm https://raw.githubusercontent.com/talhairfandev/agential-skill/main/scripts/install.ps1 | iex
#>
param(
    [string]$TargetDir = (Get-Location).Path,
    [ValidateSet("all", "antigravity", "cursor", "copilot", "claude", "windsurf")]
    [string]$TargetType = "all"
)

$ErrorActionPreference = "Stop"

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "  ⚡ Agential Skill Installer (talhairfandev)" -ForegroundColor Cyan
Write-Host "  Universal Fullstack AI Agent Development Skill" -ForegroundColor DarkGray
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "Target: $TargetDir" -ForegroundColor Yellow
Write-Host "Type:   $TargetType" -ForegroundColor Yellow
Write-Host ""

if (-not (Test-Path $TargetDir)) {
    New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null
}

$ScriptPath = $MyInvocation.MyCommand.Path
$SourceRoot = $null
$CleanTemp = $false

if ($ScriptPath -and (Test-Path $ScriptPath)) {
    $PotentialRoot = Split-Path -Parent (Split-Path -Parent $ScriptPath)
    if (Test-Path (Join-Path $PotentialRoot "SKILL.md")) {
        $SourceRoot = $PotentialRoot
    }
}

if (-not $SourceRoot) {
    Write-Host "[INFO] Downloading latest Agential Skill bundle from GitHub..." -ForegroundColor Cyan
    $TempZip = Join-Path ([System.IO.Path]::GetTempPath()) "agential-skill-main.zip"
    $TempExtract = Join-Path ([System.IO.Path]::GetTempPath()) "agential-skill-temp"
    
    Invoke-WebRequest -Uri "https://github.com/talhairfandev/agential-skill/archive/refs/heads/main.zip" -OutFile $TempZip
    if (Test-Path $TempExtract) { Remove-Item -Recurse -Force $TempExtract }
    Expand-Archive -Path $TempZip -DestinationPath $TempExtract -Force
    $SourceRoot = Join-Path $TempExtract "agential-skill-main"
    $CleanTemp = $true
}

function Copy-RecursiveSafe($Src, $Dest) {
    if (Test-Path $Src) {
        if (-not (Test-Path $Dest)) { New-Item -ItemType Directory -Force -Path $Dest | Out-Null }
        Copy-Item -Path "$Src\*" -Destination $Dest -Recurse -Force
    }
}

# 1. Antigravity & Gemini CLI (.agents/skills & .agents/rules)
if ($TargetType -eq "all" -or $TargetType -eq "antigravity") {
    $DestSkill = Join-Path $TargetDir ".agents\skills\agential-skill"
    New-Item -ItemType Directory -Force -Path $DestSkill | Out-Null
    Copy-Item (Join-Path $SourceRoot "SKILL.md") -Destination $DestSkill -Force
    Copy-RecursiveSafe (Join-Path $SourceRoot "references") (Join-Path $DestSkill "references")

    $DestRules = Join-Path $TargetDir ".agents\rules"
    New-Item -ItemType Directory -Force -Path $DestRules | Out-Null
    Copy-Item (Join-Path $SourceRoot "AGENTS.md") -Destination (Join-Path $DestRules "agential-skill.md") -Force
    Write-Host "  ✔ Google Antigravity Skill & Rules -> .agents/" -ForegroundColor Green
}

# 2. Universal Agent Standard (AGENTS.md at root)
if ($TargetType -eq "all" -or $TargetType -eq "antigravity") {
    Copy-Item (Join-Path $SourceRoot "AGENTS.md") -Destination $TargetDir -Force
    Write-Host "  ✔ Universal Agent Standard -> AGENTS.md (always auto-loaded)" -ForegroundColor Green
}

# 3. Cursor IDE (.cursorrules & .cursor/rules/agential-skill.mdc with alwaysApply: true)
if ($TargetType -eq "all" -or $TargetType -eq "cursor") {
    Copy-Item (Join-Path $SourceRoot "adapters\cursor\.cursorrules") -Destination $TargetDir -Force
    $CursorDir = Join-Path $TargetDir ".cursor\rules"
    New-Item -ItemType Directory -Force -Path $CursorDir | Out-Null
    $MdcSrc = Join-Path $SourceRoot ".cursor\rules\agential-skill.mdc"
    Copy-Item $MdcSrc -Destination (Join-Path $CursorDir "agential-skill.mdc") -Force
    Write-Host "  ✔ Cursor IDE rules -> .cursorrules & .cursor/rules/agential-skill.mdc (alwaysApply: true)" -ForegroundColor Green
}

# 4. GitHub Copilot (.github/copilot-instructions.md)
if ($TargetType -eq "all" -or $TargetType -eq "copilot") {
    $CopilotDir = Join-Path $TargetDir ".github"
    New-Item -ItemType Directory -Force -Path $CopilotDir | Out-Null
    Copy-Item (Join-Path $SourceRoot "adapters\copilot\copilot-instructions.md") -Destination $CopilotDir -Force
    Write-Host "  ✔ GitHub Copilot -> .github/copilot-instructions.md" -ForegroundColor Green
}

# 5. Claude Code (CLAUDE.md)
if ($TargetType -eq "all" -or $TargetType -eq "claude") {
    Copy-Item (Join-Path $SourceRoot "adapters\claude\CLAUDE.md") -Destination $TargetDir -Force
    Write-Host "  ✔ Claude Code -> CLAUDE.md" -ForegroundColor Green
}

# 6. Windsurf IDE (.windsurfrules)
if ($TargetType -eq "all" -or $TargetType -eq "windsurf") {
    $WindsurfSrc = Join-Path $SourceRoot "adapters\windsurf\.windsurfrules"
    if (Test-Path $WindsurfSrc) {
        Copy-Item $WindsurfSrc -Destination $TargetDir -Force
        Write-Host "  ✔ Windsurf IDE -> .windsurfrules" -ForegroundColor Green
    }
}

# 7. Starter context.md
$ContextPath = Join-Path $TargetDir "context.md"
if (-not (Test-Path $ContextPath)) {
    $StarterContext = @"
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
"@
    Set-Content -Path $ContextPath -Value $StarterContext -Encoding UTF8
    Write-Host "  ✔ Session Memory -> context.md (initialized)" -ForegroundColor Green
}

if ($CleanTemp) {
    Remove-Item -Path $TempZip -Force -ErrorAction SilentlyContinue
    Remove-Item -Path $TempExtract -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "✨ Agential Skill installation complete!" -ForegroundColor Cyan
Write-Host "Every connected AI agent will now use this skill automatically on turn 1." -ForegroundColor DarkGray
