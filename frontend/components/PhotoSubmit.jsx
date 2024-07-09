

const LoginForm = () => {
    const handleSubmit = async (ev) => {

        if (Response.ok) {
            const resp = fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/current`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${store.token}`
                },
            })

            if (resp.ok) {
                const data =  (await resp).json();
                dispatch ({
                    user: data,
                    type: 'update_user'
                });
            }
            SVGFETurbulenceElement("");
    }
}}