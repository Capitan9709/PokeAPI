import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebaseConfig/FirebaseConfig';
import { useEffect, useState } from "react";

function ListaDatos(){

    const [ejemplo, setEjemplo] = useState([]);
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

    return(
        <div className="todo-content">
        <h1>Componente Lista Datos</h1>
    {
        ejemplo.map((ejemplo)=>(
            <p key={ejemplo.id}>
                {ejemplo.titulo}
            </p>
        ))
    }
</div>
    )
}

export default ListaDatos;