interface TitleProps {
    value: string
}


export function Title(props: TitleProps){ //props sao os 'atributos'
    return(
        <h1>{props.value}</h1>
    )
}