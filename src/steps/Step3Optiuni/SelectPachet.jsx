import { useFormDispatch, useFormState } from "../../context/useForm"
import pachete from "../../data/pachete.json"

export const SelectPachet = () => {
  const { fields } = useFormState()
  const dispatch = useFormDispatch()

  const pachetSelectat = pachete.find(p => p.id === fields.pachet)

  return (
    <div className="col-12">
      <label className="form-label fw-semibold">
        Package <span className="text-danger">*</span>
      </label>

      <div className="d-flex gap-3 mb-3">
        {pachete.map((pachet) => {
          const isSelected = fields.pachet === pachet.id
          return (
            <div
              key={pachet.id}
              className={`border rounded p-3 flex-fill text-center ${
                isSelected
                  ? "border-primary bg-primary bg-opacity-10"
                  : "border-secondary"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => dispatch({ type: "SET_FIELD", field: "pachet", value: pachet.id })}
            >
              <input
                type="radio"
                className="me-2"
                checked={isSelected}
                onChange={() => dispatch({ type: "SET_FIELD", field: "pachet", value: pachet.id })}
              />
              <span className="fw-bold">{pachet.label}</span>
              <div className="text-muted small mt-1">
                {pachet.pret > 0 ? `+${pachet.pret.toLocaleString()} $` : "Included"}
              </div>
            </div>
          )
        })}
      </div>

      {pachetSelectat && (
        <div className="border rounded p-3 bg-light w-100">
          <p className="fw-semibold mb-2">
            ✅ Included in <span className="text-primary">{pachetSelectat.label}</span>:
          </p>
          <div className="row g-2">
            {pachetSelectat.dotari.map((d, i) => (
              <div key={i} className="col-md-4 col-6">
                <div className="d-flex align-items-center gap-2">
                  <span className="text-primary fw-bold">✓</span>
                  <span className="small">{d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}