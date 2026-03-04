Write-Host "System Information Report"
Write-Host "------------------------"

Get-ComputerInfo | Select-Object OSName, OSVersion

Write-Host "`nCPU:"
Get-CimInstance Win32_Processor | Select-Object Name

Write-Host "`nMemory:"
Get-CimInstance Win32_PhysicalMemory | Measure-Object -Property Capacity -Sum