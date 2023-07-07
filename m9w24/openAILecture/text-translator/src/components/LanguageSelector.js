// This will allow us to select which Language we want
function LanguageSelector({ setLan, Lan }) {
    return (
        <>  
            <h1>Translating into: {Lan}</h1>
            <button value="en" onClick={()=>setLan("English")}>English</button>
            <button value="fr" onClick={()=>setLan("French")}>French</button>
            <button value="es" onClick={()=>setLan("Spanish")}>Spanish</button>
            <button value="it" onClick={()=>setLan("Italian")}>Italian</button>
        </>
    );
}

export default LanguageSelector;