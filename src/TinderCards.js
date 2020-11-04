import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from "./axios"

const TinderCards = () => {
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function fetchData(){
            const response  =await axios.get('/api/')
            console.log(response.data[0])
            setPeople(response.data)
        }
        fetchData()
    },[])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
       
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div className="card">
            <div className="card__container">
            {people.map((person)=> (
                <TinderCard
                className="swipe"
                key={person.name}
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                preventSwipe={['right', 'left']}>
                    <div className="card__tinder"
                    style={{
                        backgroundImage: `url(${person.ext_link})`
                    }}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
