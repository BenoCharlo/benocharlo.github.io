import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Helvetica", "georgia"],
  bodyFontFamily: ["Franklin_gothic", "Arial"],
  bodyColor: "black",
  headerColor: "black",
  googleFonts: [
    {
      name: "Franklin_gothic",
      styles: ["800", "400"],
    },
    {
      name: "Arial",
      styles: ["400", "300", "200"],
    },
  ],
})
export default typography
