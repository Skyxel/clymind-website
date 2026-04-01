import { useInView } from '../../hooks/useInView';
import './TeamSection.css';

function MemberCard({ member, delay }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="member-card" style={{ transitionDelay: delay }}>
      <div className="member-card__photo-wrap">
        <img
          src={member.photo}
          alt={member.name}
          className="member-card__photo"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="member-card__initials" style={{ display: 'none' }}>
          {initials}
        </div>
      </div>
      <div className="member-card__info">
        <strong className="member-card__name">{member.name}</strong>
        <span className="member-card__title">{member.title}</span>
        <ul className="member-card__roles">
          {member.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TeamSection({ label, headline, members, consultants }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="team" ref={ref}>
      <div className={`team__inner${isVisible ? ' visible' : ''}`}>
        <div className="team__header">
          <span className="team__label">{label}</span>
          <h2 className="team__headline">{headline}</h2>
        </div>

        <div className="team__block">
          <h3 className="team__group-title">Team</h3>
          <div className="team__grid team__grid--3">
            {members.map((m, i) => (
              <MemberCard key={m.id} member={m} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>

        <div className="team__divider" />

        <div className="team__block">
          <h3 className="team__group-title">Consultants</h3>
          <div className="team__grid team__grid--2">
            {consultants.map((m, i) => (
              <MemberCard key={m.id} member={m} delay={`${(members.length + i) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
