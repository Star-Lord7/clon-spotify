import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login({ cambiarVista }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    cambiarVista("home");
  };

  return (
    <div className="container mt-4">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button
          type="button"
          className="btn btn-link"
          onClick={() => cambiarVista("registro")}
        >
          ¿No tienes cuenta? Regístrate
        </button>
      </form>
    </div>
  );
}