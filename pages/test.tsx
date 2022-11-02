import dynamic from 'next/dynamic'
const RemoteCounter = dynamic(
  () => import("app1/counterPage"),
  { ssr: false }
)

const App1 = () => <RemoteCounter />

export default App1