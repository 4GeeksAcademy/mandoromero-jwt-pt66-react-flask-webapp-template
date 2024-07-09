const LoginForm = () =>  {
    const { store, dispatch }= useGlobalReducer();

    const [username, setUsername] = usestate("");
    const [password, setPassword] = useState("");

    const hadlesubmit = async (en) => {
        ev.preventDefault();

        const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),       
        })
    }
}