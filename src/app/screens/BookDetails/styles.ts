import { StyleSheet } from 'react-native';
import { Palette } from '@constants/styles/styles'

export default StyleSheet.create({
  author: {
    fontSize: 20,
    marginTop: 4,
  },
  bookInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    margin: 16,
  },
  detailsContainer: {
    backgroundColor: Palette.White,
    borderRadius: 8,
    padding: 16,
  },
  extraInfoContainer: {
    marginTop: 16,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 200
  },
  info: {
    fontSize: 20,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  infoSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  }
});
