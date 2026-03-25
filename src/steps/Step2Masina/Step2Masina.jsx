import { useFormState } from "../../context/useForm"
import { InputAn } from "./InputAn"
import { SelectColor } from "./SelectColor"
import { SelectMarca } from "./SelectMarca"
import { SelectModel } from "./SelectModel"
import { SelectTransmision } from "./SelectTransmision"

export function validateStep2(fields){
    const errors = {}

    if(!fields.marca) errors.marca = "Select a brand!"
    if(!fields.model) errors.model = "Select an model!"
    if(!fields.an) errors.an = "Input an year!"
    else if(fields.an < 2020 || fields.an > 2026) errors.an = "Year but be betwnn 2020 and 2026!"
    if(!fields.culoare) errors.culoare= "Select an color!"
    return errors
}

export const Step2Masina = () => {
    const {fields} = useFormState()
    const errors = validateStep2(fields)

    return (
        <div className="card">
      <div className="card-header bg-white py-3">
        <h5 className="mb-0 fw-bold">🚗 Select car</h5>
        <small className="text-muted">Configure the desired car</small>
      </div>
      <div className="card-body p-4">
        <div className="row g-4">
          <SelectMarca errors={errors} />
          <SelectModel errors={errors} />

          {fields.model && (
            <>
              <InputAn errors={errors} />
              <SelectColor errors={errors} />
              <SelectTransmision />
            </>
          )}
        </div>
        {console.log(fields.marca, fields.model, fields.an, fields.culoare, fields.transmisie)}
      </div>
    </div>
    )
}