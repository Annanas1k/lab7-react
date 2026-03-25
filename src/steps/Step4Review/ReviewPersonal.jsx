import { useFormState } from "../../context/useForm"
import orase from "../../data/orase.json"

export const ReviewPersonal = () => {
  const { fields } = useFormState()
  const oras = orase.find(o => o.id === fields.oras)

  return (
    <div className="card border-0 bg-light p-3 mb-3">
      <h6 className="fw-bold text-primary mb-3">👤 Personal Data</h6>
      <div className="row g-2">
        <div className="col-md-6">
          <span className="text-muted small">Full Name</span>
          <div className="fw-semibold">{fields.nume || "—"}</div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">Email</span>
          <div className="fw-semibold">{fields.email || "—"}</div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">Phone</span>
          <div className="fw-semibold">{fields.telefon || "—"}</div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">Age</span>
          <div className="fw-semibold">{fields.varsta || "—"}</div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">Client Type</span>
          <div className="fw-semibold capitalize">
            {fields.tipClient === "individual" ? "👤 Individual" : "🏢 Legal Entity"}
          </div>
        </div>
        <div className="col-md-6">
          <span className="text-muted small">City</span>
          <div className="fw-semibold">{oras?.label || "—"}</div>
        </div>
      </div>
    </div>
  )
}