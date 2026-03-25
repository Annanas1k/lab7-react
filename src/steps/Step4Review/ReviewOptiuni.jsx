import { useFormState } from "../../context/useForm"
import pachete from "../../data/pachete.json"
import optiuniExtra from "../../data/optiuniExtra.json"

export const ReviewOptiuni = () => {
  const { fields } = useFormState()

  const pachet = pachete.find(p => p.id === fields.pachet)
  const extraSelectate = optiuniExtra.filter(o => fields.optiuniExtra.includes(o.id))

  return (
    <div className="card border-0 bg-light p-3 mb-3">
      <h6 className="fw-bold text-primary mb-3">⚙️ Options & Financing</h6>
      <div className="row g-2">

        <div className="col-md-6">
          <span className="text-muted small">Package</span>
          <div className="fw-semibold">{pachet?.label || "—"}</div>
        </div>

        <div className="col-md-6">
          <span className="text-muted small">Purchase Type</span>
          <div className="fw-semibold capitalize">
            {fields.tipAchizitie === "cash" && "💵 Cash"}
            {fields.tipAchizitie === "rate" && "📅 Installments"}
            {fields.tipAchizitie === "leasing" && "🏦 Leasing"}
          </div>
        </div>

        {fields.tipAchizitie !== "cash" && (
          <>
            <div className="col-md-6">
              <span className="text-muted small">Down Payment</span>
              <div className="fw-semibold">{fields.avans}%</div>
            </div>
            <div className="col-md-6">
              <span className="text-muted small">Duration</span>
              <div className="fw-semibold">{fields.luniRate} months</div>
            </div>
          </>
        )}

        <div className="col-12">
          <span className="text-muted small">Extra Options</span>
          {extraSelectate.length > 0 ? (
            <div className="d-flex flex-wrap gap-1 mt-1">
              {extraSelectate.map(opt => (
                <span key={opt.id} className="badge bg-primary bg-opacity-75">
                  ✓ {opt.label}
                </span>
              ))}
            </div>
          ) : (
            <div className="fw-semibold">None selected</div>
          )}
        </div>

        {fields.mesaj && (
          <div className="col-12">
            <span className="text-muted small">Additional Notes</span>
            <div className="fw-semibold fst-italic">"{fields.mesaj}"</div>
          </div>
        )}

      </div>
    </div>
  )
}