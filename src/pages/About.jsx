import React from 'react'

export default function About() {
  return (
    <div>
      <h3>Explain in detail redux toolkit</h3>
      <h4>Slices in RTK</h4>
      <p>
        1. A function that accept a "Slice name"<br />
        2. An" initialstate "<br />
        3. And an "object of reducer function" <br />
        And automatically generate "action creators"
        and action type that corresponds to the reducer and state.<br />
        {/* const UserSlice=CreateSlice({
            name:"user",
            initialstate:[],
            reducers: {
                what action do we need in react app
                addUser(state , action){},
                removerUser(state , action){},

            },

        }); */}
All redux toolkit functioanlity store in a separet foler name like store
      </p><br />
      <h4>Store Creation</h4>
      <h4>configureStore</h4>
      <h4>
      Purpose and Behavior
      </h4>
      <p>
     1. Combining the slice reducers into the root reducer<br />
2 . Creating the middleware enhancer, usually with the <br /> thunk middleware or other side effects middleware, as well as middleware that might be used for development checks <br />
3 .Adding the Redux DevTools enhancer, and composing the enhancers together <br />
4. Calling createStore
      </p>

      

    </div>
  )
}
