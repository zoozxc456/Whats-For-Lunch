const HomePage = () => {
    const logout=()=>{
        localStorage.removeItem("accessToken")
        window.location.href="/"
    }
    return (
        <>
            <p>this page is HOME Page!!</p>
            <button onClick={logout}>登出</button>
        </>
    )
}

export default HomePage;