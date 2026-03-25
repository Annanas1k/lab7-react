import { FormProvider } from "./context/FormProvider"
import { useFormDispatch, useFormState } from "./context/useForm"
import { Header } from "./Header/Header"
import { Step1Personal, validateStep1 } from "./steps/Step1Personal/Step1Personal"
import { Step2Masina, validateStep2 } from "./steps/Step2Masina/Step2Masina"
import { Step3Optiuni, validateStep3 } from "./steps/Step3Optiuni/Step3Optiuni"
import { Step4Review } from "./steps/Step4Review/Step4Review"
import { Stepper } from "./steps/Steper"
import { LivePreview } from "./components/LivePreview"
const STEP_FIELDS = [
  ["nume", "email", "telefon", "varsta", "oras"],       
  ["marca", "model", "an", "culoare"],                   
  ["pachet"],                                            
]

function AppContent() {
  const { currentStep, fields, isSubmitted } = useFormState()
  const dispatch = useFormDispatch()

  const steps = [
    <Step1Personal />,
    <Step2Masina />,
    <Step3Optiuni />,
    <Step4Review />,
  ]

  const validators = [
    validateStep1,
    validateStep2,
    validateStep3,
  ]

  const handleNext = () => {
    // Dacă mai avem validator pentru pasul curent
    if (validators[currentStep]) {
      const errors = validators[currentStep](fields)
      const hasErrors = Object.keys(errors).length > 0

      // Marchează toate câmpurile pasului ca touched
      dispatch({
        type: "VALIDATE_STEP",
        fields: STEP_FIELDS[currentStep]
      })

      if (hasErrors) return // blochează dacă sunt erori
    }

    dispatch({ type: "SET_STEP", step: currentStep + 1 })
  }

  const handleBack = () => {
    dispatch({ type: "SET_STEP", step: currentStep - 1 })
  }

  return (
  <div>
    <Header />
    <div className="container py-4" style={{ maxWidth: "1200px" }}>
      <Stepper />

      <div className="row g-4 mt-2">
        <div className="col-md-7">
          {steps[currentStep]}

          {!isSubmitted && (
            <div className="d-flex justify-content-between align-items-center mt-4">
              <button
                className="btn btn-secondary"
                disabled={currentStep === 0}
                onClick={handleBack}
              >← Back</button>

              <span className="text-muted small">Step {currentStep + 1} / 4</span>

              {currentStep < 3 && (
                <button className="btn btn-primary" onClick={handleNext}>
                  Next →
                </button>
              )}
              {currentStep === 3 && <div style={{ width: 80 }} />}
            </div>
          )}
        </div>

        <div className="col-md-5">
          <LivePreview />
        </div>
      </div>
    </div>
  </div>
  )
}

export default function App() {
  return (
    <FormProvider>
      <AppContent />
    </FormProvider>
  )
}