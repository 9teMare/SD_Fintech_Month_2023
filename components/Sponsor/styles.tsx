import { Box, chakra } from '@chakra-ui/react';

export const SponsorWrapper = chakra(Box, {
  baseStyle: {
    width: '100vw',
    minHeight: 'calc(100vh - 160px)',
    justifyContent: 'center',
    bgImage: "url('/Background/sponsor-background.png')",
    bgSize: 'cover',
    bgPosition: 'center',
  },
});

export const HeaderContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '30px',
    justifyContent: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
  },
});
