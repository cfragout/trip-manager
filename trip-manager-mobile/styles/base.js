import { PixelRatio } from 'react-native';

const colors = {
  orangePrimary: '#d57330',
  bluePrimary: '#3488d7',
  fontPrimaryColor: '#fff',
  headerFontColor: '#3488d7',
  orangePrimaryTransparency:  'rgba(213, 115, 48, 0.7)',
  bluePrimaryTransparency:  'rgba(51, 51, 51, 0.2)'
};

const fonts = {
  fontMiniSize: PixelRatio.getPixelSizeForLayoutSize(4),
  fontSmallSize: PixelRatio.getPixelSizeForLayoutSize(5),
  fontRegularSize: PixelRatio.getPixelSizeForLayoutSize(6),
  fontBigSize: PixelRatio.getPixelSizeForLayoutSize(7),
  fontBiggestSize: PixelRatio.getPixelSizeForLayoutSize(8),
  fontFamilyPrimary: 'montserrat-semibold',
  fontFamilySecondary: 'montserrat-medium'
};

export default baseStyles = {
  ...colors,
  ...fonts,
  // TEXTS
  text: {
    fontSize: fonts.fontRegularSize,
    color: colors.fontPrimaryColor,
    fontFamily: fonts.fontFamilyPrimary
  },
  title: {
    fontSize: fonts.fontBiggestSize,
    color: colors.fontPrimaryColor,
    fontFamily: fonts.fontFamilyPrimary
  },
  fontBase: {
    fontFamily: fonts.fontFamilyPrimary,
    color: colors.fontPrimaryColor
  },
  // CONTAINERS
  container: {
    flex: 1,
    backgroundColor: colors.bluePrimary
  },
  footerContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  }
}