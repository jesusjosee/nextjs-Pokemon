import { GetStaticProps, NextPage } from "next";

import { Grid } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface Props {
  pokemons: SmallPokemon[]
}


const HomePage: NextPage<Props> = ({pokemons}) => {

  // console.log(pokemons)

  return (
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map( (pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ) )
          }
        </Grid.Container>

        

      </Layout>
  )
}

// Utilizamos el getStaticProps para generar las paginas estaticas previamente, para que se generen antes
// esta funcion se ejecuta del lado del servidor, y solo s puede usar en las pages en ningún otro lado
// aqui ejecutamos operaciones de base de datos, y en las props le enviamos data al componente

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { pokeApi } from "@/api";


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const res = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  // añadir el id y la imagen a esta interface
  const pokemons: SmallPokemon[] = res.data.results.map( (pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }) )


  

  return {
    props: {
      pokemons : pokemons
      
    }
  }
}

export default HomePage;