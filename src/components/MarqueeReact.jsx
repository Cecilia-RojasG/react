import Marquee from "react-fast-marquee";

{/* Barra marquesina superior */}
const MarqueeReact =()=> {
    return(
        <div>
            <Marquee.default
                gradient={false} 
                speed={50} 
                pauseOnHover={true}
                style={{color: '#66FFD4', padding: '10px 0'}}
            >
                <span style={{ marginRight: '50px' }}>- 🐉 Descuentos exclusivos en Juegos de Rol esta semana 🐉</span>
                <span style={{ marginRight: '50px' }}>- 🏪 Calle Num. Local X 🏪</span>
                <span style={{ marginRight: '50px' }}>- 🕒 Lun-Vie 9:00-22:00 · Sáb-Dom 10:00-20:00 🕒</span>
                <span style={{ marginRight: '50px' }}>- 🚚📦 Envío gratis en compras superiores a $50.000.- 🚚📦</span>
                <span style={{ marginRight: '50px' }}>- 💬 WhatsApp +569XXXXXXXX 💬</span>
            </Marquee.default>
        </div>
    )
}

export default MarqueeReact;