import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = 'http://localhost:8000/blogs/create';

const CreateBlog = () => {

    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const nevigate = useNavigate();

    //Procedimiento para guardar.
    const store = async (e) => {
        e.preventDefault();

        await axios.post(URL, {
            titulo: titulo,
            contenido: contenido
        })
            .then((respuesta) => console.log(respuesta.data))
            .catch((error) => console.log(error));
        nevigate('/');
    }

    return (

        <>
            <h3>Crear Blog:</h3>

            <form onSubmit={store}>

                <div className='container'>
                    <label className='mb-3'>Título</label>
                    <input
                        value={titulo}
                        name='titulo'
                        onChange={(e) => setTitulo(e.target.value)}
                        type='text'
                        className='form-control'
                    />

                    <label className='mb-3'>Contenido</label>
                    <textarea
                        value={contenido}
                        name='contenido'
                        onChange={(e) => setContenido(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary mt-3'>Crear</button>
            </form>
        </>
    )
}

export default CreateBlog;