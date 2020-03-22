import React,{useState,useEffect} from "react";
import axios from 'axios';
function GetResults(query) {

    const [MyData,setMyData]=useState([]);
    query['s']=true;

    let cancel;
useEffect(()=>{
    axios({
        methode:"GET",
        url:"product/getProducts",
        params:query,
        cancelToken: new axios.CancelToken(c=>cancel=c)
    }).then(res=>{
      //  console.log(res.data);
        setMyData(MyData=res.data )
    }).catch(err=>{
        if (axios.isCancel(err)) return;
    })
    return ()=>cancel()
},[query])



    return {MyData};
//
}
export default GetResults;

