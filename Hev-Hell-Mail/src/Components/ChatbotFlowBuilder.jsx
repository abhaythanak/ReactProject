import { useState } from 'react';

const ChatbotFlowBuilder = () => {
  const [flow, setFlow] = useState([]);

  const addMessage = (message) => {
    setFlow((prevFlow) => [...prevFlow, message]);
  };

  const deleteMessage = (index) => {
    setFlow((prevFlow) => {
      const updatedFlow = [...prevFlow];
      updatedFlow.splice(index, 1);
      return updatedFlow;
    });
  };

  return (
    <div>
      <h2>Chatbot Flow Builder</h2>

      <div>
        <button onClick={() => addMessage('Hello!')}>Add Hello Message</button>
        <button onClick={() => addMessage('How are you?')}>Add How are you? Message</button>
        <button onClick={() => addMessage('Goodbye!')}>Add Goodbye Message</button>
      </div>

      <h3>Flow:</h3>
      {flow.map((message, index) => (
        <div key={index}>
          <span>{message}</span>
          <button onClick={() => deleteMessage(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ChatbotFlowBuilder;
