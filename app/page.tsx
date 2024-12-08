import { redirect } from 'next/navigation';

export const runtime = "edge";

export default function Home() {
  // Realiza la redirección
  redirect('/login');
}