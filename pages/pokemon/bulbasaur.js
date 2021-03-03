import React, { useContext, useState } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap'
import {CurrentUser} from '../../src/context/UserGroup.context'


const PokemonPage = ({ pokemon, id }) => {

  const userGroup = useContext(CurrentUser)
    return (
      <Container>
          <h1>Bulbasaur</h1>
          <p>name: {pokemon.name}</p>
          <p>weight: {pokemon.weight}</p>
          <p>{userGroup}</p>
      </Container>
    );
  };
  
  PokemonPage.getInitialProps = async ({
    query,
    store,
    req,
  }) => {
    const { id  } = query;
      const pokemonreq = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
      const pokemon = await pokemonreq.json()
    return { pokemon, id };
  };

  export default PokemonPage