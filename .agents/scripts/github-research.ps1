param(
    [Parameter(Mandatory = $true, Position = 0, ValueFromRemainingArguments = $true)]
    [string[]]$Command
)

$ErrorActionPreference = "Stop"

$WorkspaceRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$EnvFile = Join-Path $WorkspaceRoot ".agents\secrets\github.env"

if (-not (Test-Path -LiteralPath $EnvFile)) {
    throw "Missing $EnvFile. Create it with: GITHUB_TOKEN=github_pat_xxx"
}

$tokenLine = Get-Content -LiteralPath $EnvFile |
    Where-Object { $_ -match '^\s*(GITHUB_TOKEN|GH_TOKEN)\s*=' } |
    Select-Object -First 1

if (-not $tokenLine) {
    throw "No GITHUB_TOKEN or GH_TOKEN found in $EnvFile"
}

$token = ($tokenLine -split '=', 2)[1].Trim().Trim('"').Trim("'")

if (-not $token) {
    throw "GitHub token in $EnvFile is empty"
}

if ($token -in @("github_pat_xxx", "replace_me", "changeme")) {
    throw "Replace the placeholder token in $EnvFile before running GitHub research commands"
}

$env:GITHUB_TOKEN = $token
$env:GH_TOKEN = $token

& $Command[0] @($Command | Select-Object -Skip 1)
