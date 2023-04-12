export default function ErrorText({error}) {
    return (
        <span className="text-white text-center">
        <h1 className="text-2xl font-semibold">{error}</h1>
        {/* <h3 className="text-md font-light">Please check your internet connection</h3> */}
        </span>
      
    );
}