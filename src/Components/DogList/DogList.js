import React from 'react';
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


class DogList extends React.Component{

    constructor(){
        super();
        this.state = {
            ApiData: [],
            AllDogList: []
        }
    }

    getAPIData(){

    }

    generateDogList(){

    }

    filterDogList(){

    }
    render(){
        return(
            <div>
                <h2>DogList</h2>
            </div>
        );
    }
}

export default DogList;