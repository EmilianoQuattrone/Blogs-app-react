import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = 'http://localhost:8000/blogs/';

const EdirBlog = () => {

    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const nevigate = useNavigate();
    const { id } = useParams();

    //Procedimiento para actualizar
    const actualizar = async (e) => {

        e.preventDefault();

        try {

            const respuesta = await axios.put(URL + id, {

                titulo: titulo,
                contenido: contenido
            });

        } catch (error) {

            console.log(error);
        }
        nevigate('/');
    }

    useEffect(() => {

        getBlogById();

    }, []);

    const getBlogById = async () => {

        const respuesta = await axios.get(URL + id);
        setTitulo(respuesta.data.titulo);
        setContenido(respuesta.data.contenido);
    }

    return (

        <>
            <h3>Editar Blog:</h3>

            <form onSubmit={actualizar}>

                <div className='container'>
                    <label className='mb-3'>Título</label>
                    <input
                        value={titulo}
                        name='titulo'
                        onChange={(e) => console.log(setTitulo(e.target.value))}
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

                <button type='submit' className='btn btn-primary mt-3'>Actualizar</button>
            </form>
        </>
    )
}

export default EdirBlog;
