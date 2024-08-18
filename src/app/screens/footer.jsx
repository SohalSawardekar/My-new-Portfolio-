export default function footer() {
    return(
        <div className="h-28 w-full bg-gradient-to-t from-real-teal via-real-teal to-slate-green bg-opacity-80 backdrop-blur-2xl rounded-lg">
            <div className=" h-full w-full flex relative flex-col items-center justify-center font-sans font-semibold ">
                <p className="text-xl">Copyright {'\u00a9'} 2024.</p>
                <p className="text-sm">All Rights Reserved</p>
            </div>
        </div>
    );
}