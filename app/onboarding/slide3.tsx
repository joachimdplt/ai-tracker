import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/global'
import GradientBox from '../components/GradientBox'

export default function OnboardingSlide3() {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  const items = ["Stocks", "Crypto", "Futures", "Forex"]

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={globalStyles.contentWrapper}>

        <Text style={globalStyles.title}>
          Which market do you focus on?
        </Text>

        <Text style={globalStyles.subtitle}>
          This will help us customize your insights.
        </Text>

        <View style={{ marginTop: 40 }}>
          {items.map((item) => (
            <GradientBox
              key={item}
              value={item}
              style={globalStyles.gradientBox}
              selected={selected === item}
              onPress={() => setSelected(item)}
            />
          ))}
        </View>

      </View>

      <Pressable
        style={[
          globalStyles.primaryButton,
          selected === null && { opacity: 0.3 }
        ]}
        onPress={() => {
          if (selected) router.push('/onboarding/slide4')
        }}
      >
        <Text style={globalStyles.primaryButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  )
}