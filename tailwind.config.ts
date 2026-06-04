import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // ===== Charte graphique VH Multiservices =====
        brand: {
          ink: "#0a0e1a", // fond profond
          navy: "#0D2D6B", // Bleu Nuit
          blue: "#1B4FA8", // Bleu Principal
          red: "#C8181A", // Rouge Accent
          "red-vivid": "#E82020", // Rouge vif
          offwhite: "#F4F6FA", // Blanc cassé
          gray: "#AABBCC",
          gold: "#D4A844",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        heading: ["var(--font-oswald)", "Impact", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        premium: "0 30px 80px -28px rgba(13,45,107,0.35)",
        card: "0 14px 50px -24px rgba(13,45,107,0.28)",
        soft: "0 6px 24px -12px rgba(13,45,107,0.18)",
        glow: "0 0 0 1px rgba(13,45,107,0.06), 0 20px 60px -28px rgba(13,45,107,0.4)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0D2D6B 0%, #1B4FA8 100%)",
        "hero-radial":
          "radial-gradient(ellipse at 25% 25%, rgba(27,79,168,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(200,24,26,0.08) 0%, transparent 55%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulseGlow: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.12)", opacity: "1" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulseGlow: "pulseGlow 6s ease-in-out infinite alternate",
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
