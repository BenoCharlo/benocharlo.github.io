import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Helvetica", "georgia"],
  bodyFontFamily: ["Helvetica", "sans-serif"],
  googleFonts: [
    {
      name: "Helvetica",
      styles: ["800", "400"],
    },
    {
      name: "Open Sans",
      styles: ["400", "300", "200"],
    },
  ],
})
export default typography
