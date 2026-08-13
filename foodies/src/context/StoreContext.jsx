import { createContext, useState, useEffect } from "react";
import { fetchFoodList } from "../service/foodService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);

    const [quantities, setQuantities] = useState({});

    const increaseQuantity = (foodid) => {
        setQuantities(prev => ({
            ...prev,
            [foodid]: (prev[foodid] || 0) + 1    //incrementing the quantity
        }));
    }

    const decreaseQuantity = (foodid) => {
        setQuantities(prev => ({
            ...prev,
            [foodid]: Math.max(0, (prev[foodid] || 0) - 1)
        }));
    }

    const removeFromCart = (fooodId) => {
        setQuantites((prevQuantites) => {
            const updateQunatities = {...prevQuantites};
            delete updateQunatities[fooodId];
            return updateQunatities;
        })
    }

    const contextValue = {
        foodList,
        quantities,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    };

    // useEffect(() => {
    //     async function loadData() {
    //        const data = await fetchFoodList();
    //        setFoodList(data);
    //     }
    //     loadData();
    // }, []);

    useEffect(() => {
    async function loadData() {
       try {
           const response = await fetchFoodList();
           const actualArray = Array.isArray(response) ? response : (response?.data || []);
           
           setFoodList(actualArray);
       } catch (error) {
           console.error("Failed to fetch food list:", error);
           setFoodList([]); 
       }
    }
    loadData();
}, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}