import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { dbStore, auth } from '../firebase/appConfig';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import logo from '../img/musica.png';

import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Registro(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Creando una constante para navegar entre rutas
  const navigate = useNavigate();

  //Método para guardar el usuario en la base de datos
  const saveUser = async data => {
    console.log(data);
    try {
      // Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, data.correo, data.password);
      const user = userCredential.user;

      Swal.fire({
        title: "Registro Exitoso",
        icon: "success",
        confirmButtonText: "OK",
        draggable: true
      });

      navigate("/");

    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error"
      });
    }
  };


  return (
    <div className="container mt-4">
      <img src={logo} alt="" />
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(saveUser)}>
        <div className="mb-3">
          <label>Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            {...register("correo", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.correo && (
            <span className="text-danger">{errors.correo.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Registrarme
        </button>
        <br />
        <Link to="/" className="btn btn-link"
          style={{
            backgroundColor: "#e166fc",
            color: "#000000",
            textDecoration: "none",
            marginTop: "30px",
            fontSize: "15px",
            fontWeight: "600"
          }}
        >¿Ya tienes cuenta? Inicia Sesión</Link>
      </form>
    </div>
  );
}