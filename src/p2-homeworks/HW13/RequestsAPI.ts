import axios from "axios";

let instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const RequestsApi = {
    createRequest(checked: boolean)
    {
        let promise = instance.post('',{
            success: checked
        })
        return promise
    }
};
