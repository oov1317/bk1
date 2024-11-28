import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elliott Service 360</title>
      </Head>
      <main>
        <h1>Welcome to Elliott Service 360</h1>
        <p>Your one-stop solution for service management.</p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Elliott Service 360</p>
      </footer>
    </div>
  );
}