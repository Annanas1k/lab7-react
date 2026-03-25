import { useFormDispatch, useFormState } from "../../context/useForm"
import { ReviewPersonal } from "./ReviewPersonal"
import { ReviewMasina } from "./ReviewMasina"
import { ReviewOptiuni } from "./ReviewOptiuni"
import { ReviewPret } from "./ReviewPret"

export const Step4Review = () => {
  const { isSubmitted } = useFormState()
  const dispatch = useFormDispatch()

  if (isSubmitted) {
    const orderNumber = Math.floor(Math.random() * 90000) + 10000
    return (
      <div className="card text-center p-5">
        <div style={{ fontSize: "4rem" }}>🎉</div>
        <h3 className="fw-bold text-success mt-3">Order Submitted!</h3>
        <p className="text-muted">
          Thank you! Your configuration has been sent successfully.
        </p>
        <div className="alert alert-success d-inline-block mx-auto px-5">
          <div className="text-muted small">Order Number</div>
          <div className="fw-bold fs-4">#{orderNumber}</div>
        </div>
    
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => dispatch({ type: "RESET" })}
        >
          🔄 New Configuration
        </button>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="card-header bg-white py-3">
        <h5 className="mb-0 fw-bold">✅ Review & Confirm</h5>
        <small className="text-muted">Check your configuration before submitting</small>
      </div>
      <div className="card-body p-4">
        <ReviewPersonal />
        <ReviewMasina />
        <ReviewOptiuni />
        <ReviewPret />

        {/* Submit button */}
        <div className="d-grid mt-4">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => dispatch({ type: "SUBMIT" })}
          >
            🚗 Submit Order
          </button>
        </div>

        <p className="text-muted text-center small mt-2">
          By submitting you agree to be contacted by our team.
        </p>
      </div>
    </div>
  )
}