import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Center,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Logo from '../../Assets/images/LogoWS.svg';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('RU');

  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');
  const buttonBg = useColorModeValue('purple.500', 'blue.500');
  const hoverColor = 'darkblue';

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
    onClose();
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    console.log('Selected Language:', lang);
  };

  return (
    <Box bg={bg} px={4} boxShadow="md" position="sticky" top="0" zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        
        <Box fontWeight="bold" fontSize="xl" color={color}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none', transform: 'scale(1.1)' }} transition="0.3s">
            <img src={Logo} alt="Logo" style={{ width: '120px' }} />
          </Link>
        </Box>

        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Link 
            as={RouterLink} 
            to="/main" 
            fontSize="lg" 
            fontWeight="medium" 
            color={color} 
            _hover={{ color: hoverColor }} 
            transition="0.3s"
          >
            Главная
          </Link>
          <Link 
            as={RouterLink} 
            to="/events" 
            fontSize="lg" 
            fontWeight="medium" 
            color={color} 
            _hover={{ color: hoverColor }} 
            transition="0.3s"
          >
            Чемпионаты
          </Link>
          <Link 
            as={RouterLink} 
            to="/courses" 
            fontSize="lg" 
            fontWeight="medium" 
            color={color} 
            _hover={{ color: hoverColor }} 
            transition="0.3s"
          >
            Обучение
          </Link>
          <Link 
            as={RouterLink} 
            to="/base" 
            fontSize="lg" 
            fontWeight="medium" 
            color={color} 
            _hover={{ color: hoverColor }} 
            transition="0.3s"
          >
            База знаний
          </Link>
        </HStack>

        <HStack spacing={4}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {language}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => changeLanguage('RU')}>RU</MenuItem>
              <MenuItem onClick={() => changeLanguage('Қз')}>KZ</MenuItem>
              <MenuItem onClick={() => changeLanguage('EN')}>EN</MenuItem>
            </MenuList>
          </Menu>

          {/* Login button */}
          <Button bg={buttonBg} color="white" _hover={{ bg: 'blue.600' }} onClick={onOpen}>
            Вход
          </Button>
        </HStack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Center>
                Вход в аккаунт WS-Academy
              </Center>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Логин или Email"
                mb={4}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outline"
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                focusBorderColor={useColorModeValue('purple.500', 'blue.500')}
             
                />
                <Input
                  placeholder="Пароль"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outline"
                  borderColor={useColorModeValue('gray.300', 'gray.600')}
                  focusBorderColor={useColorModeValue('purple.500', 'blue.500')}
                />
              </ModalBody>
  
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleLogin}>
                  Войти
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Отмена
                </Button>
              </ModalFooter>
              
              <Box p={4} textAlign="center">
                <Text fontSize="sm">
                  <Link as={RouterLink} to="/signup" color={buttonBg}>
                    У меня нет аккаунта?{' '}
                  </Link>
                </Text>
              </Box>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
    );
  };
  
  export default Header;
  