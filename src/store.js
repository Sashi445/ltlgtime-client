import { createContext, useState } from "react";

export const userContext = createContext(null);

export const UserProvider = (props) => {

    const initialState = null;

    const [ user, setUser ]  = useState(initialState);

    return <userContext.Provider value={{user, setUser}} >
        {props.children}
    </userContext.Provider>

}

export const postsContext = createContext(null);

export const PostsProvider = (props)  => {
    const initialState = [];
    const [ posts, setPosts ] = useState(initialState);

    return <postsContext.Provider value={{posts, setPosts}} >
        {props.children}
    </postsContext.Provider>

}