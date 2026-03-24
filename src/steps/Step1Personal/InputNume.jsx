import { useFormDispatch, useFormState } from "../../context/useForm"



export const InputNume = ({errors}) =>{

    const {fields, touched} = useFormState()
    const dispatch = useFormDispatch()

    return (
        <div className="col-md-6">
            <label htmlFor="" className="form-label fw-semibold">
                Name <span className="text-danger">*</span>
            </label>
            <input type="text"
            className={`form-control 
                ${touched.nume && errors.nume ? "is-invalid" : ""} 
                ${touched.nume && !errors.nume ? "is-valid" : ""}`} 
            value={fields.nume}
            onChange={(e)=>dispatch({type: 'SET_FIELD', field: "nume", value: e.target.value})}
            onBlur={()=>dispatch({type: 'TOUCH_FIELD', field: "nume"})}
          />
          {touched.nume && errors.nume && (
            <div className="text-danger small mt-1">{errors.nume}</div>
          )}
        </div>
    )
}