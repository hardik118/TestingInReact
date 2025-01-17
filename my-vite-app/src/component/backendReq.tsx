import { Dispatch, SetStateAction, useEffect, useState } from "react"
interface blogs{
    content: string ,
    title: string,
    id: number
}

const GetBlosgFromBackedn= async(setBlogs: Dispatch<SetStateAction<blogs[]>>, setmsg: Dispatch<SetStateAction<string>>)=>{
    const object={
        name: 'hardik',
        id: '1'
    }
    const response =  await fetch("url", {
        method:"post",
headers:{
"token": "tokenn12233",
},
        body: JSON.stringify(object)

    })
    if(!response.ok){
        setmsg('some error occured');
        
    }else{
    const data: blogs[]= await response.json();
  setBlogs(data)}

}

export const BackednReq= ()=>{
    const [blogs, setBlogs]= useState<blogs[]>([]);
    const [msg, setmsg]= useState('');

    
    return <div>
        <div> 
            <button onClick={()=>{
            GetBlosgFromBackedn(setBlogs, setmsg)
            }} type="submit">NextReq</button>
        </div>
        {
            msg == '' && blogs.map(blog=>(
                <div key={blog.id}>
                  <h1 >{blog.title}</h1>
                  <h3>{blog.content}</h3>
                </div>
                 ))
        }{
            msg != '' && <h1>some error occured</h1>
        }
        

    </div>

}