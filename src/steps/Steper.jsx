import { useFormState } from "../context/useForm"



const steps = [
  { id: 0, label: "Personal Data", icon: "👤" },
  { id: 1, label: "Selecat Car", icon: "🚗" },
  { id: 2, label: "Extra Options", icon: "⚙️" },
  { id: 3, label: "Confirm", icon: "✅" },
]



export const Stepper =() => {
const {currentStep} = useFormState()

    return(
        <div className="nard shadow-sm mb-4">
            <div className="card-body py-3">
                <div className="d-flex justify-content-between position-relative">
                    {/* Linia de progres în spate */}
          <div
            className="position-absolute top-50 start-0 translate-middle-y bg-secondary"
            style={{ height: "2px", width: "100%", zIndex: 0 }}
          />
          <div
            className="position-absolute top-50 start-0 translate-middle-y bg-primary"
            style={{
              height: "2px",
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
              zIndex: 1,
              transition: "width 0.4s ease",
            }}
          />

          {/* Pașii */}
          {steps.map((pas) => {
            const isCompleted = currentStep > pas.id;
            const isCurrent = currentStep === pas.id;

            return (
              <div
                key={pas.id}
                className="d-flex flex-column align-items-center"
                style={{ zIndex: 2, flex: 1 }}
              >
                {/* Cercul */}
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center fw-bold
                    ${isCompleted ? "bg-primary text-white" : ""}
                    ${isCurrent ? "bg-primary text-white border border-3 border-primary" : ""}
                    ${!isCompleted && !isCurrent ? "bg-white border border-2 border-secondary text-secondary" : ""}
                  `}
                  style={{
                    width: 42,
                    height: 42,
                    fontSize: "1rem",
                    boxShadow: isCurrent ? "0 0 0 4px rgba(13,110,253,0.2)" : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isCompleted ? "✓" : pas.icon}
                </div>

                {/* Label */}
                <span
                  className={`mt-2 text-center small ${
                    isCurrent ? "fw-bold text-primary" : ""
                  } ${
                    !isCompleted && !isCurrent ? "text-secondary" : ""
                  }`}
                  style={{ fontSize: "0.75rem" }}
                >
                  {pas.label}
                </span>
              </div>
            );
          })}
                </div>
            </div>
        </div>
    )
}