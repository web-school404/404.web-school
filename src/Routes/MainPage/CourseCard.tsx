import React from 'react';
import { Box, Heading, Text, Stack, SimpleGrid, Button, Center } from '@chakra-ui/react';

const courses = [
  {
    title: 'Сетевые технологии',
    description: 'Учим с нуля сетевых инженеров и DevOPS специалистов',
    badgeColor: 'blue',
  },
  {
    title: 'Python',
    description: 'Стань разработчиком на одном из самых популярных языков программирования',
    badgeColor: 'green',
  },
  {
    title: 'DevOps',
    description: 'Научитесь использовать инструменты и методы DevOps',
    badgeColor: 'purple',
  },
  {
    title: 'Java',
    description: 'Освойте backend-разработку на Java, фреймворки Spring и Maven, работу с БД и API',
    badgeColor: 'orange',
  },
  {
    title: 'Linux',
    description: 'Пополните скиллсет умением работать с операционными системами Linux',
    badgeColor: 'teal',
  },
  {
    title: 'Кибербезопасность',
    description: 'Изучи хакерский майндсет и научись защищать свою инфраструктуру',
    badgeColor: 'cyan',
  },
  {
    title: 'Frontend',
    description: 'Изучите основы HTML, CSS и JavaScript для создания веб-сайтов',
    badgeColor: 'pink',
  },
];

const CourseList: React.FC = () => {
  return (
    <Box p={8} bgGradient="linear(to-br, purple.50, blue.50)" minH="100vh">
      <Heading as="h2" size="xl" mb={10} textAlign="center" color="purple.700">
        Популярные программы
      </Heading>
      <Text mb={8} textAlign="center" fontSize="lg" color="gray.600">
        Попробуйте наши самые популярные курсы, которые получили самые высокие оценки от студентов
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {courses.map((course, index) => (
          <Box
            key={index}
            p={10}
            borderWidth="2px"
            borderRadius="25px"
            bgGradient="linear(to-br, white, purple.50)"
            boxShadow="2xl"
            transition="transform 0.4s, box-shadow 0.4s"
            _hover={{
              transform: 'scale(1.12)',
              boxShadow: '3xl',
              bgGradient: 'linear(to-br, white, purple.200)',
            }}
            _active={{
              transform: 'scale(1.05)',
              boxShadow: 'lg',
              bgGradient: 'linear(to-br, white, purple.300)',
            }}
            _focus={{ outline: 'none', boxShadow: 'outline' }}
          >
            <Stack spacing={6}>
              <Heading size="lg" color="purple.800">
                {course.title}
              </Heading>
              <Text color="gray.700" fontSize="md" noOfLines={4}>
                {course.description}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <Center mt={16}>
        <Button
          size="lg"
          colorScheme="purple"
          bgGradient="linear(to-r, purple.400, blue.500)"
          _hover={{
            bgGradient: 'linear(to-r, purple.500, blue.600)',
            boxShadow: 'xl',
          }}
          px={12}
          py={7}
        >
          Больше программ
        </Button>
      </Center>
    </Box>
  );
};

export default CourseList;
