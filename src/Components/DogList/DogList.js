import React from 'react';
import SpinnerComponent from '../Common/Spinner';
import Dog from '../Dog/Dog';
import './DogList.css'
/* 
This Component will be parent component of the page. 
It will display the Individual Dog Component
It will manage the state of which component
This component will be a class (can be modified to a fucntion if required)
Component will send the state as {
    APIData = []
    AllDogsList = [
        {
            breed:   "",
            subBreed:"",
            breedName:subBreed + breed
            Api: "https://dog.ceo/api/breed/breedName/images/random"

        }
    ]  
    
} 

Component will have a search Bar to search specific breed


*/
function showDogs(dogData){
    console.log('Showw Dogs')
    // console.log(dogData)
    return dogData.map((dog) =>{
        return <>
            <Dog key = {dog.name} name ={dog.name} link = {dog.link}/>
        </>
    });

}

function DogList(props){
    return <>
        <div className='all-dog-data'>
            {
                
                (!props.dogData)?<SpinnerComponent size={props.size}/>:showDogs(props.dogData)
            }
        
        </div>

        
    </>
}


export default DogList;

// class DogList extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             ApiData: null,
//             AllDogList: []
//         }
//     }

//     getAPIData(){

//     }

//     generateDogList(){

//     }

//     filterDogList(){

//     }
//     render(){
//         return(
//             <div>
//                 <h2>DogList</h2>
//             </div>
//         );
//     }
// }



