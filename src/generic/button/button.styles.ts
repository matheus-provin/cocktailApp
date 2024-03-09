import EStyleSheet from 'react-native-extended-stylesheet'

export const typeOptions: any = {
  primary: {
    container: {
      backgroundColor: EStyleSheet.value('$colors.b700'),
      paddingHorizontal: 8,
    },
    text: {
      color: EStyleSheet.value('$colors.white'),
    },
    disabled: {
      backgroundColor: '#A6AFB5',
    },
    short: {
      borderRadius: 50,
    },
    icon: {
      color: EStyleSheet.value('$colors.white'),
    },
    loader: EStyleSheet.value('$colors.g200'),
  },
  secondary: {
    container: {
      borderWidth: 1,
      borderColor: EStyleSheet.value('$colors.black'),
      backgroundColor: EStyleSheet.value('$colors.white'),
      paddingHorizontal: 8,
    },
    text: {
      color: EStyleSheet.value('$colors.black'),
    },
    icon: {
      color: EStyleSheet.value('$colors.black'),
    },
    disabled: {
      borderStyle: 'dashed',
      borderColor: EStyleSheet.value('$colors.black'),
      color: EStyleSheet.value('$colors.g200'),
      backgroundColor: EStyleSheet.value('$colors.g50'),
    },
    short: {
      borderRadius: 50,
    },
    loader: EStyleSheet.value('$colors.black'),
  },
  tertiary: {
    container: {
      backgroundColor: 'transparent',
      alignItems: 'flex-end',
      paddingHorizontal: 8,
      height: 24,
    },
    text: {
      color: EStyleSheet.value('$colors.black'),
      borderBottomColor: EStyleSheet.value('$colors.black'),
    },

    disabled: {
      color: EStyleSheet.value('$colors.g300'),
      borderBottomColor: EStyleSheet.value('$colors.g300'),
    },
    icon: {
      color: EStyleSheet.value('$colors.black'),
    },
    loader: EStyleSheet.value('$colors.black'),
  },
  quaternary: {
    container: {
      backgroundColor: 'transparent',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 0,
      height: 12,
      width: 200,
      marginLeft: 25,
    },
    text: {
      color: EStyleSheet.value('$colors.g50'),
      borderBottomColor: EStyleSheet.value('$colors.g50'),
    },

    disabled: {
      color: EStyleSheet.value('$colors.g300'),
      borderBottomColor: EStyleSheet.value('$colors.g300'),
    },
    icon: {
      color: EStyleSheet.value('$colors.black'),
    },
    loader: EStyleSheet.value('$colors.black'),
  },
  quintenary: {
    container: {
      backgroundColor: EStyleSheet.value('$colors.b200'),
      paddingHorizontal: 8,
      borderRadius: 4,
    },
    text: {
      color: EStyleSheet.value('$colors.white'),
    },
    disabled: {
      backgroundColor: '#A6AFB5',
    },
    short: {
      borderRadius: 50,
    },
    icon: {
      color: EStyleSheet.value('$colors.white'),
    },
    loader: EStyleSheet.value('$colors.g200'),
  },
}

export const sizeOptions: any = {
  lg: {
    container: {
      height: 60,
    },
  },
  md: {
    container: {
      height: 48,
    },
  },
  sm: {
    container: {
      height: 40,
    },
    text: {
      fontSize: 16,
    },
  },
}

export const styles = EStyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  icon: {},

  text: {
    fontSize: 18,
  },

  counterContainer: {
    backgroundColor: '$colors.black',
    position: 'absolute',
    right: -3,
    top: -3,
    zIndex: 2,
    borderRadius: 100,
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '$colors.g900',
  },

  counterText: {
    fontSize: 10,
  },
})
