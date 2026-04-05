# Design System Strategy: The Scholarly Sanctuary

## 1. Overview & Creative North Star
This design system is built upon the "Scholarly Sanctuary" North Star. It rejects the frantic, cluttered nature of traditional "resource portals" in favor of an editorial experience that feels like a high-end publication. We are blending the tactical utility of modern productivity tools with the quiet, tactile luxury of a lifestyle magazine.

To move beyond a "template" look, we utilize **Intentional Asymmetry**. Do not center-align everything. Use the generous spacing scale to create wide, staggered margins. Headlines should feel authoritative—almost oversized—while body text remains intimate and functional. The goal is to provide international students with a sense of calm and clarity during a complex life transition.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated interplay of organic tones. We avoid the clinical sterility of pure white and the harshness of black, opting instead for a "Warm Tech" atmosphere.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or containment. Traditional lines create visual noise.
*   **Defining Boundaries:** Use background color shifts. A section using `surface-container-low` (#f4f4f0) sitting on a `background` (#faf9f6) provides all the separation necessary.
*   **Surface Hierarchy:** Treat the UI as layers of fine paper. 
    *   **Level 0 (Base):** `background` (#faf9f6).
    *   **Level 1 (Sections):** `surface-container` (#eeeeea).
    *   **Level 2 (Interactive Cards):** `surface-container-lowest` (#ffffff) to provide a soft "pop" against the off-white base.

### The Glass & Gradient Rule
To achieve a "Futuristic Editorial" feel, floating elements (like navigation bars or hovering tooltips) must use **Glassmorphism**.
*   **Implementation:** Use a semi-transparent version of `surface` (#faf9f6) with a `backdrop-blur` of 20px. 
*   **Signature Textures:** Apply a 2% grain overlay to `primary_container` (#fec3c3) hero sections to mimic the feel of premium matte paper. Use subtle linear gradients transitioning from `primary` (#805353) to `primary_dim` (#734748) for main CTAs to add "soul."

---

## 3. Typography
The typographic system relies on a high-contrast scale to establish an editorial rhythm.

*   **Display & Headlines (notoSerif):** These are your "Editorial Voices." Use `display-lg` (3.5rem) for hero statements with a `-0.02em` letter spacing. This font choice communicates authority and heritage.
*   **Body & Titles (plusJakartaSans):** The "Utility Voice." Use `body-md` (0.875rem) for most reading experiences. The geometric nature of this font ensures that despite the "vintage" feel of the serif, the platform feels firmly rooted in modern technology.
*   **Hierarchy Note:** Always pair a `headline-lg` with a `label-md` in `on_surface_variant` (#5d605c) to provide context without competing for attention.

---

## 4. Elevation & Depth
In this system, depth is organic, not structural. We use **Tonal Layering** to convey hierarchy.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` object on a `surface-container-high` background. This creates a natural "lift" that feels integrated into the environment.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a "Wide-Diffusion" approach.
    *   **Spec:** `0px 20px 40px`, color: `on_surface` (#303330) at **4% opacity**. It should be felt, not seen.
*   **The Ghost Border Fallback:** If accessibility requires a border, use the **Ghost Border**. Apply `outline-variant` (#b0b3ae) at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons
*   **Primary:** Pill-shaped (`rounded-full`). Background: `primary` (#805353). Text: `on_primary` (#fff7f6). No shadow.
*   **Secondary:** Pill-shaped. Background: `secondary_container` (#d9eaa3). Text: `on_secondary_container` (#495720).
*   **Tertiary:** Text-only in `primary` (#805353) with a `title-sm` weight.

### Cards & Resource Items
*   **Constraint:** Zero borders. Zero dividers.
*   **Structure:** Use a background of `surface-container-low` (#f4f4f0). Add padding of `6` (2rem). 
*   **Separation:** Use vertical white space of `10` (3.5rem) to separate card groups.

### Input Fields
*   **Style:** Minimalist. Background: `surface-container-lowest` (#ffffff).
*   **Active State:** A subtle `2px` bottom border in `primary` (#805353). No full-box focus rings.
*   **Error State:** Text in `error` (#a73b21), background shifts slightly to `error_container` at 10% opacity.

### Navigation (The Floating Bar)
*   Instead of a top-pinned bar, use a floating "Dock" centered at the bottom or top.
*   Use `surface` at 80% opacity, `backdrop-blur`, and a `rounded-xl` (0.75rem) corner radius.

---

## 6. Do’s and Don'ts

### Do:
*   **Embrace "Air":** Use the `20` (7rem) spacing token between major editorial sections.
*   **Stagger Layouts:** Place an image at 60% width on the left, and the text block at 40% width on the right, slightly offset vertically.
*   **Use Tonal Transitions:** Transition backgrounds from `surface` to `surface-container` to signify a change in content type.

### Don't:
*   **Don't use "Pure Black":** Always use `on_surface` (#303330) for text to maintain the soft, editorial aesthetic.
*   **Don't use Dividers:** If you feel the need to add a line, add `1.4rem` (token `4`) of whitespace instead.
*   **Don't Over-Round:** Stick to `md` (0.375rem) for most containers. Use `full` only for interactive elements like buttons and chips. High-end editorial looks usually favor more structured, slightly softer corners over "bubbly" ones.