import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Martine - UI Designer & Frontend Developer</title>
        <meta name="title" content="Martine - UI Designer & Frontend Developer"/>
        <meta name="description" content="https://www.martinessk.com"/>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Martine - UI Designer & Frontend Developer"/>
        <meta name="description" content=""/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Martine - UI Designer & Frontend Developer"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content="/assets/backgrounds/under-construction.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Martine - UI Designer & Frontend Developer"/>
        <meta property="twitter:description" content=""/>
        <meta property="twitter:image" content="/assets/backgrounds/under-construction.png"/>


        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>


      <main className='wrapper content'>
        <div className="content__container">
          <h2>Martine - Developer & Designer</h2>
          <h1>Website Under Construction</h1>
          <div className="content__links">
            <a href="mailto:marty99skor@gmail.com"><Image src="/assets/icons/mail.svg" height={20} width={20} alt='mail'/> Email</a>
            <a target='_blank' href="https://www.behance.net/maskor_"> <Image src="/assets/icons/behance.svg" height={20} width={20} alt='behance'/> Behance</a>
            <a target='_blank' href="https://bento.me/martinedev"><Image src="/assets/icons/link.svg" height={20} width={20} alt='link'/> Bento</a>
          </div>
          <Image className='tech-img' src="/assets/tech-img.svg" width={300} height={300} alt='tech'/>
          <p className='portfolio-blur'>Portfolio 2023</p>
        </div>
      </main>
    </>
  )
}
