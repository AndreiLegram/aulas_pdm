import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useAsyncStorage = (k, v = null) => {
    const [value, setValue] = useState(v)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            const x = await AsyncStorage.getItem(k) || v
            setValue(JSON.parse(x))
            setLoading(false)
        }
        load()
    }, [])

    const set = async (v) => {
        setLoading(true)
        await AsyncStorage.setItem(k, JSON.stringify(v))
        setValue(v)
        setLoading(false)
    }

    const remove = async () => {
        setLoading(true)
        await AsyncStorage.removeItem(k)
        setValue(null)
        setLoading(false)
    }

    return [value, set, remove, loading]
}