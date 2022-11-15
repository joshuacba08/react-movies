import { isEmail, isLength, isEmpty } from "validator";

// esta función recibe el valor del email y el dispatch que se encarga de setear los errores para cada cada campo
const emptyFieldEmail = (email, setErrors) => {
  if (isEmpty(email)) {
    // si el campo está vació, isEmpty(email) devolverá un true, por lo tanto setearé el error

    setErrors((pre) => {
      // setErrors recibe por parámetro una función flecha (callback) cuyo parámetro "pre" representa el valor actual que tiene el estado "errors"

      return {
        email: { msg: "* El campo no puede estar vacío", status: true },
        password: pre.password,
      };
    });
  } else {
    setErrors((pre) => {
      return {
        email: { msg: "", status: false },
        password: pre.password,
      };
    });
  }
};

const emailField = (email, setErrors) => {
  // verifica si el campo coincide con el formato de un mail, si es asi devuelve un true
  if (isEmail(email)) {
    setErrors((pre) => {
      pre.email.msg = "";
      pre.email.status = false;
      return pre;
    });
  } else {
    setErrors((pre) => {
      pre.email.msg = "El email no es válido";
      pre.email.status = true;
      return pre;
    });
  }
};

const passwordField = (password, setErrors) => {
  // verifica que el cambo este entre 6 y 12 caracteres
  if (isLength(password, { min: 6, max: 12 })) {
    setErrors((pre) => {
      pre.password.msg = "";
      pre.password.status = false;
      return pre;
    });
  } else {
    setErrors((pre) => {
      pre.password.msg = "El campo debe tener entre 6 y 12 caracteres";
      pre.password.status = true;
      return pre;
    });
  }
};

export { emptyFieldEmail, emailField, passwordField };
