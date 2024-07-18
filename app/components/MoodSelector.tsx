import React from 'react';
import { HStack, Button, Text } from '@chakra-ui/react';

interface MoodSelectorProps {
  onMoodSelect: (mood: string) => void;
}

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😴', label: 'Tired' },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodSelect }) => {
  return (
    <div>
      <Text mb={2}>How are you feeling today?</Text>
      <HStack spacing={4}>
        {moods.map((mood) => (
          <Button
            key={mood.label}
            onClick={() => onMoodSelect(mood.label)}
            fontSize="2xl"
            variant="outline"
            p={4}
          >
            {mood.emoji}
          </Button>
        ))}
      </HStack>
    </div>
  );
};

export default MoodSelector;