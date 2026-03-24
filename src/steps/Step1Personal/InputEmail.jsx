import { useFormDispatch, useFormState } from "../../context/useForm"



export const InputEmail = ({errors}) =>{

    const {fields, touched} = useFormState()
    const dispatch = useFormDispatch()

    return (
        <div className="col-md-6">
            <label htmlFor="" className="form-label fw-semibold">
                Email <span className="text-danger">*</span>
            </label>
            <input type="text"
            className={`form-control 
                ${touched.email && errors.email ? "is-invalid" : ""} 
                ${touched.email && !errors.email ? "is-valid" : ""}`}
            value={fields.email}
            onChange={(e)=>dispatch({type: 'SET_FIELD', field: "email", value: e.target.value})}
            onBlur={()=>dispatch({type: 'TOUCH_FIELD', field: "email"})}
            />
          {touched.email && errors.email && (
            <div className="text-danger small mt-1">{errors.email}</div>
          )}
        </div>
    )
}