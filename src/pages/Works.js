import React from 'react'
import { Link } from 'react-router-dom'

const worksData = [
  {
    title: "멋진작품1",
    name: '홍길동',
    url: 'https://portfolio.adobe.com/examples/'
  },
  {
    title: "멋진작품2",
    name: '김다라',
    url: 'https://kevinzma.com/'
  },
  {
    title: "멋진작품3",
    name: '오인수',
    url: 'https://jermaineboca.com/'
  },
]

export default function Works() {
  return (
    <section className="works">
      <div className="container">
        {
          worksData.map((item, key) => {
            return (
              <div className="col" key={key} item={item}>
                <img src="https://via.placeholder.com/300x200" alt="works" />
                <h4>{item.title}</h4>
                <p>{item.name}</p>
                <Link to={`/workDetail/${item.title}`} className="btn">자세히보기</Link>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
