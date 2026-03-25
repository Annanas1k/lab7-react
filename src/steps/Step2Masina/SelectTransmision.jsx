import { useFormDispatch, useFormState } from "../../context/useForm"

const optiuni = [
  { id: "manual", label: "Manual Gearbox", descriere: "Full change control" },
  { id: "automatic", label: "Automatic Transmission", descriere: "Maximum traffic comfort" },
]

export const SelectTransmision = () => {
  const { fields } = useFormState()
  const dispatch = useFormDispatch()

  if (!fields.model) return null

  return (
    <div className="col-12">
      <label className="form-label fw-semibold">Transmission</label>
      <div className="d-flex gap-3">
        {optiuni.map((opt) => (
          <div
            key={opt.id}
            className={`border rounded p-3 flex-fill text-center ${
              fields.transmisie === opt.id
                ? "border-primary bg-primary bg-opacity-10"
                : "border-secondary"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch({ type: "SET_FIELD", field: "transmisie", value: opt.id })}
          >
            <input
              type="radio"
              className="me-2"
              checked={fields.transmisie === opt.id}
              onChange={() => dispatch({ type: "SET_FIELD", field: "transmisie", value: opt.id })}
            />
            <div className="fw-semibold">{opt.label}</div>
            <div className="text-muted small">{opt.descriere}</div>
          </div>
        ))}
      </div>
    </div>
  )
}