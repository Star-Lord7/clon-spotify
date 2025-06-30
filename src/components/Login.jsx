import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { dbStore } from '../firebase/appConfig';
import logo from '../img/musica.png';

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
      // Creamos una constante para la colección de usuarios
      const usersRef = collection(dbStore, "users");
      //Creamos otra constante para la consulta
      const q = query(usersRef, where("correo", "==", data.correo), where("password", "==", data.password));
      //Y esta nueva constante para obtener los documentos que cumplen con la consulta
      const snapshot = await getDocs(q);

      //Luego con un IF verificamos si el snapshot tiene documentos
      if (!snapshot.empty) {
        //alert("Inicio de sesión exitoso");
        // Redireccionar (si usas react-router-dom)
        navigate("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Correo o contraseña incorrectos"
          //footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    } catch (error) {
      console.error("Error al validar usuario:", error);
      alert("Ocurrió un error al validar el usuario");
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