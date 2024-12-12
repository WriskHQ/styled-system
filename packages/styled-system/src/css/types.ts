import * as CSS from 'csstype'
import { Theme } from '../types'

export type StandardCSSProperties = CSS.PropertiesFallback<number | string>

export type ResponsiveStyleValue<T> = T | Array<T | null>

export interface CSSProperties
  extends CSS.StandardProperties<number | string>,
    CSS.SvgProperties<number | string>,
    CSS.VendorProperties<number | string> {}

export type CSSPseudoSelectorProps = { [K in CSS.Pseudos]?: SystemStyleObject }

export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudosForCSSObject, CSSOthersObjectForCSSObject {}

export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]: CSSProperties[K]
}
export type CSSPseudosForCSSObject = { [K in CSS.Pseudos]?: CSSObject }
export type CSSInterpolation = undefined | number | string | CSSObject

export interface CSSOthersObjectForCSSObject {
  [propertiesName: string]: CSSInterpolation
}

export interface CSSSelectorObject {
  [cssSelector: string]: SystemStyleObject
}

export interface AliasesCSSProperties {
  bg?: StandardCSSProperties['backgroundColor']
  m?: StandardCSSProperties['margin']
  mt?: StandardCSSProperties['marginTop']
  mr?: StandardCSSProperties['marginRight']
  mb?: StandardCSSProperties['marginBottom']
  ml?: StandardCSSProperties['marginLeft']
  mx?: StandardCSSProperties['marginLeft']
  marginX?: StandardCSSProperties['marginLeft']
  my?: StandardCSSProperties['marginTop']
  marginY?: StandardCSSProperties['marginTop']
  p?: StandardCSSProperties['padding']
  pt?: StandardCSSProperties['paddingTop']
  pr?: StandardCSSProperties['paddingRight']
  pb?: StandardCSSProperties['paddingBottom']
  pl?: StandardCSSProperties['paddingLeft']
  px?: StandardCSSProperties['paddingLeft']
  paddingX?: StandardCSSProperties['paddingLeft']
  py?: StandardCSSProperties['paddingTop']
  paddingY?: StandardCSSProperties['paddingTop']
  size?: StandardCSSProperties['width']
}

export interface OverwriteCSSProperties {
  boxShadow?: CSS.Property.BoxShadow | number
  fontWeight?: CSS.Property.FontWeight | string
  zIndex?: CSS.Property.ZIndex | string
}

export interface AllSystemCSSProperties
  extends Omit<CSSProperties, 'boxShadow' | 'fontWeight' | 'zIndex'>,
    AliasesCSSProperties,
    OverwriteCSSProperties {}

export type SystemCssProperties = {
  [K in keyof AllSystemCSSProperties]:
    | ResponsiveStyleValue<AllSystemCSSProperties[K]>
    | ((theme: any) => ResponsiveStyleValue<AllSystemCSSProperties[K]>)
    | SystemStyleObject
}

export interface VariantProperty {
  variant: string
}

export interface UseThemeFunction {
  (theme: any): SystemStyleObject
}

export interface EmotionLabel {
  label?: string
}

export type SystemStyleObject =
  | SystemCssProperties
  | CSSPseudoSelectorProps
  | CSSSelectorObject
  | VariantProperty
  | UseThemeFunction
  | EmotionLabel
  | null

export type CssFunctionReturnType = (props?: Theme | { theme: Theme }) => CSSObject
