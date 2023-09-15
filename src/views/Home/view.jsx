import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import * as Styles from './styles';

export default function Home() {

  const [data, setData] = useState([]);

  async function getInfo(){
    const response = await fetch('http://localhost:3002')
    const dataApi = await response.json()
    setData(dataApi)
  }

  useEffect(() => {
    getInfo()
  },[])

  return (
    <Styles.ContainerMain>
    <Header />
    
    <Styles.NewsContainer>
      {
        data.map((news) => (
          <Styles.NewsContent href={news.link}>
            <Styles.NewsImg src={news.imgUrl}/>
            <Styles.NewsTitle>
              {news.title}
            </Styles.NewsTitle>
          </Styles.NewsContent>   
        ))
      }
    </Styles.NewsContainer>
    </Styles.ContainerMain>
  )
}
