import * as Yup from 'yup';
const SinUpYupSchemaValidation=Yup.object().shape(
    {
        firstName:Yup.string().max(15, "max must be 15 or less")
            .required("First name required"),
        lastName:Yup.string()
            .max(15, "max must be 15 or less")
            .required("Last name required"),
        email:Yup.string().email("Invalid Email Address")
            .required("email is required"),
        passowrd:Yup.string()
            .min(8, "the password must be minimum 8 letters")
            .required("password name required")
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol'),
        confirmPassword:Yup.string().min(8, "the password must be minimum 8 letters")
            .required(" confirm password name required")
            .oneOf([Yup.ref('password'), null], 'Passwords must be Same as Password').matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol')
    }
);

export default SinUpYupSchemaValidation