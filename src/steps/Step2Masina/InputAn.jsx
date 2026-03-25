import { useFormDispatch, useFormState } from "../../context/useForm"


export const InputAn = ({errors}) =>{
    const {fields, touched} = useFormState()
    const dispatch = useFormDispatch()

    if(!fields.model) return null

    return (
    <div className="col-md-6">
      <label className="form-label fw-semibold">
        Year <span className="text-danger">*</span>
      </label>
      <input
        type="number"
        className={`form-control
          ${touched.an && errors.an ? "is-invalid" : ""}
          ${touched.an && !errors.an ? "is-valid" : ""}`}
        min={2020}
        max={2026}
        value={fields.an}
        onChange={(e) => dispatch({ type: "SET_FIELD", field: "an", value: e.target.value })}
        onBlur={() => dispatch({ type: "TOUCH_FIELD", field: "an" })}
      />
      {touched.an && errors.an && (
        <div className="text-danger small mt-1">{errors.an}</div>
      )}
    </div>
  )
    
}