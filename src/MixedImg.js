function MixedImg({images, opacity, trueOverlayFalseMultiply}){

    return (
    <div className="">
        {images.map((image, index) => {
            return <><img src={image} key={index} alt={image}
            style={index !== 0 ? {opacity: Math.round(opacity) / 100} : {opacity: 1}}
            className={`w-[55%] h-[80%] absolute bottom-[86px] left-32 rounded-[28px] z-10
            mix-blend-${index !== 0 ? (trueOverlayFalseMultiply ? "overlay" : "multiply") : "normal"}`}/> {//drop-shadow-lg border-2 border-solid border-black
        }</>})}
        <img src={images[99]} className={images.length > 0 ? "w-[63%] h-[85%] absolute bottom-[114px] left-[44px] rounded-[28px] z-0 opacity-35 blur-sm" : ""}
        style={{
            WebkitMaskImage: 'radial-gradient(circle, white, transparent)', //voiks teha mitu layerit neid imageid
            maskImage: 'radial-gradient(circle, white, transparent)' //sinna taha et oleks nagu mingi mirroring effect
          }}>
        </img>
    </div>
    )
}

export default MixedImg;
