import axios from 'axios';

export async function GetContactList(data, onSuccess, onError){
    try{
        const axiosInstance = axios.create({
            baseURL: "https://reqres.in"
        });
        const res = await axiosInstance.get("/api/users", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log("Printing data comes from api call.", res);
        onSuccess && onSuccess(res.data)
    }
    catch(err){
        console.log("Error while calling api.", err);
        onError && onError(err);
    }
}