import { FormProvider } from "./context/FormProvider"
import { useFormDispatch, useFormState } from "./context/useForm"
import { Header } from "./Header/Header"
import { Step1Personal } from "./steps/Step1Personal/Step1Personal"
import { Step2Masina } from "./steps/Step2Masina/Step2Masina"
import { Stepper } from "./steps/Steper"

function AppContent() {
  const { currentStep } = useFormState()
  const dispatch = useFormDispatch()

  return (
    <div className="container py-4">
      <Header />
      <Stepper />



      <div className="d-flex gap-2 justify-content-center mt-3">
        <button
          className="btn btn-secondary"
          disabled={currentStep === 0}
          onClick={() => dispatch({ type: "SET_STEP", step: currentStep - 1 })}
        >← Back</button>

        <span>Step {currentStep + 1} / 4</span>

        <button
          className="btn btn-primary"
          disabled={currentStep === 3}
          onClick={() => dispatch({ type: "SET_STEP", step: currentStep + 1 })}
        >Next →</button>
      </div>
    </div>
  )
}

// ✅ App doar inveleste cu Provider
export default function App() {
  return (
    <FormProvider>
      <AppContent />
    </FormProvider>
  )
}
