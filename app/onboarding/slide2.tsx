import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/global'
import GradientBox from '../components/GradientBox'

export default function OnboardingSlide2() {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={globalStyles.contentWrapper}>
        <Text style={globalStyles.title}>
          Analyze Market Signals Automatically.
        </Text>

        <Text style={globalStyles.subtitle}>
          We will tailor your insights to where you play
        </Text>

        <View style={{ marginTop: 40 }}>

          <GradientBox
            value="Value 1"
            style={globalStyles.gradientBox}
            selected={selected === "Value 1"}
            onPress={() => setSelected("Value 1")}
          />

          <GradientBox
            value="Value 2"
            style={globalStyles.gradientBox}
            selected={selected === "Value 2"}
            onPress={() => setSelected("Value 2")}
          />

          <GradientBox
            value="Value 3"
            style={globalStyles.gradientBox}
            selected={selected === "Value 3"}
            onPress={() => setSelected("Value 3")}
          />

        </View>
      </View>

      <Pressable
        style={[
          globalStyles.primaryButton,
          selected === null && { opacity: 0.3 }
        ]}
        onPress={() => {
          if (selected !== null) {
            router.push('/onboarding/slide3')
          }
        }}
      >
        <Text style={globalStyles.primaryButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  )
}