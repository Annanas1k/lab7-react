import { useFormDispatch, useFormState } from "../../context/useForm"
import optiuniExtra from "../../data/optiuniExtra.json"

export const SelectOptiuniExtra = () => {
  const { fields } = useFormState()
  const dispatch = useFormDispatch()

  return (
    <div className="col-12">
      <label className="form-label fw-semibold">Extra Options</label>
      <div className="d-flex flex-wrap gap-2 mt-1">
        {optiuniExtra.map((opt) => {
          const isSelected = fields.optiuniExtra.includes(opt.id)
          return (
            <div
              key={opt.id}
              className={`border rounded-3 px-3 py-2 d-flex align-items-center gap-2 ${
                isSelected
                  ? "border-primary bg-primary bg-opacity-10"
                  : "border-secondary"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => dispatch({ type: "TOGGLE_EXTRA", id: opt.id })}
            >
              <input
                type="checkbox"
                className="form-check-input mt-0"
                checked={isSelected}
                onChange={() => dispatch({ type: "TOGGLE_EXTRA", id: opt.id })}
              />
              <div>
                <div className="fw-semibold small">{opt.label}</div>
                <div className="text-muted" style={{ fontSize: "0.72rem" }}>
                  +{opt.pret.toLocaleString()} $
                </div>
              </div>
              {isSelected && <span className="text-primary ms-1">✓</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}