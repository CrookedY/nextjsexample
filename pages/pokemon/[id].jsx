import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap'
import {CurrentUser} from '../../src/context/UserGroup.context'
import { useRouter } from 'next/router';


const PokemonPage = () => {
  const router = useRouter();

  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const pokemonreq = await fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.id}`)
      const pokemon = await pokemonreq.json()
      setPokemon(pokemon);
    };
    fetchData();
  },[router.query.id]);

  const userGroup = useContext(CurrentUser)
    return (
      <Container>
          <p>name: {pokemon.name}</p>
          <p>weight: {pokemon.weight}</p>
          <p>{userGroup}</p>
      </Container>
    );
  };

  export default PokemonPage