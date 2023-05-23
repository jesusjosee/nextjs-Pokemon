import Link from 'next/link';
import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

export const Navbar = () => {

    const {theme} = useTheme()

  return (
    <div style={{
        display        : 'flex',
        width          : '100%',
        flexDirection  : 'row',
        alignItems     : 'center',
        justifyContent : 'start',
        padding        : '0x 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <Link href='/' passHref>
          <div style={{ display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                alt="Icono de la app" 
                width={70}
                height={70}
            />
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>
          </div>
        </Link>

        {/* Sepracion entre tags */}
        <Spacer css={{flex: 1}} />
        
        <Link href='/favorities' >
          <Text color="white" h3 css={{marginRight:'20px'}}>Favoritos</Text>
        </Link>
    </div>
  )
}
