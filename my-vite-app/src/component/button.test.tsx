import Button from "./button";
import {fireEvent, render, screen, waitFor} from "@testing-library/react"

//Testing for Singup including mock backedn call 
describe("singupTest", ()=>{
//the describe help us to build a hireachy among the test
    test('Sinup render for succesfull Singup', () => { 
        render(<Button />);
        const UserEmail= screen.getByLabelText("Email");
        const UserPassword= screen.getByLabelText("Password");
        const submitButton = screen.getByRole('button' ,{name : "Signup"});
        
        fireEvent.change(UserEmail, {target: {value: "hardik@gmail.com"}});
        fireEvent.change(UserPassword, {target: {value: "HY6hy6@"}});
        
        fireEvent.click(submitButton);
        
        expect(UserEmail).toHaveProperty('value','hardik@gmail.com');
        expect(UserPassword).toHaveProperty("value", "HY6hy6@")
        
        
        
        
        
         })
        
         test("signedup Sucessfully ", async ()=>{
        const mockresponse= {message: "signedup sucessfully "};
        globalThis.fetch= jest.fn().mockResolvedValue({
            ok: true,
            JSON: async ()=> mockresponse
        });
        
            render(<Button/>)
        
            fireEvent.change(screen.getByLabelText("Email"), {target: {value: "hardik@gmail.com"}});
            fireEvent.change(screen.getByLabelText("Password"), {target: {value: "hy6hy6@"}});
        
            fireEvent.click(screen.getByRole("button", {name: "Signup"}));
            await  waitFor(()=>screen.getByText("User is registered"));
            const Singup=screen.getByText("User is registered")
            expect(Singup).toBeTruthy();
        
         })
        
         
})