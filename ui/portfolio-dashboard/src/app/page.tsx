import Dashboard from './components/dashboard';

export default function Home() {
  return (
    <>
      <h1>Wealthier</h1>
      <Dashboard userStocks={["AAPL", "GOOG"]}/>
    </>
  )
}
