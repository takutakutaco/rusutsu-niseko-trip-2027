import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '雪山しおり｜ルスツ・ニセコ・札幌 2027',
  description: '2027年2月11日〜14日の北海道スキー・スノーボード旅行しおり。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
