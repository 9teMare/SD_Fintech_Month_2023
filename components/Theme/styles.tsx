import { Text, Flex, Box, Heading, Image, chakra } from '@chakra-ui/react';
import MosaicEffect from '../../public/MosaicEffect.png';
import ThemeBg from '../../public/ThemeBg.png';
import { url } from 'inspector';

export const ThemePageContainer = chakra(Flex, {
  baseStyle: {
    position: 'relative',
    minH: 'calc(100vh - 100px)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    // backgroundImage: `url(${MosaicEffect.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#20345B',
  },
});

export const HeadingContainer = chakra(Flex, {
  baseStyle: {
    position: 'absolute',
    top: '20px',
  },
});

export const ThemeHeading = chakra(Heading, {
  baseStyle: {
    fontSize: { base: '4xl', md: '4xl' },
  },
});

export const TextBox = chakra(Box, {
  baseStyle: {
    display: 'flex',
    boxShadow: 'xl',
    flexDirection: 'column',
    borderRadius: '20',
    alignItems: 'center',
    justifyContent: 'center',
    height: { sm: '24vh', md: '38vh', xl: '38vh' },
    width: '100%',
    px: { sm: '10px', md: '60px' },
    bgColor: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'justify',
    backgroundImage: `url(${ThemeBg.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
});

export const SubHeading = chakra(Box, {
  baseStyle: {
    fontSize: { base: 'xs', md: 'xs', lg: 'md' },
    color: 'brand.primary',
    m: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export const MainHeading = chakra(Box, {
  baseStyle: {
    fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
    color: 'brand.primary',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export const Centralised = chakra(Flex, {
  baseStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: { base: '10%', md: '5%', lg: '4%' },
    width: '100%',
  },
});
