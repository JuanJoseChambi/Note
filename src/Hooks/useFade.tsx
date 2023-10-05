import { useState } from "react";

export function useFade () {
    const [visible, setVisible] = useState(false)
    const [hide, setHide] = useState(false);

    function handlerVisible () {
        setVisible(true)
        setHide(false)
    }
    function handlerHide () {
        setVisible(false)
        setHide(true)
    }
    return { visible, hide, handlerVisible, handlerHide }
}
