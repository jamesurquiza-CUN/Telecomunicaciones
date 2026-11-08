import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as Icon from 'lucide-react'
import './styles.css'

const img = {
  rack: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
  cables: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=85',
  server: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1000&q=85',
  device: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85'
}

const nav = [
  ['Inicio', Icon.Home], ['Concepto', Icon.Lightbulb], ['Importancia', Icon.Star], ['Componentes', Icon.Cpu], ['Condiciones', Icon.ShieldCheck], ['Normas', Icon.FileText], ['Funcionamiento', Icon.Network], ['Prácticas', Icon.CircleCheck], ['Ventajas', Icon.Rocket], ['Conclusión', Icon.Flag]
]
const components = [
  ['Rack o gabinete', 'Protege y concentra los equipos de red.', Icon.Server],
  ['Switch', 'Interconecta dispositivos dentro de la red.', Icon.GitFork],
  ['Patch panel', 'Ordena y termina los cables horizontales.', Icon.PanelTop],
  ['Router', 'Dirige el tráfico entre redes.', Icon.Router],
  ['Cableado estructurado', 'Transporta datos de forma organizada.', Icon.Cable],
  ['UPS', 'Mantiene la energía ante interrupciones.', Icon.BatteryCharging],
  ['Organizadores', 'Guían cables sin tensión ni enredos.', Icon.Waypoints],
  ['Panel de fibra', 'Gestiona enlaces ópticos de alta velocidad.', Icon.ScanLine]
]
const importance = [
  ['Centralizar la red', 'Un solo punto para controlar conexiones.', Icon.Share2], ['Organizar el cableado', 'Rutas limpias y fáciles de identificar.', Icon.Cable], ['Garantizar conectividad', 'Servicios disponibles y estables.', Icon.Wifi], ['Facilitar mantenimiento', 'Diagnóstico y ajustes más rápidos.', Icon.Wrench], ['Proteger equipos', 'Entorno controlado y seguro.', Icon.Shield], ['Permitir crecimiento', 'Capacidad para nuevas necesidades.', Icon.TrendingUp]
]
const conditions = [['Temperatura y ventilación', Icon.Thermometer], ['Energía eléctrica con respaldo', Icon.Zap], ['Seguridad física', Icon.LockKeyhole], ['Iluminación adecuada', Icon.Sun], ['Limpieza constante', Icon.Sparkles], ['Espacio físico suficiente', Icon.Maximize], ['Puesta a tierra', Icon.Earth]]
const standards = [['ANSI/TIA-568', 'Cableado de telecomunicaciones'], ['ANSI/TIA-569', 'Espacios y canalizaciones'], ['ANSI/TIA-606', 'Administración y etiquetado'], ['ANSI/TIA-607', 'Puesta a tierra y equipotencialidad']]
const practices = ['Etiquetar cables y puertos', 'Mantener organizado el cableado', 'Separar cables eléctricos y de datos', 'Revisar periódicamente los equipos', 'Verificar la ventilación', 'Actualizar diagramas de conexión', 'Restringir el acceso autorizado']

