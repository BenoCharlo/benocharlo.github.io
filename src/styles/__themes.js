// These objects are imported in ThemeContext.js to be
// loaded to <ThemeContextWrapper> in gatsby-browser.js && gatsby-ssr.js

// Theme is determined via state in ____________ and
// switched via a button on every page in site.
const lightTheme = {
  transition: "0.37s",
  bgColor: "#fffff",
  textColor: "#080708",
  accentColor: "#6128d3",
}

const darkTheme = {
  transition: "0.37s",
  bgColor: "#1a1e1c",
  textColor: "#f9f9f9",
  accentColor: "#6128d3",
}

export { darkTheme, lightTheme }
