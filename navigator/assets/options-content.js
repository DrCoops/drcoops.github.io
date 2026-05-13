// Option page content - extracted from Excel workbook
window.APE_OPTIONS_CONTENT = {
  csa: {
    id: "csa",
    title: "Chief Scientific Adviser (CSA)",
    subtitle: "Academic engagement and brokering via your CSA",
    section: "Internal to your organisation",
    description: "The CSA in a government body is normally someone who holds both an academic and a civil service post. This means they generally have significant networks into academic circles, allowing you to connect with a wide range of experts. The process for doing this will vary by organisation so please contact the office of your CSA (if you have one) to find out how best to do this, or if you are best trying a different route.",
    benefits: [
      "CSAs offer a very quick way of getting an academic perspective on your policy area",
      "They are often well-placed to tailor or translate advice into policy terms better than external academics",
      "CSAs can help quality assure research and evidence in their domain of expertise",
      "CSAs are connected to each other via a cross-government network — this allows them to access similar levels of expertise in a wider range of domains where needed"
    ],
    limitations: [
      "CSAs are extremely busy, meaning they often need to focus only on the most important issues",
      "CSAs are typically subject experts in particular areas; if your need for expertise is beyond that, they may not be able to help connect to academics"
    ],
    bestFor: "Rapid connection to a single or group of academics within a related domain of knowledge for high profile policy issues",
    xgovtResources: [
      { label: "CSA guidance document", url: "" },
      { label: "CSA government web page", url: "https://www.gov.uk/government/organisations/government-office-for-science/about/research" },
      { label: "Institute for Government GCSA explainer", url: "https://www.instituteforgovernment.org.uk" }
    ],
    contactKey: "csa_name",
    contactEmailKey: "csa_email",
    localLinkKey: "csa_guidance",
    localLinkLabel: "CSA guidance"
  },

  sac: {
    id: "sac",
    title: "Science Advisory Council / Expert Group",
    subtitle: "Engaging your organisation's scientific advisory committees",
    section: "Internal to your organisation",
    description: "SAC/Expert Groups established by your organisation present an important way of connecting quickly to a range of pre-selected experts who have a strong background in the policy area and ability to work with the organisation. This allows you to access the members' expertise more quickly and with less risk, and also allows for wider engagement with their networks bringing greater diversity compared to, for instance, just approaching the CSA. They can also help frame the issue in ways that might make more sense to academics outside of the organisation.",
    benefits: [
      "Pre-selected array of experts with background knowledge of the organisation",
      "Connection to a wider array of networks than just the CSA"
    ],
    limitations: [
      "The SAC/EGs might not have the experts in the area you are interested in",
      "You may not have any SAC/EGs at all",
      "Meetings and attendees may be very busy so likely only higher priority issues can be considered"
    ],
    bestFor: "Getting a range of expert views that are informed about the organisational position",
    xgovtResources: [
      { label: "Map of SACs and ALBs", url: "", description: "Network map of almost all SACs & science ALBs" },
      { label: "CoP-SAC guide", url: "", description: "Code of Practice and guidance for SACs" }
    ],
    contactKey: "sac_name",
    contactEmailKey: "sac_email",
    localLinkKey: "sac_guidance",
    localLinkLabel: "SAC/Expert group information"
  },

  gse: {
    id: "gse",
    title: "Government Scientist / Analyst",
    subtitle: "Using internal analysts and scientists as brokers of academic engagement",
    section: "Internal to your organisation",
    description: "For any engagement with academics externally it will always be beneficial to engage with a local analyst (that is a member of GSR, GES, GORS, GSS or GDS) or scientist/engineer. Partly they can help you locate particular academics — GSR staff in particular commonly commission Rapid Evidence Assessments which are ways of quickly establishing what research is available on a topic — and with it, who has authored it. But either way, analysts and scientists will likely have a good idea about what is already understood internally about a policy issue (previous research) and contacts established via expert groups, previous advisory groups and so on. They can also help you interpret and critically appraise input from external academics.",
    benefits: [
      "Detailed, direct experience and knowledge of the local policy context and recent science/evidence resources",
      "Ability to bring a policy-oriented appraisal of external input, enhancing the value and relevance",
      "Close support on engagement with academics including enabling effective discussion and interpretation"
    ],
    limitations: [
      "Depending on experience, the specialist you talk to may have broader or narrower networks and perspectives"
    ],
    bestFor: "Helping you get the most out of any form of academic engagement. Useful for all forms and reasons for academic engagement.",
    xgovtResources: [
      { label: "GSE government website", url: "https://www.gov.uk/government/organisations/government-science-engineering", description: "Government Science & Engineering profession site" },
      { label: "GSR government page", url: "https://www.gov.uk/government/organisations/civil-service/about/research", description: "Government Social Research profession site" },
      { label: "GES government page", url: "https://www.gov.uk/government/organisations/government-economic-service", description: "Government Economic Service profession site" },
      { label: "GSS government page", url: "https://gss.civilservice.gov.uk", description: "Government Statistical Service profession site" },
      { label: "GORS government page", url: "https://www.gov.uk/government/organisations/civil-service/about/research", description: "Government Operational Research Service profession site" },
      { label: "Government Analysis Function", url: "https://www.gov.uk/government/organisations/analysis-function", description: "Umbrella site for analysts in government" }
    ],
    contactKey: "director_analysis",
    localLinkKey: "analyst_community",
    localLinkLabel: "Link to local analyst resources"
  },

  albs: {
    id: "albs",
    title: "Arms Length Bodies (ALBs)",
    subtitle: "Scientific/engineering ALBs as a route to academic expertise",
    section: "Internal to your organisation",
    description: "Arms-length bodies with specific scientific or engineering capability can be a source of extremely high-quality and targeted expertise in your policy area, as long as there is an ALB on that topic. This gives you relatively easy access to specific expertise, but this access must be carefully managed and co-ordinated. In any wider engagement with academics, it is likely beneficial to bring in experts from a relevant ALB alongside your local analyst/scientist and external academics. Normally, central government departments have specific ALB relationship managers — contact them first if you want to get in touch with a specific ALB.",
    benefits: [
      "Highly skilled and experienced scientists and engineers with policy insight",
      "Often have extensive networks with academics and awareness of the wider community",
      "Many experts with practical experience of carrying out fieldwork, on-site work and so on"
    ],
    limitations: [
      "Not all policy areas have an ALB with science/engineering specialists",
      "ALB staff are extremely busy so may take time to respond, or it may only be possible for high-profile issues"
    ],
    bestFor: "Highly specialised, often leading semi-independent expertise on specific policy-relevant science/technical issues",
    xgovtResources: [
      { label: "Map of SACs and ALBs", url: "", description: "Network map showing most science ALBs" }
    ],
    contactKey: "alb_lead",
    localLinkKey: "albs_guidance",
    localLinkLabel: "Working with our ALBs"
  },

  ari: {
    id: "ari",
    title: "Areas of Research Interest (ARIs)",
    subtitle: "Guiding and connecting to academic interests via published ARIs",
    section: "Internal to your organisation",
    description: "Areas of Research Interest are published lists of issues/questions that government departments have in relation to evidence gaps relevant to major policy areas. They allow different organisations to see who shares their interest in topics, and therefore to combine resources to address them, as well as communicate with the wider academic and research sector to stimulate interest in creating research relevant to those areas. It can provide an important bridgehead into government for academics who often struggle to understand how to engage and who with. Getting a question or issue stated in an ARI brings with it other benefits thanks to the ARI database which links with the UKRI research database of funded academic research projects.",
    benefits: [
      "Enables academics to focus research bids on topics of policy relevance",
      "Provides a mechanism for academics to find officials interested in their work",
      "Enables government organisations to join up their research interests"
    ],
    limitations: [
      "Take time to generate ARIs and publish them — often with extensive clearance required",
      "Challenge around publishing gaps in knowledge for governments",
      "Research developed on the back of them can take years to inform policy",
      "Needs more mechanisms of engagement to generate the benefits"
    ],
    bestFor: "Addressing strategic research gaps in a sector where there are no immediate deadlines",
    xgovtResources: [
      { label: "ARI website on GOV.UK", url: "https://www.gov.uk/government/publications/areas-of-research-interest", description: "All published ARIs across government" },
      { label: "ARI database", url: "https://ari.org.uk", description: "A dynamic, searchable interface for ARIs" },
      { label: "ARI guidance", url: "", description: "Guidance on drafting ARIs" },
      { label: "Finding academics via ARIs", url: "", description: "A short video explaining how to do this" }
    ],
    contactKey: "ari_lead",
    localLinkKey: "ari_guidance",
    localLinkLabel: "Local ARI guidance"
  },

  college: {
    id: "college",
    title: "College of Experts",
    subtitle: "A locally-developed list of pre-approved experts for rapid advice",
    section: "Internal to your organisation",
    description: "A College of Experts is a locally-developed list of pre-vetted academic and other experts who are available to provide rapid advice on a range of issues relevant to your organisation. Having such a college allows officials to quickly identify and contact relevant experts without needing to go through the full process of finding and vetting new academics each time. The college needs to be actively maintained and refreshed to avoid over-reliance on the same people and to bring in new voices.",
    benefits: [
      "Quick access to pre-vetted experts with known backgrounds and interests",
      "Reduces time spent searching for relevant academics",
      "Can be tailored to the specific policy domains of your organisation"
    ],
    limitations: [
      "Needs active maintenance to keep current and avoid stagnation",
      "Risk of over-reliance on the same experts — diversity of voices must be actively managed",
      "Your organisation may not yet have a college in place"
    ],
    bestFor: "Quick, trusted access to experts across a range of policy-relevant topics",
    xgovtResources: [],
    contactKey: "college_contact",
    localLinkKey: "college_guidance",
    localLinkLabel: "College of experts guidance"
  },

  callsforevidence: {
    id: "callsforevidence",
    title: "Calls for Evidence",
    subtitle: "Advertising for evidence to generate academic engagement",
    section: "External — broader reach",
    description: "For projects which require wider groups of academic stakeholders, issue open calls via knowledge intermediaries (e.g. the Academies, UPEN) to include people who have not been involved before. When appropriate, consider approaching research groups and institutions rather than individuals to gain new perspectives. Greater use could be made of knowledge intermediaries to consolidate calls for evidence to reach a wider audience. Use clear language so researchers know exactly what information is required and who is eligible to provide it. Use consistent language in all communications so that researchers can understand the political terminology.",
    benefits: [
      "Can mobilise a wide array of academic and other experts to provide evidence and insight",
      "Communicates your interest to the research community, generating projects — see also ARIs",
      "If designed well, can create a more inclusive space for early career researchers"
    ],
    limitations: [
      "Easy to get wrong: uncoordinated, limiting language, exclusive design",
      "Self-selecting responses: you get what those able to reply can give, not what exists",
      "Significant work required to interpret and integrate responses",
      "Takes significant time and resource to organise, especially if risks to credibility are to be avoided"
    ],
    bestFor: "Engaging a broad and diverse set of academic voices on a policy question with sufficient lead time",
    xgovtResources: [
      { label: "GOV.UK guidance on calls for evidence", url: "https://www.gov.uk/guidance/how-to-run-a-call-for-evidence" }
    ],
    contactKey: "",
    localLinkKey: "",
    localLinkLabel: ""
  },

  researchcomm: {
    id: "researchcomm",
    title: "Research Commissioning",
    subtitle: "Buying in external research expertise",
    section: "External — procurement",
    description: "Research commissioning is a resource-intensive exercise — but often essential to get new data or synthesise/analyse existing data to improve understanding of a policy issue. The guidance here focuses specifically on enabling better academic engagement via research commissioning, which can be challenging for most academics due to the timelines required to respond to ITTs, the contractual arrangements, and effort to draft and scope work. Generally academic engagement in this area is often done with consultancy-led consortia. Enabling better academic engagement might require: longer lead-in times, separate academic-specific contracts (e.g. secondments), or funding collaborations with established centres identified via UKRI. It is almost always advisable to work with a government scientist/analyst (especially GSR) on any such commissioning.",
    benefits: [
      "Directly addresses key research questions",
      "Can create positive long-term relationships and understanding",
      "Can be flexible with what is delivered, as long as the contract varies accordingly"
    ],
    limitations: [
      "Requires extensive budget (usually >£50K)",
      "Intensive resourcing needed to get a range of approvals",
      "Market response is dependent on the ITT, so you may not get academic suppliers"
    ],
    bestFor: "Deep engagement with academic experts in an interactive way over time, when significant budget is available",
    xgovtResources: [
      { label: "GSR research guidance", url: "https://www.gov.uk/government/organisations/civil-service/about/research", description: "GSR guidance on publishing government research" },
      { label: "Research Integrity concordat", url: "", description: "Government guidance for the research integrity concordat" }
    ],
    contactKey: "gsr_hop",
    localLinkKey: "research_commissioning",
    localLinkLabel: "Research commissioning guidance"
  },

  secondment: {
    id: "secondment",
    title: "Inward Secondment",
    subtitle: "Temporarily recruiting an academic into the civil service",
    section: "External — people",
    description: "Inward secondments of academics into policy mean that the academic actually becomes a full civil servant for the time they are with you. This gives them access to civil-service-only datasets or other limited resources which can deepen the relationship and provide unique opportunities for their expertise to be beneficial. The academic must adhere to the Civil Service Code and be eligible to be employed by the civil service (UK, EEA or Commonwealth citizen). For academics new to the civil service it is important they undertake preparatory training about how policy works. Be aware that for any academic new to the civil service it may take several months to acclimatise to the very different working environment. Increasingly the UK research councils offer funded secondments.",
    benefits: [
      "Relatively quick way of getting deep, flexible expertise into core teamwork",
      "Access to restricted material and data depending on clearance level",
      "Much easier working across sections of a ministry or department",
      "Potential to transfer skills and knowledge as well as insights",
      "With funded programmes, secondments can be free to government"
    ],
    limitations: [
      "Non UK/EEA/Commonwealth academics are much harder to bring in",
      "Agreements on IP clauses can give rise to very long delays (more than months)",
      "Those with many UK addresses can take longer due to DBS checks (+weeks)",
      "Challenges remain in proper inter-departmental working"
    ],
    bestFor: "Bringing deep, flexible academic expertise into a team for a sustained period, particularly on complex or sensitive policy areas",
    xgovtResources: [
      { label: "GOS Academic secondments guidance", url: "", description: "Government Office for Science guidance" },
      { label: "STEM Futures", url: "https://stemfutures.co.uk", description: "A government-run programme enabling STEM secondments" },
      { label: "Cabinet Office secondments playbook", url: "", description: "Cabinet Office playbook on secondments" }
    ],
    contactKey: "hr_secondments",
    localLinkKey: "secondments",
    localLinkLabel: "Secondment guidance"
  },

  advisory: {
    id: "advisory",
    title: "Advisory Board / Group",
    subtitle: "A temporary group of experts advising on project design and delivery",
    section: "External — structured engagement",
    description: "Advisory boards or groups are temporary groups of experts brought together to advise on a project — often a major policy programme or a major policy research or evaluation project. This gives a good opportunity to have a range of academic advisors to bring perspectives from different disciplines and advise on different elements of a project. The Blackett Review process is a well-known example of this model in action.",
    benefits: [
      "Brings together a range of expertise in a structured and accountable way",
      "Provides continuity of expert input over the life of a project",
      "Increases scrutiny resilience by demonstrating expert oversight"
    ],
    limitations: [
      "Requires significant lead time to set up properly",
      "Members need to be managed carefully to avoid conflicts of interest",
      "Can become a rubber-stamping exercise if not properly designed"
    ],
    bestFor: "Major projects or programmes requiring sustained, structured expert oversight and input",
    xgovtResources: [
      { label: "Advisory group guidance document", url: "" },
      { label: "Blackett Reviews (GOS)", url: "https://www.gov.uk/government/publications/blackett-review-of-engineering-biology", description: "GOS Engaging with academics doc, p.20" }
    ],
    contactKey: "",
    localLinkKey: "advisory_groups",
    localLinkLabel: "Advisory board guidance"
  },

  directadvice: {
    id: "directadvice",
    title: "Direct Advice",
    subtitle: "Speaking directly to an individual academic on a specific topic",
    section: "External — direct contact",
    description: "Speaking directly to an individual academic on a specific topic or issue. This is the simplest and most direct form of academic engagement — finding the right person and asking them. It requires knowing who to ask, or having a good broker (such as your CSA, analyst, or the Academies) to help you find the right person. See the Finding Academics guide for practical guidance on how to identify and approach suitable experts.",
    benefits: [
      "Quickest route to targeted expert insight on a specific topic",
      "Low cost and low overhead — can be done informally",
      "Allows for a direct, exploratory conversation without formal structures"
    ],
    limitations: [
      "Finding the right person can be hard without a good broker",
      "Risk of going back to the same people repeatedly",
      "Individual academics may not reflect the full range of views on a topic"
    ],
    bestFor: "Getting a quick, targeted expert view on a specific, well-defined topic or question",
    xgovtResources: [
      { label: "Guide to finding academics", url: "finding-academics.html" },
      { label: "UPEN — university policy engagement network", url: "https://www.upen.ac.uk" }
    ],
    contactKey: "",
    localLinkKey: "direct_advice",
    localLinkLabel: "Direct advice guidance"
  },

  internship: {
    id: "internship",
    title: "Academic Internship",
    subtitle: "Funded placements for PhD and Master's students in government",
    section: "External — people",
    description: "Academic internships are funded placements for PhD and Master's students in government departments. They offer a relatively low-cost way to bring in fresh academic perspectives and analytical capacity for a defined project. Programmes such as UKRI Policy Internships and STEM Futures provide frameworks for these placements. Interns need clear projects and good supervision to be productive.",
    benefits: [
      "Brings in fresh academic perspectives and analytical energy",
      "Relatively low cost compared to full secondments",
      "Can produce high-quality, targeted analysis on specific questions"
    ],
    limitations: [
      "Interns need significant supervision time",
      "Projects must be well-scoped in advance to be productive",
      "Not suitable for urgent or highly sensitive work"
    ],
    bestFor: "Defined analytical projects with months of lead time and capacity to supervise",
    xgovtResources: [
      { label: "STEM Futures", url: "https://stemfutures.co.uk", description: "Government-run STEM internship programme" },
      { label: "UKRI Policy Internships Scheme", url: "https://www.ukri.org/what-we-offer/developing-people-and-skills/esrc/esrc-studentship-opportunities/policy-internships-scheme/", description: "UKRI-funded policy internships" }
    ],
    contactKey: "",
    localLinkKey: "internships",
    localLinkLabel: "Internships guidance"
  },

  studentproj: {
    id: "studentproj",
    title: "Student Project",
    subtitle: "Working with Master's and PhD students on short-term targeted analysis",
    section: "External — people",
    description: "Student projects involve working with Master's or PhD students to do short-term, targeted analysis on a policy question. Often facilitated through university partnerships or programmes like the Evidence and Policy journal's student placement scheme. These can be low or zero cost and offer a good way to get fresh analytical perspectives on bounded questions.",
    benefits: [
      "Often low or zero cost to government",
      "Can produce targeted, high-quality analysis on specific questions",
      "Provides development opportunity for students while benefiting policy"
    ],
    limitations: [
      "Quality varies — students need supervision from their academic supervisor as well as government",
      "Projects must be well-scoped and bounded to be productive",
      "Not suitable for sensitive or urgent work"
    ],
    bestFor: "Bounded analytical questions with sufficient lead time and a clear brief",
    xgovtResources: [
      { label: "Guidance on student projects", url: "" },
      { label: "Evidence mapping tool with a student project", url: "" }
    ],
    contactKey: "",
    localLinkKey: "student_projects",
    localLinkLabel: "Student project guidance"
  },

  seminar: {
    id: "seminar",
    title: "Seminar",
    subtitle: "Hosting one or more academics to give a seminar on a specific topic",
    section: "External — events",
    description: "Seminars are generally where an academic or other expert is invited to give a talk about a specific topic in front of a group of interested officials. These are usually followed by a round of questions and discussion. Seminars are generally used for understanding a topic or issue and exploring implications, rather than bringing together a range of expert views (roundtable) or integrating interactive policy design approaches (workshop). There are normally fewer experts than officials in the room.",
    benefits: [
      "Low cost and easy to organise",
      "Good for team-level learning and awareness-raising",
      "Can be a first step towards deeper engagement with a specific academic"
    ],
    limitations: [
      "One-directional: mostly input to officials, limited dialogue",
      "Not appropriate for getting a range of views or for active policy development",
      "Quality is highly dependent on the choice of speaker"
    ],
    bestFor: "Building team understanding of a topic, or introducing a new evidence base to a policy team",
    xgovtResources: [
      { label: "Guidance on setting up and running academic-policy seminars", url: "" },
      { label: "Guide to finding academics", url: "finding-academics.html" }
    ],
    contactKey: "",
    localLinkKey: "seminars",
    localLinkLabel: "Seminar guidance"
  },

  roundtable: {
    id: "roundtable",
    title: "Roundtable",
    subtitle: "An open, unstructured discussion with 10–15 academics on a policy issue",
    section: "External — events",
    description: "Roundtables are where a small group of officials interested in getting a range of expert views from diverse academic and non-academic perspectives are brought together, often using the Chatham House Rule of unattributable reporting to promote openness. Similar to a seminar in that the general approach is to open up and explore a topic, but different in that there is a wider and more diverse set of expert inputs and a stronger focus on issues centred on policy concerns (rather than academic framings, such as a seminar might bring).",
    benefits: [
      "Gathers a diversity of expert views quickly in a single event",
      "Chatham House Rule encourages more candid contributions",
      "Relatively low cost compared to more structured forms of engagement"
    ],
    limitations: [
      "Can be hard to ensure the right mix of voices",
      "Unstructured discussions can produce outputs that are hard to synthesise",
      "Requires skilled facilitation to be productive"
    ],
    bestFor: "Gathering a range of informed expert views on a policy question in an exploratory, open-ended way",
    xgovtResources: [
      { label: "Guidance on running and setting up roundtables", url: "" },
      { label: "Guide to finding academics", url: "finding-academics.html" }
    ],
    contactKey: "",
    localLinkKey: "roundtables",
    localLinkLabel: "Roundtable guidance"
  },

  workshop: {
    id: "workshop",
    title: "Workshop",
    subtitle: "An interactive session with academics to explore policy options",
    section: "External — events",
    description: "Workshops are interactive sessions with one or more academics designed to explore policy options, work through problems, or co-produce analysis or recommendations. Unlike seminars (which are largely one-way) or roundtables (which are open discussions), workshops involve structured activities designed to generate specific outputs. The NESTA toolkit provides useful methods and materials for running effective policy-academic workshops.",
    benefits: [
      "Produces specific, actionable outputs through structured activity",
      "Allows for genuine co-production of ideas between officials and academics",
      "Can surface creative options and build shared understanding"
    ],
    limitations: [
      "Requires significant preparation and skilled facilitation",
      "Can be resource-intensive to organise",
      "Quality of outputs is highly dependent on design and facilitation"
    ],
    bestFor: "Exploring policy options or developing joint approaches with academics on a complex, open-ended question",
    xgovtResources: [
      { label: "Guidance on setting up and running academic-policy workshops", url: "" },
      { label: "NESTA toolkit elements and materials", url: "https://www.nesta.org.uk", description: "Methods and tools for facilitated workshops" },
      { label: "Guide to finding academics", url: "finding-academics.html" }
    ],
    contactKey: "",
    localLinkKey: "workshops",
    localLinkLabel: "Workshop guidance"
  },

  fellowship: {
    id: "fellowship",
    title: "Policy Fellowship",
    subtitle: "A career development fellowship connecting you to a range of academics",
    section: "External — development",
    description: "Policy fellowships are career and professional development (CPD) opportunities hosted by academic institutions or one of the Academies. The general idea is that policy officials sign up to a policy fellowship (fees are usually needed, often in the low thousands), for a roughly 3 to 6 month engagement programme. Via structured interactions with a range of academic and other experts — either based at a university or connected by the hosting Academy's fellows list — the official gets to have a range of diverse conversations and gain insights that might otherwise never be obtained. Central to this is the development of both a new academic network and a new policy network via connecting to other officials attending the programme at the same time.",
    benefits: [
      "Builds a lasting, diverse academic network beyond any single policy area",
      "Creates peer-to-peer connections with other officials going through the same process",
      "Generates insights that structured single-topic engagement rarely produces"
    ],
    limitations: [
      "Typically requires L&D budget (usually low thousands of pounds)",
      "Time commitment over several months — requires line manager support",
      "The breadth of engagement means it is less targeted than other options"
    ],
    bestFor: "Officials wanting to build a broader academic network and deeper understanding of how academia works, with months available",
    xgovtResources: [
      { label: "Guidance on undertaking a policy fellowship", url: "" },
      { label: "British Academy policy fellowships", url: "https://www.thebritishacademy.ac.uk" },
      { label: "Royal Academy of Engineering fellowships", url: "https://www.raeng.org.uk" }
    ],
    contactKey: "",
    localLinkKey: "policy_fellowships",
    localLinkLabel: "Policy Fellowships guidance"
  }
};
