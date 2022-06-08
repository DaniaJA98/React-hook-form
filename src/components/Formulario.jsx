import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ addTodo }) => {
    const initialState = {
        nombre: 'Todo',
        descripcion: 'Descripción',
        estado: 'pendiente',
        prioridad: false
    }

    const [inputs, handleChange, reset] = useFormulario(initialState)

    const { nombre, descripcion, estado, prioridad } = inputs;

    const handleSubmit = e => {
        e.preventDefault();

        if (!nombre.trim()) {
            e.target[0].focus();
            return Swal.fire({
                title: 'Error!',
                text: 'Nombre obligatorio',
                icon: 'error'
            })
        }

        if (!descripcion.trim()) {
            e.target[1].focus();
            return Swal.fire({
                title: 'Error!',
                text: 'Descripción obligatoria',
                icon: 'error'
            })
        }

        Swal.fire({
            title: 'Éxito',
            text: 'Tarea agregada!',
            icon: 'success'
        })

        addTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad: prioridad,
            id: uuidv4()
        })

        reset();

    }


    return (
        <>
            <h3>Agregar Todo</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    type="text"
                    className="form-control mb-2"
                    placeholder="Ingrese Todo"
                    value={nombre}
                    onChange={handleChange}
                />

                <textarea
                    name="descripcion"
                    className="form-control mb-2"
                    placeholder="Ingrese descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />

                <select
                    name="estado"
                    className="form-control mb-2"
                    value={estado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <div className="form-check">
                    <input
                        name="prioridad"
                        id="flexCheckDefault"
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault">
                        Dar prioridad
                    </label>
                </div>

                <button
                    type="submit"
                    className="btn btn-info"
                >
                    Agregar
                </button>

            </form>

        </>
    );
};

export default Formulario;
