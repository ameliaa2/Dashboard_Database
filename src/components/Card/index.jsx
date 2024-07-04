const Card = ({color, icons, value, label}) => {
    return (
        <div className={`flex flex-row justify-between ${color} p-5 rounded-lg shadow-xl text-white`}>
            <div>
                <div className="title text-2xl">{value}</div>
                <p>{label}</p>
            </div>
            <div className="flex items-center">
                {icons}
            </div>
        </div>
    )
}
export default Card