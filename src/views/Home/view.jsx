import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import * as Styles from './styles';
import videoTech from '../../assets/videos/video-tech.mp4'

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
    {/* <Styles.Video> */}
     <video src={videoTech} autoPlay loop muted />
    <Header />
    <Styles.Title>
      ROBOT AI
    </Styles.Title>
    <Styles.Text>
      Find out the latest news about Technology
    </Styles.Text>
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
    {/* </Styles.Video> */}
    </Styles.ContainerMain>
  
  )
}
