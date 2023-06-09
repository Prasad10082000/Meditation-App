import "./App.css";
import BottomNavbar from "./components/Bottomnav/BottomNavbar";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {  Routes, Route, useLocation } from "react-router-dom";
import SleepWrap from "./components/Sleep/SleepWrap";
import Myfav from "./components/Sleep/Myfav";
import Stories from "./components/Sleep/Stories";
import Music from "./components/Sleep/Music";
import Meditationwrap from "./components/Meditation/Meditationwrap";
import Nature from "./components/Meditation/Nature";
import Musical from "./components/Meditation/Musical";
import Catagory from "./components/Meditation/Catgories";
import Relaxwrap from "./components/Relax/Relaxwrap";
import Favorite from "./components/Relax/Favorite";
import Beginners from "./components/Relax/Beginner";
import Selfcalm from "./components/Relax/Selfclam";
import Setting from "./components/Settings/Setting";
import Account from "./components/Acount/Acount";
import Songs from "./components/Songs/Songs";
import Sleepsongs from "./components/sleepsong/Sleepsong";
import AudioPlayer from "./components/Melodies/Melodies";
import Firstpage from "./components/Firstpage/Firstpage";
import Loginpage from "./components/Loginpage/Loginpage";
import Signuppage from "./components/Sign/Signup";
import BasicTabs from "./components/Subscription/Subcription";

function App() {
  const location = useLocation();
  const isSignupPage = location.pathname === '/firstpage';
  const isLoginPage = location.pathname === '/loginpage';
  const isSignPage = location.pathname === '/signup';


  return (
    <div className="App">
         {!isSignupPage && !isLoginPage && !isSignPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sleep" element={<SleepWrap />} />
          <Route path="/sleep/myfav" element={<Myfav />} />
          <Route path="/sleep/stories" element={<Stories />} />
          <Route path="/sleep/music" element={<Music />} />
          <Route path="/meditation" element={<Meditationwrap />} />
          <Route path="/meditation/nature" element={<Nature />} />
          <Route path="/meditation/musical" element={<Musical />} />
          <Route path="/meditation/catagory" element={<Catagory />} />
          <Route path="/relax" element={<Relaxwrap />} />
          <Route path="/relax/favorite" element={<Favorite />} />
          <Route path="/relax/beginner" element={<Beginners />} />
          <Route path="/relax/selfcalm" element={<Selfcalm />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/account" element={<Account />} />
          <Route path="/subscription" element={<BasicTabs />} />
          <Route path="/song/:id" element={<Songs />} />
          <Route path="/sleepsong/:id" element={<Sleepsongs />} />
          <Route path="/melodies" element={<AudioPlayer />} />
          <Route path="/firstpage" element={<Firstpage/>}/>
          <Route path="/loginpage" element={<Loginpage/>}/>
          <Route path="/signup" element={<Signuppage/>}/>
        </Routes>
        {!isSignupPage && !isLoginPage && !isSignPage && <BottomNavbar />}
    </div>
  );
}

export default App;
