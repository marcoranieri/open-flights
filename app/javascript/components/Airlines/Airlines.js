import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Airline from './Airline'
import Header from './Header'
import styled from 'styled-components'

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
      .then( resp => { // in a Class use this.setState()
        setAirlines(resp.data.data) // in a function we already set it in a variable
      } )
      .catch( resp => console.log(resp) )
  }, [airlines.length]) // run ONLY IF airlines.length changes


  const grid = airlines.map( (airline) => {
    return (
      <Airline
        key={airline.attributes.name}
        attributes={airline.attributes}
      />
    )
  })

  return (
    <Home>
      <Header/>
      <Grid>{grid}</Grid>
    </Home>
  )
}

export default Airlines