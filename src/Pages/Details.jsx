import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ApiKey from "../ApiKey/ApiKey"
import '../styles/global.css'
import { Container } from "@mui/material"

export default function Details(){
    const {id}=useParams()
    
    const [movie,setMovie]=useState([])
    const image_path='https://image.tmdb.org/t/p/w500'

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=pt-BR`).then((res)=>console.log(res))
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=pt-BR`).then((res)=>setMovie(res.data))
     },[id])
 
    return(
        <Container maxWidth='false'>
            <h1>{movie.title}</h1>
                <div className="detailsBody">
                    <img src={`${image_path}${movie.poster_path}`} alt="" className="imgDetails"/>
                    <p>{movie.overview}</p>
                 
                   
                </div>
                <div className="release">
                <span>Data de lançamento: {movie.release_date}</span>
                </div>
                
        </Container>
    )
}