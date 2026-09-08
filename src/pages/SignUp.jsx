import Footer from "../component/Footer";
import Button from "../component/Button"
import {supabase} from "../lib/supabaseClient"
import {useState, useEffect} from 'react'

function SignUp(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    async function handleSignup(e){
        e.preventDefault()
        const {data,error} = await supabase.auth.signUp({
            email:email,
            password:password,
            options:{
                data:{
                    username:username
                }
            }
        })
        if(error){
            console.error(error)
        }
        else{
            navigate("/sign-in")
        }
    }
    return(
        <>
            <main className="container mx-auto pt-28 pb-16 px-4 max-w-6xl flex justify-center gap-8 m-12">
                  <div className="min-h-[30vh] w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-[var(--border)] p-6">
                    <form onSubmit={handleSignup} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="username">Username</label>
                            <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" name="username" id="username" className="border border-[var(--border)] rounded-[var(--radius)] p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" className="border border-[var(--border)] rounded-[var(--radius)] p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="Password">Password</label>
                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" className="border border-[var(--border)] rounded-[var(--radius)] p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all" />
                        </div>
                        <Button className="bg-[var(--secondary)] text-white rounded-[var(--radius)] py-2 px-5" type="submit">Sign Up</Button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default SignUp