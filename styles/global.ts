import { StyleSheet } from 'react-native'

export const colors = {
  background: "#0E1419",
  primary: '#41D88A',
  white: '#FFFFFF',
}

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  contentWrapper: {
    width: 277,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '900',
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
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
})