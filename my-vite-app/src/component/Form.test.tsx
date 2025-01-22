import { fireEvent, render, screen } from "@testing-library/react"
import { Form } from "./Form"
import '@testing-library/jest-dom'; 

describe('test for select ', ()=>{
    test("is component visible to User", ()=>{
        render(<Form/>);
        const stateElement= screen.getByRole('combobox', {
name: "State"
        })

        expect(stateElement).toBeTruthy();

        const cityElement= screen.getByRole("combobox", {
            name: "Cities"
        })
        expect(cityElement).toBeTruthy();
    })
    test("User chosse some State", ()=>{
        render(<Form/>)
        const stateElement= screen.getByRole('combobox', {
            name: 'State'
        })
        fireEvent.change(stateElement, {target:{value: 'California'}});
        expect(stateElement).toHaveValue('California');

    })
    test("Correct set of cities Appear", ()=>{
        render(<Form/>)
        const stateElement= screen.getByRole('combobox', {
            name: 'State'
        })
        fireEvent.change(stateElement, {target:{value: 'California'}});
        const cityElement= screen.getAllByRole('combobox', {name:'Cities'});
    
       expect(screen.getByText("Los Angeles")).toBeInTheDocument();
       expect(screen.getByText("San Diego")).toBeInTheDocument();


    })
})