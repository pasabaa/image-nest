export const SearchBar = ({setVisible, setType, type, visible, setTerm}) => {

return (
<>
    <button className='bg-white p-4 rounded-l-full'><i className='bi bi-search text-gray-600'></i></button>
    <input type="text" name="search"
        className='font-light inline-block w-full h-14 focus:outline-none text-gray-400 focus:text-gray-600'
        placeholder='Search for all images and videos on Pixabay' onChange={(e)=> setTerm(e.target.value)} />
    <div className='bg-white h-14 rounded-r-full flex flex-col items-center justify-center'>
        <div className='relative'>
            <button onClick={()=>setVisible(!visible)} className='flex text-gray-500 gap-4 hover:bg-blue-50 py-2 px-3
                rounded-full mr-4'>{type === 'image_type' ? 'Imágenes' : 'Vídeos'} <i
                    className='bi bi-chevron-down'></i></button>
            {visible && <div className='absolute mt-4 flex flex-col gap-2'>
                <button onClick={()=>{setType('image_type'), setVisible(!visible)}} className='flex text-gray-500 gap-4
                    bg-white hover:bg-blue-50 py-2 px-3 rounded-full mr-4 justify-between'>Imagenes <i
                        className='bi bi-image-fill'></i></button>
                <button onClick={()=>{setType('video_type'), setVisible(!visible)}} className='flex text-gray-500 gap-4
                    bg-white hover:bg-blue-50 py-2 px-3 rounded-full mr-4 justify-between'>Videos <i
                        className='bi bi-camera-reels-fill'></i></button>
            </div>
            }
        </div>

    </div>
</>
)
}
