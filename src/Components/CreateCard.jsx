const GetStyle = (title)=>{
    switch(title){
        case "DOWNLOAD":
            return {
                backgroundColor : "#9e743b"
            }
        case "HOME":
            return {
                backgroundColor : "#da4281"
            }
        case "JOIN US":
            return {
                backgroundColor : "#1d99c4"
            }
        case "SETTINGS":
            return {
                backgroundColor : "#719faa"
            }
        case "HELP":
            return {
                backgroundColor : "#585492"
            }
        case "SEARCH":
            return {
                backgroundColor : "#63993f"
            }
        case "LOGIN":
            return {
                backgroundColor : "#f8851e"
            }
        case "CONTACT US":
            return {
                backgroundColor : "#98282e"
            }
        default:
            {};
    }
}

const CreateCard = (props) =>{
    const {title} = props;
    const style = GetStyle(title);
    return (
    <div>
        <button className="button" style={style}>{title}</button>
    </div>
    )
}
export default CreateCard;