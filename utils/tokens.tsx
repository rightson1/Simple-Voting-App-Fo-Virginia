import { TokenColors } from "@/types";

export const tokens = (): TokenColors => ({
  ...{
    background: "#000", //background color
    surface: "#452E8F", //surface color
    active: "#A21984",
    white: "#FFFFFF",
    text: "#E2E8F0",
    textSecondary: "#A0AEC0",
    card: "#A21984",

    indigo: {
      100: "#ccdcdf",
      200: "#99b9c0",
      300: "#6697a0",
      400: "#337481",
      500: "#A21984",
      600: "#00414e",
      700: "#00313a",
      800: "#002027",
      900: "#001013",
    },
    green: {
      100: "#d2f9e0",
      200: "#a5f2c1",
      300: "#79eca2",
      400: "#4ce583",
      500: "#452E8F",
      600: "#19b250",
      700: "#13863c",
      800: "#0c5928",
      900: "#062d14",
    },
    red: {
      100: "#ffcccc",
      200: "#ff9999",
      300: "#ff6666",
      400: "#ff3333",
      500: "#ff0000",
      600: "#cc0000",
      700: "#990000",
      800: "#660000",
      900: "#330000",
    },
  },
});
