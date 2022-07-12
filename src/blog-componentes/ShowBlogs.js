import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:8000/blogs/';

const ShowBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        getBlogs();

    }, []);

    const getBlogs = async () => {

        try {

            const respuesta = await axios.get(URL);
            setBlogs(respuesta.data.blogs);
            // console.log(respuesta);
        } catch (error) {

            console.log(error);
        }
    }

    const deleteBlog = async (id) => {

        await axios.delete(`${URL}${id}`);
        getBlogs();
    }

    return (

        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <Link to='/create' className='btn btn-primary'>
                        <i className="fa-solid fa-square-plus"></i>
                    </Link>
                    <table className='table'>
                        <thead >
                            <tr>
                                <th className="table-active"> Título </th>
                                <th className="table-active"> Contenido </th>
                                <th className="table-active"> Acciones </th>
                            </tr>
                        </thead>

                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.titulo} </td>
                                    <td> {blog.contenido} </td>
                                    <td>

                                        <Link to={`/editar/${blog.id}`} className='btn btn-info'>
                                            <i className="fas fa-edit"></i>
                                        </Link>

                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}
export default ShowBlog;