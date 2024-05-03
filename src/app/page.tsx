'use client'

import { useEffect, useState } from "react";
import { Button, Checkbox, Label, Navbar, TextInput } from 'flowbite-react';
import { useRouter } from "next/navigation";
import { NavBarComponent } from "./Components/NavBarComponent";
import { createAccount, login } from "@/utils/DataService";
import { IToken } from "./Interfaces/Interfaces";

export default function Home() {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [switchBool, setSwitchBool] = useState<boolean>(true);

  const router = useRouter();

  const handleSwitch = () => {
    setSwitchBool(!switchBool);
  }

  const handleSubmit = async () => {
    console.log(username);
    console.log(password);
    let userData = {
      Username: username,
      Password: password
    }
    if(switchBool) {
      createAccount(userData);
      
    }else{
      let token: IToken = await login(userData)
      console.log(token);

      if(token.token != null){

        localStorage.setItem("Token", token.token)
        // getLoggedInUserData(username);
        router.push('/Profile');

      }else{
        alert("Login Failed");
      }

    }
  }

  useEffect(() => {
    console.log(username)
    console.log(password)
  }, [username])

  return (
    <div className="bg-[#F1FFFC] heightPage" >
    <div>
      <NavBarComponent/>
    </div>
   <div className="grid grid-flow-row justify-center mt-20">
      <div className="bg bg-[#3EBE9F] min-w-96 p-16 rounded-md">
        <h1 className="text-3xl text-center holtwood font-bold" >{switchBool ? 'Create Account' : 'Login'}</h1>
      <form className="flex max-w-md flex-col gap-4">
      <div className="mt-8" >
        <div className="mb-1 block">
          <Label htmlFor="username"  className="hammer pl-3" value="Username" />
        </div>
        <TextInput className="w-full rounded-lg h-12" id="username" type="text" required onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="password1" className="hammer pl-3" value="Password" />
        </div>
        <TextInput className="w-full  rounded-lg" id="password1" type="password" required onChange={(e) => setPassword(e.target.value)}/>
      </div>
        {switchBool && ( 
            <div>
              <div className="mb-1 block">
                <Label htmlFor="password2" className="hammer pl-3 " value="Confirm Password" />
              </div>
              <TextInput className="w-full  rounded-lg" id="password2" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
          )}
      <div className="flex items-center justify-center ">
      <Button className="flex bg-[#0B7D61] w-20  justify-center text-white rounded-md px-12"  onClick={handleSubmit}>{switchBool ? 'Create' : 'Login'}</Button>
      </div>
      <div className="flex justify-center border-none" >
      <button className="hammer bg-none bg-transparent border-none" onClick={handleSwitch} color="light">{switchBool ?  <span>Already Have an Account? <u>Login</u></span> : <span>Dont have an account? <u>Create one now!</u></span> }</button>
      </div>
    </form>
      </div>
   </div>
   </div>
  );
}
