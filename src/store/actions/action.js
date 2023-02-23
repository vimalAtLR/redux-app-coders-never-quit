import { createAction } from "@reduxjs/toolkit";

export const updateStatus = createAction("UPDATE_STATUS")

export const fetchName = () => {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/')
        const result = await res.json();
        console.log("result :: ", result)
        dispatch({ typs: "UPDATE_NAME", payload: result[0].name })
    }
}