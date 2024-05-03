import { IToken, IUserInfo } from "@/app/Interfaces/Interfaces";

const url = "https://tasktrackergroup.azurewebsites.net";

export const createAccount = async (createdUser: IUserInfo) => {
    const res = await fetch(url + `/User/AddUser`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    })
    //we need to check if post was succeesful
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    console.log(data);
    return data

}

export const login = async (loginUser: IUserInfo) => {
    const res = await fetch(url + "/User/Login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });
    if(!res.ok){
        const message = "An Error has occured " + res.status;
        throw new Error(message);
    }
    const data: IToken = await res.json();
    return data;
}

// export const getLoggedInUserData = async (username: string) => {
//     const res = await fetch(url + "/User/GetUserByUsername/" + username)
//     const data = await res.json();
//     userData = data;
// }

// export const loggedinData = () => {
//     return userData;
// }

export const checkToken = () => {
    let result = false;

    let lsData = localStorage.getItem("Token");

    if(lsData != null){
        result = true
    }
    return result
}



// ------------------------------------------------
export const CreateTask = async (TaskObj: any) => {
    const res = await fetch(url + `/Task/CreateTask`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(TaskObj)
    })
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    console.log(data);
    return data
}
export const fetchTasks = async () => {
    const res = await fetch(url + '/Task/FetchTasks'); // Adjust the endpoint as needed
    if (!res.ok) {
        const message = `An error has occurred: ${res.status}`;
        throw new Error(message);
    }
    return await res.json();
}
