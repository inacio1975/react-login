import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleClick = async() => {
        if(email && password) {
            const isLogged = await auth.sigin(email, password);
            if(isLogged) {
                navigate('/');
            }else{
                alert('Login failed');
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input type="text" 
            value={email} 
            placeholder="Digite o e-mail" 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="Digite a senha"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleClick}>Login</button>
        </div>
    );
};

export default Login;
