import { useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styles  from './pokemons.module.css';

//placeholder
import bulbasaurPic from "../assets/bulbasaur.gif";

const Pokemons = () =>{
    const [query, setQuery] = useState("");

    return(
        <>
        <Header query={query} setQuery={setQuery}/>
        <main>
              <nav>
                <Link className={styles.listItem} to="/">
                <img className={styles.listItemIcon} src={bulbasaurPic} alt="bulbasaur" />
                <div className={styles.listItemText}>
                    <span>Bulbasour</span>
                    <span>001</span>
                </div>
                </Link>
              </nav>
        </main>
        <Footer/>
        </>
    )
};

export default Pokemons;