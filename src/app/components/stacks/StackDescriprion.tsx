interface StackDescriptionProps{
    text:string
}

export function StackDescription({text}:StackDescriptionProps){
    return( 
        <span >
            <strong className="text-white">{text}</strong>
        </span>)
}