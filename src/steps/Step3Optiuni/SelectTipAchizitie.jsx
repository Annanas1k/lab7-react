import { useFormDispatch, useFormState } from "../../context/useForm"

const optiuni = [
  { id: "cash", label: "💵 Cash", descriere: "Full payment upfront" },
  { id: "rate", label: "📅 Installments", descriere: "Monthly payments" },
  { id: "leasing", label: "🏦 Leasing", descriere: "Long term financing" },
]

export const SelectTipAchizitie = () => {
  const { fields } = useFormState()
  const dispatch = useFormDispatch()

  return (
    <div className="col-12">
      <label className="form-label fw-semibold">Purchase Type</label>
      <div className="d-flex gap-3">
        {optiuni.map((opt) => (
          <div
            key={opt.id}
            className={`border rounded p-3 flex-fill text-center ${
              fields.tipAchizitie === opt.id
                ? "border-primary bg-primary bg-opacity-10"
                : "border-secondary"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch({ type: "SET_FIELD", field: "tipAchizitie", value: opt.id })}
          >
            <input
              type="radio"
              className="me-2"
              checked={fields.tipAchizitie === opt.id}
              onChange={() => dispatch({ type: "SET_FIELD", field: "tipAchizitie", value: opt.id })}
            />
            <div className="fw-semibold">{opt.label}</div>
            <div className="text-muted small">{opt.descriere}</div>
          </div>
        ))}
      </div>
    </div>
  )
}