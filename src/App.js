import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  isSigningIn = true;

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {

        // setting isSigningIn to false
        this.isSigningIn = false;

        // getting the user reference returned from createUserProfileDocument
        const userRef = await createUserProfileDocument(userAuth)

        // userRef.onSnapshot() returns the user data which can be 
        // assessed by calling the data() method

        userRef.onSnapshot(userSnapShot => {
          this.setState({
            currentUser: {
              id: userSnapShot.id,
              ...userSnapShot.data()
            }
          }, () => {
            console.log(this.state)

          })
        })


      } else {
        // setting isSigningIn to false
        this.isSigningIn = false;

        // when user is not signed in, there is no userAuth value 
        this.setState({ currentUser: userAuth })
        console.log(this.state, 'ldll')
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} isSigningIn={this.isSigningIn} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
