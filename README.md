# Probationary Training App Design System
We use a high-contrast palette to ensure readability in high-glare environments (like a bright apparatus bay) and low-light settings (station bunkrooms).

## Color
-Primary (EFD Red) - #D32F2F - Main branding, H1s, primary action buttons, FABs.

-Secondary (Navy) - #1A237E - Sidebar, header backgrounds, active navigation states.

-Accent (Gold) - #FBC02D - Important highlights, caution notices, or star ratings.

-Background - #F8F9FA - Main app background (off-white to reduce eye strain).

-Surface - #FFFFFF - Content cards, module sections, quiz containers.

-Text (Main) - #202124 - Primary body text (Deep Charcoal).

-Text (Muted) - #5F6368 - Captions, disabled states, helper text.

-Border/Divider - #DADCE0 - Subtle lines separating content.

-Success - #1E8E3E - Correct answers, module completion, pass status.

-Error - #D93025 - Incorrect answers, alerts, failing status.

-Info - #1976D2 - Audio status updates, general tips.


## Spacing, Padding & Margins
-We follow an 8dp (density-independent pixel) grid system. 

-All measurements should be multiples of 8.

-Outer Container Margin: 16px (Mobile), 32px (Desktop).

-Card Internal Padding: 24px for headers, 16px for body content.

-Vertical Spacing between blocks: 24px (e.g., spacing between text and a "Quick Check").

-Touch Target Size: Minimum 48x48px for all buttons and interactive elements.

-Border Radius: 12px for cards and major containers; 50px for pills/audio buttons.

## Typography Scale
Clean sans-serif fonts only. Segoe UI (Windows), San Francisco (iOS), or Roboto (Android/Web).

**Element - Size - Weight - Line Height - Color**
H1 (Title) - 32px / 2rem - Bold (700) - 1.2 - EFD Red

H2 (Section) - 24px / 1.5rem - Semibold (600) - 1.3 - Navy

H3 (Sub-header) - 20px / 1.25rem - Semibold (600) - 1.4 - Navy

Body 1 (Main) - 16px / 1rem - Regular (400) - 1.6 - Text Main

Body 2 (Small) - 14px / 0.875rem - Regular (400) - 1.5 - Text Muted

Button Text - 14px - Medium (500) - 1.0 - Surface White


## Visual Style for Image Generation
When generating images via AI (DALL-E, Midjourney, etc.) for the training platform, use the following "Style Signature" to maintain consistency across the handbook.

### The "Technical Realism" Style (For Photos)
-Prompt Keywords: "High-contrast documentary photography, sharp focus, 35mm lens, natural firehouse lighting, professional fire service training, cinematic but realistic, clear structural details."

-Color Grade: Desaturated backgrounds with "EFD Red" elements popping in the foreground.

-Content: Real firefighters in clean PPE, realistic tools, and actual building materials (no "Hollywood" explosions).

### The "Minimalist Vector" Style (For Diagrams)
-Prompt Keywords: "Flat vector illustration, Material Design style, isometric perspective, thick clean lines, limited color palette (Red, Navy, Gray), white background, technical callouts, high legibility."

-Style Constraints: No gradients, no shadows in the art itself, 2D or 2.5D perspective only.

## UI Component Standards (CSS/Visual Reference)

### The "Lesson Card"
-Background: #FFFFFF

-Border: 1px solid #DADCE0

-Shadow: 0 2px 4px rgba(0,0,0,0.05) (Subtle elevation).

-Corner Radius: 12px

### The "Quick Check" Section
-Container: Background #F8F9FA, left-border 4px solid #1A237E.

-Padding: 24px.

-Interaction: Radio buttons use #1A237E for the selected state.

### The "Audio Bar"
-Shape: Full pill-shape (border-radius: 50px).

-Background: #E8F0FE (Light Blue Tint).

-Icon Color: #1A237E.

-Padding: 12px 24px.

## Implementation Strategy
-Consistency First: Use these hex codes and spacing rules in the style.css file to ensure the GitHub "Engine" feels native to the Google Sites "Dashboard."

-Standardized Naming: When creating new images, name them by module (e.g., mod1_forces.png, mod2_loads.jpg) and store them in the standardized /images folder.

-Accessibility: Always ensure a contrast ratio of at least 4.5:1 for text against its background.

