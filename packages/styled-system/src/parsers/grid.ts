import { system, SystemConfig } from '../core'
import { Property } from 'csstype'
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from '../types'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

export interface GridGapProps<ThemeType extends Theme = RequiredTheme, TVal = Property.GridGap<TLengthStyledSystem>> {
  /**
   * @deprecated use gap
   */
  gridGap?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface GridColumnGapProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.GridColumnGap<TLengthStyledSystem>,
> {
  /**
   * @deprecated use column-gap
   */
  gridColumnGap?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface GridRowGapProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.GridRowGap<TLengthStyledSystem>,
> {
  /**
   * @deprecated use row-gap
   */
  gridRowGap?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface GridColumnProps<ThemeType extends Theme = RequiredTheme> {
  gridColumn?: ResponsiveValue<Property.GridColumn, ThemeType> | undefined
}

export interface GridRowProps<ThemeType extends Theme = RequiredTheme> {
  gridRow?: ResponsiveValue<Property.GridRow, ThemeType> | undefined
}

export interface GridAutoFlowProps<ThemeType extends Theme = RequiredTheme> {
  gridAutoFlow?: ResponsiveValue<Property.GridAutoFlow, ThemeType> | undefined
}

export interface GridAutoColumnsProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.GridAutoColumns<TLengthStyledSystem>,
> {
  gridAutoColumns?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface GridAutoRowsProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.GridAutoRows<TLengthStyledSystem>,
> {
  gridAutoRows?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface GridTemplateColumnsProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.GridTemplateColumns<TLengthStyledSystem>,
> {
  gridTemplateColumns?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface GridTemplateRowsProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.GridTemplateRows<TLengthStyledSystem>,
> {
  gridTemplateRows?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface GridTemplateAreasProps<ThemeType extends Theme = RequiredTheme> {
  gridTemplateAreas?: ResponsiveValue<Property.GridTemplateAreas, ThemeType> | undefined
}

export interface GridAreaProps<ThemeType extends Theme = RequiredTheme> {
  gridArea?: ResponsiveValue<Property.GridArea, ThemeType> | undefined
}

export interface GridProps<ThemeType extends Theme = RequiredTheme>
  extends GridGapProps<ThemeType>,
    GridColumnGapProps<ThemeType>,
    GridRowGapProps<ThemeType>,
    GridColumnProps<ThemeType>,
    GridRowProps<ThemeType>,
    GridAutoFlowProps<ThemeType>,
    GridAutoColumnsProps<ThemeType>,
    GridAutoRowsProps<ThemeType>,
    GridTemplateColumnsProps<ThemeType>,
    GridTemplateRowsProps<ThemeType>,
    GridTemplateAreasProps<ThemeType>,
    GridAreaProps<ThemeType> {}

const config: SystemConfig = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
}

export const grid = system(config)
