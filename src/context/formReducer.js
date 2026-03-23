export const initialState = {
  currentStep: 0,
  isSubmitted: false,
  fields: {
    // Pasul 1
    nume: "",
    email: "",
    telefon: "",
    varsta: "",
    tipClient: "fizica",
    oras: "",
    // Pasul 2
    marca: "",
    model: "",
    an: "",
    culoare: "",
    transmisie: "manuala",
    // Pasul 3
    pachet: "standard",
    optiuniExtra: [],
    tipAchizitie: "cash",
    avans: 20,
    luniRate: 36,
    mesaj: "",
  },
  touched: {},
};

export function formReducer(state, action) {
  switch (action.type) {

    case "SET_FIELD":
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
      };

    case "TOGGLE_EXTRA": {
      const extras = state.fields.optiuniExtra;
      const exists = extras.includes(action.id);
      return {
        ...state,
        fields: {
          ...state.fields,
          optiuniExtra: exists
            ? extras.filter((e) => e !== action.id)
            : [...extras, action.id],
        },
      };
    }

    case "TOUCH_FIELD":
      return {
        ...state,
        touched: { ...state.touched, [action.field]: true },
      };

    case "VALIDATE_STEP": {
      const newTouched = action.fields.reduce((acc, f) => {
        acc[f] = true;
        return acc;
      }, {});
      return {
        ...state,
        touched: { ...state.touched, ...newTouched },
      };
    }

    case "SET_STEP":
      return { ...state, currentStep: action.step };

    case "RESET":
      return { ...initialState };

    case "SUBMIT":
      return { ...state, isSubmitted: true };

    default:
      return state;
  }
}