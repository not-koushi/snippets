param(
    [string]$Path,
    [string]$Prefix
)

Get-ChildItem $Path -File | ForEach-Object {
    Rename-Item $_ -NewName "$Prefix$($_.Name)"
}