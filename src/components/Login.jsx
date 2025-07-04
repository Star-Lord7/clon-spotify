import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { dbStore, auth } from '../firebase/appConfig';
import logo from '../img/musica.png';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //Método para validar el usuario si existe en la base de datos de firestore
  const validarUser = async (data) => {
    try {
      // Iniciar sesión con correo y contraseña
      const userCredential = await signInWithEmailAndPassword(auth, data.correo, data.password);

      Swal.fire({
        title: "Inicio de sesión exitoso",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
      
      navigate("/home");

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Correo o contraseña incorrectos"
      });
    }
  };


  return (
    <div className="container mt-4">
      <img src={logo} alt="" />
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit(validarUser)}>
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
          Iniciar Sesión
        </button>
        <br />
        <Link to="/registro" className="btn btn-link"
          style={{
            backgroundColor: "#e166fc",
            color: "#000000",
            textDecoration: "none",
            marginTop: "30px",
            fontSize: "15px",
            fontWeight: "600"
          }}
        >¿No tienes cuenta? Regístrate</Link>
      </form>
    </div>
  );
}