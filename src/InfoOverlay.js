function InfoOverlay({handleInfoButtonClick, infoOverlay}) {
    
    /*Jube lahendus, ma tean*/const invisChar = "‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎ㅤ"

    return (
        <div>
            <button onClick={handleInfoButtonClick} className="fixed left-[380px] top-0 bg-zinc-900 rounded-lg p-2 m-1 opacity-80 active:bg-zinc-800 z-50">
                <span className=" text-zinc-100">Kuidas kasutada & projektist</span>
            </button>

        <p className={`block text-zinc-300 text-lg z-50 opacity-100 fixed top-10 left-[90px] h-32 w-[66%] pl-2 pr-4  text-justify ${infoOverlay ? "visible" : "invisible"}`}>
            <span className="text-3xl font-bold">Unis(t)us</span> on unenäoteemaline veebipõhine fotogalerii, millele on lisatud interaktiivne element. Selle kasutamiseks tuleb kõigepealt ekraani paremast äärest valida endale vähemalt kaks meelepärast pilti, neile klikkida ning rohelist nuppu vajutada.
             Pilte on kokku 35, valikus kerimiseks saab vajutada üles- ja allapoole suunatud nooli. Kui kaks või enam pilti on ekraanile lisatud, saab hakata nende kombineerumist kontrollima, kasutades suure kujutise all asuvat <span className="italic">slider</span>it ja nuppu. Piltide eemaldamiseks tuleb
              neile paremas ääres taas klikkida ja vajutada punaseks värvunud nuppu. Leidke huvitavaid ja unikaalseid kombinatsioone ning ärge kartke lisada kasvõi kümmet pilti korraga!
            {invisChar}{invisChar}{invisChar}{invisChar.slice(0,90)} Projekti tegin ma programmeerimiskeeles <span className="italic">JavaScript</span>, kasutades <span className="italic">React</span> ja <span className="italic">Tailwind CSS</span> veebiraamistikke. Kood jookseb <span className="italic">Raspberry Pi </span>
            peal,<span className="italic"> Nginx </span> programmis. Kogu projekti kood on  leitav <span className="italic">Github</span>i lehel kasutaja TheShadowfun avalikus koodivaramus. {invisChar}{invisChar}{invisChar}{invisChar}{invisChar}{invisChar}
            <span className="font-bold">Ukse juurest leitava teksti kordus: </span><span className="text-lg">Inimene veedab umbes kolmandiku oma elust magades, see on aeg, mil toimub vahetu suhtlus alateadvusega. Päevaste tegemiste käigus tagaplaanile jäänud mõtted, mured ja ambitsioonid võtavad omanäolise abstraktse vormi ning kombineeruvad kujutisteks – unenägudeks. Olen märganud, et tihti tuleb ette olukordi, mil leban voodis, olles unenäomaailma ja reaalsuse hajusal piiril, mitte täielikult ühes ega teises. Vaatan lihtsalt pimedat tuba ja voodilinu, kuid selles unises olekus on isegi need igapäevased asjad ebatavalised. Tahtsin leida interaktiivset kujutavat lahendust, mille abil saaksin seda olekut kirjeldada, tuues samal ajal mängu oma igapäevased huvid, millega aega sisustan. Ma olen mõnda aega iseseisvalt tegelenud programmeerimisega ja näen selles ka oma tulevikku ning teed oma unistuseni - tegutseda edukalt IT-sektoris. Nii saidki projektis ja pealkirjas kokku minu unisus ja minu unistus.</span>
            <span className="text-xl font-bold  text-zinc-100">   PS: Et tagasi lehele saada, vajuta seda suurt X-i</span></p>
            
            <div className={`fixed z-50 bottom-[2px] left-[39%] ${infoOverlay ? "visible" : "invisible"}`}>
            <svg onClick={handleInfoButtonClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-9 h-9">
                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd" />
            </svg>
            </div>

        <div className={`fixed left-0 bottom-0 w-full bg-black opacity-35 h-full z-30 ${infoOverlay ? "visible" : "invisible"}`}>
        </div>

        <div className={`bg-black z-40 flex fixed top-10 left-[80px] h-[92%] w-2/3 opacity-15 rounded-lg ${infoOverlay ? "visible" : "invisible"}`}>
        </div>

        </div>
    )
}

export default InfoOverlay;