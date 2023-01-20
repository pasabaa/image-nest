import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from './Card';
import { SearchBar } from './SearchBar';

export const Hero = () => {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const [APIData, setAPIData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [term, setTerm] = useState('');

    const [numberPerPage, setNumberPerPage] = useState(20);

    const [type, setType] = useState('image_type');

    const [visible, setVisible] = useState(false);

    const sumNumberPerPage = () => {
        setNumberPerPage(numberPerPage + 20);
    }

    useEffect(()=> {

        setLoading(true);

        type === 'image_type' ?

        axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&${type}&pretty=true&per_page=${numberPerPage}&editors_choice=true`)
        .then((res) => {
            setAPIData(res.data.hits)
        })
        .finally(()=> setLoading(false))

        :

        axios.get(`https://pixabay.com/api/videos/?key=${API_KEY}&q=${term}&${type}&pretty=true&per_page=${numberPerPage}&editors_choice=true`)
        .then((res) => {
            setAPIData(res.data.hits)
            setLoading(false)
        })
        .finally(()=> setLoading(false))

        console.log(APIData)


    },[term, numberPerPage, type])

    return (
        <>
            <div className='relative h-auto block overflow-hidden'>
                <div className='h-[34rem] relative'>
                    <img className='object-cover h-full w-full' src="https://picsum.photos/1920/1080" alt="" />
                </div>

                <div className='h-full bg-gradient-to-t from-black/95 backdrop-blur-sm block w-full absolute inset-0' />

                <div className='h-full w-full absolute inset-0 z-10 flex flex-col gap-8 items-center justify-center sm:p-8'>
                    <div className='text-gray-100 text-center'>
                        <div className='w-full flex items-center justify-center'>
                            <img src="/imagenest.png" alt="ImageNest Logo" width={150} height={150} />
                        </div>
                        <h1 className='font-bold text-4xl'>Increíbles Imágenes Gratis Para Descargar</h1>
                        <p className='mt-4'>Más de 1 millón de imágenes y videos compartidos por una talentosa comunidad.</p>
                        <div className='mt-10 flex items-center justify-center'>
                        
                        <SearchBar 
                            setType={setType} 
                            setTerm={setTerm}
                            setVisible={setVisible}
                            visible={visible}
                            type={type}
                            image={()=>{setType('image_type'), setVisible(!visible)}}
                            video={()=>{setType('video_type'), setVisible(!visible)}} />

                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 p-4'>
                    <div className="text-sm text-white mt-4 flex items-end gap-2">
                        &copy; {new Date().getFullYear()}
                        <a rel='noopener noreferrer' title='Pablo Sánchez' href="https://www.pasabaa.com/" className="hover:text-white/70">
                            Pablo Sánchez
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
            
                <div className='w-11/12 mx-auto mt-24 py-8 px-4'>
                    {loading ? <p>CARGANDO...</p> :
                    APIData.length === 0 ? <h4 className='font-bold text-gray-500 text-center text-3xl'>Nada que mostrar. Intenta de nuevo.</h4> : 
                    <main className='flex flex-wrap gap-4 justify-center items-center'>
                            {
                                APIData.map((data) => {
                                    return(
                                        <Card key={data.id} image={data} type={type} />
                                    )
                                })
                            }
                    </main>
                    }
                </div>

                <div className='w-full bg-gradient-to-t from-black/30 h-34 flex items-end p-4 justify-center absolute bottom-0'>
                    <button className='p-3 bg-black text-white hover:bg-zinc-900 transition-all ease-out rounded-full' onClick={sumNumberPerPage}>Mostrar más</button>
                </div>

            </div>

        </>

    )
}
