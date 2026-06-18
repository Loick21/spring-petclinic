import { getInput, setOutput } from "@actions/core";
import { GitHub } from "@actions/github";

function run() {
    try{
        const username = new GitHub(getInput("username", { required: true }))
        const greeting = new GitHub(getInput("greeting", { required: true }))
        setOutput("message",`${username} ${username}`)
    }catch(err){
        console.log(err)
    }
}