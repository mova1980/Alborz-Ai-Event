export default function HeroTitle({ text, fx = 'geo' }) {
  return (
    <div className="hero-title display fx-title" data-fx={fx}>
      {text}
    </div>
  )
}
