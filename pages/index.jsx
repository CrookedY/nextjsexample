import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function Home() {

  const [pokemon, setPokemon] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const newData = await response.json();
      setPokemon(newData.results);
    };
    fetchData();
  },[]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const newData = await response.json();
      setPokemon(newData.results);
    };
    fetchData();
  },[show]);

  return (
    <Container className="md-container">

      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>
          Welcome to my pokemon site
        </h1>
        <p>
          get pokeinfo below
        </p>
        <Container style={{display: 'flex', flexDirection: 'column'}}>
          <Button onClick={()=>{setShow(true)}}>fetch</Button>
          {/* This search does not currently work
          You can fix it as a challenge */}
         <label>find pokemon</label> <input></input>
          {pokemon.length && show ? 
          pokemon.map((aPokemon, index)=>{
            return <Card className="sml-card">
              <Card.Body>
                <Card.Title>{aPokemon.name}</Card.Title>
                <Button
                  variant="secondary"
                >
                  <Link href={`pokemon/${index+1}`}>
                  More &rarr;
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          }): null
}
<Button onClick={()=>{setShow(false)}}>hide</Button>
        </Container>
      </Container>
    </Container>
  )
}
