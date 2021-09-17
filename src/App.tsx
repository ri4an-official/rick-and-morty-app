import './styles/global.sass'
import { Route, Switch } from 'react-router-dom'
import { Characters } from './components/Characters/Characters'
import { SelectedCharacter } from './components/Characters/SelectedCharacter'
import { Locations } from './components/Locations/Locations'
import { SelectedLocation } from './components/Locations/SelectedLocation'
import { Episodes } from './components/Episodes/Episodes'
import { SelectedEpisode } from './components/Episodes/SelectedEpisode'
import { NotFound } from './common/NotFound'
import { NavBar } from './components/NavBar'
import { Settings } from './components/Settings'
import { Login } from './components/Login'
import { Register } from './components/Register'

export const App = () => (
    <div className='app'>
        <main className='content'>
            <Switch>
                <Route exact path='/' component={Characters} />
                <Route exact path='/locations/null' component={NotFound} />
                <Route exact path='/episodes/null' component={NotFound} />
                <Route exact path='/characters/null' component={NotFound} />
                <Route exact path='/characters' component={Characters} />
                <Route exact path='/characters/:id' component={SelectedCharacter} />
                <Route exact path='/locations' component={Locations} />
                <Route exact path='/locations/:id' component={SelectedLocation} />
                <Route exact path='/episodes' component={Episodes} />
                <Route exact path='/episodes/:id' component={SelectedEpisode} />
                <Route exact path='/settings' component={Settings} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact component={NotFound} />
            </Switch>
        </main>
        <NavBar />
    </div>
)
