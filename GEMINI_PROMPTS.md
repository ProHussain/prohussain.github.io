# 🤖 Gemini AI Image Generation Prompts

## For Professional Headshot Generation

---

## Option 1: Photorealistic Headshot (Most Professional)

### Gemini Prompt:

```
Generate a professional headshot portrait for a Principal Software Engineer's portfolio.

Subject Details:
- Male, Pakistani heritage, professional demeanor
- Age: Late 20s to early 30s
- Small, well-groomed beard
- Profession: Android Developer / Principal Software Engineer

Attire:
- Navy blue casual polo shirt
- Small Android logo on the polo (chest area, subtle)
- Professional tech casual style

Visual Requirements:
- Clean, confident expression with friendly smile
- Direct eye contact with camera
- Professional photography lighting (soft, well-balanced)
- Sharp focus on face
- Shoulders and upper chest visible
- Modern, tech industry aesthetic
- NO filters, NO alterations, NO distortions
- Natural, realistic rendering
- Maintain natural proportions

Background:
- Clean, minimal background
- Solid Android green (#3DDC84) OR
- White/light gray minimalist OR
- Soft gradient (Android green #3DDC84 to dark green #1B5E20) OR
- Transparent/removable (preferred)

Composition:
- Square aspect ratio (1:1)
- Head and shoulders framing
- Professional corporate headshot style
- Similar to LinkedIn profile photos

Technical:
- High quality, photorealistic rendering
- Natural skin tones, no enhancement
- Professional color grading
- Suitable for business use
- No artistic filters or alterations

Style: Professional corporate photography, modern tech industry standard, clean and approachable.
```

---

## Option 2: Professional Avatar/Illustration

### Gemini Prompt:

```
Create a professional illustrated avatar for a Principal Software Engineer's portfolio.

Subject: Male software engineer, friendly and professional
Style: Modern, clean illustration (not cartoon, not too realistic)
Industry: Technology / Android Development

Design Requirements:
- Professional business casual style
- Confident, approachable expression
- Clean lines and modern aesthetic
- Tech-forward appearance
- Suitable for LinkedIn and professional websites

Color Palette:
- Primary: Android green (#3DDC84)
- Secondary: Dark green (#1B5E20)
- Accent: Kotlin purple (#7F52FF)
- Background: White or transparent
- Clothing: Professional colors (navy, gray, or white)

Composition:
- Head and shoulders
- Square format (1:1)
- Minimalist background
- Professional corporate style

Technical:
- Vector-style illustration
- Clean, modern lines
- High quality rendering
- PNG format with transparency

Style: Professional avatar illustration, similar to corporate LinkedIn illustrations, modern and clean.
```

---

## Option 3: Minimal Geometric Avatar (Quick & Modern)

### Gemini Prompt:

```
Design a minimal, professional geometric avatar for a software engineer's portfolio.

Concept:
- Large letter "H" (for Hussain) as focal point
- Clean, geometric design
- Modern, professional aesthetic
- Tech industry style

Design Elements:
- Letter "H" in bold, modern font
- Circular or rounded square container
- Android green color scheme
- Minimalist and professional

Color Scheme:
- Background gradient: Android green (#3DDC84) to dark green (#1B5E20)
- Letter: White (#FFFFFF) or very light gray
- Border: Optional subtle white border
- Shadow: Soft, subtle depth

Specifications:
- Square format (500x500px)
- Clean, vector-style design
- High contrast for visibility
- Professional and memorable

Style: Minimal geometric avatar, similar to Material Design avatars, clean and modern.
```

---

## Option 4: Android-Themed Tech Avatar

### Gemini Prompt:

```
Create a professional tech-themed avatar for an Android Principal Software Engineer.

Theme: Android development, modern technology
Subject: Professional representation of an Android developer

Design Concept:
- Incorporate subtle Android/Kotlin elements
- Professional, not playful
- Clean, modern aesthetic
- Suitable for business profiles

Visual Elements:
- Professional headshot OR stylized representation
- Subtle tech elements (code brackets, Android symbol, etc.)
- Android green color scheme (#3DDC84, #1B5E20)
- Modern, clean lines
- Professional demeanor

Background:
- Android green gradient OR
- Minimalist tech pattern (circuits, code, etc.) very subtle OR
- Solid color with depth OR
- Transparent/removable

Style Requirements:
- Professional and corporate-appropriate
- Modern tech industry aesthetic
- Not too playful or casual
- Suitable for LinkedIn, portfolio, business cards
- Memorable but professional

Technical Specs:
- Square format (512x512px)
- High quality rendering
- PNG with transparency support
- Clean, crisp details

Style: Professional tech avatar with Android theme, modern and business-appropriate.
```

