import Titulo from "./Titulo"

// colocando um ? no final do nome da propriedade da interface ele passa a ser opcional
interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}