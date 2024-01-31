function MixedImg({images, opacity, blendMode}){

    return (
    <div className="">
        {images.map((image, index) => {
            return <><img src={image} key={index} alt={image}
            style={index !== 0 ? {opacity: Math.round(opacity) / 100} : {opacity: 1}}
            className={`w-3/5 absolute bottom-32 left-16 rounded-[32px] z-10
            mix-blend-${index !== 0 ? blendMode : "normal"}`}/> {//drop-shadow-lg border-2 border-solid border-black
        }</>})}
        <img src={images[0]} className={images.length > 0 ? "w-[63%] h-[85%] absolute bottom-[114px] left-[44px] rounded-[32px] z-0 opacity-35 blur-sm" : ""}
        style={{
            WebkitMaskImage: 'radial-gradient(circle, white, transparent)', //voiks teha mitu layerit neid imageid
            maskImage: 'radial-gradient(circle, white, transparent)' //sinna taha et oleks nagu mingi mirroring effect
          }}>
        </img>
    </div>
    )
}

export default MixedImg;
