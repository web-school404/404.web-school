import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useColorModeValue,
  Heading,
  VStack,
  Text,
  Link,
  Image,
  Flex,
} from '@chakra-ui/react';
import signupimg from '../../Assets/images/4.jpeg';
import { Link as RouterLink } from 'react-router-dom';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const bg = useColorModeValue('gray.50', 'gray.800');
  const formBg = useColorModeValue('white', 'gray.700');
  const buttonBg = useColorModeValue('purple.500', 'blue.500');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
    } else {
      setError('');
      // Здесь можно добавить логику для отправки данных на сервер
      console.log('Name:', name, 'Email:', email, 'Password:', password);
    }
  };

  return (
    <Box bg={bg} minH="100vh" display="flex" alignItems="center" justifyContent="center" p={6}>
      <Flex
        bg={formBg}
        borderRadius="md"
        boxShadow="lg"
        w={{ base: '100%', md: '900px' }}
        overflow="hidden"
      >
        {/* Левая часть с изображением */}
        <Box flex="1" display={{ base: 'none', md: 'block' }}>
          <Image
            src={signupimg}
            alt="Регистрация"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>

        {/* Правая часть с формой */}
        <Box flex="1" p={8}>
          <VStack
            as="form"
            spacing={4}
            onSubmit={handleSubmit}
            w="full"
            align="flex-start"
          >
            <Heading as="h2" size="lg" mb={6} textAlign="center" w="full">
              Регистрация
            </Heading>

            <FormControl isRequired>
              <FormLabel>Имя</FormLabel>
              <Input
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                focusBorderColor={buttonBg}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor={buttonBg}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Пароль</FormLabel>
              <Input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor={buttonBg}
              />
            </FormControl>

            <FormControl isRequired isInvalid={error !== ''}>
              <FormLabel>Подтвердите пароль</FormLabel>
              <Input
                type="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                focusBorderColor={buttonBg}
              />
              {error && <FormErrorMessage>{error}</FormErrorMessage>}
            </FormControl>

            <Button type="submit" bg={buttonBg} color="white" _hover={{ bg: 'blue.600' }} w="full">
              Зарегистрироваться
            </Button>

            <Text fontSize="sm" textAlign="center" w="full">
              Уже есть аккаунт?{' '}
              <Link as={RouterLink} to="/login" color={buttonBg}>
                Войти
              </Link>
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;
