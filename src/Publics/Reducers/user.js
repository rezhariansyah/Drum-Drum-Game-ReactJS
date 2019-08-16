const initialState = {
  userList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  userLogin: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_LOADING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: [...state.userList, action.payload.data]
      };
    //highest score
    case "HIGHEST_SCORE_LOADING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "HIGHEST_SCORE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "HIGHEST_SCORE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: [...state.userList, action.payload.data]
      };
    //data user
    case "GET_ALL_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ALL_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_USER_FULFILLED":
      console.log("BABABA", action.payload.data.result);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: action.payload.data.result
      };
    //LOGIN USER
    case `LOGIN_USER_PENDING`:
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case `LOGIN_USER_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case `LOGIN_USER_FULFILLED`:
      console.log(action.payload.data.result);
      const token = action.payload.data.result.token;
      const id_user = action.payload.data.result.id_user;
      const fullname = action.payload.data.result.fullname;
      const status = action.payload.data.result.status;
      const role = action.payload.data.result.role;
      localStorage.setItem("token", token);
      localStorage.setItem("id_user", id_user);
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("status", status);
      localStorage.setItem("role", role);
      console.log("roleeee", role);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userLogin: action.payload.data,
        token: action.payload.data
      };
    default:
      return state;
  }
};

export default user;
