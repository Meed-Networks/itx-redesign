import { IEmail } from '@/app/api/email/route';
import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import * as React from 'react';

export default function MessageEmail(data:IEmail) {
  return (
    <Html>
      <Button
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: '#000', color: '#fff' }}
      >
        Hello {data.name} {data.email}
      </Button>
      <h2>{data.message}</h2>
    </Html>
  );
}
