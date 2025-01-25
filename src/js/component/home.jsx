import React,{useState,useEffect}from "react";
import SecondsCounter from "./SecondsConter";

const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
const interval = setInterval (()=>{
	setSeconds(prevSeconds => prevSeconds + 1)


},1000);
return () => clearInterval(interval)
	}, []);


	return (
		<div className="text-center">
			<h1 className="test-center mt-5"> Timing in progress </h1>
			<p>
				<div className="mt-5">
                  <SecondsCounter seconds = {seconds} />
				</div>
			</p>
		</div>
	);
};

export default Home;
