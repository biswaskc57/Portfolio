import React, { useEffect, useState } from "react";
import axios from "axios";

export default function github() {
const [data, setData] = useState();
const [repos, setRepos] = useState();

useEffect (()=>{
  fetchData();
  fetchRepos()
  
}, []);

  const fetchData = async () => {
    let dataList  = await axios.get("https://api.github.com/users/biswaskc57")
    setData(dataList);
   return dataList
  }


  const fetchRepos = async () => {
    let repoList = await axios.get("https://api.github.com/users/biswaskc57/repos")
    setRepos(repoList);
  }

  if(data)
  console.log(data.data);

  if(repos)
  console.log(repos.data);
  
  return <div>{repos? repos.data.map(repo => <li>{repo.name}{" "}{repo.language}</li>):"Hello"}</div>;
}

