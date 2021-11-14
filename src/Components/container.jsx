import Download from './Download'
import Home from './Home'
import JoinUs from './JoinUs'
import Settings from './Settings'
import Help from './Help'
import Search from './Search'
import ContactUs from './ContactUs'
import Login from './Login'

const Container = ()=>{
    return <div className="container">
            <JoinUs/>
            <Settings/>
            <Login/>
            <ContactUs/>
            <Search/>
            <Help/>
            <Home/>
            <Download/>
        </div>
}

export default Container;