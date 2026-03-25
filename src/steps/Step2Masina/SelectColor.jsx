import { useFormDispatch, useFormState } from "../../context/useForm"
import culori from "../../data/culori.json"

export const SelectColor = ({ errors }) => {
  const { fields, touched } = useFormState()
  const dispatch = useFormDispatch()

  if (!fields.model) return null 

  return (
    <div className="col-12">
      <label className="form-label fw-semibold">
        Color <span className="text-danger">*</span>
      </label>
      <div className="d-flex flex-wrap gap-2 mt-1">
        {culori.map((culoare) => (
          <div
            key={culoare.id}
            className={`border rounded-3 px-3 py-2 d-flex align-items-center gap-2 ${
              fields.culoare === culoare.id
                ? "border-primary border-2 bg-primary bg-opacity-10"
                : "border-secondary"
            }`}
            style={{ cursor: "pointer", transition: "all 0.2s" }}
            onClick={() => {
              dispatch({ type: "SET_FIELD", field: "culoare", value: culoare.id })
              dispatch({ type: "TOUCH_FIELD", field: "culoare" })
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: culoare.hex,
                border: "1px solid #ccc",
                flexShrink: 0,
              }}
            />
            <span className="fw-semibold small">{culoare.label}</span>
            {culoare.pret > 0 && (
              <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                +{culoare.pret} €
              </span>
            )}
          </div>
        ))}
      </div>
      {touched.culoare && errors.culoare && (
        <div className="text-danger small mt-1">{errors.culoare}</div>
      )}
    </div>
  )
}