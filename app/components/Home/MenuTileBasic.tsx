
interface MenuTileProps {
    id: number,
    title: string,
    price: number,
    onAdd: ()=> void,
}

export default function MenuTileBasic({title, price, id, onAdd}: MenuTileProps){
    return(
        <div
          onClick={onAdd}
          key={id}
          className="bg-gray-200 rounded-lg shadow-md w-[190px] h-[170px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 p-4"
        >
          <h3 className="font-semibold text-lg text-center">{title}</h3>
          <span className="mt-2 font-bold text-xl">£ {price}</span>
        </div>
    )
}