import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background-color: #222831;
    background-size: cover;
    height: 37rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.7);
    color: white;`

    const CardName = styled.div`
    
        margin-top: 15px;
        font-size: 1.5em;
      `

      const CardImage = styled.img`
     
        height: 160px;
        width: 160px;
        border-radius: 50%;
        border: 5px solid #272133;
        margin-top: 20px;
        box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
      `

      const Border = styled.div`
     
        box-shadow: inset 0 0 0 1px #58cdd1;
        font-size: 1.0rem;
        color: #58afd1;
        -webkit-transition: color 0.25s 0.0833333333s;
        transition: color 0.25s 0.0833333333s;
        position: relative;
      
        
          :hover {
            box-shadow: 0 10px 50px rgba(247, 254, 255)
          }
          
          
      `

      const Grid = styled.div`
      
        display: grid;
        grid-gap: 20px;
        font-size: 1.2em;
      `
      

const CharacterCard = props => {
    return (
        <Card>  <CardImage src="https://chadhyams.files.wordpress.com/2012/04/deathstar.png"/>
                
                <Grid>
                <CardName>{props.name}</CardName>
               
                <Border>Height: {props.height}</Border>
                <Border>Mass: {props.mass}</Border> 
                <Border>Birth Year: {props.birthYear}</Border> 
                </Grid>
             
                
                

            
        </Card>
        
       
    
    )
    
}

export default CharacterCard