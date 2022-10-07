const headerCard = {
    margin:'10px',
    display:'flix',
    background:'#dedede',
    borderRadious:'15px',
    height:'200px',
    width:'500px'
}
const image={
    display: 'flix',
    margin:'5px',
    height:'100%',
    width:'35%'
}
function Header(props){
    return (
    <p style={headerCard}>
        <img style={image} src={props.productImage}/>
        {props.productName} || Color {props.color} || Price {props.price}.
    </p>
    )
}
export default Header;