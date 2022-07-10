import axios from "axios";

class GetApiUrl {

    static GetApiRequest = (apiUrl)=>{
        return axios.get(apiUrl).then((response)=>{
            return response.data
        }).catch(function (error){
            console.log(error);
        });
    }


}
export default  GetApiUrl;