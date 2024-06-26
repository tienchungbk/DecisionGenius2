import React, { useState, useRef } from 'react';
import { Box, Button, Textarea, Flex, Text, Spinner } from '@chakra-ui/react';
import { URL } from '../constant';

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: 'AI', message: 'Xin chào ! Tôi có thể giúp gì cho bạn ?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { role: 'User', message: input };
      setMessages((prevMessages) => [...prevMessages, userMessage, { role: 'AI', message: '...' }]);
      setInput('');
      setLoading(true);
      scrollToBottom();

      try {
        const response = await fetch(`${URL}/chatbot/chatbot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: 'user1', user_message: input }),
        });
        const data = await response.json();
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = { role: 'AI', message: data.message };
          return updatedMessages;
        });
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
        scrollToBottom();
      }
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box width="500px" mx="auto" textAlign="center" display="flex" flexDirection="column" height="500px">
      <Box
        bg="white"
        borderRadius="md"
        shadow="md"
        p={4}
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        style={{ overflowY: 'auto', height: '400px' }} 
      >
        <Box className="chat-messages" style={{ overflowY: 'auto', height: '100%' }}>
          {messages.map((msg, index) => (
            <Flex key={index} justify={msg.role === 'AI' ? 'flex-start' : 'flex-end'} mb={2}>
              <Box
                bg={msg.role === 'AI' ? 'gray.200' : 'blue.400'}
                color={msg.role === 'AI' ? 'gray.700' : 'white'}
                p={2}
                borderRadius="lg"
                maxW="80%"
              >
                {msg.message}
              </Box>
            </Flex>
          ))}
          {loading && (
            <Flex justify="flex-start" mb={2}>
              <Spinner size="sm" />
            </Flex>
          )}
          <div ref={chatEndRef} />
        </Box>
        <Flex mt={4} as="form" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tin nhắn của bạn..."
            mr={2}
          />
          <Button onClick={sendMessage} colorScheme="teal" isDisabled={loading}>Gửi</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Chat;