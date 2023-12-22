'use client'
import React from "react";

export default function Coffeehouse() {

    let inputs = {
        name: "",
        email: "",
        password: ""
    }

    const onChangeValue = (e) => {
      inputs[e.target.name] = e.target.value;
      console.log(inputs);
    }

    let isLoading = false;

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-center w-96 pt-40">
          <div className="text-xl text-white font-thin">
            <div className="text-center tracking-widest leading-10">
              <p className="text-4xl">Crie uma conta</p>
              <p className="italic">e faça seus pedidos na Baker</p>
            </div>
           
            <form name="form-hook" className="pt-10" style={{minWidth:'384px'}}>
                <input className="w-full mb-4 bg-transparent border-b" name="name" type="text" placeholder="Nome" onChange={onChangeValue}/> <br></br>
                <input className="w-full mb-4 bg-transparent border-b" type="email" name="email" placeholder="E-mail" onChange={onChangeValue}/> <br></br>
                <input className="w-full mb-4 bg-transparent border-b" name="password" type="password" placeholder="Senha" onChange={onChangeValue}/> <br></br>
                <div className="text-center pt-2">
                  <button className="bg-[#E89C38] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span className="pl-2">Criar</span>
                  </button>
                </div>
            </form>
            <div className="text-center pt-5">
                <p className="footer__text">Já tem uma conta? <a className="text-[#E89C38] cursor-pointer" href="/entrar">Faça login</a></p>
                
            </div>
          </div>
        </div>
      </main>
    )
  }