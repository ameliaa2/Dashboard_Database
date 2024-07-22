import Link from "next/link"
import {ChevronUp} from "lucide-react"
const ItemLicense = () =>{
    return(
        <div className="w-full flex flex-row justify-between">
            <p>Welding</p>
            <button>
                <ChevronUp/>
            </button>
        </div>
    )
}
export default ItemLicense 