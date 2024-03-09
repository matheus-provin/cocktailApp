import EStyleSheet from 'react-native-extended-stylesheet'

const base = {
  BLACK: '#000000',
  WHITE: '#ffffff',

  GREEN: '#7EC778',
  RED: '#C92B2B',
  ORANGE: '#FF7F37',
  YELLOW: '#F5C035',
  MODAL_BACKDROP: 'rgba(60, 60, 60, 0.6)',

  BORDER_RADIUS: 2,
  TAB_BAR_SIZE: 60,

  TEXT_SIZE_XXS: 9,
  TEXT_SIZE_XS: 12,
  TEXT_SIZE_SM: 14,
  TEXT_SIZE_SM_MD: 16,
  TEXT_SIZE_MD: 18,
  TEXT_SIZE_MD_LG: 20,
  TEXT_SIZE_LG: 24,
  TEXT_SIZE_XL: 34,
  TEXT_SIZE_XXL: 48,
  TEXT_SIZE_XXXL: 64,
  TEXT_SIZE_HEADER: 96,

  TEXT_WEIGHT_LIGHT: '300',
  TEXT_WEIGHT_REGULAR: '400',
  TEXT_WEIGHT_SEMIBOLD: '600',
  TEXT_WEIGHT_BOLD: '700',

  FONT_FAMILY_LIGHT: 'Satoshi',
  FONT_FAMILY: 'Satoshi',
  FONT_FAMILY_SEMIBOLD: 'Satoshi-Medium',
  FONT_FAMILY_BOLD: 'Satoshi-Bold',
  FONT_FAMILY_HEADER: 'Satoshi-Black',
}

const light = {
  BLUE700: '#193846',
  BLUE600: '#256D94',
  BLUE500: '#487891',
  BLUE400: '#213745',
  BLUE300: '#3A6378',
  BLUE200: '#08689C',
  BLUE100: '#3E95BC',

  GREY1000: '#202024',
  GREY900: '#383939',
  GREY800: '#4B4B4B',
  GREY700: '#5E5E5E',
  GREY600: '#717272',
  GREY500: '#858686',
  GREY400: '#9A9B9B',
  GREY300: '#B0B1B1',
  GREY200: '#C6C7C7',
  GREY100: '#DCDDDD',
  GREY50: '#EFEFEF',
  GREY50_70: '#EFEFEF70',
}

const themeObj = {
  $tabBarSize: base.TAB_BAR_SIZE,
  $borderRadius: base.BORDER_RADIUS,
  $text: {
    size: {
      xxs: base.TEXT_SIZE_XXS,
      xs: base.TEXT_SIZE_XS,
      sm: base.TEXT_SIZE_SM,
      smMd: base.TEXT_SIZE_SM_MD,
      md: base.TEXT_SIZE_MD,
      mdLg: base.TEXT_SIZE_MD_LG,
      lg: base.TEXT_SIZE_LG,
      xl: base.TEXT_SIZE_XL,
      xxl: base.TEXT_SIZE_XXL,
      xxxl: base.TEXT_SIZE_XXXL,
      header: base.TEXT_SIZE_HEADER,
    },
    weight: {
      light: base.TEXT_WEIGHT_LIGHT,
      regular: base.TEXT_WEIGHT_REGULAR,
      semibold: base.TEXT_WEIGHT_SEMIBOLD,
      bold: base.TEXT_WEIGHT_BOLD,
    },
    family: {
      light: base.FONT_FAMILY_LIGHT,
      regular: base.FONT_FAMILY,
      semibold: base.FONT_FAMILY_SEMIBOLD,
      bold: base.FONT_FAMILY_BOLD,
      header: base.FONT_FAMILY_HEADER,
    },
  },
  $colors: {
    black: base.BLACK,
    white: base.WHITE,
    green: base.GREEN,
    red: base.RED,
    orange: base.ORANGE,
    yellow: base.YELLOW,
    modalBackDrop: base.MODAL_BACKDROP,

    b100: '',
    b200: '',
    b300: '',
    b400: '',
    b500: '',
    b600: '',
    b700: '',
    g1000: '',
    g900: '',
    g800: '',
    g700: '',
    g600: '',
    g500: '',
    g400: '',
    g300: '',
    g200: '',
    g100: '',
    g50: '',
    g50_70: '',
  },
}

export class ConfigTheme {
  static build(theme: string) {
    if (theme === 'light') {
      themeObj.$colors = {
        ...themeObj.$colors,

        b100: light.BLUE100,
        b200: light.BLUE200,
        b300: light.BLUE300,
        b400: light.BLUE400,
        b500: light.BLUE500,
        b600: light.BLUE600,
        b700: light.BLUE700,

        g1000: light.GREY1000,
        g900: light.GREY900,
        g800: light.GREY800,
        g700: light.GREY700,
        g600: light.GREY600,
        g500: light.GREY500,
        g400: light.GREY400,
        g300: light.GREY300,
        g200: light.GREY200,
        g100: light.GREY100,
        g50: light.GREY50,
        g50_70: light.GREY50_70,
      }
    }
    EStyleSheet.build({
      ...themeObj,
    })
  }
}
