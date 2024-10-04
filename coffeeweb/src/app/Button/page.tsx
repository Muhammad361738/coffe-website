"user clint";

import {useRouter} from 'next/navigation';
const Button = () => {
    let myButton = useRouter()
    return (
        <div>
            <button onClick={()=>myButton.push("/Home")}>Go Bact To Home Page</button>
        </div>
    );
}

export default Button;
