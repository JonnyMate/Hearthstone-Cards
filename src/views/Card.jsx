import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAccesToken } from '../utils/api/api'

export default function Card() {
  let { cardId } = useParams()

  useEffect(() => {
    console.log(cardId)
    getAccesToken()
  })

	return (
		<div>
      <h2>Card View</h2>
    </div>
	)
}