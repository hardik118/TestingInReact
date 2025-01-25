import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';
import { useState } from 'react';
import { keyboard } from '@testing-library/user-event/dist/cjs/keyboard/index.js';
import { wait } from '@testing-library/user-event/dist/cjs/utils/index.js';

describe("Understanding what are some user-evetns",  ()=>{
    
   test("Recording user Input in textbox", async ()=>{
    render(<Counter/>);
    const User= userEvent.setup({
        advanceTimers: jest.advanceTimersByTime,
        applyAccept: true,
        autoModify: true,
        delay:100,
        document : document,
        
    })
    const nameInput= screen.getByRole('textbox')

    await User.type(nameInput, "hello world");
    expect(nameInput).toHaveValue("hello world");
   })

   test("doing pointer ineraction on the Component",async ()=>{
    jest.useRealTimers();
    const user= userEvent.setup();
    jest.spyOn(window, "alert").mockImplementation(()=>{});
    render(<Counter/>);
    const buttonElement=await  screen.findByRole("button", {
        name: "Send"
    })

    await user.click(buttonElement);
expect(window.alert).toHaveBeenCalledTimes(1);
expect(window.alert).toHaveBeenCalledWith("plases pass the name in input file before subitting ");

   }, 15000)

   test("using keyboorad api", async()=>{
    const user= userEvent.setup();
    render(<Counter/>);
    const inputElement= await screen.findByRole('textbox');
    inputElement.focus();
    await user.keyboard('{CapsLock>}A{/CapsLock}');
    await waitFor(()=>    expect(inputElement).toHaveValue('A')


)

    

   })

   test.only("testing for paste functionality",async ()=>{
    render(<Counter/>);
    const user= userEvent.setup();
const inputElement= await screen.findByRole("textbox");

Object.defineProperty(global.navigator, 'clipboard', {
    value:{
        readText: jest.fn().mockResolvedValue("I love you f(love)")
    },
    writable: true
})
inputElement.focus();

await user.keyboard("{control>}v");

await waitFor(()=>expect(inputElement).toHaveValue("I love you f(love)"))


   }, 15000)

})