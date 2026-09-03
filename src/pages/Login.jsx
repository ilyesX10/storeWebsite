import Footer from "../component/Footer";
import Button from "../component/Button"
function Login({isSingin,setIsSingin}){

    function handleSigninClick(){
        setIsSingin(!isSingin);
        return;
    }

    return(
        <>
            <main className="container mx-auto pt-28 pb-16 px-4 max-w-6xl flex justify-center gap-8 m-12">
                <div className="min-h-[30vh] w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-[var(--border)] p-6">
                    <form action="" className="flex flex-col gap-4">
                        {isSingin && <div className="flex flex-col gap-4">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="border border-[var(--border)] rounded-[var(--radius)] p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all" />
                        </div>}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="border border-[var(--border)] rounded-[var(--radius)] p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="password" id="password" className="border border-[var(--border)] rounded-[var(--radius)] p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all" />
                        </div>
                        <Button className="bg-[var(--secondary)] text-white rounded-[var(--radius)] py-2 px-5" type="button" onClick={handleSigninClick}>{isSingin ? "Sign Up" : "Sign In"}</Button>
                    </form>
                </div>  
            </main>
            <Footer />
        </>
    )
}

export default Login