import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "./components/login";
import RegisterComponent from "./components/register";
import { UserProvider, PostsProvider } from "./store";
import CreatePostPage from "./components/CreatePostPage";
import Navbar from './components/Navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserProvider>
        <PostsProvider>
          <Routes>
            <Route path="create" exact element={<CreatePostPage/>} />
            <Route path="login" exact element={<LoginComponent />} />
            <Route path="register" exact element={<RegisterComponent />} />
            <Route path="" exact element={<Home />} />
          </Routes>
        </PostsProvider>
      </UserProvider>
    </div>
  );
}

export default App;