$src = "C:\Users\dougc\.gemini\antigravity\brain\ebfe432b-42bf-4cab-9815-3dc78bab1262"
$dest = "public\images\site"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

Copy-Item "$src\hero_family_*.png" -Destination "$dest\hero_family.png"
Copy-Item "$src\hero_couple_*.png" -Destination "$dest\hero_couple.png"
Copy-Item "$src\hero_senior_*.png" -Destination "$dest\hero_senior.png"
Copy-Item "$src\showcase_consultation_*.png" -Destination "$dest\showcase_consultation.png"
Copy-Item "$src\showcase_digital_*.png" -Destination "$dest\showcase_digital.png"
Copy-Item "$src\showcase_wellness_*.png" -Destination "$dest\showcase_wellness.png"
Copy-Item "$src\avatar_1_*.png" -Destination "$dest\avatar_1.png"
Copy-Item "$src\avatar_2_*.png" -Destination "$dest\avatar_2.png"
Copy-Item "$src\avatar_3_*.png" -Destination "$dest\avatar_3.png"
Copy-Item "$src\blog_meal_*.png" -Destination "$dest\blog_meal.png"
Copy-Item "$src\blog_meditation_*.png" -Destination "$dest\blog_meditation.png"
Copy-Item "$src\blog_tech_*.png" -Destination "$dest\blog_tech.png"

Write-Output "Copied images successfully."
