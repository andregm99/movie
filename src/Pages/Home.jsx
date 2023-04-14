import { useEffect, useState } from "react";
import ApiKey from "../ApiKey/ApiKey";
import axios from "axios";
import Cards from "../Components/Cards";
import { Container, Grid } from "@mui/material";
import '../styles/global.css'
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Home() {
    const [movies,setMovies]=useState([])
    const image_path='https://image.tmdb.org/t/p/w500'

    useEffect(()=>{
      getMovies()
    },[])

    const getMovies=()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=1`).then((res)=>setMovies(res.data.results))
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=1`).then((res)=>console.log(res.data.results))
    }

    const filteredMovie=(title)=>{
      if (title==='') {
        getMovies()
      }
      else{
        const LowerCaseTitle=title.toLowerCase()
        const filtered=movies.filter((movie)=>
        movie.title.toLowerCase().includes(LowerCaseTitle)
        )
        setMovies(filtered)
      }
     
    }


    return (
      <div >
        <header style={{marginBottom:'2em'}}>
          <Navbar filteredMovie={filteredMovie}/>
        </header>
        <Container maxWidth='false'>
        <Grid container spacing={3} >

          {movies.map((movie)=>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <Link to={`/details/${movie.id}`}> 
                <Cards key={movie.id}  image={`${image_path}${movie.poster_path}`} />
              </Link>
              <div className="Titulo">
                <span>{movie.title}</span>
              </div>
            </Grid>
          )}
          
        </Grid>
        </Container>
        <footer style={{display:'flex',alignItems:'center',justifyContent:'center'}}><p>Desenvolvido por André Gomes</p></footer>
      </div>
    );
  }
  