import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './home_page/home_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import pet_index_container from './pets/pet_index_container';
import '../styles/index.css'
import ProfileContainer from './User/profile_container';
import NavBarContainer from './nav/navbar_container';
import per_show_container from './pets/per_show_container';
import search_container from './search/search_container';

const App = () => (

  <div>
    <NavBarContainer/>
    <Switch>

      <Route exact path='/pets/:petId' component={per_show_container} />
      <Route exact path='/pets' component={pet_index_container} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/search' component={search_container} />

      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path='/users/:id' component={ProfileContainer} />
    </Switch>
  </div>
)

export default App;
