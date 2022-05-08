import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const [change, setChanges] = useState('hello');
    

    useEffect(() =>{
        fetch(' https://git.heroku.com/sheltered-fortress-61368.git/items')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [change]) 

    return [items, setItems];
}

export default useItems;