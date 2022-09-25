import { Link, Link as RouterLink } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmail } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [
    [(value) => value.includes("@"), "El correo debe tener un @"],
    [
      (value) =>
        value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      "El correo debe tener un formato valido",
    ],
  ],
  password: [
    [
      (value) => value.length >= 6,
      "El password debe tener al menos 6 caracteres",
    ],
  ],
  displayName: [
    [(value) => value.length >= 1, "El nombre es obligatorio"],
    [(value) => value.length >= 6, "El nombre debe tener al menos 6 letras"]
  ]
};

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmited, setFormSubmited] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmail(formState))
  };

  return (
    <>

      {/* <form onSubmit={onSubmit} classNameName='animate__animated animate__fadeIn'>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre Completo"
            type="text"
            placeholder="Nombre Completo"
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmited}
            helperText={formSubmited && displayNameValid}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@gmail.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmited}
            helperText={formSubmited && emailValid}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmited}
            helperText={formSubmited && passwordValid}
          />
        </Grid>
        <Grid container spacing={1} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={!isFormValid && formSubmited}
            >
              <Typography sx={{ ml: 1 }}>Crear cuenta</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Ya tengo una cuenta
          </Link>
        </Grid>
      </form> */}


      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <p>&nbsp;</p>
            <div className="card">
              <div className="card-body">
                <h3 className="text-center"><i className="bi bi-person-plus-fill"></i> Account</h3>
                <form onSubmit={onSubmit}>
                  <div className="form-group mb-4">
                    <label>Full name</label>
                    <input name="displayName" value={displayName} onChange={onInputChange} className="form-control" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">Enter your name.</small>
                  </div>
                  <div className="form-group mb-4">
                    <label>Email address</label>
                    <input name="email" value={email} onChange={onInputChange} className="form-control" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group mb-4">
                    <label>Password</label>
                    <input value={password} name="password" onChange={onInputChange} type="password" className="form-control" />
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <button type="submit button" className="btn btn-outline-success">Create  <i className="bi bi-check"></i></button>
                    <Link className="btn btn-outline-danger cursorKap" component={RouterLink} to="/auth/login">
                      I have already  <i className="bi bi-arrow-bar-right"></i>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
