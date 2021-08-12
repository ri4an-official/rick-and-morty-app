import './styles/main.scss'
import { Counter } from './components/Counter'

const App = () => (
    <div className='app'>
        <img
            src='https://i.ya-webdesign.com/images/rick-and-morty-family-png-8.png'
            alt=''
        />
        <Counter />
    </div>
)

export default App
