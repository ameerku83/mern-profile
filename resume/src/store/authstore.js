import { create } from "zustand"


 export const useAuthStore=create((set)=>({
    isAuth:!!localStorage.getItem("product-tokenz2@#$$@%&!661cdjvxfdfd"),
    loginAuth:(token)=>{
        localStorage.setItem("product-tokenz2@#$$@%&!661cdjvxfdfd",token);
        set({isAuth:true})
    },
    logoutAuth:()=>{
        localStorage.removeItem("product-tokenz2@#$$@%&!661cdjvxfdfd")
        set({isAuth:false});
    },


}))  
