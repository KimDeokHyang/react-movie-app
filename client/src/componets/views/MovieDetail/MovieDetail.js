import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config'
import MainImage from '../commons/MainImage'
import GridCard from '../commons/GridCards'
import MovieInfo from './Sections/MovieInfo'
import Favorite from './Sections/Favorite'

function MovieDetail() {

    // props가 useParams로 대체됨
    let param = useParams()
    const [Movie, setMovie] = useState(null)
    const [Casts, SetCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)

    useEffect(() => {
        console.log(param)

        let endpointCrew = `${API_URL}movie/${param.movieId}/credits?api_key=${API_KEY}`

        let endpointInfo = `${API_URL}movie/${param.movieId}?api_key=${API_KEY}&language=ko-KR`

        fetch(endpointInfo)
            .then (response => response.json())
            .then (response => {
                setMovie(response)
            })


        fetch(endpointCrew)
            .then (response => response.json())
            .then (response => {
                SetCasts(response.cast)
            })
    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle);
    }
  return (
    <div>
        {/* Header */}
        {Movie &&
            <MainImage 
                image = {`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`} 
                title= {Movie.original_title}
                text= {Movie.overview}
            />
        }

        {/* Body */}
        <div style={{ width: '85%', margin: '1rem auto' }}>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {Movie &&
                <Favorite movieInfo = {Movie} movieId = {param.movieId} userFrom = {localStorage.getItem('userId')}/>
            }
            </div>

            {/* MovieInfo */}
            {Movie &&
                <MovieInfo 
                    movie = {Movie}
                />
            }

            <br/>

            {/* Action Grid */}

            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                <button onClick={toggleActorView}>Toggle Actor View</button>
            </div>

            {ActorToggle &&
                <Row gutter={[16, 16]}>
                    {Casts && Casts.map((cast, index) => (
                        <React.Fragment key = {index}>
                            <GridCard 
                                image= {cast.profile_path ? 
                                            `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                characterName= {cast.name}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            }

        </div>
        
    </div>
  )
}

export default MovieDetail