import { useFormDispatch, useFormState } from "../../context/useForm"

export const InputMesaj = () => {
  const { fields } = useFormState()
  const dispatch = useFormDispatch()

  return (
    <div className="col-12">
      <label className="form-label fw-semibold">Additional Notes</label>
      <textarea
        className="form-control"
        rows={3}
        placeholder="Any special requirements or questions..."
        value={fields.mesaj}
        onChange={(e) => dispatch({ type: "SET_FIELD", field: "mesaj", value: e.target.value })}
      />
      <div className="text-muted small mt-1">
        {fields.mesaj.length} / 300 characters
      </div>
    </div>
  )
}