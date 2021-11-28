import axios from "axios";
import React, {useState} from "react";


const baseURL = "https://api.github.com/users/RomanOliva10";
const user = {id:"", name:"", avatar:""};

const MyUser = () =>{
    const [data, setData] = useState(user);
    axios.get(baseURL)
    .then((res)=>{
        setData(
            data.id=res.data.id,
            data.name=res.data.login,
            data.avatar=res.data.avatar_url
        )
    })
    .catch(err=>err)


    return(
        <div>
            <h1>Datos</h1>
            <div>
                <p>ID: {user.id}</p>
                <p>Name: {user.name} </p>
                <div>
                    <p>Avatar:</p>
                    <img src={user.avatar} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default MyUser;             