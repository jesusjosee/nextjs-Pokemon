import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"

type Props = {
    children? : React.ReactNode
    title?: string
}

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
        {/* Head of APP */}
        <Head>
            <title> { title || 'Pokemon app' } </title>
            <meta name="author" content="Jesus Suyon" />
            <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
            <meta name="kewwords" content={` ${title}, pokemon, pokedex` } />
        </Head>

        {/* Navbar of APP */}
        <Navbar/>

        {/* Here put the pages */}
        <main style={{padding: '0px 20px'}}>
            {children}
        </main>
    </>
  )
}
