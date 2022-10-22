import { isEmail, isLength, isEmpty } from 'validator';

// const emptyField = (email, password, setErrors) => {

//     if( isEmpty(email) && isEmpty(password) ){
        
//         setErrors({
//             email: { msg: "* El campo no puede estar vacío", status: true },
//             password: { msg: "* El campo no puede estar vacío", status: true },
//         })
//     }else if( isEmpty(email)){
//         setErrors({
//             email: { msg: "* El campo no puede estar vacío", status: true },
//             password: { msg: "", status: false },
//         })
//     } else if( isEmpty(password)){
//         setErrors({
//             email: { msg: "", status:false },
//             password: { msg: "* El campo no puede estar vacío", status: true },
//         })
//     } else{
//         setErrors({
//             email: { msg: "", status: false },
//         password: { msg: "", status: false }
//         })
//     }        
// }


const emptyFieldEmail = (email, setErrors) => {

    if( isEmpty(email)){
        
        setErrors(( pre ) => {
        
           return  {
                email: { msg: "* El campo no puede estar vacío", status: true },
                password: pre.password
            }
        })
    }else{
        setErrors(( pre ) => {
        
            return  {
                 email: { msg: "", status:false },
                 password: pre.password
             }
         })
    } 
}

const emailField = (email, setErrors) => {
    if(isEmail(email)){
        setErrors((valorActual)=>{
            valorActual.email.msg="";
            valorActual.email.status=false;
            return valorActual;
        });
    }else{
        setErrors((valorActual)=>{
            valorActual.email.msg="El email no es válido";
            valorActual.email.status=true;
            return valorActual;
        });
    }
}

const passwordField = (password, setErrors) => {
    if(isLength(password,{min:6,max:12})){
        setErrors((valorActual)=>{
            valorActual.password.msg="";
            valorActual.password.status=false;
            return valorActual;
        });
    }else{
        setErrors(
            (valorActual)=>{
                valorActual.password.msg="El campo debe tener entre 6 y 12 caracteres";
                valorActual.password.status=true;
                return valorActual;
            }
        )
    };
    
}


export {
    emptyFieldEmail,
    emailField,
    passwordField
}