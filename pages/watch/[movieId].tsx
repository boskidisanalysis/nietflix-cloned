import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;
    // const { data, error, isLoading } = useMovie(movieId as string);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>{error.message}</div>;
    // }
    const {data} = useMovie(movieId as string);
    return (
        <div className="w-screen h-screen bg-black" >
            <nav 
            className="
            fixed
            w-full
            p-4
            z-10
            flex
            flex-row
            items-center
            gap-8
            bg-black
            bg-opacity-70
            ">
                <AiOutlineArrowLeft 
                onClick={() => router.push('/')}
                className="text-white cursor-pointer" size={40} />
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light mr-1">
                        Watching now:  
                    </span>
                     {data?.title}
                </p>
            </nav>
            
            <video
                className="
                w-full
                h-full
                "
                autoPlay
                controls
                
                src={data?.videoUrl}
            ></video>
        </div>
    );
}
export default Watch;