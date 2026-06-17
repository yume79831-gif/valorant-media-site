import Link from "next/link";

export function SectionHeading({ eyebrow, title, description, href, linkLabel = "VIEW ALL" }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {href ? (
        <Link className="text-link" href={href}>
          {linkLabel} <span>↗</span>
        </Link>
      ) : null}
    </div>
  );
}
