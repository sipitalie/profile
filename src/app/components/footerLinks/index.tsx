import Link from "next/link";

export function FooterLinks(){
    return <footer className="flex h-32 w-full justify-center mt-2 bottom-0 p-8">
        <div className="flex h-full w-full justify-center items-end pb-2">
            <span className="text-white text-sm">Desenvolvido por <Link href={"/"} className="text-slate-500">Estevão Sipitali</Link></span>
        </div>
    </footer>

}