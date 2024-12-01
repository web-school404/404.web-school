import React from 'react';
import { Box, Flex, Text, Link, SimpleGrid, Stack, Icon } from '@chakra-ui/react';
import { FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.900" color="gray.300" py={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        wrap="wrap"
      >
        {/* Columns Section */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mb={6} w="full">
          <Stack spacing={2}>
            <Text fontSize="lg" fontWeight="bold">Направления</Text>
            <hr></hr>
            <Link>Все направления</Link>
            <Link>Программирование</Link>
            <Link>Сети</Link>
            <Link>Кибербезопасность</Link>
            <Link>DevOps</Link>
          </Stack>

          <Stack spacing={2}>
            <Text fontSize="lg" fontWeight="bold">Сотрудничество</Text>
            <hr></hr>
            <Link>Контакты</Link>
            <Link>Корпоративное обучение</Link>
            <Link>Карьера</Link>
            <Link>Английский для IT-специалистов</Link>
            <Link>Стать автором</Link>
          </Stack>

          <Stack spacing={2}>
            <Text fontSize="lg" fontWeight="bold">Проекты</Text>
            <hr></hr>
            <Link>Академия IT образования</Link>
            <Link>Профориентация на базе AI</Link>
            <Link>Курс в подарок</Link>
            <Link>Проверка сертификатов</Link>
          </Stack>

          <Stack spacing={2}>
            <Text fontSize="lg" fontWeight="bold">Информация</Text>
            <hr></hr>
            <Link>Сведения об организации</Link>
            <Link>Политика конфиденциальности</Link>
            <Link>Оплата</Link>
            <Link>Отзывы</Link>
          </Stack>
        </SimpleGrid>

        {/* Contact Info */}
        <Flex direction="column" align={{ base: 'center', md: 'start' }}>
          <Text fontSize="md">
            8 (747) 722 12 37 — Контактный центр
          </Text>
          <Text fontSize="md">
            8 (708) 311 34-77 — Служба заботы о студентах
          </Text>
          <Text mt={2} fontSize="sm">г. Алматы, пр-т Сейфуллина, д. 449А, стр. 3</Text>
          <Text fontSize="sm" mb={4}>ИНН 7721855710 | ОГРН 5147746475289</Text>

          {/* Social Icons */}
          <Flex mt={2} align="center">
            <Link href="https://telegram.org" isExternal>
              <Icon as={FaTelegram} boxSize={6} mx={2} color="gray.300" />
            </Link>
            <Link href="https://youtube.com" isExternal>
              <Icon as={FaYoutube} boxSize={6} mx={2} color="gray.300" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={6} mx={2} color="gray.300" />
            </Link>
          </Flex>
        </Flex>
      </Flex>

      {/* Copyright Section */}
      <Flex mt={10} justify="center" textAlign="center" direction="column">
        <Text fontSize="sm">© WS Academy, 2024</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
