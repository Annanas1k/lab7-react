import { useFormState } from "../../context/useForm"
import marci from "../../data/marci.json"
import modele from "../../data/modele.json"
import culori from "../../data/culori.json"
import pachete from "../../data/pachete.json"
import optiuniExtra from "../../data/optiuniExtra.json"

export const ReviewPret = () => {
  const { fields } = useFormState()

  const marca = marci.find(m => m.id === fields.marca)
  const model = modele[fields.marca]?.find(m => m.id === fields.model)
  const culoare = culori.find(c => c.id === fields.culoare)
  const pachet = pachete.find(p => p.id === fields.pachet)
  const extraTotal = optiuniExtra
    .filter(o => fields.optiuniExtra.includes(o.id))
    .reduce((sum, o) => sum + o.pret, 0)

  const pretBaza = marca?.pretBaza || 0
  const pretModel = model?.pret || 0
  const pretCuloare = culoare?.pret || 0
  const pretPachet = pachet?.pret || 0
  const pretTotal = pretBaza + pretModel + pretCuloare + pretPachet + extraTotal

  const pretFinantat = pretTotal * (1 - fields.avans / 100)
  const rataLunara = Math.round(pretFinantat / fields.luniRate)

  return (
    <div className="card border-primary p-3">
      <h6 className="fw-bold text-primary mb-3">💰 Price Summary</h6>

      <table className="table table-sm mb-0">
        <tbody>
          <tr>
            <td className="text-muted">Base price ({marca?.label})</td>
            <td className="text-end">{pretBaza.toLocaleString()} $</td>
          </tr>
          {pretModel > 0 && (
            <tr>
              <td className="text-muted">Model ({model?.label})</td>
              <td className="text-end">+{pretModel.toLocaleString()} $</td>
            </tr>
          )}
          {pretCuloare > 0 && (
            <tr>
              <td className="text-muted">Color ({culoare?.label})</td>
              <td className="text-end">+{pretCuloare.toLocaleString()} $</td>
            </tr>
          )}
          {pretPachet > 0 && (
            <tr>
              <td className="text-muted">Package ({pachet?.label})</td>
              <td className="text-end">+{pretPachet.toLocaleString()} $</td>
            </tr>
          )}
          {extraTotal > 0 && (
            <tr>
              <td className="text-muted">Extra options</td>
              <td className="text-end">+{extraTotal.toLocaleString()} $</td>
            </tr>
          )}
          <tr className="border-top">
            <td className="fw-bold fs-5">Total</td>
            <td className="text-end fw-bold fs-5 text-primary">
              {pretTotal.toLocaleString()} $
            </td>
          </tr>
        </tbody>
      </table>

      {fields.tipAchizitie !== "cash" && (
        <div className="alert alert-primary mt-3 mb-0 text-center">
          <div className="text-muted small">Monthly payment (~)</div>
          <div className="fw-bold fs-4">{rataLunara.toLocaleString()} $ / month</div>
          <div className="text-muted small">
            Down payment {fields.avans}% ({Math.round(pretTotal * fields.avans / 100).toLocaleString()} €)
            · {fields.luniRate} months
          </div>
        </div>
      )}
    </div>
  )
}