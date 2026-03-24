import { useFormState } from "../../context/useForm"
import { InputEmail } from "./InputEmail"
import { InputNume } from "./InputNume"
import { InputOras } from "./InputOras"
import { InputTelefon } from "./InputTelefon"
import { InputTipClient } from "./InputTipClient"
import { InputVarsta } from "./InputVarsta"




export function validateStep1(fields){
    const errors = {}

    if(!fields.nume.trim()){
        errors.nume = "name is required!"
    } else if(fields.nume.trim().length < 3) {
        errors.nume = "name required minim 3 characters!"
    }

    if(!fields.email.trim()){
        errors.email = "email is required!"
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)){
        errors.email = "email its not valid!"
    }

    if(!fields.telefon.trim()){
        errors.telefon = "phone number is required!"
    } else if(!/^\+?[0-9]{8,15}$/.test(fields.telefon.replace(/\s/g, ""))){
        errors.telefon = "phone number its not valid!"
    }

    if(!fields.varsta){
        errors.varsta = "age is required!"
    } else if(fields.varsta < 18 || fields.varsta > 63){
        errors.varsta = "age need be 18 < age < 63 !"
    }

    if(!fields.oras){
        errors.oras = "select an city!"
    }

    return errors
}


export const Step1Personal = () => {

    const { fields } = useFormState()
    const errors = validateStep1(fields)



    return (
        <div className="card">
            <div className="card-header bg-white py-3">
                <h5 className="mb--0 fw-bold">PersonalData</h5>
                <small className="text-muted">Complete for continue form</small>
            </div>

            <div className="card-body p-4">
                <div className="row g-3">
                    <InputNume errors={errors} />
                    <InputEmail errors={errors} />
                    <InputTelefon errors={errors} />
                    <InputVarsta errors={errors} />
                    <InputTipClient />
                    <InputOras errors={errors} />
                </div>
            </div>
            {console.log(fields.nume, fields.email, fields.telefon, fields.varsta, fields.tipClient, fields.oras)}
        </div>


    )




}