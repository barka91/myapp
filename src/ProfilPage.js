import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Post from "./Post"
import ProfilBox from './ProfilBox'

function ProfilPage({setProfilFriend,userid}) {
    const [list_post, setListPost] = useState([]);
    const [p,setP] = useState(0)
    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {
        api.get("/api/post/"+(userid+""=="undefined"?"":userid)
        ).then(response => {

            setListPost(response.data) 
        }) 
        
    },[userid]);

    return (
        <div className='profilpage'>
            <div className='profil elem'>
                <ProfilBox userid={userid} setProfilFriend={setProfilFriend}/>
                {(list_post).map(item => ( 
                    <Post postid={item._id}/>
                ))}       
            </div>

        </div>

    ) 
}
export default ProfilPage;