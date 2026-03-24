import { useFormDispatch, useFormState } from "../../context/useForm"



export const InputTelefon = ({errors}) =>{

    const {fields, touched} = useFormState()
    const dispatch = useFormDispatch()

    return (
        <div className="col-md-6">
            <label htmlFor="" className="form-label fw-semibold">
                Phone <span className="text-danger">*</span>
            </label>
            <input type="text"
            className={`form-control 
                ${touched.telefon && errors.telefon ? "is-invalid" : ""} 
                ${touched.telefon && !errors.telefon ? "is-valid" : ""}`} 
            value={fields.telefon}
            onChange={(e)=>dispatch({type: 'SET_FIELD', field: "telefon", value: e.target.value})}
            onBlur={()=>dispatch({type: 'TOUCH_FIELD', field: "telefon"})}
          />
          {touched.telefon && errors.telefon && (
            <div className="text-danger small mt-1">{errors.telefon}</div>
          )}
        </div>
    )
}