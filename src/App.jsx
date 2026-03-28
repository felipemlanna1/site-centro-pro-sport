import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, Heartbeat, Barbell, PersonSimpleRun, Brain, Bone, Trophy, Lightning, Phone, MapPin } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/5548999999999?text=Olá! Gostaria de agendar uma avaliação no Centro Pro Sport.'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

function Stars({ size = 14 }) {
  return <div style={{ display: 'flex', gap: 2 }}>{[0,1,2,3,4].map(i => <Star key={i} size={size} weight="fill" color="#10B981" />)}</div>
}

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Centro <span>Pro Sport</span></div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <Phone size={16} weight="duotone" /> Agendar
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <motion.div className="hero-badge" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Trophy size={14} weight="fill" /> 200 AVALIAÇÕES NO GOOGLE
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
        Fisioterapia<br /><span className="a">& Performance</span>
      </motion.h1>
      <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Reabilitação esportiva, ortopédica e performance atlética em Florianópolis.
        Equipe multidisciplinar com fisioterapeutas, educador físico, nutricionista e psicólogo esportivo.
      </motion.p>
      <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="big" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} whileHover={{ scale: 1.05 }}>
        <WhatsappLogo size={22} weight="duotone" /> Agendar Avaliação
      </motion.a>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { n: '200+', l: 'Avaliações' },
    { n: '4.7', l: 'Nota Google' },
    { n: '14+', l: 'Anos Exp.' },
    { n: '8+', l: 'Anos em Floripa' },
  ]
  return (
    <section className="stats sp">
      <div className="mx">
        <motion.div className="stats-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const services = [
  { icon: <Bone size={24} weight="duotone" />, title: 'Fisio Ortopédica', desc: 'Tratamento de lesões musculoesqueléticas, pós-operatórios e dores articulares com técnicas avançadas.' },
  { icon: <PersonSimpleRun size={24} weight="duotone" />, title: 'Fisio Esportiva', desc: 'Reabilitação e prevenção para atletas amadores e profissionais de todas as modalidades.' },
  { icon: <Barbell size={24} weight="duotone" />, title: 'Performance Atlética', desc: 'Treinamento personalizado focado em força, potência e condicionamento para seu esporte.' },
  { icon: <Brain size={24} weight="duotone" />, title: 'Psicologia Esportiva', desc: 'Preparo mental, foco e motivação para superar limites e alcançar resultados.' },
  { icon: <Heartbeat size={24} weight="duotone" />, title: 'Reabilitação', desc: 'Recuperação pós-cirúrgica e retorno seguro às atividades com protocolos baseados em evidências.' },
  { icon: <Lightning size={24} weight="duotone" />, title: 'Nutrição Esportiva', desc: 'Planos nutricionais otimizados para performance, recuperação e composição corporal.' },
]

function Services() {
  return (
    <section className="srv sp" id="servicos">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Especialidades</span>
          <h2>Centro integrado de saúde</h2>
          <p>Equipe multidisciplinar para sua recuperação e performance</p>
        </motion.div>
        <motion.div className="srv-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.map((s, i) => (
            <motion.div key={i} className="sc" variants={fadeUp} custom={i}>
              <div className="si">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'Profissionais extremamente competentes. Me recuperei de uma lesão no joelho em tempo recorde.', author: 'Marcos T.' },
  { text: 'Atendimento personalizado e com muita atenção. Melhor clínica de fisioterapia que já frequentei.', author: 'Juliana R.' },
  { text: 'Voltei a correr depois de meses parado. A equipe do Centro Pro Sport é excepcional.', author: 'Rafael S.' },
  { text: 'A combinação de fisioterapia + treinamento é perfeita. Resultados visíveis em semanas.', author: 'Ana Paula M.' },
  { text: 'Referência em reabilitação esportiva em Florianópolis. Indico para todos os atletas.', author: 'Carlos H.' },
  { text: 'Tratamento completo com fisio, nutrição e preparo mental. Superou todas as expectativas.', author: 'Fernanda L.' },
]

function Reviews() {
  return (
    <section className="sp" id="avaliacoes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Depoimentos</span>
          <h2>Pacientes recomendam</h2>
          <p>200 avaliações com nota 4.7 no Google</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rc" variants={fadeUp} custom={i}>
              <div className="rc-stars"><Stars /></div>
              <p className="rc-txt">&ldquo;{r.text}&rdquo;</p>
              <div className="rc-auth">{r.author}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section className="loc sp">
      <div className="mx">
        <motion.div className="loc-inner" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Localização</span>
          <h2 style={{ marginBottom: 16 }}>Itacorubi, Florianópolis</h2>
          <p className="loc-addr"><MapPin size={16} weight="duotone" style={{ verticalAlign: 'middle' }} /> Rua Patrício Farias, 55 — Sala 06, Itacorubi</p>
          <p className="loc-detail">Fundado em 2017 · Atendendo atletas amadores e profissionais</p>
        </motion.div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta sp">
      <div className="mx">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Sua recuperação<br /><span className="a">começa aqui</span></h2>
          <p>Agende sua avaliação e descubra o tratamento ideal para o seu caso.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="big">
            <WhatsappLogo size={22} weight="duotone" /> Agendar Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand">Centro <span>Pro Sport</span></div>
        <div className="footer-info">Itacorubi — Florianópolis, SC<br />Rua Patrício Farias, 55 - Sala 06</div>
        <div className="footer-copy">© 2026 Centro Pro Sport. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

function FloatingCta() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={18} weight="duotone" /> Agendar
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>Centro Pro Sport | Fisioterapia e Performance — Florianópolis</title>
        <meta name="description" content="Fisioterapia esportiva, reabilitação e performance. Nota 4.7 com 200 avaliações no Google. Itacorubi, Florianópolis." />
      </Helmet>
      <Navbar />
      <Hero />
      <StatsSection />
      <Services />
      <Reviews />
      <Location />
      <Cta />
      <Footer />
      <FloatingCta />
    </>
  )
}

export default App
