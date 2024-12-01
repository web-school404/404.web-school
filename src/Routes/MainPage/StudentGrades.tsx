import React from 'react';
import { Box, Heading, Text, SimpleGrid, Avatar, Stack, HStack, useColorModeValue } from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Иван Иванов',
    course: 'Python',
    rating: 5,
    avatar: 'https://bit.ly/dan-abramov',
    feedback: 'Отличный курс! Преподаватели очень понятно объясняют материал.',
  },
  {
    name: 'Мария Смирнова',
    course: 'Frontend',
    rating: 4,
    avatar: 'https://bit.ly/kent-c-dodds',
    feedback: 'Курс был сложный, но полезный! Я улучшила свои навыки в HTML и CSS.',
  },
  {
    name: 'Алексей Кузнецов',
    course: 'DevOps',
    rating: 5,
    avatar: 'https://bit.ly/ryan-florence',
    feedback: 'Мне понравился практический подход на курсе. Теперь я уверенно использую Docker и Kubernetes.',
  },
  {
    name: 'Екатерина Петрова',
    course: 'Кибербезопасность',
    rating: 4,
    avatar: 'https://bit.ly/prosper-baba',
    feedback: 'Очень информативный курс! Я теперь лучше понимаю, как защитить свою инфраструктуру.',
  },
  {
    name: 'Дмитрий Сидоров',
    course: 'Linux',
    rating: 5,
    avatar: 'https://bit.ly/code-beast',
    feedback: 'После курса Linux я стал уверенно работать с серверами. Прекрасный опыт!',
  },
  {
    name: 'Ольга Орлова',
    course: 'Java',
    rating: 5,
    avatar: 'https://bit.ly/tioluwani-kolawole',
    feedback: 'Интересный и увлекательный курс. Понравилось, как объяснялись сложные концепции Java.',
  },
];

const StudentGrades: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('black', 'white');
  const shadowHover = useColorModeValue('2xl', 'dark-lg');

  return (
    <Box
      py={16}
      px={8}
      bgGradient="linear(to-br, purple.50, blue.50)" minH="100vh"
      textAlign="center"
      borderRadius="xl"
      boxShadow="xl"
    >
      <Heading as="h3" size="xl" mb={12} color="black">
        Что говорят наши студенты
      </Heading>

      <SimpleGrid>
        <Heading>Скоро...</Heading>
      </SimpleGrid>
    </Box>
  );
};

export default StudentGrades;
