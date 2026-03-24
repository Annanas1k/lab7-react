import { useFormDispatch, useFormState } from "../../context/useForm"



export const InputVarsta = ({errors}) =>{

    const {fields, touched} = useFormState()
    const dispatch = useFormDispatch()

    return (
        <div className="col-md-6">
            <label htmlFor="" className="form-label fw-semibold">
                Age <span className="text-danger">*</span>
            </label>
            <input type="number"
            className={`form-control 
                ${touched.varsta && errors.varsta ? "is-invalid" : ""} 
                ${touched.varsta && !errors.varsta ? "is-valid" : ""}`} 
            value={fields.varsta}
            min={18}
            max={63}
            onChange={(e)=>dispatch({type: 'SET_FIELD', field: "varsta", value: Number(e.target.value)})}
            onBlur={()=>dispatch({type: 'TOUCH_FIELD', field: "varsta"})}
          />
          {touched.varsta && errors.varsta && (
            <div className="text-danger small mt-1">{errors.varsta}</div>
          )}
        </div>
    )
}