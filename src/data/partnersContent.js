export const partnersContent = {
  hero: {
    label: 'Partners',
    headline: 'Build with us.',
    subline:
      "ClyMind is more than a product — it's a movement. We partner with institutions, accelerators, and investors who believe that discipline can be made visible."
  },

  supporters: [
    {
      id: 'supsi',
      name: 'SUPSI',
      fullName: 'Scuola Universitaria Professionale della Svizzera italiana',
      logo: '/images/supporters/SUPSILogo.png',
      thanks:
        'SUPSI gave us access to their facilities to experiment with our first prototypes — making real research possible from day one.',
      url: 'https://www.supsi.ch',
    },
    {
      id: 'idea-startup',
      name: 'Idea Startup',
      fullName: 'Associazione Idea Startup',
      logo: '/images/supporters/IdeaStartupLogo.png',
      thanks:
        'Idea Startup funds our experiments, giving us the financial runway to iterate, test, and improve without compromise.',
      url: 'https://www.ideastartup.ch',
    },
    {
      id: 'startup-garage',
      name: 'Startup Garage',
      fullName: 'Startup Garage 177',
      logo: '/images/supporters/StartupGarageLogo.png',
      thanks:
        'Startup Garage connects us with experienced mentors who guide our strategic decisions and help us navigate the startup journey.',
      url: 'https://startupgarage.dti.supsi.ch/aboutus',
    },
  ],

  whyPartner: [
    {
      icon: '⬡',
      title: 'Co-creation access',
      body: 'Get early access to prototypes and join the feedback loop. Your input shapes the product before it reaches the market.',
    },
    {
      icon: '◈',
      title: 'Brand presence',
      body: 'Your name alongside ours — on the product, in the app, and across every channel where ClyMind grows.',
    },
    {
      icon: '◉',
      title: 'Revenue share',
      body: 'We believe in shared success. Commercial partners who join early benefit from a structured revenue participation model.',
    },
  ],

  useCases: [
    {
      id: 'schools',
      label: 'Education',
      headline: 'Plants that grow with students.',
      body: 'Each plant is linked to a student\'s learning engagement — attendance, completed assignments, study sessions. Discipline becomes something you can see on your desk, not just read on a report card.',
      detail: 'Ideal for schools, universities, and training programmes looking to reinforce positive habits and make personal growth tangible.',
    },
    {
      id: 'corporate',
      label: 'Corporate',
      headline: 'Goals you can watch grow.',
      body: 'Connect ClyMind to company objectives — OKRs, project milestones, team performance. Every achievement drives real growth, giving teams a living, shared symbol of progress.',
      detail: 'Ideal for companies that want to build a culture of discipline, ownership, and visible accountability.',
    },
    {
      id: 'healthcare',
      label: 'Healthcare',
      headline: 'Care that leaves a green trace.',
      body: 'Link plants to department-level sustainability targets, patient care indicators, or staff wellbeing programmes. Every positive action contributes to a growing ecosystem within the facility.',
      detail: 'Ideal for hospitals and healthcare institutions committed to ecological impact and human-centred environments.',
    },
  ],

  businessModel: {
    headline: 'A system built to scale.',
    body: "ClyMind is not a one-time purchase. It's a layered ecosystem designed for recurring value — for users and for partners alike.",
    layers: [
      { label: 'Hardware', desc: 'Smart vase + growth bulb' },
      { label: 'App', desc: 'Habit missions & progress tracking' },
      { label: 'Subscription', desc: 'Replacement bulbs + premium features' },
    ],
  },

  roadmap: [
    {
      date: 'Feb 2026',
      title: 'Prototype phase',
      desc: 'Vase, App & experiment design',
      active: true,
    },
    {
      date: 'Aug 2026',
      title: 'System testing',
      desc: 'Vase + App integration tests',
      active: false,
    },
    {
      date: 'Jan 2027',
      title: 'Final refinement',
      desc: 'Debugging, finalisation of all components',
      active: false,
    },
    {
      date: 'Apr 2027',
      title: 'Beta launch',
      desc: 'Beta test + App publication',
      active: false,
    },
    {
      date: 'Oct 2027',
      title: 'Market launch',
      desc: 'Production, campaign & company setup',
      active: false,
    },
  ],
};
