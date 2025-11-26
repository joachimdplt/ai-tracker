import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles as styles } from '../../styles/global'

export default function OnboardingSlide2() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.screen}>
   
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Spot Winning Trades with Just a Photo.</Text>
      </View>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push('/onboarding/slide2' as any)}
        accessibilityRole="button"
        accessibilityLabel="Next"
      >
        <Text style={styles.primaryButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  )
}