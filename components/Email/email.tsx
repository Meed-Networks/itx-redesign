import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';
import { Preview } from '@react-email/preview';
import { Head } from '@react-email/head';
import { Text } from '@react-email/text';
import { Heading } from '@react-email/heading';

export function EmailContainer(props:any) {
  const { name, email, message } = props;

  return (
    <Html lang="en">
     <Preview>{message.substring(0,12)}</Preview>;
     <Head>
          <title>You have a new message</title>
     </Head>
     <Heading as="h2">{name} sent a message</Heading>
     <Heading as="h6">{email}</Heading>
     <Text>{message}</Text>
    </Html>
  );
}

export default EmailContainer;