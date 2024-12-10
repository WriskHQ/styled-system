import { system, SystemConfig } from '../core'
import { Property } from 'csstype'
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from '../types'

export interface AlignItemsProps<ThemeType extends Theme = RequiredTheme> {
  alignItems?: ResponsiveValue<Property.AlignItems, ThemeType>
}

export interface AlignContentProps<ThemeType extends Theme = RequiredTheme> {
  alignContent?: ResponsiveValue<Property.AlignContent, ThemeType>
}

export interface JustifyItemsProps<ThemeType extends Theme = RequiredTheme> {
  justifyItems?: ResponsiveValue<Property.JustifyItems, ThemeType>
}

export interface JustifyContentProps<ThemeType extends Theme = RequiredTheme> {
  justifyContent?: ResponsiveValue<Property.JustifyContent, ThemeType>
}

export interface FlexWrapProps<ThemeType extends Theme = RequiredTheme> {
  flexWrap?: ResponsiveValue<Property.FlexWrap, ThemeType>
}

export interface FlexDirectionProps<ThemeType extends Theme = RequiredTheme> {
  flexDirection?: ResponsiveValue<Property.FlexDirection, ThemeType>
}

export interface FlexProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Flex<TLengthStyledSystem>> {
  flex?: ResponsiveValue<TVal, ThemeType>
}

export interface FlexGrowProps<ThemeType extends Theme = RequiredTheme> {
  flexGrow?: ResponsiveValue<Property.FlexGrow, ThemeType>
}

export interface FlexShrinkProps<ThemeType extends Theme = RequiredTheme> {
  flexShrink?: ResponsiveValue<Property.FlexShrink, ThemeType>
}

export interface FlexBasisProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.FlexBasis<TLengthStyledSystem>,
> {
  flexBasis?: ResponsiveValue<TVal, ThemeType>
}

export interface JustifySelfProps<ThemeType extends Theme = RequiredTheme> {
  justifySelf?: ResponsiveValue<Property.JustifySelf, ThemeType>
}

export interface AlignSelfProps<ThemeType extends Theme = RequiredTheme> {
  alignSelf?: ResponsiveValue<Property.AlignSelf, ThemeType>
}

export interface OrderProps<ThemeType extends Theme = RequiredTheme> {
  order?: ResponsiveValue<Property.Order, ThemeType>
}

export interface FlexboxProps<ThemeType extends Theme = RequiredTheme>
  extends AlignItemsProps<ThemeType>,
    AlignContentProps<ThemeType>,
    JustifyItemsProps<ThemeType>,
    JustifyContentProps<ThemeType>,
    FlexWrapProps<ThemeType>,
    FlexDirectionProps<ThemeType>,
    FlexProps<ThemeType>,
    FlexGrowProps<ThemeType>,
    FlexShrinkProps<ThemeType>,
    FlexBasisProps<ThemeType>,
    JustifySelfProps<ThemeType>,
    AlignSelfProps<ThemeType>,
    OrderProps<ThemeType> {}

const config: SystemConfig = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
}

export const flexbox = system(config)
