'use client'

import React from "react";
import { useFormState, useFormStatus } from 'react-dom';
import { handleSignIn } from '../lib/users';

export default function LoginForm() {

    const [errorMessage, formAction] = useFormState(handleSignIn, undefined);

    let inputs = {
        email: "",
        password: ""
    }

    const onChangeValue = (e) => {
      inputs[e.target.name] = e.target.value;
      // console.log(inputs);
    }

    let isLoading = false;

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-center w-96 pt-40">
          <div className="text-xl text-white font-thin">
            <div className="text-center tracking-widest leading-10">
              <p className="text-4xl ">Entre na sua conta</p>
              <p className="italic">e acompanhe seus pedidos na Baker</p>
            </div>
           
            <form action={formAction} className="pt-10">
                
                <input className="w-full mb-4 bg-transparent border-b" type="email" name="email" placeholder="E-mail" onChange={(e) => onChangeValue(e)}/> <br></br>
                <input className="w-full mb-4 bg-transparent border-b" required minLength={6} name="password" type="password" placeholder="Senha" onChange={(e) => onChangeValue(e)}/> <br></br>
                <div className="flex justify-center">
                    {typeof errorMessage == 'string' && (
                        <>
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
                <div className="text-center pt-2">
                  <button className="bg-[#E89C38] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span className="pl-2">Entrar</span>
                  </button>
                </div>
            </form>
            <div className="text-center pt-5">
                <p className="footer__text">Não é cadastrado? <a className="text-[#E89C38] cursor-pointer" href="/cadastrar">Crie sua conta</a></p>
            </div>
          </div>
        </div>
      </main>
    )
  }