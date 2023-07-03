interface StackDescriptionProps{
    text:string
}

export function StackDescription({text}:StackDescriptionProps){
    return <p className="text-white">{text}</p>
}