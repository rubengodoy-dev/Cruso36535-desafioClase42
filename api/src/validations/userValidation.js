import * as yup from 'yup'

let userSchema = yup.object().shape(
    {
        first_name: yup.string().min(4).required(),//minimo 4 caracteres
        last_name: yup.string().required(),
        enterprise: yup.string().required(),
        job: yup.string().required(),
    }
)
export default userSchema