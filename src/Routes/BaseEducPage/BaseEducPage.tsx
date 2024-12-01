import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid, Image, Stack, Text } from '@chakra-ui/react';
import HeaderBase from '../../Components/HeaderBaseComp/HeaderBase';
import Banner from '../../Components/BannerBaseComp/Banner';
import Footer from '../../Components/Footer/Footer';

const articles = [
  {
    title: 'Туториал SQL по группировке: объясняем команды Count, Sum, Average и Having',
    date: '21.09.2024',
    imageUrl: 'https://example.com/sql-tutorial.png',
    category: 'Лучшее',
  },
  {
    title: 'Профессия фронтенд-разработчик: что делает, сколько зарабатывает и где набирать опыт',
    date: '23.11.2023',
    imageUrl: 'https://example.com/frontend-dev.png',
    category: 'Лучшее',
  },
  {
    title: 'Страшно секретно: чем занимается специалист по информационной безопасности',
    date: '21.12.2023',
    imageUrl: 'https://example.com/infosec-specialist.png',
    category: 'Видео',
  },
  {
    title: 'Кто такой DevOps-инженер, чем он занимается в мире IT',
    date: '19.01.2024',
    imageUrl: 'https://example.com/devops-engineer.png',
    category: 'Видео',
  },
];

const ArticleCard = ({ title, date, imageUrl }: { title: string; date: string; imageUrl?: string }) => (
  <Box
    p={5}
    shadow="lg"
    borderWidth="1px"
    borderRadius="lg"
    bg="white"
    transition="transform 0.3s ease"
    _hover={{ transform: 'scale(1.05)' }}
  >
    {imageUrl && (
      <Image src={imageUrl} alt={title} borderRadius="md" mb={4} maxHeight="150px" objectFit="cover" />
    )}
    <Stack spacing={3}>
      <Text fontWeight="bold" fontSize="lg" color="purple.700">
        {title}
      </Text>
      <Text color="gray.500" fontSize="sm">
        {date}
      </Text>
    </Stack>
  </Box>
);

const BaseKnowledgePage = () => {
  const bestArticles = articles.filter((article) => article.category === 'Лучшее');
  const videoArticles = articles.filter((article) => article.category === 'Видео');

  return (
    <React.Fragment>
      <HeaderBase />
      <Box
        p={6}
        bgGradient="linear(to-r, purple.500, pink.300)"
        minHeight="100vh"
        color="white"
        pt={{ base: '80px', md: '100px' }} // Отступ для учета фиксированного хедера
      >
        <Tabs variant="soft-rounded" colorScheme="purple" isFitted>
          <TabList mb={6} bg="whiteAlpha.900" borderRadius="lg" p={2}>
            <Tab _selected={{ color: 'white', bg: 'purple.500' }} fontSize="lg">
              Лучшее
            </Tab>
            <Tab _selected={{ color: 'white', bg: 'purple.500' }} fontSize="lg">
              Видео
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {bestArticles.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {videoArticles.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Banner />
      <Footer />
    </React.Fragment>
  );
};

export default BaseKnowledgePage;
