"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
// import Register from "./registerr";

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value); // Corrigido para setar o valor corretamente
    if (id === "password") setPassword(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form: LoginForm = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:9000/api/login",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true // Garante que o cookie de autenticação será enviado
        }
      );

      if (response.status === 200) {
        // Navega para o perfil do usuário, após login bem-sucedido
        await router.push("http://localhost:3001/profile");
      } else {
        console.error("Failed to login, invalid credentials.");
      }
    } catch (error) {
      console.log("Failed to login:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

      <div className={styles.linkContainer}>
        <a href="/register" className={styles.link}>Create Account</a>
      </div>
    </div>
  );
};

export default Login;























// "use client";

// import React from 'react';
// import { ChangeEvent, FormEvent, useState } from 'react';
// import styles from './Login.module.css';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';  

// interface LoginForm{
//     email: string;
//     password: string;
// }

// const Login : React.FC = () =>{
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const router = useRouter(); 

//     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const {id, value} = e.target;
//         if (id === 'email') setEmail(email);
//         if (id === 'password') setPassword(value);
//     };

//     const handleSubmit = async(e: FormEvent) =>{
//         e.preventDefault()
//         const form: LoginForm = {email, password};
        
//         try {
//             const response = await axios.post('http://localhost:9000/api/login', form, {
//                 headers:{
//                     'Content-Type' : 'application/json'
//                 },

//                 withCredentials: true
//             });

//             if (response.status === 200){
//                 await router.push("http://localhost:3001/profile")
//             }else{
//                 console.error("Requeste falied to login");
//             }
//         }catch (error){
//             console.log("falied", error);
//         }
//     };

//     return(
//         <div className={styles.container}>
//             <form onSubmit={handleSubmit} className={styles.form}>

//                 <div className={styles.field}>
//                     <label htmlFor="email" className={styles.label}>
//                         Email: 
//                     </label>
//                     <input 
//                     type="email"
//                     id='email'
//                     value={email}
//                     onChange={handleInputChange}
//                     className={styles.input}
//                      />
//                 </div>

//                 <div className={styles.field}>
//                     <label htmlFor="password" className={styles.label}>
//                         Password: 
//                     </label>
//                     <input 
//                     type="password"
//                     id='password'
//                     value={password}
//                     onChange={handleInputChange}
//                     className={styles.input}
//                      />
//                 </div>

//                 <button type='submit' className={styles.button}>
//                     Login
//                 </button>
//             </form>

//             <div className={styles.linkContainer}>
//                 <a href="/register" className={styles.link}>Create Account</a>
//             </div>
//         </div>
//     );
// };

// export default Login;