/*
This will be the Main Component it will have a Search Bar & Dog List Component

*/


import {useState,useEffect} from 'react';
import { Input } from 'antd';
import DogList from '../DogList/DogList';
import './MainComponent.css'


async function getAPIData(){
    console.log('Calling Get API Data')


    // fetch('https://dog.ceo/api/breeds/list/all').then(
    //     data => data.json()).then(data =>
        
    //         dogList = generateDogList(data['message'])
            
    // ).catch(error => console.log(error))

    let response =  await fetch('https://dog.ceo/api/breeds/list/all')
    let jsonResponse = await response.json()

    return generateDogList(jsonResponse['message'])


}

function generateDogList(data){

    let dogNameList = []
    console.log('generate Dog List')
    const keys = Object.keys(data)

    keys.forEach((key,index) => {
      //  console.log(`${key}: ${data[key].length} : ${data[key]}`)

        let dogObject = {}

        if(data[key].length === 0){
            dogObject = {
                'name': String(key.charAt(0).toUpperCase()+ key.slice(1)),
                'link': String(key),
                'searchName':String(key)
            }

            dogNameList.push(dogObject)
        }
        else{
            data[key].forEach(breed =>{
                dogObject = {
                    'name':String(breed.charAt(0).toUpperCase() + breed.slice(1) + " " + key.charAt(0).toUpperCase()+ key.slice(1)),
                    'link':String(key + "/" + breed),
                    'searchName':String(breed+" "+key)
                }
                dogNameList.push(dogObject)
            })
        }

        
    });
//    console.log(dogNameList)

    return dogNameList
    
}

function filterDogList(e,dogList){

    const inputValue = e.target.value.toLowerCase();

    console.log(`E:${e.target.value.toLowerCase()}`)

    const filteredDogData=dogList.filter((dog)=>{

        return dog.searchName.toLowerCase().startsWith(inputValue);
    })

    return filteredDogData

}


function MainComponent(){

    const [allDogList,setDogList] = useState(null);
    const [chosenDogList,setChosenDogList] = useState(null); 

    useEffect(()=>{
        async function setData(){
            let response = await getAPIData()
            // console.log(response)
            setDogList(response)
            setChosenDogList(response)
        }
        
        setData()
    },[]);

    return <>
        <div className='main'>
            <Input placeholder='Search' className='search-box' onChange={(e)=>{setChosenDogList(filterDogList(e,allDogList))}}/><br/>


            <DogList dogData = {chosenDogList} size ={'large'}/>

        </div>

    </>
}



export default MainComponent