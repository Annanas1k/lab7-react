import { FormProvider } from "./context/FormProvider"


function App() {

  return (
    <>
     <FormProvider>
        <div className="container py-4">
          <h1>Car Dealer Configuration</h1>
          <p>Context work</p>
        </div>
     </FormProvider>
    </>
  )
}

export default App
