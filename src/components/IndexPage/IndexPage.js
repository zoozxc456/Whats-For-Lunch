/* Import Images */
import banner from '../../assets/images/banner.png'

const style = {
    width: "100vw"
}

const IndexPageComponent = () => {
    return (
        <>
            <img src={banner} alt={'banner'} style={style} />
        </>
    )
}

export default IndexPageComponent;
