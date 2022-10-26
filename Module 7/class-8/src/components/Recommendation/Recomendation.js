import React from 'react'
import './Recomendation.css'
import RecomendationItem from './RecomendationItem'

function Recomendation() {
  return (
    <div className='recomendation-container'>
        <div className='recomendation-header'>
            Recomendation
        </div>
        <div className='recomendation-list'>
            <Recomendation/>
            <Recomendation/>
            <Recomendation/>
            <Recomendation/>
            <Recomendation/>
        </div>
    </div>
  )
}

export default Recomendation
