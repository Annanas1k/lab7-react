import { useFormState } from "../../context/useForm"
import marci from "../../data/marci.json"
import modele from "../../data/modele.json"
import culori from "../../data/culori.json"

export const ReviewMasina = () => {
  const { fields } = useFormState()

  const marca = marci.find(m => m.id === fields.marca)
  const model = modele[fields.marca]?.find(m => m.id === fields.model)
  const culoare = culori.find(c => c.id === fields.culoare)

  return (
    <div className="card border-0 bg-light p-3 mb-3">
      <h6 className="fw-bold text-primary mb-3">🚗 Selected Car</h6>
      <div className="row g-2">
        <div className="col-md-6">
          <span className="text-muted small">Brand</span>
          <div className="fw-semibold">{marca?.label || "—"}</div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">Model</span>
          <div className="fw-semibold">{model?.label || "—"}</div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">Year</span>
          <div className="fw-semibold">{fields.an || "—"}</div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">Transmission</span>
          <div className="fw-semibold">
            {fields.transmisie === "manual" ? "⚙️ Manual" : "🤖 Automatic"}
          </div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">Color</span>
          <div className="d-flex align-items-center gap-2">
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: culoare?.hex,
                border: "1px solid #ccc"
              }}
            />
            <span className="fw-semibold">{culoare?.label || "—"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}