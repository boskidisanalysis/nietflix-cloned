import {signOut, getSession} from 'next-auth/react'
import { NextPageContext } from 'next'
// import useCurrentUser from '@/hooks/useCurrentUser'
// import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Billboard from '@/components/Billboard'
import MovieList from '@/components/MovieList'
import useMovieList from '@/hooks/useMovieList'
import useFavorites from '@/hooks/useFavorites'
import InfoModal from '@/components/InfoModal'
import useInfoModal from '@/hooks/useInfoModal'

export async function getServerSideProps(context:NextPageContext) {
  const session = await getSession(context)
  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home() {
  // const {data: user } = useCurrentUser();
  
  const {data: movies=[]} = useMovieList();
  const {data: favorites=[]} = useFavorites();
  const { isOpen , closeModal} = useInfoModal()

  return (
    <>
      {/* <div className='flex flex-row justify-between items-center'>
        <Link href='/'>
        <img src="/images/logo.png" alt="logo" className='h-12 w-24 ml-4' />
        </Link>
        <p className='text-white '>Welcome {user?.name}</p>
        <button className='bg-red-600 py-2 text-white font-bold rounded-md px-3 mt-1 mr-1 hover:bg-red-700 transition' onClick={() => signOut()}>Log Out</button>
      </div> */}
    <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div>
        <MovieList title='Trending Now' data={movies}/>
        <MovieList title='My List' data={favorites}/>

      </div>
    </>
  )
}
