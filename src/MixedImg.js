function MixedImg({images, opacity, trueOverlayFalseMultiply}){

    return (
    <div className="">
        {images.map((image, index) => {
            return <><img src={image} key={index} alt={image}
            style={index !== 0 ? {opacity: Math.round(opacity) / 100} : {opacity: 1}}
            className={`w-[55%] h-[80%] absolute bottom-[86px] left-32 rounded-[28px] z-10
            mix-blend-${index !== 0 ? (trueOverlayFalseMultiply ? "overlay" : "multiply") : "normal"}`}/> {//drop-shadow-lg border-2 border-solid border-black
        }</>})}
    </div>
    )
}

export default MixedImg;
