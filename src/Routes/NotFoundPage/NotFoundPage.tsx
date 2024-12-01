import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const NotFoundPage: React.FC = () => {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Heading
        display="inline-block"
        as="h1"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="xl" mt={3} mb={2}>
        Страница не найдена
      </Text>
      <Text color={'gray.500'}>Запрашиваемая страница не существует.</Text>
    </Box>
  );
};

export default NotFoundPage;
