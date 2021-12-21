import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types"

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch("/logs")
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data,
    })
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data })
  }
}
// ---- Other way of writing it ----

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading()

//     const res = await fetch("/logs")
//     const data = await res.json()

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     })
//   }
// }

// Add a log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()

    dispatch({
      type: ADD_LOG,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    })
  }
}

//Set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
