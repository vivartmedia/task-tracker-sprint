'use client'

import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useRouter } from "next/navigation";
import { LoginNavComponent } from "./Components/LoginNavComponent";

export default function Home() {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [switchBool, setSwitchBool] = useState<boolean>(true);

  const router = useRouter();

  const handleSwitch = () => {
    setSwitchBool(!switchBool);
  }

  const handleSubmit = async () => {
    let userData = {
      username: username,
      password: password
    }
    router.push("/Profile");
  }

  return (
    <div className="bg-[#F1FFFC] heightPage" >
    <div>
      <LoginNavComponent/>
    </div>
   <div className="grid grid-flow-row justify-center mt-20">
      <div className="bg bg-[#3EBE9F] min-w-96 p-16 rounded-md">
        <h1 className="text-3xl text-center holtwood" >{switchBool ? 'Create Account' : 'Login'}</h1>
      <form className="flex max-w-md flex-col gap-4">
      <div className="mt-8" >
        <div className="mb-1 block">
          <Label htmlFor="username"  className="hammer pl-3" value="Username" />
        </div>
        <TextInput className="w-full rounded-lg h-12" id="username" type="text"  required onChange={(e) => setUsername(e.target.value)} />
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
              <TextInput className="w-full  rounded-lg" id="password2" type="password" required onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          )}
      <div className="flex items-center justify-center ">
      <Button className="flex bg-[#0B7D61] w-20 p-2 justify-center text-white rounded-md px-8"  onClick={handleSubmit}>{switchBool ? 'Create' : 'Login'}</Button>
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