---

## 🎯 How to Use with Gemini

### Method 1: Google AI Studio (Recommended)

1. Go to **https://aistudio.google.com/**
2. Select **"Create new prompt"**
3. Choose **"Generate image"**
4. Copy one of the prompts above
5. Paste into prompt box
6. Click **"Generate"**
7. Download the image
8. Save as `test_mine.png`

---

### Method 2: Gemini API (If You Have Access)

```bash
curl -X POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: YOUR_API_KEY" \
  -d '{
    "contents": [{
      "parts": [{
        "text": "YOUR_PROMPT_HERE"
      }]
    }],
    "generationConfig": {
      "temperature": 0.7,
      "topK": 40,
      "topP": 0.95
    }
  }'
```

---

### Method 3: Google ImageFX (Easiest)

1. Go to **https://aitestkitchen.withgoogle.com/tools/image-fx**
2. Paste prompt
3. Generate
4. Download

---

## 🎨 Prompt Customization Guide

### To Adjust the Prompts:

**Change Background Color:**
```
Replace: "Android green (#3DDC84)"
With: "white" or "light gray" or "navy blue"
```

**Change Style:**
```
Add: "in the style of [corporate photography/LinkedIn headshot/tech startup]"
```

**Change Ethnicity/Appearance:**
```
Modify: "Male, Pakistani heritage"
To: Your specific appearance details
```

**Add Specific Elements:**
```
Add: "wearing glasses" or "wearing a tie" or "casual tech startup style"
```

---

## 📋 Recommended Prompt (Copy-Paste Ready)

### For Quick Use in Gemini:

```
Professional headshot portrait for an Android Principal Software Engineer portfolio.

Subject: Male, late 20s-early 30s, Pakistani, professional and confident
Attire: Smart business casual (professional shirt or polo)
Expression: Friendly smile, approachable, direct eye contact
Lighting: Professional photography, soft and well-balanced
Background: Solid Android green (#3DDC84) or white minimalist
Composition: Square 1:1 ratio, head and shoulders
Quality: Photorealistic, high quality, sharp focus

Style: Modern LinkedIn professional headshot, tech industry standard, clean and corporate.
```

**Just copy this, paste into Gemini, and generate!**

---

## 💡 Alternative Free Tools (No AI Needed)

If you prefer not to use AI generation:

### 1. **Use Your Phone + remove.bg**
- Take selfie near window
- Upload to https://www.remove.bg/
- Download PNG
- Done in 2 minutes!

### 2. **Fiverr** ($5-10)
- Search "professional headshot editing"
- Send your photo
- Get professionally edited version in 24h

### 3. **Simple Avatar Generator**
- https://ui-avatars.com/
- Instant, free, professional
- Just your initial on Android green background

---

## 🚀 Recommended Approach

### **Best for You:**

**Option A - Quick (2 minutes):**
1. Generate initial avatar: https://ui-avatars.com/api/?name=Hussain&size=500&background=3DDC84&color=fff&bold=true
2. Download
3. Save as `test_mine.png`
4. Done!

**Option B - Professional (10 minutes):**
1. Take photo with phone camera
2. Upload to https://www.remove.bg/
3. Download PNG
4. Resize to 500x500px at https://squoosh.app/
5. Save as `test_mine.png`
6. Perfect!

**Option C - AI Generated (5 minutes):**
1. Go to https://aitestkitchen.withgoogle.com/tools/image-fx
2. Use the recommended prompt above
3. Generate
4. Download best result
5. Save as `test_mine.png`

---

## 📸 Final Specs

Whatever method you choose, final image should be:
- **Format:** PNG
- **Size:** 400x400 to 600x600px
- **Filename:** `test_mine.png`
- **Location:** `PortfolioWeb/images/`
- **Background:** Removed or solid color
- **Quality:** Clear, professional

---

<p align="center">
  <strong>Image animations removed! ✅</strong>
</p>

<p align="center">
  <strong>Choose your method and get your professional image!</strong>
</p>

<p align="center">
  <sub>Recommended: Use remove.bg or generate with Gemini ImageFX</sub>
</p>

