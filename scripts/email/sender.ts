/**
 * email/sender.ts — provider layer for sending emails.
 *
 * Currently backed by Resend; swapping providers only requires changing this file.
 */

import { Resend } from 'resend';

export interface SendEmailOptions {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ apiKey, from, to, subject, html }: SendEmailOptions): Promise<void> {
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({ from, to, subject, html });
  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
}
