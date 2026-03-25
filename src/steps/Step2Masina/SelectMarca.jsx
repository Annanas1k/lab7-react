import { useFormDispatch, useFormState } from "../../context/useForm"
import marci from "../../data/marci.json"



export const SelectMarca = ({ errors }) => {
  const { fields, touched } = useFormState()
  const dispatch = useFormDispatch()

  return (
    <div className="col-12">
      <label className="form-label fw-semibold">
        Brand <span className="text-danger">*</span>
      </label>
      <div className="d-flex flex-wrap gap-2 mt-1">
        {marci.map((marca) => (
          <div
            key={marca.id}
            className={`border rounded-3 px-4 py-3 d-flex align-items-center gap-2 ${
              fields.marca === marca.id
                ? "border-primary border-2 bg-primary bg-opacity-10"
                : "border-secondary"
            }`}
            style={{ cursor: "pointer", minWidth: 140, transition: "all 0.2s" }}
            onClick={() => {
              dispatch({ type: "SET_FIELD", field: "marca", value: marca.id })
              dispatch({ type: "SET_FIELD", field: "model", value: "" })
              dispatch({ type: "TOUCH_FIELD", field: "marca" })
            }}
          >
            <div>
              <div className="fw-semibold">{marca.label}</div>
              <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                de la {marca.pretBaza.toLocaleString()} $
              </div>
            </div>
            {fields.marca === marca.id && (
              <span className="ms-auto text-primary fw-bold">✓</span>
            )}
          </div>
        ))}
      </div>
      {touched.marca && errors.marca && (
        <div className="text-danger small mt-1">{errors.marca}</div>
      )}
    </div>
  )
}