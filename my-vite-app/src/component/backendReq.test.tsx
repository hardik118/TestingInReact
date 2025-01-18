import {  screen, render, fireEvent, waitFor } from "@testing-library/react"
import { BackednReq } from "./backendReq"
import { act } from "react"

describe("rendering Blogs from backend", ()=>{
afterAll(()=>jest.clearAllMocks());

test("intial test", ()=>{
    const btnEle= screen.getByRole('button', {
        name: 'NextReq'
    })

    expect(btnEle).toBeTruthy();
})

test('handle error with any brakdown', async()=>{
    globalThis.fetch=jest.fn(()=>Promise.resolve({
        ok: false,
        status: 500,
        json: ()=>Promise.resolve({error: "some internal sererv error has occured"})
    }as Response)  )  
    render(<BackednReq/>);
    
    const buttonElement= screen.getByRole('button', {
        name: "NextReq"
    })

    await act(async()=>  fireEvent.click( buttonElement))

    const errorMsg= await screen.findByRole('heading', {
        name: "some error occured"
    })
    expect(errorMsg).toBeTruthy();

})




    test("check for blog from backend", async ()=>{

         globalThis.fetch= jest.fn(()=>
            Promise.resolve({
                ok: true, 
                status: 200,
json: ()=>Promise.resolve([
    {id: 1,title: "hey handomse", content: "this is info for mr hardik rao "},
    {id:2,title: "hey beutiful", content: "hrdik yadab its the info for you rao "}
]),
            } as Response)
         )
        render(<BackednReq/>);
        const buttonElement= screen.getByRole('button', {
            name:'NextReq'
        }) 

       await act(async()=> fireEvent.click(buttonElement))

      
       const h1ElementOne= screen.getByRole('heading', {
        name:'hey handomse',
    })
    

    
        const h1ElementTwo= screen.getByRole('heading', {
            name: 'hey beutiful',
        })

        expect(h1ElementOne).toBeTruthy();
        expect(h1ElementTwo).toBeTruthy();


    })
})