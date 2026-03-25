import { useFormDispatch, useFormState } from "../../context/useForm"

export const SelectLuniRate = () => {
  const { fields } = useFormState()
  const dispatch = useFormDispatch()

  if (fields.tipAchizitie === "cash") return null

  return (
    <div className="col-12">
      <div className="card border-0 bg-light p-4">
        <div className="row g-4">

          <div className="col-md-6">
            <label className="form-label fw-semibold">Down Payment</label>
            <div
              className="bg-primary text-white rounded-3 text-center py-2 mb-3"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              {fields.avans}%
            </div>
            <input
              type="range"
              className="form-range"
              min={10}
              max={80}
              step={5}
              value={fields.avans}
              onChange={(e) => dispatch({ type: "SET_FIELD", field: "avans", value: Number(e.target.value) })}
            />
            <div className="d-flex justify-content-between mt-1">
              {[10, 20, 30, 40, 50, 60, 70, 80].map((v) => (
                <div key={v} className="d-flex flex-column align-items-center">
                  <div
                    style={{
                      width: 2,
                      height: 6,
                      backgroundColor: fields.avans >= v ? "#0d6efd" : "#ccc"
                    }}
                  />
                  <span
                    className="small"
                    style={{
                      fontSize: "0.65rem",
                      color: fields.avans === v ? "#0d6efd" : "#aaa",
                      fontWeight: fields.avans === v ? "bold" : "normal"
                    }}
                  >
                    {v}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Duration</label>
            <div
              className="bg-primary text-white rounded-3 text-center py-2 mb-3"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              {fields.luniRate} <span style={{ fontSize: "1rem" }}>months</span>
            </div>
            <input
              type="range"
              className="form-range"
              min={12}
              max={60}
              step={12}
              value={fields.luniRate}
              onChange={(e) => dispatch({ type: "SET_FIELD", field: "luniRate", value: Number(e.target.value) })}
            />
            <div className="d-flex justify-content-between mt-1">
              {[12, 24, 36, 48, 60].map((v) => (
                <div key={v} className="d-flex flex-column align-items-center">
                  <div
                    style={{
                      width: 2,
                      height: 6,
                      backgroundColor: fields.luniRate >= v ? "#0d6efd" : "#ccc"
                    }}
                  />
                  <span
                    className="small"
                    style={{
                      fontSize: "0.7rem",
                      color: fields.luniRate === v ? "#0d6efd" : "#aaa",
                      fontWeight: fields.luniRate === v ? "bold" : "normal"
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}