import { Container } from '@mui/system';
import {Routes , Route, Outlet} from 'react-router-dom';
import DrawerAppBar from './screens/navBar'
import Home from './screens/home';
import Abstract from './screens/Abstract';
import TeamMemberDetails from './screens/TeamMemberDetails';
import SinUpScreen from './screens/SinUpScreen';
import SignInScreen from './screens/SignIn';
import Error404 from './screens/404Error';
import {UserAuthContextProvider} from "./context/UserAuthContext"
import Dashboard from './screens/Dashboard';

const App=()=> {
  return (
    <>   
          <DrawerAppBar/> 
             <Container>
                    <Routes> 
                          <Route path="/" element={<Home /> } />
                          <Route path="/Home" element={<Home /> } />
                          <Route path="/Abstract" element={<Abstract /> } />
                          <Route path="/TeamMembers" element={<TeamMemberDetails /> } />
                          <Route path="/LogIn" element={<SignInScreen/> } />
                          <Route path="/SignUp" element={<SinUpScreen/> } />
                          <Route path="/Dashboard" element={<Dashboard/> } />
                          <Route path="*" element={<Error404/> } />

                    </Routes> 
              </Container>         
    </>
  );
}

export default App;
