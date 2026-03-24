import { useFormDispatch, useFormState } from "../../context/useForm"
import city from "../../data/orase.json"

export const InputOras = ({errors}) =>{

    const {fields, touched} = useFormState()
    const dispatch = useFormDispatch()

    return (
        <div className="col-md-6">
            <label htmlFor="" className="form-label fw-semibold">
                City<span className="text-danger">*</span>
            </label>
            <select name="" id=""
             className={`form-select 
                ${touched.oras && errors.oras ? "is-invalid" : ""} 
                ${touched.oras && !errors.oras ? "is-valid" : ""}`}
            value={fields.oras}
            onChange={(e)=>dispatch({type: "SET_FIELD", field: "oras", value: e.target.value})}
            onBlur={()=>dispatch({type: "TOUCH_FIELD", field: "oras"})}
          >
            <option value="">Select City</option>
            {city.map((c)=> (
                <option
                key={c.id}
                value={c.id}>
                    {c.label}
                </option>
            ))}
          </select>
          {touched.oras && errors.oras && (
            <div className="text-danger small mt-1">{errors.oras}</div>
          )}
        </div>
    )
}