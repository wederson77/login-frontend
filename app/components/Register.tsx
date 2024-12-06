"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { useRouter } from "next/router";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const  Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  // Atualizar o estado corretamente para cada campo
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(email);
    if (id === "password") setPassword(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form: RegisterForm = { name, email, password };

    try {
      const response = await axios.post("http://localhost:9000/api/register ", form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Redirecionar para o login após sucesso no registro
       await router.push("http://localhost:3001/");
      } else {
        console.error("Request failed to register");
      }
    } catch (error) {
      console.error("Failed to register", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

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
          />
        </div>

        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>

      <div className={styles.linkContainer}>
        <a href="/login" className={styles.link}>
          Already have an account?
        </a>
      </div>
    </div>
  );
};

export default Register;




















// "use client";

// import { ChangeEvent, FormEvent, useState } from 'react';
// import styles from './Register.module.css'
// import axios from 'axios';
// import { useRouter } from 'next/router';             // import { Router } from 'next/router';


// interface RegisterForm{
//     name: string;
//     email: string;
//     password: string;
// }

// const Register: React.FC = () =>{
//     const [name, setName] = useState<string>('');
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const router = useRouter(); 

//     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const {id, value} = e.target;
//         if (id === 'name') setName(value);
//         if (id === 'email') setEmail(email);
//         if (id === 'password') setPassword(value);
//     };

//     const handleSubmit = async(e: FormEvent) =>{
//         e.preventDefault()
//         const form: RegisterForm = {name, email, password};
        
//         try {
//             const response = await axios.post('http://localhost:9000/api/register', form, {
//                 headers:{
//                     'Content-Type' : 'application/json'
//                 },
//             });

//             if (response.status === 200){
//                 await router.push("http://localhost:3001/register")
//             }else{
//                 console.error("Requeste falied to register");
//             }
//         }catch (error){
//             console.log("falied", error);
//         }
//     };

//     return(
//         <div className={styles.container}>
//             <form onSubmit={handleSubmit} className={styles.form}>
//                 <div className={styles.field}>
//                     <label htmlFor="name" className={styles.label}>
//                         Name: 
//                     </label>
//                     <input 
//                     type="text"
//                     id='name'
//                     value={name}
//                     onChange={handleInputChange}
//                     className={styles.input}
//                      />
//                 </div>

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
//                     Register
//                 </button>
//             </form>

//             <div className={styles.linkContainer}>
//                 <a href="/" className={styles.link}>Already have an account?</a>
//             </div>
//         </div>
//     );
// };

// export default Register;