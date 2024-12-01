import React, { useState, useEffect } from 'react';
import { Box, Text, Button, Stack, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaClock, FaArrowRight } from 'react-icons/fa';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date(`2024-09-30T23:59:59`) - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Banner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const gradientColor = useColorModeValue("linear(to-r, green.200, yellow.300)", "linear(to-r, teal.500, blue.500)");

  return (
    <Box
      w="100%"
      bgGradient={gradientColor}
      py={6}
      px={8}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="10"
      boxShadow="lg"
    >
      <Flex justifyContent="space-between" alignItems="center">
        {/* Left Side: Discount and Countdown */}
        <Stack spacing={2}>
          <Text fontWeight="bold" fontSize="3xl" color="black" letterSpacing="wider">
            🍂 ОСЕННИЕ СКИДКИ
          </Text>
          <Flex alignItems="center" color="gray.700">
            <Icon as={FaClock} mr={2} />
            <Text fontSize="lg" fontWeight="medium">
              До конца акции: {timeLeft.days} дн {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </Text>
          </Flex>
        </Stack>

        {/* Right Side: CTA Button */}
        <Button
          size="lg"
          bg="black"
          color="white"
          _hover={{ bg: 'gray.700', transform: 'scale(1.05)' }}
          rightIcon={<FaArrowRight />}
          fontSize="lg"
        >
          Выбрать курс
        </Button>
      </Flex>
    </Box>
  );
};

export default Banner;
