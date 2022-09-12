import * as yup from "yup";

export const dataSchema = yup.object().shape({

    prenom:yup.string().min(2).required(),
    nom:yup.string().required()

})