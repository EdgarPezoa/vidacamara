/* eslint-disable @typescript-eslint/no-unused-vars */
const ElementStyleMeasures = {
  xs: "xs",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

// TODO: fill with posibilities
const ElementCategory = {
  flex: "flex",
  text: "text",
  border: "border",
  shadow: "shadow",
  container: "container",
} as const;

type ElementStyleMeasuresType = keyof typeof ElementStyleMeasures;
type ElementCategoryType = keyof typeof ElementCategory;

type ElementStyles = Partial<{
  [Element in ElementCategoryType]: Partial<{
    [Measures in ElementStyleMeasuresType]: string;
  }>;
}>;

export default ElementStyles;
