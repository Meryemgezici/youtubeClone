import { useSearchParams } from 'react-router-dom'
import { getData } from '../utils/helpers';
import { useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';

const SearchResults = () => {
    const [results, setResults] = useState(null);
    const [params, SetParams] = useSearchParams();

    const query = params.get("search_query");

    useEffect(() => {
        setResults(null);
        getData(`https://youtube138.p.rapidapi.com/search/?q=${query}`)
            .then((data) => setResults(data))
    }, [query]);
        console.log(results);
    const handleClick = () => {
        SetParams({ search_query: results.didYouMean })
    }

    return (
        <div className='min-h-[100vh] bg-[#0f0f0f] text-white flex'>
            <SideNav />
            <div className="flex flex-col gap-20 p-10 w-full">
                {results?.didYouMean ?
                    <p onClick={handleClick} className='cursor-pointer'>Bunu mu kastetmek istediniz
                        <span className='font-bold'>{results?.didYouMean} </span>
                    </p>:<p>meryem</p>}
                {!results ? <Loading /> : results.contents.map((item, i) => {
                    if (item.type !== "video") return;
                    return <VideoCard key={i} video={item.video} />
                })}
            </div>

        </div>
    )
}

export default SearchResults
