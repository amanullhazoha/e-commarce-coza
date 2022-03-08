import { useEffect, useState } from "react";
import { get, orderByKey, query, ref } from "firebase/database";

import { db } from "../../../firebase";

const usePayment = () => {
    const [payment, setPayment] = useState([]);
    const [error, setError] = useState("");

    const getPayment = async () => {
        const paymentRef = ref(db, "paymentMethod");
        const paymentQuery = query(paymentRef, orderByKey());
        try{
            const snapshot = await get(paymentQuery);
            if(snapshot.exists()){
                setPayment(snapshot.val());
            }
        } catch(error) {
            setError(error);
        }
    }

    useEffect(() => {
        getPayment();
    },[])

    return {
        error,
        payment,
    }
}

export default usePayment;