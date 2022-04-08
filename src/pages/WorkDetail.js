import React from 'react'
import { Route, useParams } from 'react-router-dom'

export default function WorkDetail(props) {
  const { id } = useParams();
  // const { path } = useMatch();
  console.log(props.item)
  return (
    <section className="work-WorkDetail">
      <div className="container">
        <h2>WorkDetail {id}</h2>

      </div>
    </section>
  )
}
