import Button from "./Button";

function ContactForm(){
    return(
        <>
            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="border border-[var(--border)] rounded-[var(--radius)] p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="border border-[var(--border)] rounded-[var(--radius)] p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" className="border border-[var(--border)] rounded-[var(--radius)] resize-none p-2 outline-transparent outline-2 focus:outline-[var(--foreground)]/50 transition-all"></textarea>
                </div>
                <Button className="bg-[var(--secondary)] text-white rounded-[var(--radius)] py-2 px-5" type="submit">Send</Button>
            </form>
        </>
    )
}

export default ContactForm