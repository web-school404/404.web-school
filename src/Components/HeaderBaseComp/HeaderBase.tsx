import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Input, IconButton, Link, HStack } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const HeaderBase: React.FC = () => {
  const [showSubMenu, setShowSubMenu] = useState(true); // Состояние для отображения нижней панели
  const [lastScrollY, setLastScrollY] = useState(0); // Сохранение предыдущей позиции скролла
  const [isScrolled, setIsScrolled] = useState(false); // Состояние для отслеживания скролла

  // Обработчик скролла для скрытия/отображения нижней панели и изменения состояния хедера
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowSubMenu(false); // Скрыть нижнюю панель при скролле вниз
    } else {
      setShowSubMenu(true); // Показать панель при скролле вверх
    }
    setLastScrollY(window.scrollY); // Обновить последнее положение скролла
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Box
      bg={isScrolled ? "white" : "transparent"}
      shadow={isScrolled ? "md" : "none"}
      position="fixed"
      width="100%"
      top={0}
      zIndex={1000}
      transition="background 0.3s ease, box-shadow 0.3s ease"
    >
      {/* Top Section - Main Navigation */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
        py={isScrolled ? 2 : 4} // Сменить высоту padding при скролле
        px={6}
        bgGradient={isScrolled ? "linear(to-r, white, gray.100)" : "linear(to-r, purple.500, pink.300)"}
        color={isScrolled ? "gray.800" : "white"}
        transition="all 0.3s ease"
      >
        {/* Left Side - Logo */}
        <Box>
          <Text fontWeight="bold" fontSize={isScrolled ? "lg" : "2xl"} transition="font-size 0.3s ease">
            Ws Academy
          </Text>
        </Box>

        {/* Middle Section - Navigation Tabs */}
        <HStack spacing={6}>
          <Link fontWeight="bold" color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>DevOps</Link>
          <Link color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>Безоп</Link>
          <Link color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>Сети</Link>
          <Link color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>Воип</Link>
          <Link color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>Разработка</Link>
          <Link color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>QA</Link>
          <Link color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>Сервера</Link>
          <Link color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>Карьера</Link>
          <Link color={isScrolled ? "purple.600" : "white"} _hover={{ color: "yellow.300" }}>Академия</Link>
        </HStack>

        {/* Right Side - Search Button */}
        <HStack spacing={4}>
          <Input
            placeholder="Поиск"
            maxW="200px"
            bg={isScrolled ? "gray.100" : "whiteAlpha.800"}
            color="gray.800"
            borderColor="gray.300"
            _hover={{ borderColor: "whiteAlpha.600" }}
            _focus={{ borderColor: "yellow.300" }}
            transition="background 0.3s ease"
          />
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            variant="solid"
            colorScheme="yellow"
            bg="yellow.400"
            _hover={{ bg: "yellow.500" }}
          />
        </HStack>
      </Flex>

      {/* Bottom Section - Sub Navigation */}
      <Flex
        bg="gray.100"
        justifyContent="center"
        py={2}
        px={6}
        transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
        transform={showSubMenu ? 'translateY(0)' : 'translateY(100%)'} // Анимация появления/скрытия вниз
        opacity={showSubMenu ? 1 : 0} // Плавное исчезновение при скролле
      >
        <HStack spacing={8}>
          <Link fontWeight="medium" color="purple.600" _hover={{ color: "purple.800" }}>How to</Link>
          <Link color="gray.600" _hover={{ color: "purple.800" }}>Обзоры</Link>
          <Link color="gray.600" _hover={{ color: "purple.800" }}>Теория</Link>
          <Link color="gray.600" _hover={{ color: "purple.800" }}>Полезно</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default HeaderBase;
