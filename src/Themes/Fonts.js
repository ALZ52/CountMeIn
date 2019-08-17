import {Platform} from 'react-native'
import { sanFranciscoWeights, robotoWeights } from 'react-native-typography'

const type = {
  base: (Platform.OS === 'ios') ? sanFranciscoWeights.light : robotoWeights.light,
  bold: (Platform.OS === 'ios') ? sanFranciscoWeights.bold : robotoWeights.bold,
  semiBold: (Platform.OS === 'ios') ? sanFranciscoWeights.semibold : robotoWeights.semibold,
  medium: (Platform.OS === 'ios') ? sanFranciscoWeights.regular : robotoWeights.regular
}

const size = {
  h1: 38,
  h2: 34,
  h5: 20,
  regular: 17,
  medium: 14
}

const style = {
  h1: {
    ...type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h5: {
    ...type.base,
    fontSize: size.h5
  },
  normal: {
    ...type.base,
    fontSize: size.regular
  },
  description: {
    ...type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
