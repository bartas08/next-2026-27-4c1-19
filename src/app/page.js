import Link from 'next/link';
import Counter from '@/components/Counter';
import CounterWithLog from '@/components/CounterWithLog';
import GreetingForm from '@/components/GreetingForm';
import TickTimer from '@/components/TickTimer';
import TimerToggle from '@/components/TimerToggle'
import ContextCounterDisplay from '@/components/ContextCounterDisplay';
import ContextCounterButton from '@/components/ContextCounterButton'




export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <div><Link href="/about">Przejdź do strony O nas</Link></div>
      <div><Link href="/style-guide"> Zobacz Style Guide</Link></div>
      <div><Link href="/szukaj"> Szukaj</Link></div>
      <Counter ></Counter>
      <GreetingForm></GreetingForm>
      <CounterWithLog></CounterWithLog>
      <TimerToggle></TimerToggle>
      <TickTimer></TickTimer>
      <ContextCounterDisplay></ContextCounterDisplay>
      <ContextCounterButton></ContextCounterButton>
    </main>
    
  );
}