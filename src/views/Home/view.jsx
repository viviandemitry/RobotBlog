import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import * as Styles from './styles';
import videoTech from '../../assets/videos/video-tech.mp4'
import mockApi from '../../utils/mockApi';

export default function Home() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getInfo(){
    try{
    setLoading(true)
    const response = await fetch(' https://web-scraping-docker.onrender.com/')
    const dataApi = await response.json()
    setLoading(false)
    setData(dataApi)
    }
    catch(error){
      setLoading(false)
      console.log(error.message)
      setData(mockApi)
    }
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
      {loading ? mockApi.map((news) => (
          <Styles.NewsContent href={news.link} key={news.link}>
            <Styles.NewsImg src={news.imgUrl}/>
            <Styles.NewsTitle>
              {news.title}
            </Styles.NewsTitle>
          </Styles.NewsContent>   
        )) :
        data.map((news) => (
          <Styles.NewsContent href={news.link} key={news.link}>
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
