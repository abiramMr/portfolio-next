import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const colors = {
  primary: "var(--port-primary)",
  secondary: "var(--port-secondary)",
  title: "var(--port-ttl-secondary)",
  black: "var(--port-black)",
  white: "var(--port-white)",
  error: "var(--port-error)",
  success: "var(--port-success)",
};

const spacing = {
  4.5: "var(--port-spacing-4pt5)",
  5.5: "var(--port-spacing-5pt5)",
  6.5: "var(--port-spacing-6pt5)",
  7.5: "var(--port-spacing-7pt5)",
};
    
const fontWeight = {
  light: "var(--port-font-light)",
  regular: "var(--port-font-regular)",
  medium: "var(--port-font-medium)",
  semibold: "var(--port-font-semibold)",
  bold: "var(--port-font-bold)",
  black: "var(--port-font-black)",

};

const fontSize = {
  h1: "var(--port-text-h1)",
  h2: "var(--port-text-h2)",
  h3: "var(--port-text-h3)",
  h4: "var(--port-text-h4)",
  h5: "var(--port-text-h5)",
  h6: "var(--port-text-h6)",
  p: "var(--port-text-p)",
  md: "var(--port-text-md)",

};

const boxShadow = {
  sm: "var(--port-shadow-sm)",
  md: "var(--port-shadow-md)",
  lg: "var(--port-shadow-lg)",
};
    
const container = {
  center: true,
  padding: "calc(var(--gutter-x) / 2)",
};

const screens = {
  xs: { max: "576px" },
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1420px",
  xxxl: "1600px",
  laptop: { min: "1200px", max: "1450px" },
};
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    fontWeight,
    boxShadow,
    container,
    screens,
    fontFamily: {
      gelasio: ['"Gelasio"', 'serif'],
      roboto: ['"Roboto"', 'sans-serif'],
    },
    extend: {
      spacing,
      fontSize,
    },
  },
  plugins: [ plugin(function ({ matchUtilities, theme }) {
    const baseFontSize = 16; // Default root font size (16px = 1rem)
    const valueMatch = (value:string) => {
      const numericValue = parseFloat(value); // Ensure numeric parsing
      const returnValue = String(value).includes("px")
        ? `${numericValue / baseFontSize}rem`
        : value;
      return returnValue;
    };
    matchUtilities(
      {
        w: (value) => {
          return { width: valueMatch(value) };
        },
        "min-w": (value) => {
          return { minWidth: valueMatch(value) };
        },
        "max-w": (value) => {
          return { maxWidth: valueMatch(value) };
        },

        h: (value) => {
          return { height: valueMatch(value) };
        },
        "min-h": (value) => {
          return { minHeight: valueMatch(value) };
        },
        "max-h": (value) => {
          return { maxHeight: valueMatch(value) };
        },

        m: (value) => {
          return { margin: valueMatch(value) };
        },
        mt: (value) => {
          return { marginTop: valueMatch(value) };
        },
        mb: (value) => {
          return { marginBottom: valueMatch(value) };
        },
        ms: (value) => {
          return { marginStart: valueMatch(value) };
        },
        ml: (value) => {
          return { marginLeft: valueMatch(value) };
        },
        mr: (value) => {
          return { marginRight: valueMatch(value) };
        },
        me: (value) => {
          return { marginEnd: valueMatch(value) };
        },
        mx: (value) => {
          return {
            marginRight: valueMatch(value),
            marginLeft: valueMatch(value),
          };
        },
        my: (value) => {
          return {
            marginBottom: valueMatch(value),
            marginTop: valueMatch(value),
          };
        },

        p: (value) => {
          return { padding: valueMatch(value) };
        },
        pt: (value) => {
          return { paddingTop: valueMatch(value) };
        },
        pb: (value) => {
          return { paddingBottom: valueMatch(value) };
        },
        ps: (value) => {
          return { paddingStart: valueMatch(value) };
        },
        pl: (value) => {
          return { paddingLeft: valueMatch(value) };
        },
        pr: (value) => {
          return { paddingRight: valueMatch(value) };
        },
        pe: (value) => {
          return { paddingEnd: valueMatch(value) };
        },
        px: (value) => {
          return {
            paddingRight: valueMatch(value),
            paddingLeft: valueMatch(value),
          };
        },
        py: (value) => {
          return {
            paddingBottom: valueMatch(value),
            paddingTop: valueMatch(value),
          };
        },

        txt: (value) => {
          return { fontSize: valueMatch(value) };
        },
        leading: (value) => {
          return { lineHeight: valueMatch(value) };
        },
        tracking: (value) => {
          return { letterSpacing: valueMatch(value) };
        },

        border: (value) => {
          return { borderWidth: valueMatch(value) };
        },
        gap: (value) => {
          return { gap: valueMatch(value) };
        },
        "gap-x": (value) => {
          return { columnGap: valueMatch(value) };
        },
        "gap-y": (value) => {
          return { rowGap: valueMatch(value) };
        },

      },
      {
        values: theme("spacing"), // Use Tailwind's spacing scale or define custom values
        type: ["length", "number"], // Handle both raw numbers and length values
      }
    );
  }),],
} satisfies Config;
