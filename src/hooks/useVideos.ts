import {useState,useEffect} from 'react';
import youtube,{params} from '../api/youtube';

export default (searchTerm:string):[Array<any>,(term:string)=>Promise<void>]=>{

    useEffect(()=>{
        search(searchTerm);
    },[searchTerm])

    const [videos,setVideos] = useState<Array<any>>([]);

    const search = async (term:string)=>{
        const res = await youtube.get('/search',{
            params:{...params,q:term}
        })

        const { items } = res.data;        
        setVideos(items)
    }

return [videos, search];
}