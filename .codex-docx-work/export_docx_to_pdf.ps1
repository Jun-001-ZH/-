$docx = "C:\Users\HUAWEI\AppData\Local\Temp\codex_report.docx"
$pdf = "C:\Users\HUAWEI\AppData\Local\Temp\codex_report.pdf"

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
  $document = $word.Documents.Open($docx, $false, $true)
  $document.ExportAsFixedFormat($pdf, 17)
  $document.Close($false)
}
finally {
  $word.Quit()
  [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
}

Write-Output $pdf
