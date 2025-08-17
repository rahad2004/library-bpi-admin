import {
  AUTHENTICATED,
  CLEAR_MESSAGE,
  GET_FIXED_VALUES,
  GET_SINGLE_BOOK,
  GET_SINGLE_TEACHER,
  GET_TEACHERS,
  LOADING_END,
  LOADING_START,
  REGISTER_SUCCESS,
  SIGNUP_SUCCESS,
  GET_STUDENTS,
  GET_SINGLE_STUDENT,
  GET_ADMINS,
  GET_SINGLE_ADMIN,
  MESSAGE,
  CLEAR_PATH,
} from "./Constant";

const initialState = {
  isAuthenticated: false,
  auth_loaded: false,
  profile: {},
  isLoading: false,
  loaded: false,
  message: {},
  path: "",
  signupEmail: "",
  registerSuccess: "",
  fixedValues: {},
  singleBook: {},
  teachers: [],
  teacherDetails: {},
  students: [],
  studentDetails: {},
  admins: [],
  adminDetails: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case "Auth_Loaded":
      return {
        ...state,
        auth_loaded: true,
      };
    case "GET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    case MESSAGE:
      return {
        ...state,
        message: {
          message: action.payload.message,
          status: action.payload.status,
        },
        path: action.payload.path,
      };
    case CLEAR_PATH:
      return {
        ...state,
        path: "",
      };
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
        loaded: false,
      };
    case LOADING_END:
      return {
        ...state,
        isLoading: false,
        loaded: true,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: {},
        registerSuccess: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        message: { message: action.payload.message, status: "success" },
        signupEmail: action.payload.email,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: { message: action.payload, status: "success" },
        registerSuccess: true,
        signupEmail: "",
      };

    case GET_FIXED_VALUES:
      return {
        ...state,
        fixedValues: action.payload,
      };
    case GET_SINGLE_BOOK:
      return {
        ...state,
        singleBook: action.payload,
      };
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };
    case GET_SINGLE_TEACHER:
      return {
        ...state,
        teacherDetails: action.payload,
      };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case GET_SINGLE_STUDENT:
      return {
        ...state,
        studentDetails: action.payload,
      };
    case GET_ADMINS:
      return {
        ...state,
        admins: action.payload,
      };
    case GET_SINGLE_ADMIN:
      return {
        ...state,
        adminDetails: action.payload,
      };
    default:
      return state;
  }
};
