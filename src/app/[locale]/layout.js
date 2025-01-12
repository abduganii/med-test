import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Layout from '@/layout/layout';
import "./globals.css";


export default async function RootLayout({ children, params }) {
  const { locale } = await params
  if (!routing.locales.includes(locale )) {
    notFound();
  }
 
  const messages = await getMessages();
  return (
    <html lang={locale}>
    <body>
      <NextIntlClientProvider messages={messages}>
        <Layout>
        {children}
        </Layout>
      </NextIntlClientProvider>
    </body>
  </html>
  );
}
