


import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import axios from "axios";
import { useRouter } from "next/router";

interface ProfileDetails {
  name: string;
  email: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Alterei de POST para GET, pois é uma operação de leitura
        const response = await axios.get<ProfileDetails>("http://localhost:9000/api/profile", {
          withCredentials: true, // Garante que o cookie de autenticação será enviado
        });

        if (response.status === 200) {
          setProfile(response.data);
        } else {
          router.push("/"); // Redireciona para a página inicial se o status não for 200
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        router.push("/"); // Em caso de erro, redireciona para a página inicial
      }
    };

    fetchProfile();
  }, [router]);

  return (
    <div className={styles.profileContainer}>
      {profile ? (
        <div>
          <h1>Profile</h1>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p> {/* Corrigido o nome do campo de 'name' para 'email' */}
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p> // Mantém a mensagem de loading enquanto carrega o perfil
      )}
    </div>
  );
};

export default Profile;














// import React, { useEffect, useState } from 'react';
// import styles from './Profile.module.css';
// import axios from 'axios';
// import { useRouter } from 'next/router';   
// import { config } from 'next/dist/build/templates/pages';

// interface Profiledetalis{
//     name: string;
//     email: string;
// }

// const Profile: React.FC = () =>{
//     const [profile, setProfile] = useState<Profiledetalis | null>(null);
//     const router = useRouter();

// useEffect(()=>{
//     const fetchProfile = async () => {
//         try {
//             const response = await axios.post<Profiledetalis>(
//                 'http://localhost:9000/api/profile',
//                 {}, 
//                 {withCredentials: true}
//             );

//             if (response.status === 200){
//                 setProfile(response.data);
//             }else{
//                 await router.push('/');
//             }
//         }catch (error){
//             await router.push('/') 
//         }
//     };

//     fetchProfile();
// }, [router]);

//     return (
//         <div className={styles.profileContainer}>
//             {
//                 profile? (
//                     <div >
//                         <h1>Profile</h1>
//                         <p>Name: {profile.name}</p>
//                         <p>Name: {profile.email}</p>
//                     </div>
//                 ) : ( 
//                 <p className={styles.loading}>Loading...</p>

//             )}
//         </div>
//     );
// };

// export default Profile;