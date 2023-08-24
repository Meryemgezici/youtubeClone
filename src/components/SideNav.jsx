import { useContext } from "react"
import { categories } from "../utils/Constants"
import { YoutubeContext } from "../context/youtubeContext";

const SideNav = () => {
    const {selectedCategory,setSelectedCategory}=useContext(YoutubeContext);

    return (
        <div>
            {categories.map((category,index) => (
                <div key={index} onClick={()=>setSelectedCategory(category)} >
                    <div  className={`${selectedCategory.name===category.name && "bg-[#353533]" } flex gap-3 items-center text-lg p-4 hover:bg-[#353533] cursor-pointer transition rounded-md`}>
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                    </div>

                    {/* eğer divider değeri true ise çizgi koy araya  */}
                    {category.divider && <hr/>}
                </div>
            ))}
        </div>
    )
}

export default SideNav
