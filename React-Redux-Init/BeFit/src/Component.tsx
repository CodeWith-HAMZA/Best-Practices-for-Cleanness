import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Button, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
type JSXNode = JSX.Element | null;
 

const Component: React.FC = (): JSXNode => {

    const dispatch = useDispatch();
    const {givenValue} = useSelector(state => state.reducer);
    const value = 2

    const addBtn  = () => {
        dispatch({
            type: "increament",
        })
    }

    const addBtnByValue = () => {
        dispatch({
            type: "increamentByValue",
            payload: 10
        })

        console.log("STATE VARIABLE", givenValue)
    }
    const subBtn = () => {
        dispatch({
            type: "decreament"
        })
    }
    return (
        <>

            <Typography variant="h1">{givenValue}</Typography>
            <Button onClick={addBtn}>+</Button>
            <Button onClick={subBtn}>-</Button>
            <Button onClick={addBtnByValue}>increase by 10</Button>
        </>
    )
}

export default Component;