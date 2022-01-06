import '../styles/globals.css'
import SideBar from "../Components/SideBar";
import Head from "next/head";

const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Diag+</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="./favicon.png"/>
            </Head>
            <div className="relative min-h-screen flex">
            <SideBar/>
            <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp;