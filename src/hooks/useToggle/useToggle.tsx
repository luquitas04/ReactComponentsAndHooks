import {useState} from 'react'

export default function useToggle () {
    const [isActive,setIsActive] = useState(false)
    const toggle = () => {
        setIsActive(!isActive)
    }
    return {
        isActive,
        toggle
    }
}