export type IButtonProps = {
  title?: string
  onPress?: () => void
  type?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quintenary'
  size?: 'lg' | 'md' | 'sm'
  rounded?: boolean
  isLoading?: boolean
  disabled?: boolean
  icon?: string
  styles?: any
  backgroundColor?: string
  hasLoadingText?: boolean
  iconSize?: number
  counter?: number
}
