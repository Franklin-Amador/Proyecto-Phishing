import { redirect } from 'next/navigation';

export default function Home() {
  // Realiza la redirección
  redirect('/login');
}