import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/global'

export default function OnboardingSlide1() {
  const router = useRouter()

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={globalStyles.contentWrapper}>
        <Text style={globalStyles.title}>
          Spot Winning Trades with Just a Photo.
        </Text>
      </View>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => router.push('/onboarding/slide2')}
      >
        <Text style={globalStyles.primaryButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  )
}