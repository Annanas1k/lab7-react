import { useFormDispatch, useFormState } from "../../context/useForm"

const options = [
    {id: "individual", label: "individual"},
    {id: "legat_entity", label: "legal entity"}
]

export const InputTipClient = () =>{

    const {fields} = useFormState()
    const dispatch = useFormDispatch()

    return (
        <div className="col-12">
            <label htmlFor="" className="form-label fw-semibold">Client type</label>
            <div className="d-flex gap-3">
                {options.map((o)=> (
                    <div
                    key={o.id}
                    className={`border rounded p-3 flex-fill text-center ${
                        fields.tipClient === o.id
                         ? "border-primary bg-primary bg-opacity-10"
                           : "border-secondary"
                    }`}
                    style={{cursor:"pointer"}}
                    onClick={()=>dispatch({type: 'SET_FIELD', field: "tipClient", value: o.id})}
                    >
                        <input type="radio"
                        className="me-2"
                        checked={fields.tipClient === o.id}
                        onChange={()=>dispatch({type: "SET_FIELD", field: "tipClient", value: o.id})}

                        />
                        {o.label}

                    </div>
                ))}
            </div>
        </div>
    )
}