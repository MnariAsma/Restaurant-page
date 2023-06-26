
interface CustomButtonProps{
    color: string;
    text: string;
}

export default function CustomButton(props: CustomButtonProps){
    const { color, text } = props

    return(
        <button color={color}>
            {text}
        </button>
    )
}