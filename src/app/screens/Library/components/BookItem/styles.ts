import { StyleSheet } from 'react-native';
import { Palette } from '@constants/styles/styles'

export default StyleSheet.create({
  author: {
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    backgroundColor: Palette.White,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 16,
    overflow: 'hidden',
    padding: 16,
  },
  image: {
    width: 60,
    height: 100
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
