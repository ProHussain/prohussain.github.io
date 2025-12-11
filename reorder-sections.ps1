# PowerShell script to reorder sections
$file = "c:\Users\Hussain\Documents\Resume\PortfolioWeb\index.html"
$content = Get-Content $file -Raw -Encoding UTF8

# Extract Skills section (lines 654-836 approximately)
$skillsStart = $content.IndexOf("  <!-- SKILLS SECTION -->")
$skillsEnd = $content.IndexOf("  <!-- Blog & Articles Section -->")

if ($skillsStart -gt 0 -and $skillsEnd -gt $skillsStart) {
    $skillsSection = $content.Substring($skillsStart, $skillsEnd - $skillsStart)
    
    # Remove skills from current position
    $contentWithoutSkills = $content.Substring(0, $skillsStart) + $content.Substring($skillsEnd)
    
    # Find insertion point (after Impact Metrics, before Portfolio)
    $insertPoint = $contentWithoutSkills.IndexOf("  <!-- PORTFOLIO SECTION -->")
    
    if ($insertPoint -gt 0) {
        # Insert skills before Portfolio
        $newContent = $contentWithoutSkills.Substring(0, $insertPoint) + $skillsSection + $contentWithoutSkills.Substring($insertPoint)
        
        # Write back
        Set-Content -Path $file -Value $newContent -Encoding UTF8 -NoNewline
        Write-Host "Skills section moved successfully!"
    } else {
        Write-Host "Could not find insertion point"
    }
} else {
    Write-Host "Could not find skills section boundaries"
}
