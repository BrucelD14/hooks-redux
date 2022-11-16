import {
  GET_LIST_KONTAK,
  ADD_KONTAK,
  DELETE_KONTAK,
} from "../../actions/kontakAction";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,

  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakError: action.payload.errorMessage,
      };

    case ADD_KONTAK:
      return {
        ...state,
        addKontakResult: action.payload.data,
        addKontakLoading: action.payload.loading,
        addKontakError: action.payload.errorMessage,
      };

    case DELETE_KONTAK:
      console.log('4. masuk reducer: ', action);
      return {
        ...state,
        deleteKontakResult: action.payload.data,
        deleteKontakLoading: action.payload.loading,
        deleteKontakError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
