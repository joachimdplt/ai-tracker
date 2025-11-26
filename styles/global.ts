import { StyleSheet } from 'react-native'
// styles/global.ts

export const colors = {
  background: "#0E1419",
  primary: '#41D88A',
  white: '#FFFFFF',
}

export const gradients = {
  box: {
    normal: ['#23272A', '#2B2F32'] as const,
    selected: ['#FFFFFF', '#FFFFFF'] as const,
  },
}

export const textColors = {
  box: {
    normal: '#FFFFFF',
    selected: '#000000',
  },
}


export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

contentWrapper: {
  flex: 1,
  paddingTop: 100, // ← Réduit un peu
  alignItems: 'center',
  justifyContent: 'center', // ← Ajoute ça pour centrer verticalement
},

  title: {
    color: colors.white,
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 28,
  },

  subtitle: {
    color: colors.white,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.8,
    marginTop: 10,
    width: 280,
  },

  gradientBox: {
    width: 334,
    height: 54,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    overflow: 'hidden',
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