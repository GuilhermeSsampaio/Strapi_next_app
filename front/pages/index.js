import React, {useState, useEffect} from 'react';

import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';

export default function Home() {

  const [data, setData] = useState([]);

  
  useEffect(()=> {
    CarregaBlogs();
    document.title = 'blogss';
  })

  const CarregaBlogs = async () => {
    const url = 'http://localhost:1337/api/blogs';
    try {
      const response = await fetch(url)
      if (response.ok) {
        const json = await response.json();
        const data = json.data;
        setData(data);
                
        // data.forEach(item => {
        //   const title = item.attributes.title;
        //   console.log(title);
        // });

      } else {
        throw new Error('Falha na requisição. Código de status: ' + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cards
          lista = {data}
      />
    </div>
  )
}