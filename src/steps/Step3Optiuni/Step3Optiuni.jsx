import { SelectPachet } from "./SelectPachet"
import { SelectOptiuniExtra } from "./SelectOptiuniExtra"
import { SelectTipAchizitie } from "./SelectTipAchizitie"
import { SelectLuniRate } from "./SelectLuniRate"
import { InputMesaj } from "./InputMesaj"

export function validateStep3(fields) {
  const errors = {}
  if (!fields.pachet) errors.pachet = "Select a package!"
  return errors
}

export const Step3Optiuni = () => {
  return (
    <div className="card">
      <div className="card-header bg-white py-3">
        <h5 className="mb-0 fw-bold">⚙️ Options & Financing</h5>
        <small className="text-muted">Customize your order</small>
      </div>
      <div className="card-body p-4">
        <div className="row g-4">
          <SelectPachet />
          <SelectOptiuniExtra />
          <SelectTipAchizitie />
          <SelectLuniRate />
          <InputMesaj />
        </div>
      </div>
    </div>
  )
}