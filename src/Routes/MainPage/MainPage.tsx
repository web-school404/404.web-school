import React from 'react';
import { Box, Heading, Text, Stack, SimpleGrid, Flex, Button, useColorModeValue, Image, AspectRatio } from '@chakra-ui/react'; 
import titleimg from '../../Assets/images/coursestart.gif';
import Header from '../../Components/Header/Header';
import CourseList from './CourseCard';
import AboutUsImg from '../../Assets/images/aboutus.gif';
import Englishimg from '../../Assets/images/2.jpg';
import Carierimg from '../../Assets/images/1.jpg';
import ProAiImg from '../../Assets/images/3.jpg';
import StudentGrades from './StudentGrades';
import Footer from '../../Components/Footer/Footer';

const MainPage: React.FC = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');
  const buttonBg = useColorModeValue('purple.500', 'blue.500');

  return (
    <Box>
      <Header />
      <Box
        bg={bg}
        py={10}
        px={5}
        textAlign="center"
        position="relative"
      >
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          align="center" 
          justify="center"
          maxW="1200px"
          mx="auto"
        >
          <Stack spacing={6} alignItems="flex-start" flex="1" mr={{ base: 0, md: 8 }}>
            <Heading 
              size="2xl" 
              color={color} 
              fontWeight="bold" 
              lineHeight="1.2"
            >
              Готовьтесь к Чемпионатам WorldSkills на нашем портале WS-Academy
            </Heading>
            <Text fontSize="lg" color={color} maxW="500px">
              Большое разнообразие курсов на все компетенции для подготовки к чемпионатам и повышения квалификации.
            </Text>
            <Button 
              size="lg" 
              bg={buttonBg} 
              color="white" 
              _hover={{ bg: useColorModeValue('purple.600', 'blue.600') }}
              _active={{ bg: useColorModeValue('purple.700', 'blue.700') }}
            >
              Выбрать направление
            </Button>
          </Stack>

          <Box flex="1" textAlign="center" ml={{ base: 0, md: 8 }}>
            <Image 
              src={titleimg}
              alt="Чемпионаты"
              maxW="100%"
              borderRadius="md"
            />
          </Box>
        </Flex>
      </Box>

      {/* Блок "О нас" перемещен выше */}
      <Box py={10} bg={useColorModeValue('gray.50', 'gray.800')} textAlign="center">
        <Heading as="h3" size="xl" mb={6} color={color}>
          О нас
        </Heading>
        <SimpleGrid 
          columns={{ base: 1, md: 2 }} 
          spacing={10} 
          maxW="1200px" 
          mx="auto" 
          alignItems="center"  // Центрируем изображение и текст по вертикали
        >
          {/* Image or Logo */}
          <Box textAlign="center">
            <Image
              src={AboutUsImg}
              alt="WS-Academy Logo"
              maxW="100%"
              borderRadius="md"
              mx="auto"
            />
          </Box>

          {/* About Us Text */}
          <Box textAlign={{ base: 'center', md: 'left' }} style={{ backgroundColor:"#fff" }}>
            <Text fontSize="lg" color={color} mb={4}>
              <strong>WS-Academy</strong> — это образовательная платформа, предоставляющая курсы и тренировки для подготовки к Чемпионатам WorldSkills.
              Мы работаем с экспертами в разных областях, чтобы наши студенты могли не только участвовать в чемпионатах, но и совершенствовать свои навыки
              для профессионального роста.
            </Text>
            <Text fontSize="lg" color={color} mb={4}>
              <strong>Наша миссия:</strong> помочь каждому студенту добиться успеха, используя передовые образовательные технологии и методики. Присоединяйтесь к нам,
              чтобы стать лучшими в своей области.
            </Text>
            <Text fontSize="lg" color={color}>
              <strong>Цель проекта:</strong> создать пространство для качественного обучения и профессионального развития, где каждый сможет найти ресурсы и поддержку 
              для достижения своих карьерных амбиций и стать востребованным специалистом на мировом уровне.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Блок с видео "Что такое WORLDSKILLS?" перемещен ниже */}
      <Box py={10} bg={useColorModeValue('gray.50', 'gray.800')} textAlign="center">
        <Heading as="h3" size="xl" mb={6} color={color}>
          Что такое WORLDSKILLS?
        </Heading>
        <Text fontSize="lg" color={color} mb={4} maxW="800px" mx="auto">
          <strong>WorldSkills</strong> — международное некоммерческое движение, целью которого является повышение престижа рабочих профессий и развитие навыков мастерства. 
          Для полного понимания предлагаем посмотреть видеоролик ниже. ПРИЯТНОГО ПРОСМОТРА!
        </Text>
        
        {/* Вставка видео через iframe */}
        <AspectRatio maxW="800px" ratio={16 / 9} mx="auto" mb={8}>
          <iframe
            src="https://www.youtube.com/embed/4hfPE-O1IeM"
            title="Что такое WorldSkills?"
            allowFullScreen
          />
        </AspectRatio>
      </Box>

      {/* Остальные блоки */}
      <Box>
        <CourseList />
      </Box>

      {/* Блок "Бонусы для студентов" */}
      <Box py={10} bg={useColorModeValue('white', 'gray.800')} textAlign="center">
        <Heading as="h3" size="xl" mb={8} color={color}>
          Бонусы для студентов
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="1200px" mx="auto">
          {/* Первая карточка */}
          <Box
            p={6}
            bg={useColorModeValue('purple.50', 'gray.700')}
            borderRadius="lg"
            boxShadow="xl"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
          >
            <Image 
              src={Englishimg} 
              alt="АНГЛИЙСКИЙ ДЛЯ IT" 
              borderRadius="lg"
              objectFit="cover"
              maxH="180px"
              w="100%"
              mb={4} 
              transition="0.3s ease"
              _hover={{ transform: 'scale(1.1)' }}
            />
            <Heading as="h4" size="md" mb={4} color="purple.700">
              АНГЛИЙСКИЙ ДЛЯ IT
            </Heading>
            <Text color={color}>
              Мини-курс с ключевыми фразами для успешного взаимодействия с зарубежными коллегами.
            </Text>
            <Button 
              mt={4} 
              colorScheme="purple" 
              bgGradient="linear(to-r, purple.500, blue.500)"
              _hover={{ bgGradient: 'linear(to-r, purple.600, blue.600)' }}
            >
              Подробнее
            </Button>
          </Box>

          {/* Вторая карточка */}
          <Box
            p={6}
            bg={useColorModeValue('purple.50', 'gray.700')}
            borderRadius="lg"
            boxShadow="xl"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
          >
            <Image 
              src={Carierimg} 
              alt="КАРЬЕРНЫЙ ИНТЕНСИВ" 
              borderRadius="lg"
              objectFit="cover"
              maxH="180px"
              w="100%"
              mb={4} 
              transition="0.3s ease"
              _hover={{ transform: 'scale(1.1)' }}
            />
            <Heading as="h4" size="md" mb={4} color="purple.700">
              КАРЬЕРНЫЙ ИНТЕНСИВ
            </Heading>
            <Text color={color}>
              Бесплатный интенсив по карьерному росту для уверенного старта в профессии.
            </Text>
            <Button 
              mt={4} 
              colorScheme="purple" 
              bgGradient="linear(to-r, purple.500, blue.500)"
              _hover={{ bgGradient: 'linear(to-r, purple.600, blue.600)' }}
            >
              Подробнее
            </Button>
          </Box>

          {/* Третья карточка */}
          <Box
            p={6}
            bg={useColorModeValue('purple.50', 'gray.700')}
            borderRadius="lg"
            boxShadow="xl"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
          >
            <Image 
              src={ProAiImg} 
              alt="Основы AI и Data Science" 
              borderRadius="lg"
              objectFit="cover"
              maxH="180px"
              w="100%"
              mb={4} 
              transition="0.3s ease"
              _hover={{ transform: 'scale(1.1)' }}
            />
            <Heading as="h4" size="md" mb={4} color="purple.700">
              Основы AI и Data Science
            </Heading>
            <Text color={color}>
              Курс для начинающих специалистов в области искусственного интеллекта и анализа данных.
            </Text>
            <Button 
              mt={4} 
              colorScheme="purple" 
              bgGradient="linear(to-r, purple.500, blue.500)"
              _hover={{ bgGradient: 'linear(to-r, purple.600, blue.600)' }}
            >
              Подробнее
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      
      {/* Блок "Оценка студентов" */}
      <StudentGrades />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainPage;
