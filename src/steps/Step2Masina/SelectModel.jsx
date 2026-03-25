import { useFormDispatch, useFormState } from "../../context/useForm"
import modele from "../../data/modele.json"

export const SelectModel = ({ errors }) => {
  const { fields, touched } = useFormState()
  const dispatch = useFormDispatch()

  if (!fields.marca) return null // ascuns până nu e marcă

  const modeleCurente = modele[fields.marca] || []

  return (
    <div className="col-12">
      <label className="form-label fw-semibold">
        Model <span className="text-danger">*</span>
      </label>
      <div className="d-flex flex-wrap gap-2 mt-1">
        {modeleCurente.map((model) => (
          <div
            key={model.id}
            className={`border rounded-3 px-4 py-3 d-flex align-items-center gap-2 ${
              fields.model === model.id
                ? "border-primary border-2 bg-primary bg-opacity-10"
                : "border-secondary"
            }`}
            style={{ cursor: "pointer", minWidth: 140, transition: "all 0.2s" }}
            onClick={() => {
              dispatch({ type: "SET_FIELD", field: "model", value: model.id })
              dispatch({ type: "TOUCH_FIELD", field: "model" })
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🚗</span>
            <div>
              <div className="fw-semibold">{model.label}</div>
              <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                {model.pret > 0 ? `+${model.pret.toLocaleString()} €` : "Inclus"}
              </div>
            </div>
            {fields.model === model.id && (
              <span className="ms-auto text-primary fw-bold">✓</span>
            )}
          </div>
        ))}
      </div>
      {touched.model && errors.model && (
        <div className="text-danger small mt-1">{errors.model}</div>
      )}
    </div>
  )
}