function DetailCard({ title, text, I, tone = '' }) {
  const [open, setOpen] = useState(false)
  return <button className={`detail-card ${tone} ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open}>
    <span className="icon-wrap"><I size={22}/></span><span><strong>{title}</strong><small>{open ? text : 'Ver detalle +'}</small></span>
  </button>
}

function Slide({ index }) {
  if (index === 0) return <section className="slide hero"><div className="hero-copy"><span className="eyebrow">Infraestructura tecnológica</span><h1>Subsistemas de<br/><em>Infraestructura</em></h1><div className="title-pill">Cuarto de Telecomunicaciones</div><p>Conectando tu mundo, de forma segura y eficiente.</p><span className="hint"><Icon.MousePointer2 size={16}/> Usa las flechas o el menú para explorar</span></div><div className="hero-image" style={{backgroundImage:`url(${img.rack})`}}><div className="image-label"><Icon.Activity/> Red organizada<br/><b>Siempre disponible</b></div></div></section>
  if (index === 1) return <section className="slide split concept"><div><span className="section-icon"><Icon.Lightbulb/></span><h2>¿Qué es un Cuarto de<br/><em>Telecomunicaciones?</em></h2><p className="lead">Es un espacio físico destinado a alojar, organizar y administrar los equipos y sistemas que permiten la comunicación de datos, voz y otros servicios tecnológicos.</p><div className="callout"><Icon.CheckCircle2/> Su función es concentrar conexiones de forma ordenada, segura y eficiente.</div></div><div className="visual-device"><img src={img.server}/><span>Centro de conectividad</span></div></section>
  if (index === 2) return <section className="slide"><header><span className="section-icon"><Icon.Star/></span><h2>¿Por qué es <em>importante?</em></h2><p>Una infraestructura bien planeada hace que la red funcione mejor.</p></header><div className="card-grid importance-grid">{importance.map(([a,b,I],i)=><DetailCard key={a} title={a} text={b} I={I} tone={`tone-${i%3}`}/>)}</div></section>
  if (index === 3) return <section className="slide"><header><span className="section-icon"><Icon.Component/></span><h2>Componentes <em>principales</em></h2><p>Las piezas que hacen posible una red confiable.</p></header><div className="component-grid">{components.map(([a,b,I])=><DetailCard key={a} title={a} text={b} I={I}/>)}</div></section>
  if (index === 4) return <section className="slide split conditions"><div><header><span className="section-icon"><Icon.ShieldCheck/></span><h2>Condiciones <em>técnicas</em></h2><p>Todo cuarto de telecomunicaciones debe contar con:</p></header><div className="check-list">{conditions.map(([t,I])=><div key={t}><I/> <span>{t}</span></div>)}</div></div><div className="climate-art"><Icon.Thermometer/><Icon.Snowflake/><div className="gauge"><b>18–24°C</b><span>rango recomendado</span></div></div></section>
  if (index === 5) return <section className="slide split standards"><div><header><span className="section-icon"><Icon.FileCheck2/></span><h2>Normas y <em>estándares</em></h2><p>Cumplirlos garantiza calidad, orden y seguridad.</p></header><div className="standard-list">{standards.map(([code,desc])=><div key={code}><b>{code}</b><span>{desc}</span></div>)}</div></div><div className="tia-mark"><b>TIA</b><span>ADVANCING GLOBAL<br/>COMMUNICATIONS</span></div></section>
  if (index === 6) return <section className="slide"><header><span className="section-icon"><Icon.Network/></span><h2>¿Cómo <em>funciona?</em></h2><p>El recorrido de los datos dentro de una red organizada.</p></header><div className="flow">{[['Internet',Icon.Globe2],['Router',Icon.Router],['Patch Panel',Icon.PanelTop],['Switch',Icon.GitFork],['Dispositivos',Icon.MonitorSmartphone]].map(([t,I],i)=><div className="flow-item" key={t}><div><I/></div><b>{t}</b>{i<4&&<Icon.ArrowRight className="flow-arrow"/>}</div>)}</div><div className="flow-note"><Icon.Activity/> Los datos avanzan por enlaces identificados hasta cada usuario.</div></section>
  if (index === 7) return <section className="slide split practice"><div><header><span className="section-icon green"><Icon.CircleCheck/></span><h2>Buenas <em>prácticas</em></h2><p>Para una infraestructura confiable y fácil de administrar.</p></header><div className="check-list practices">{practices.map(t=><div key={t}><Icon.CheckCircle2/> <span>{t}</span></div>)}</div></div><div className="practice-photo" style={{backgroundImage:`url(${img.cables})`}}><span>Orden visible,<br/>mantenimiento simple</span></div></section>
  if (index === 8) return <section className="slide"><header><span className="section-icon yellow"><Icon.Rocket/></span><h2>Ventajas de una <em>infraestructura adecuada</em></h2><p>Una decisión técnica que se convierte en valor para toda la organización.</p></header><div className="benefits">{[['Mayor conectividad',Icon.Rocket],['Más seguridad',Icon.ShieldCheck],['Fácil mantenimiento',Icon.Wrench],['Escalabilidad',Icon.ChartNoAxesCombined]].map(([t,I])=><div key={t}><I/><b>{t}</b></div>)}</div></section>
  return <section className="slide conclusion"><div><span className="section-icon"><Icon.Flag/></span><h2>Una red preparada<br/>para el <em>futuro.</em></h2><p>El cuarto de telecomunicaciones es un componente esencial de la infraestructura tecnológica. Una correcta planificación, instalación y administración garantiza una red estable, segura, organizada y preparada para responder a las necesidades actuales y futuras.</p><blockquote>“Una buena infraestructura conecta oportunidades”.</blockquote><button className="restart" onClick={() => window.dispatchEvent(new Event('restart'))}><Icon.RotateCcw size={17}/> Reiniciar presentación</button></div><div className="conclusion-art"><Icon.Wifi/><Icon.Building2/><Icon.Network/></div></section>
}

function App(){
  const [current,setCurrent]=useState(0); const go=n=>setCurrent(Math.max(0,Math.min(9,n)))
  useEffect(()=>{const keys=e=>{if(e.key==='ArrowRight'||e.key==='ArrowDown')go(current+1);if(e.key==='ArrowLeft'||e.key==='ArrowUp')go(current-1)}; const restart=()=>go(0); window.addEventListener('keydown',keys);window.addEventListener('restart',restart);return()=>{window.removeEventListener('keydown',keys);window.removeEventListener('restart',restart)}},[current])
  return <main className="app-shell"><aside><div className="brand"><Icon.Wifi size={34}/></div><nav>{nav.map(([n,I],i)=><button key={n} onClick={()=>go(i)} className={current===i?'active':''} title={n}><I/><span>{n}</span></button>)}</nav><div className="side-count">{String(current+1).padStart(2,'0')}<i/>10</div></aside><div className="deck"><div className="topbar"><span>Infraestructura Tecnológica</span><div className="progress"><i style={{width:`${(current+1)*10}%`}}/></div><small>{current+1} / 10</small></div><div className="slide-stage"><Slide index={current}/></div><footer><button onClick={()=>go(current-1)} disabled={!current}><Icon.ArrowLeft/> Anterior</button><div className="dots">{nav.map((_,i)=><button key={i} aria-label={`Diapositiva ${i+1}`} className={current===i?'on':''} onClick={()=>go(i)}/>)}</div><button className="next" onClick={()=>go(current+1)} disabled={current===9}>Siguiente <Icon.ArrowRight/></button></footer></div></main>
}
createRoot(document.getElementById('root')).render(<App />)
