import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from '../firebaseConfig/FirebaseConfig';
import { useEffect, useState } from "react";

function ListaDatos(){

    const [ejemplo, setEjemplo] = useState([]);

    // Leer datos de firestore
    const leerDatosFirestore = async () => {
       
        await getDocs(collection(db, "ejemplo"))
            .then((querySnapshot)=>{               
                const listado = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setEjemplo(listado);                
                // console.log(todos, newData);
            })
       
    }

    useEffect(()=>{
        leerDatosFirestore();
    }, [])

    // Añadir datos a firestore
    const escribeDatosFirestore = async () => {

        try {
            const docRef = await addDoc(collection(db, "ejemplo"), {
              titulo: "prueba1",    
            });
            console.log("Document written with ID: ", docRef.id);
            leerDatosFirestore();
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return(
        <div className="todo-content text-bg-dark pb-2">
        <h1>Puntuaciones</h1>
        {/* <button onClick={escribeDatosFirestore}>Escribe</button> */}
    {
        ejemplo.map((ejemplo)=>(
            <p key={ejemplo.id}>
               Puntuacion: {ejemplo.puntuacion}
            </p>
        ))
    }
</div>
    )
}

export default ListaDatos;