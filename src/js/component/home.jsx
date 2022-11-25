import React from "react";

import Value from "./value";

<><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
<link rel="stylesheet" href="./styles.css" />
</>


//create your first component
const Home = () => {


	return (
		<div className="container"><h1 className="titular">To Do List</h1>
		<div className="fondo">
			<Value/>
		</div>
		</div>

	)
};

export default Home;
