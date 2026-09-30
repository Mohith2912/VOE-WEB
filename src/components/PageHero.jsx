function PageHero({ eyebrow, title, accent, description, children }) {
  return (
    <section className="page-hero section" id="top">
      <div className="container page-hero-grid">
        <p className="eyebrow">{eyebrow}</p>
        <div>
          <h1>{title}<em>{accent}</em></h1>
          {description && <p className="page-lead">{description}</p>}
          {children && <div className="page-hero-actions">{children}</div>}
        </div>
      </div>
    </section>
  )
}

export default PageHero

