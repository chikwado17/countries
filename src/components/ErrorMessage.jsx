import {
  MessageHeader,
  MessageContent,
  Message,
  Icon,
} from "semantic-ui-react";

const ErrorMessage = ({ error }) => {
  return (
    <Message icon>
      <Icon name="circle notched" loading />
      <MessageContent>
        <MessageHeader>Just one second</MessageHeader>
        {error}
      </MessageContent>
    </Message>
  );
};

export default ErrorMessage;
