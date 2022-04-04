import React, { useEffect, useState } from 'react';

const useRechart = () => {
    const [rechart,setRechart]=useState([])
    useEffect(()=>{
        fetch('rechart.json')
        .then(res=>res.json())
        .then(data=>setRechart(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default useRechart;