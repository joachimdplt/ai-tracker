import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function OnboardingSlide1() {

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0E1419',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  topNav: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 10,
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 20,
  },
  contentWrapper: {
    width: 277,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '900',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 28,
  },
  primaryButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    width: 357,
    height: 54,
    borderRadius: 19,
    backgroundColor: '#41D88A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
})

