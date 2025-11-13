import {create} from 'zustand';

// // // const useStore = create((set)=>({
// // //   count: 0,

// // //   increment: ()=> set((state)=> ({count: state.count + 1})),
// // //   decrement: ()=> set((state)=> ({count: state.count-1})),
// // //   reset: ()=> set({count:0})
// // // }));
// // // export default useStore;

// const useStore = create((set)=>({
//   cart: [],

//   addToCart: (item) => set((state) => ({
//     cart: [...state.cart, item]
//   })),

//   removeFromCart: (itemId) => set((state)=>({
//     cart: state.cart.filter(item => item.id !== itemId)
//   })),

//   clearCart: () => set({ cart: []}),

//   totalItems: () => {
//     const state = useStore.getState();
//     return state.cart.length;
//   }
// }));
// export default useStore;

const useStore = create((set)=>({
  users: [],
  loading: false,
  error: null,

 fetchUsers: async () => {
  set({loading: true, error: null});

  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();

    set({
      users: data,
      loading: false
    });

  } catch(error){
    set({
      error: error.message,
      loading: false
    });
  }
 },
    clearUsers: () => set({users: [], error: null})
}))
export default useStore;