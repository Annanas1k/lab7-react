import { useFormState } from "../context/useForm"
import marci from "../data/marci.json"
import modele from "../data/modele.json"
import culori from "../data/culori.json"
import pachete from "../data/pachete.json"
import optiuniExtra from "../data/optiuniExtra.json"

export const LivePreview = () => {
  const { fields } = useFormState()

  const marca = marci.find(m => m.id === fields.marca)
  const model = modele[fields.marca]?.find(m => m.id === fields.model)
  const culoare = culori.find(c => c.id === fields.culoare)
  const pachet = pachete.find(p => p.id === fields.pachet)
  const extraSelectate = optiuniExtra.filter(o => fields.optiuniExtra.includes(o.id))

  const pretBaza = marca?.pretBaza || 0
  const pretModel = model?.pret || 0
  const pretCuloare = culoare?.pret || 0
  const pretPachet = pachet?.pret || 0
  const extraTotal = extraSelectate.reduce((sum, o) => sum + o.pret, 0)
  const pretTotal = pretBaza + pretModel + pretCuloare + pretPachet + extraTotal

  const pretFinantat = pretTotal * (1 - fields.avans / 100)
  const rataLunara = fields.luniRate > 0
    ? Math.round(pretFinantat / fields.luniRate)
    : 0

  return (
    <div className="card shadow-sm sticky-top" style={{ top: "1rem" }}>

      <div className="card-header bg-dark text-white text-center py-3">
        <h6 className="mb-0 fw-bold">🚗 Live Configuration</h6>
      </div>

      <div className="card-body p-3">

        <div className="text-center mb-3">
          <div
            className="rounded-3 mb-2 d-flex align-items-center justify-content-center"
            style={{
              height: 80,
              backgroundColor: culoare?.hex || "#e0e0e0",
              transition: "background-color 0.4s ease",
              fontSize: "2.5rem"
            }}
          >
            🚗
          </div>
          <h6 className="fw-bold mb-0">
            {marca && model
              ? `${marca.label} ${model.label}`
              : <span className="text-muted">No car selected</span>
            }
          </h6>
          {fields.an && (
            <small className="text-muted">{fields.an}</small>
          )}
        </div>

        <hr className="my-2" />

        {fields.nume && (
          <PreviewRow icon="👤" label="Client" value={fields.nume} />
        )}
        {fields.oras && (
          <PreviewRow
            icon="📍"
            label="City"
            value={fields.oras}
          />
        )}

        {culoare && (
          <PreviewRow
            icon="🎨"
            label="Color"
            value={
              <span className="d-flex align-items-center gap-1">
                <span
                  style={{
                    width: 14, height: 14,
                    borderRadius: "50%",
                    backgroundColor: culoare.hex,
                    border: "1px solid #ccc",
                    display: "inline-block"
                  }}
                />
                {culoare.label}
              </span>
            }
          />
        )}

        {fields.transmisie && (
          <PreviewRow
            icon="⚙️"
            label="Transmission"
            value={fields.transmisie === "manual" ? "Manual" : "Automatic"}
          />
        )}

        {pachet && (
          <PreviewRow icon="📦" label="Package" value={pachet.label} />
        )}

        {extraSelectate.length > 0 && (
          <>
            <div className="text-muted small mt-2 mb-1">✅ Extra Options:</div>
            <div className="d-flex flex-wrap gap-1 mb-2">
              {extraSelectate.map(opt => (
                <span key={opt.id} className="badge bg-secondary" style={{ fontSize: "0.7rem" }}>
                  {opt.label}
                </span>
              ))}
            </div>
          </>
        )}

        <hr className="my-2" />

        {pretTotal > 0 && (
          <>
            <table className="table table-sm small mb-0">
              <tbody>
                {pretBaza > 0 && (
                  <tr>
                    <td className="text-muted border-0 py-1">Base price</td>
                    <td className="text-end border-0 py-1">{pretBaza.toLocaleString()} $</td>
                  </tr>
                )}
                {pretModel > 0 && (
                  <tr>
                    <td className="text-muted border-0 py-1">Model</td>
                    <td className="text-end border-0 py-1">+{pretModel.toLocaleString()} $</td>
                  </tr>
                )}
                {pretCuloare > 0 && (
                  <tr>
                    <td className="text-muted border-0 py-1">Color</td>
                    <td className="text-end border-0 py-1">+{pretCuloare.toLocaleString()} $</td>
                  </tr>
                )}
                {pretPachet > 0 && (
                  <tr>
                    <td className="text-muted border-0 py-1">Package</td>
                    <td className="text-end border-0 py-1">+{pretPachet.toLocaleString()} $</td>
                  </tr>
                )}
                {extraTotal > 0 && (
                  <tr>
                    <td className="text-muted border-0 py-1">Extras</td>
                    <td className="text-end border-0 py-1">+{extraTotal.toLocaleString()} $</td>
                  </tr>
                )}
                <tr className="border-top">
                  <td className="fw-bold border-0 py-2">Total</td>
                  <td className="text-end fw-bold text-primary border-0 py-2 fs-6">
                    {pretTotal.toLocaleString()} $
                  </td>
                </tr>
              </tbody>
            </table>

            {fields.tipAchizitie !== "cash" && rataLunara > 0 && (
              <div className="alert alert-primary py-2 text-center mt-2 mb-0">
                <div className="text-muted small">Monthly ~</div>
                <div className="fw-bold">{rataLunara.toLocaleString()} $ / month</div>
                <div className="text-muted" style={{ fontSize: "0.7rem" }}>
                  {fields.avans}% down · {fields.luniRate} months
                </div>
              </div>
            )}
          </>
        )}

        {pretTotal === 0 && (
          <div className="text-center text-muted py-3">
            <div style={{ fontSize: "2rem" }}>🔧</div>
            <small>Start configuring your car!</small>
          </div>
        )}

      </div>
    </div>
  )
}

function PreviewRow({ icon, label, value }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-1">
      <span className="text-muted small">{icon} {label}</span>
      <span className="fw-semibold small text-end" style={{ maxWidth: "60%" }}>{value}</span>
    </div>
  )
}