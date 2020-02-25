import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route, Switch, Redirect } from 'react-router-dom';
import Topbar from "./FitbitComponents/Topbar";
import Counter from "./CounterComponents/Counter";
import FitBit from "./FitbitComponents/FitBit";
// import Axios from 'axios';
import VideoCard from './VideoWatchComponents/VideoCard';

import Topbar1 from './LoginLogoutComponents/Topbar/Topbar';
import Homepage from './LoginLogoutComponents/Homepage/Homepage';
import About from './LoginLogoutComponents/About/About';
import Contact from './LoginLogoutComponents/Contact/Contact';
import Login from './LoginLogoutComponents/Login/Login';
import PageNotFound from './LoginLogoutComponents/PageNotFound/PageNotFound';

class App extends React.Component {
  state = {
    like: 0,
    dislike: 0,
    datalist: [],
    IsUserLoggedIn: JSON.parse(localStorage.getItem("IsUserLoggedIn"))
  }

  onUserLoggedIn = () => {
    this.setState({IsUserLoggedIn: true});
    localStorage.setItem("IsUserLoggedIn", true);
  }
  onUserLoggedOut = () => {
    this.setState({IsUserLoggedIn: false});
    localStorage.setItem("IsUserLoggedIn", false);
  }

  onLikeIncrement = () => {
    const updatedValue1 = this.state.like +1;
    if(updatedValue1 >= 0)
    this.setState({like: updatedValue1});
  }
  onLikeDecrement = () => {
    const updatedValue1 = this.state.like -1;
    if(updatedValue1 >= 0)
    this.setState({like: updatedValue1});
  }

  onDislikeIncrement = () => {
    const updatedValue2 = this.state.dislike +1;
    if(updatedValue2 >= 0)
    this.setState({dislike: updatedValue2});
  }
  onDislikeDecrement = () => {
    const updatedValue2 = this.state.dislike -1;
    // this.setState({dislike: updatedValue2});
    if(updatedValue2 >= 0)
    this.setState({dislike: updatedValue2});
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState);
  //   if(nextState.like < 0) {
  //     return false;
  //   }
  //   if(nextState.dislike < 0) {
  //     return false;
  //   }

  //   return true;
  // }
// let videoData = [];
//   componentDidMount() {
//     Axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/playlist`)
//       .then(res=> {
//     videoData = [...res.data];

//     this.setState({datalist: videoData });
//     console.log(videoData);
//       })


//   }

  render() {
    // const videoCards = videoData.map((item) => {
    //   return(
    //     <videoCards title = {item.title} />
    //   )
    // })
    return(
      <BrowserRouter>
        <div>
        {/* <div></div>
        {videoCards} */}
        {/* <VideoCard /> */}

            <Topbar1 LoggedInStatus={this.state.IsUserLoggedIn} onUserLoggedOut={this.onUserLoggedOut}/>
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Login" render={(params) => <Login {...params} LoggedInStatus={this.state.IsUserLoggedIn} onUserLoggedIn={this.onUserLoggedIn} />} />
              <Route path="/PageNotFound" component={PageNotFound}/>
              <Route exact path="/" component={Homepage} />
              <Route render={() => <Redirect to="/PageNotFound"/>} />
            </Switch>
        
        {/* <Topbar like={this.state.like} dislike ={this.state.dislike} />
        <FitBit/> */}
        {/* <Counter onLikeIncreamentClicked = {this.onLikeIncrement} onLikeDecreamentClicked = {this.onLikeDecrement} onDislikeIncreamentClicked = {this.onDislikeIncrement} onDislikeDecreamentClicked = {this.onDislikeDecrement}/> */}
        </div>
      </BrowserRouter>
    );
  }
}
// function App() {
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.

//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React

//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// //   const a = [
// //     {
// // "id": "4",
// // "title": "Grilled Cheese 9 Ways",
// // "thumbnail": "https://i.vimeocdn.com/video/570486309_390x220.webp"
// // },
// // {
// // "id": "5",
// // "title": "Pineapple Cheesecake",
// // "thumbnail": "https://i.vimeocdn.com/video/602705517_390x220.webp"
// // }
// // ];

// // const data = [{"id":"1","title":"Croissants | Flour and Stone","thumbnail":"https://i.vimeocdn.com/video/600595198_390x220.webp"},{"id":"2","title":"Perfect Mashed Potatoes and Gravy","thumbnail":"https://i.vimeocdn.com/video/604150056_390x220.webp"},{"id":"3","title":"The Heart of Soba","thumbnail":"https://i.vimeocdn.com/video/726986673_390x220.webp"},{"id":"4","title":"Grilled Cheese 9 Ways","thumbnail":"https://i.vimeocdn.com/video/570486309_390x220.webp"},{"id":"5","title":"Pineapple Cheesecake","thumbnail":"https://i.vimeocdn.com/video/602705517_390x220.webp"},{"id":"6","title":"Lemony Chicken Noodle Soup","thumbnail":"https://i.vimeocdn.com/video/537261616_390x220.jpg"},{"id":"7","title":"Pumpkin Roll","thumbnail":"https://i.vimeocdn.com/video/608805594_590x332.jpg"},{"id":"8","title":"How to Brine a Turkey","thumbnail":"https://i.vimeocdn.com/video/601730519_590x332.jpg"},{"id":"9","title":"Stop Motion Dry-Brined Turkey Recipe","thumbnail":"https://i.vimeocdn.com/video/456852083_590x332.jpg"},{"id":"10","title":"Butternut Squash Ravioli","thumbnail":"https://i.vimeocdn.com/video/600328152_590x332.jpg"},{"id":"11","title":"Rich Mediterranean Tomato and Cheese","thumbnail":"https://i.vimeocdn.com/video/437906420_590x332.jpg"},{"id":"12","title":"Truffle Masala Grilled Cheese Sandwich","thumbnail":"https://i.vimeocdn.com/video/564175134_590x332.jpg"},{"id":"13","title":"Grilled Cheese Sandwich","thumbnail":"https://i.vimeocdn.com/video/268207236_590x332.jpg"},{"id":"14","title":"Cheese on Toast-Lapse","thumbnail":"https://i.vimeocdn.com/video/58747216_590x332.jpg"},{"id":"15","title":"Cream Cheese Pancake","thumbnail":"https://i.vimeocdn.com/video/581142765_590x332.jpg"}];

// // const videoCards = data.map((elem) => {
// //   return(
// //       <div className = "card">
// //         <img src = {elem.thumbnail}></img>
// //         <h3>{elem.title}</h3>
// //       </div>
// //   );
// // });

//   return(
//     // <div className = "grid">
//     //   {videoCards}
//     // </div>
    
//     // <Counter maxCount={10} minCount={0}/>
//     <Topbar maxCount={10} minCount={0}/>
//   );
// }

export default App;
