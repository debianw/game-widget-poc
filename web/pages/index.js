//
import Link from 'next/link'

//
const Home = () => (
  <div>
    <h1> Games </h1>

    <ul>
      <li>
        <Link href="/game?id=2&p=waly">
          <a>Example</a>
        </Link>
      </li>
    </ul>
  </div>
)

export default Home;