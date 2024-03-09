import React, { useEffect } from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'

import { sizeOptions, styles, typeOptions } from './button.styles'
import { IButtonProps } from './IButtonProps'
import { PText } from '../text/v-text.component'

export const Button = ({
  title = '',
  onPress = () => {},
  type = 'primary',
  size = 'md',
  rounded = false,
  isLoading = false,
  disabled = false,
  icon = '',
  iconSize = 20,
  styles: propsStyle,
  backgroundColor,
  hasLoadingText = false,
  counter = 0,
}: IButtonProps) => {
  const [preventDoubleClick, setPreventDoubleClick] = React.useState(false)

  function handlePress() {
    if (disabled || preventDoubleClick) {
      return
    }
    setPreventDoubleClick(true)
    onPress()
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreventDoubleClick(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [preventDoubleClick])

  return (
    <View style={[propsStyle]}>
      {counter > 0 ? (
        <View style={styles.counterContainer}>
          <PText style={styles.counterText} bold>
            {counter}
          </PText>
        </View>
      ) : (
        <></>
      )}

      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.5}
        onPress={handlePress}
        disabled={isLoading ? true : disabled}
        style={[
          styles.container,
          typeOptions[type].container,
          sizeOptions[size].container,
          disabled || preventDoubleClick ? typeOptions[type].disabled : null,
          rounded && typeOptions[type].short,
          backgroundColor && { backgroundColor: backgroundColor },
        ]}>
        <View>
          {isLoading ? (
            hasLoadingText ? (
              <View style={{ flexDirection: 'row' }}>
                <ActivityIndicator color={typeOptions[type].loader} />
                {title && (
                  <PText
                    bold
                    style={
                      !icon
                        ? [
                            styles.text,
                            typeOptions[type].text,
                            disabled && typeOptions[type].disabled,
                            sizeOptions[size].text,
                            { marginLeft: 12 },
                          ]
                        : [
                            styles.text,
                            typeOptions[type].text,
                            disabled && typeOptions[type].disabled,
                            { marginLeft: 10 },
                          ]
                    }>
                    {title}
                  </PText>
                )}
              </View>
            ) : (
              <ActivityIndicator color={typeOptions[type].loader} />
            )
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {icon ? (
                <VIcon
                  name={icon}
                  color={
                    disabled
                      ? typeOptions[type].icon.color
                      : typeOptions[type].icon.color
                  }
                  style={
                    disabled
                      ? [styles.icon, typeOptions[type].disable]
                      : [styles.icon, typeOptions[type].icon]
                  }
                  size={iconSize}
                />
              ) : null}
              {title ? (
                <View
                  style={[
                    { borderBottomWidth: size === 'sm' ? 1 : 2 },
                    type !== 'tertiary' && { borderBottomWidth: 0 },
                  ]}>
                  <PText
                    bold
                    style={
                      !icon
                        ? [
                            styles.text,
                            typeOptions[type].text,
                            disabled && typeOptions[type].disabled,
                            sizeOptions[size].text,
                            { marginLeft: 0 },
                          ]
                        : [
                            styles.text,
                            typeOptions[type].text,
                            disabled && typeOptions[type].disabled,
                            { marginLeft: 10 },
                          ]
                    }>
                    {title}
                  </PText>
                </View>
              ) : null}
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}
