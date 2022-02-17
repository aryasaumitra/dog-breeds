/*
Indiviual Dog Card
The card keeps calling the api to update the card details randomly

 */
import {useState,useEffect} from 'react';
import { Image } from 'antd';
import './Dog.css'


async function getImage(link){

    let response = await fetch(link)

    // console.log(response.json())

    let jsonResponse = await response.json()

    
    // console.log(jsonResponse)
    return jsonResponse['message']
}

function Dog(props){

    // let imageLink = getImage()

    const [imageLink,setImageLink] = useState(null)

    useEffect(()=>{
        async function getImageLink(){
            let response = await getImage(`https://dog.ceo/api/breed/${props.link}/images/random`)
            setImageLink(response)
        }

        getImageLink()

    },[])

    
    return(

        <>
        <div className='dog-card'>
            <Image src={imageLink} alt={props.name} preview = {false} className='image'/>
            <h3>{props.name}</h3>
        </div>        
        </>
        
    //     <Card
    //     hoverable
    //     style={{ width: 'fit-content(20%)' }}
    //     cover={<img alt={props.name} src={imageLink} />}>
    //     <Meta title={props.name} />
    //   </Card>
    )

}

export default Dog;