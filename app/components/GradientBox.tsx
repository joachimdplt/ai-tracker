import { LinearGradient } from 'expo-linear-gradient'
import { StyleProp, Text, TouchableOpacity, ViewProps, ViewStyle } from 'react-native'
import { gradients, textColors } from '../../styles/global'

interface GradientBoxProps extends ViewProps {
  value: string
  style?: StyleProp<ViewStyle>
  selected?: boolean
  onPress?: () => void
}

export default function GradientBox({ value, style, selected, onPress }: GradientBoxProps) {

  const gradientColors = selected
    ? gradients.box.selected
    : gradients.box.normal

  const color = selected
    ? textColors.box.selected
    : textColors.box.normal

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={style}
      >
        <Text style={{ color, fontWeight: '600' }}>{value}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}