// Option page content
// Updated May 2026 — enriched with content from DRAFT AE Toolkit V1.4 (GOS)
window.APE_OPTIONS_CONTENT = {

  csa: {
    id: "csa",
    title: "Chief Scientific Adviser (CSA)",
    subtitle: "Academic engagement and brokering via your CSA",
    section: "Internal to your organisation",
    description: "The CSA in a government body is normally someone who holds both an academic and a civil service post. This means they generally have significant networks into academic circles, allowing you to connect with a wide range of experts. CSA offices can signpost relevant disciplines, networks and experts, convening routes, scientists in your department and cross-government activity. Departments may also have established routes to access external expertise quickly, which your CSA office can signpost. The process for doing this will vary by organisation so please contact the office of your CSA (if you have one) to find out how best to do this.",
    benefits: [
      "CSAs offer a very quick way of getting an academic perspective on your policy area",
      "They are often well-placed to tailor or translate advice into policy terms better than external academics",
      "CSAs can help quality assure research and evidence in their domain of expertise",
      "CSAs are connected to each other via a cross-government network — allowing access to expertise across a wider range of domains",
      "CSA offices often have established rapid-access routes to external expertise that are not widely advertised"
    ],
    limitations: [
      "CSAs are extremely busy — they typically need to focus only on the most important issues",
      "CSAs are subject experts in particular areas; if your need is outside that domain they may not be able to help directly",
      "Not all departments have a CSA or equivalent — check what exists in your organisation"
    ],
    bestFor: "Rapid connection to a single or group of academics within a related domain of knowledge, particularly for high-profile or high-scrutiny policy issues. Also good as a first port of call when you are not sure which route to take.",
    xgovtResources: [
      { label: "Chief Scientific Advisers Network in Action", url: "https://www.gov.uk/government/publications/chief-scientific-advisers-network-in-action", description: "Short case studies showing how CSA offices have supported policy teams across government" },
      { label: "Chief Scientific Advisers — GOV.UK", url: "https://www.gov.uk/government/groups/chief-scientific-advisers", description: "List of all departmental CSAs" },
      { label: "Institute for Government: GCSA explainer", url: "https://www.instituteforgovernment.org.uk", description: "Overview of the role of the Government Chief Scientific Adviser" }
    ],
    contactKey: "csa_name",
    contactEmailKey: "csa_email",
    localLinkKey: "csa_guidance",
    localLinkLabel: "CSA office guidance"
  },

  sac: {
    id: "sac",
    title: "Science Advisory Council / Expert Group",
    subtitle: "Engaging your organisation's scientific advisory committees",
    section: "Internal to your organisation",
    description: "Scientific Advisory Councils and Scientific Advisory Committees are formal mechanisms for accessing expert advice, with clear governance and a defined remit. They have small memberships, an official chair and meet regularly. Departments normally have one Scientific Advisory Council providing strategic advice across the breadth of their policies, but can have several Scientific Advisory Committees providing advice on specific topics. SAC/Expert Groups present an important way of connecting quickly to a range of pre-selected experts with a strong background in the policy area. Even if the group cannot address your evidence need directly, members can be a resource to suggest relevant expertise elsewhere.",
    benefits: [
      "Pre-selected array of experts with background knowledge of the organisation and its policy context",
      "Clear governance, collective discussion, and an auditable record of input",
      "Well-suited to high-scrutiny or long-running issues requiring a multidisciplinary view",
      "Chair-led process that can provide structured assurance",
      "Connection to wider academic networks beyond the CSA"
    ],
    limitations: [
      "The SAC/EG might not have experts in the specific area you need",
      "Your organisation may not have a relevant SAC/EG at all",
      "Meetings and members are busy — likely only higher-priority issues can be considered",
      "Standing committee structure means less flexibility than direct advice routes"
    ],
    bestFor: "High-scrutiny or long-running policy issues where you need a standing forum for ongoing advice and challenge, with clear governance, continuity of expertise over time, and transparent management of interests.",
    xgovtResources: [
      { label: "Code of Practice for SACs (CoPSAC)", url: "https://www.gov.uk/government/publications/scientific-advisory-committees-code-of-practice/code-of-practice-for-scientific-advisory-committees-and-councils-copsac-2021", description: "Established good practice for working with expert advisers" },
      { label: "Map of SACs and ALBs", url: "https://www.gov.uk/government/publications/scientific-advisory-committees-code-of-practice/map-of-scientific-advisory-committees-councils-and-arms-length-bodies-associated-with-government-departments", description: "Network map of almost all SACs and science ALBs, filterable by research topic" }
    ],
    contactKey: "sac_name",
    contactEmailKey: "sac_email",
    localLinkKey: "sac_guidance",
    localLinkLabel: "SAC / Expert group information"
  },

  gse: {
    id: "gse",
    title: "Government Scientist / Analyst",
    subtitle: "Using internal analysts and scientists as brokers of academic engagement",
    section: "Internal to your organisation",
    description: "For any engagement with academics externally, it will almost always be beneficial to first engage with a local analyst (a member of GSR, GES, GORS, GSS or GDS) or scientist/engineer. Internal experts can help refine questions, assess existing evidence and expertise, and identify appropriate types of academic expertise before you engage externally. GSR staff in particular commonly commission Rapid Evidence Assessments — ways of quickly establishing what research exists on a topic and who has authored it. Analysts and scientists also provide valuable support in quality-assuring external input during engagement, bringing a policy-oriented appraisal that external academics rarely have.",
    benefits: [
      "Detailed, direct experience and knowledge of the local policy context and recent evidence resources",
      "Can help refine questions, sense-check assumptions, and identify relevant expertise before external engagement",
      "Provide valuable quality assurance of external academic input during engagement",
      "Often have strong networks from contracted research, advisory groups and conferences",
      "Able to bring a policy-oriented appraisal that enhances the value and relevance of external input"
    ],
    limitations: [
      "Depending on experience, the specialist you talk to may have broader or narrower networks",
      "Internal capacity varies — some teams have embedded scientists and analysts, others do not"
    ],
    bestFor: "A first step before any form of external academic engagement. Also useful across all reasons for engagement — analysts and scientists help you get more out of whichever route you choose.",
    xgovtResources: [
      { label: "Government Science & Engineering (GSE) Profession", url: "https://www.gov.uk/government/organisations/civil-service-government-science-engineering", description: "Government Science & Engineering profession site" },
      { label: "Government Social Research (GSR) Profession", url: "https://www.gov.uk/government/organisations/civil-service-government-social-research-profession", description: "Government Social Research profession site" },
      { label: "Government Economic Service (GES)", url: "https://www.gov.uk/government/organisations/civil-service-government-economic-service", description: "Government Economic Service profession site" },
      { label: "Government Statistical Service (GSS)", url: "https://gss.civilservice.gov.uk", description: "Government Statistical Service profession site" },
      { label: "GORS — Government Operational Research Service", url: "http://www.operational-research.gov.uk", description: "Government Operational Research Service" },
      { label: "Government Analysis Function", url: "https://www.gov.uk/government/organisations/analysis-function", description: "Umbrella site for analysts in government" }
    ],
    contactKey: "director_analysis",
    localLinkKey: "analyst_community",
    localLinkLabel: "Local analyst resources"
  },

  albs: {
    id: "albs",
    title: "Arms Length Bodies (ALBs)",
    subtitle: "Scientific and engineering ALBs as a route to academic expertise",
    section: "Internal to your organisation",
    description: "Arms-length bodies (ALBs) and public sector research establishments (PSREs) with specific scientific or engineering capability provide specialist advice, data and regulatory expertise, and often maintain strong links to academia and industry. This gives you relatively easy access to specific expertise, but access must be carefully managed and co-ordinated. Normally, central government departments have specific ALB relationship managers — contact them first. The SAC/ALB map tool allows you to filter by research topic using the same topic words as the ARI database, making it easy to cross-reference internal and external expertise.",
    benefits: [
      "Highly skilled and experienced scientists and engineers with both technical and policy insight",
      "Often have extensive networks with academics and awareness of the wider research community",
      "Many have practical experience of carrying out fieldwork and on-site work",
      "Can be cross-referenced with the ARI database using shared research topic tags"
    ],
    limitations: [
      "Not all policy areas have an ALB with relevant science or engineering specialists",
      "ALB staff are extremely busy — responses may take time, or engagement may only be possible for high-profile issues",
      "Access needs to be carefully managed and co-ordinated through relationship managers"
    ],
    bestFor: "Highly specialised, often leading semi-independent expertise on specific policy-relevant science and technical issues, particularly where an ALB is directly relevant to your policy area.",
    xgovtResources: [
      { label: "Map of SACs and ALBs", url: "https://www.gov.uk/government/publications/scientific-advisory-committees-code-of-practice/map-of-scientific-advisory-committees-councils-and-arms-length-bodies-associated-with-government-departments", description: "Network map showing most science ALBs, filterable by research topic" },
      { label: "Index of all public bodies and agencies", url: "https://www.gov.uk/government/organisations", description: "Full GOV.UK index of all public bodies" },
      { label: "National Research Organisations (NRO) group", url: "https://nrogroup.org/", description: "Alliance of 40 science and research centres — single port of call for government seeking scientific expertise" }
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
    description: "ARIs are published lists of research topics and questions published by government organisations to highlight their medium- and long-term evidence needs to external experts. They can be used in several ways: promote or refresh your organisation's high-priority ARI questions to encourage academics with relevant expertise to respond; use the ARI database search function to identify other departments with shared interests to join up resources; and use the database to identify relevant UKRI-funded research projects and the academics leading them. Getting a question stated in an ARI is both a way of stimulating relevant research and a practical tool for finding existing experts.",
    benefits: [
      "Enables academics to focus research bids on topics of policy relevance",
      "Provides a mechanism for academics to find officials interested in their work",
      "Enables government organisations to join up research interests across departments",
      "ARI database links directly to UKRI-funded projects — a practical expert-finding tool"
    ],
    limitations: [
      "Take time to generate and publish — often requiring extensive internal clearance",
      "Challenges around publishing gaps in government knowledge publicly",
      "Research generated on the back of ARIs can take years to feed back into policy",
      "Needs to be combined with other engagement mechanisms to realise full benefits"
    ],
    bestFor: "Addressing strategic research gaps where there is no immediate deadline, and as a tool for finding academics already working on topics relevant to your policy area.",
    xgovtResources: [
      { label: "ARI website on GOV.UK", url: "https://www.gov.uk/government/publications/areas-of-research-interest", description: "All published ARIs across government" },
      { label: "ARI database", url: "https://ari.org.uk", description: "Dynamic, searchable interface — links ARIs to UKRI-funded research projects and researchers" },
      { label: "Writing and using Areas of Research Interest", url: "https://www.gov.uk/government/publications/writing-and-using-areas-of-research-interest", description: "Guidance on how ARIs work and how to draft them" }
    ],
    contactKey: "ari_lead",
    localLinkKey: "ari_guidance",
    localLinkLabel: "Local ARI guidance"
  },

  college: {
    id: "college",
    title: "College of Experts",
    subtitle: "A locally-developed register of pre-approved experts for rapid advice",
    section: "Internal to your organisation",
    description: "Colleges of Experts are registers of experts underpinned by Terms of Reference agreed between individuals and the department. They provide a way for departments to access ad hoc and timely expert advice on policies and projects. Membership can be large — up to 200 experts — and there are no regular meetings or chair. Members can be asked to help with project proposals, provide peer review on research or papers, attend workshops or sit on expert panels, normally focused only on their area of expertise. They are made up of external experts from academia, industry, NGOs and local government.",
    benefits: [
      "Quick access to pre-vetted experts without needing to search and vet afresh each time",
      "Membership can be large and broad, spanning the full breadth of a department's remit",
      "No overhead of a standing committee — members are called on as and when needed",
      "Provides specialist, targeted advice particularly where issues require deep or niche knowledge",
      "Terms of Reference provide a clear, auditable framework for engagement"
    ],
    limitations: [
      "Your organisation may not yet have a College of Experts in place",
      "Needs active maintenance and refreshing to avoid over-reliance on the same voices",
      "Setting up a College requires significant upfront effort and governance work"
    ],
    bestFor: "Repeated access to specialist input over time without the overhead of a standing committee. Particularly useful where departmental priorities are broad or change frequently.",
    xgovtResources: [
      { label: "Map of SACs and ALBs", url: "https://www.gov.uk/government/publications/scientific-advisory-committees-code-of-practice/map-of-scientific-advisory-committees-councils-and-arms-length-bodies-associated-with-government-departments", description: "Includes Colleges of Experts alongside SACs — useful for understanding what exists across government" },
      { label: "CoPSAC — Code of Practice for SACs", url: "https://www.gov.uk/government/publications/scientific-advisory-committees-code-of-practice/code-of-practice-for-scientific-advisory-committees-and-councils-copsac-2021", description: "Good practice guidance applicable to Colleges of Experts as well as formal SACs" }
    ],
    contactKey: "college_contact",
    localLinkKey: "college_guidance",
    localLinkLabel: "College of experts guidance"
  },

  callsforevidence: {
    id: "callsforevidence",
    title: "Calls for Evidence",
    subtitle: "A structured way to gather research, data and expertise at scale",
    section: "External to your organisation",
    description: "Calls for evidence are a structured way to gather relevant research, data, practitioner insight and wider expertise at scale. They are most useful when teams need to understand the current evidence base, identify gaps or uncertainty, or test the framing of a policy problem. Using a call for evidence works best when you need to broaden beyond existing networks, gather inputs at scale, and create a transparent record of what evidence was considered. It works well for mapping the current evidence base, stress-testing a problem definition, surfacing gaps and uncertainty, and inviting insight that may not be visible through literature alone.",
    benefits: [
      "Can mobilise a wide array of academic and other experts to provide evidence and insight",
      "Creates a transparent, auditable record of what evidence was considered",
      "Communicates your research interests to the academic community, stimulating relevant future research",
      "Can be designed to reach underrepresented and early-career researchers if done carefully"
    ],
    limitations: [
      "Easy to get wrong — uncoordinated calls, unclear language or exclusive design can undermine credibility",
      "Self-selecting responses mean you get what those able to reply can give, not a complete picture",
      "Significant work required to triage, synthesise and interpret responses",
      "Takes significant time and resource to organise well"
    ],
    bestFor: "Situations where you need to map the evidence base, test your problem definition, or gather diverse expert input at scale — with sufficient time and resource to manage the process properly.",
    practicalSteps: [
      "Be clear about purpose and use: set out why the call is being run, what decisions it will inform, and how responses will be used — including whether findings will be published",
      "Plan governance and information handling early: decide how submissions will be received, stored and protected, and seek advice on data protection",
      "Ask focused, answerable questions: test questions with experts and knowledge mobilisers before finalising",
      "Analyse and synthesise transparently: use clear approaches for triage and synthesis, recording key themes, limitations and confidence levels",
      "Acknowledge contributions: list contributors in published reports and send letters of acknowledgement to respondents",
      "Close the loop: provide feedback and communicate what was learned and what happens next"
    ],
    xgovtResources: [
      { label: "Current calls for evidence on GOV.UK", url: "https://www.gov.uk/search/policy-papers-and-consultations?content_store_document_type%5B%5D=open_calls_for_evidence&order=updated-newest", description: "Examples of current open calls for evidence" },
      { label: "CAPE Resource Navigator", url: "https://www.cape.ac.uk/wp-content/uploads/2025/04/CAPE-Resource-Navigator-April-2025.pdf", description: "Curated tools supporting academic–policy engagement, including templates" },
      { label: "Scottish Government Consultation Good Practice Guidance", url: "https://www.gov.scot", description: "Practical guidance on planning and running engagement activities" }
    ],
    contactKey: "",
    localLinkKey: "",
    localLinkLabel: ""
  },

  researchcomm: {
    id: "researchcomm",
    title: "Research Commissioning",
    subtitle: "Procuring a defined piece of research or analysis from an external supplier",
    section: "External to your organisation",
    description: "Research commissioning is the process of procuring a defined piece of research or analysis from an external supplier — for example, a university, consultancy or research organisation — to answer a policy-relevant question. It is useful when you need a clearly specified output with a defensible audit trail and named accountability for delivery. It is appropriate where the work requires dedicated time and specialist capability beyond what can be achieved through informal advice or internal capacity. Enabling good academic engagement in commissioning can be challenging — academics face difficulties with ITT timelines, contractual arrangements and scoping effort — so specific tactics may be needed to attract academic suppliers.",
    benefits: [
      "Directly addresses key research questions with a clearly specified, auditable output",
      "Can create positive long-term relationships and deep understanding with academic suppliers",
      "Flexible on deliverables as long as the contract varies accordingly",
      "Provides a defensible audit trail — important for high-scrutiny or contested policy areas"
    ],
    limitations: [
      "Requires significant budget — typically >£50K for substantive commissioned research",
      "Resource-intensive to manage, with multiple approvals required",
      "Market response depends on the ITT — you may not attract academic suppliers without specific tactics",
      "Long lead times for scoping, procurement, contracting and delivery"
    ],
    bestFor: "Deep engagement with academic experts over time when significant budget is available and a clearly specified, quality-assured output is needed — best suited to high-scrutiny or long-running policy issues.",
    practicalSteps: [
      "Start with the decision and use case: be clear what decision the research will inform, how it will be used, and the level of assurance needed",
      "Involve analytical and commercial expertise early: engage appropriate analysts to shape the question and methods, and speak to procurement colleagues early to choose the right route",
      "Plan governance, assurance and delivery management: agree who will oversee delivery and how outputs will be quality assured",
      "To attract academic suppliers: advertise early via ARIs and calls for evidence, consider open Q&A sessions and expression-of-interest periods"
    ],
    xgovtResources: [
      { label: "Government Social Research (GSR) profession", url: "https://www.gov.uk/government/organisations/civil-service-government-social-research-profession", description: "GSR guidance on commissioning and publishing government research" },
      { label: "NESTA CAPE Toolkit", url: "https://media.nesta.org.uk/documents/221205-CAPE-Toolkit-2.pdf", description: "Practical tools supporting academic–policy engagement including commissioning guidance" },
      { label: "Research Integrity concordat", url: "https://www.universitiesuk.ac.uk/topics/research-and-innovation/concordat-research-integrity", description: "Guidance on research integrity in commissioned work" }
    ],
    contactKey: "gsr_hop",
    localLinkKey: "research_commissioning",
    localLinkLabel: "Research commissioning guidance"
  },

  secondment: {
    id: "secondment",
    title: "Secondments, Fellowships & Internships",
    subtitle: "Structured ways to bring academic expertise into government for a defined period",
    section: "External to your organisation",
    description: "There are a variety of structured ways to bring academic expertise into government for a defined period — inward secondments, policy fellowships, PhD and Master's internships, and informal capacity-building exchanges such as pairing schemes, short-term projects and job shadowing. These routes build capability and relationships but usually require long lead-in times for approvals, negotiations with home institutions, clearance and onboarding. Inward secondments mean the academic becomes a full civil servant for the duration, giving access to civil-service-only datasets. Increasingly, UK research councils offer funded secondment programmes, meaning no budget is required from the department.",
    benefits: [
      "Relatively quick way of getting deep, flexible expertise into core teamwork once in post",
      "Access to restricted material and data depending on clearance level",
      "Much easier working across sections of a ministry or department",
      "Potential to transfer skills and knowledge in both directions",
      "Funded programmes (e.g. UKRI) can mean secondments are free to government"
    ],
    limitations: [
      "Non-UK/EEA/Commonwealth academics are much harder to bring in",
      "IP clause negotiations can cause delays of months before a start date is agreed",
      "DBS checks for those with many UK addresses can add several weeks",
      "Academics new to the civil service may need several months to acclimatise to the different working environment",
      "Long lead times make these routes unsuitable for urgent needs"
    ],
    bestFor: "Bringing deep, flexible academic expertise into a team for a sustained period — particularly on complex, long-running or sensitive policy areas where ongoing access to specialist knowledge is needed.",
    xgovtResources: [
      { label: "Directory of Exchange Schemes", url: "https://www.gov.uk/government/publications/routes-for-academic-engagement-with-government/routes-for-academic-engagement-with-government", description: "Explore all existing schemes for civil servants and academics" },
      { label: "Civil Service Careers: Secondments", url: "https://www.civil-service-careers.gov.uk/secondments/", description: "For officials interested in a placement in academia" },
      { label: "STEM Futures", url: "https://stemfutures.co.uk", description: "Government-run programme enabling STEM secondments" },
      { label: "UKRI Policy Internships Scheme", url: "https://www.ukri.org/what-we-offer/developing-people-and-skills/esrc/esrc-studentship-opportunities/policy-internships-scheme/", description: "UKRI-funded policy internships for PhD students" }
    ],
    contactKey: "hr_secondments",
    localLinkKey: "secondments",
    localLinkLabel: "Secondment guidance"
  },

  advisory: {
    id: "advisory",
    title: "Advisory Board / Group",
    subtitle: "A temporary group of experts advising on project design and delivery",
    section: "External to your organisation",
    description: "Advisory boards or groups are temporary groups of experts brought together to advise on a specific project — often a major policy programme or a research or evaluation project. They provide a range of academic advisors to bring perspectives from different disciplines and advise on different elements of a project over time. Unlike SACs, they are project-specific and time-limited. They are most useful when you need sustained, structured expert oversight with clear governance and a diverse range of perspectives — particularly where there is high public or parliamentary scrutiny.",
    benefits: [
      "Brings together a range of expertise in a structured and accountable way",
      "Provides continuity of expert input over the life of a project",
      "Increases scrutiny resilience by demonstrating transparent expert oversight",
      "Can be designed with diversity and inclusion in mind from the outset",
      "Project-specific scope means members can be chosen for precise relevance"
    ],
    limitations: [
      "Requires significant lead time to set up properly, including governance documentation",
      "Members need to be managed carefully to avoid conflicts of interest",
      "Can become a rubber-stamping exercise if not properly designed and chaired",
      "Ongoing secretariat resource needed to manage meetings and records"
    ],
    bestFor: "Major projects or programmes requiring sustained, structured expert oversight — particularly where there is high public or parliamentary scrutiny or where a transparent, auditable record of expert input is needed.",
    xgovtResources: [
      { label: "Principles of Scientific Advice to Government", url: "https://www.gov.uk/government/publications/scientific-advice-to-government-principles/principles-of-scientific-advice-to-government", description: "Core principles including transparency, robustness and appropriate application of expertise" },
      { label: "CoPSAC — Code of Practice for SACs", url: "https://www.gov.uk/government/publications/scientific-advisory-committees-code-of-practice/code-of-practice-for-scientific-advisory-committees-and-councils-copsac-2021", description: "Good practice guidance applicable to advisory groups as well as formal SACs" }
    ],
    contactKey: "",
    localLinkKey: "advisory_groups",
    localLinkLabel: "Advisory board guidance"
  },

  directadvice: {
    id: "directadvice",
    title: "Direct Advice",
    subtitle: "Engaging individually with one or more academics for targeted input",
    section: "External to your organisation",
    description: "Direct advice involves engaging individually with one or more academics for targeted input on a specific topic. It is a commonly used route and can be particularly helpful where you need short-term focused expertise to explore an issue, sense-check thinking, or clarify aspects of the existing evidence base. Whilst direct advice can be efficient and flexible, care should be taken about whether it is the most appropriate route. Relying on a small number of experts narrows the range of perspectives informing an issue, which can affect robustness and transparency — particularly for high-scrutiny issues. See the Finding Academics guide for practical guidance on identifying and approaching suitable experts.",
    benefits: [
      "Quickest route to targeted expert insight on a specific, well-defined topic",
      "Low cost and low overhead — can be done informally",
      "Allows for a direct, exploratory conversation without formal structures",
      "Flexible — can be a one-off conversation or the start of a longer relationship"
    ],
    limitations: [
      "Relying on a small number of experts can narrow the range of perspectives significantly",
      "Risk of going back to the same people repeatedly — affects robustness and diversity of input",
      "May not be sufficient for high-scrutiny issues where a transparent process is needed",
      "Finding the right person can be hard without a good broker or finding strategy"
    ],
    bestFor: "Quick, targeted expert insight on a specific well-defined question — particularly at early stages of policy development or where a rapid sense-check is needed. Less suitable as the sole input for high-scrutiny decisions.",
    xgovtResources: [
      { label: "Finding Academics — Navigator guide", url: "../finding-academics.html", description: "Practical routes for identifying the right experts" },
      { label: "UPEN — University Policy Engagement Network", url: "https://upen.ac.uk/", description: "Network of 120+ UK universities — can help identify relevant academics quickly" },
      { label: "Principles of Scientific Advice to Government", url: "https://www.gov.uk/government/publications/scientific-advice-to-government-principles/principles-of-scientific-advice-to-government", description: "Core principles including transparency and robustness" }
    ],
    contactKey: "",
    localLinkKey: "direct_advice",
    localLinkLabel: "Direct advice guidance"
  },

  internship: {
    id: "internship",
    title: "Academic Internship",
    subtitle: "Funded placements for PhD and Master's students in government",
    section: "External to your organisation",
    description: "Academic internships are funded placements for PhD and Master's students in government departments. They offer a relatively low-cost way to bring in fresh academic perspectives and analytical capacity for a defined project. Programmes such as the UKRI Policy Internships Scheme and STEM Futures provide frameworks for these placements. Interns need clear projects and good supervision to be productive. Like secondments and fellowships, these are structured capacity-building routes that require planning ahead — lead times for approvals, onboarding and security clearance can be substantial.",
    benefits: [
      "Brings in fresh academic perspectives and analytical energy at relatively low cost",
      "Often funded by UKRI — reducing or eliminating cost to the department",
      "Can produce high-quality, targeted analysis on specific bounded questions",
      "Mutual benefit — a valuable career development opportunity for students"
    ],
    limitations: [
      "Interns need significant supervision time from both government and their academic supervisor",
      "Projects must be well-scoped in advance to be productive",
      "Not suitable for urgent, sensitive or high-scrutiny work",
      "Long lead times for approvals, onboarding and security clearance"
    ],
    bestFor: "Defined analytical projects with months of lead time and capacity to supervise — particularly where a fresh academic perspective on a bounded question would add value.",
    xgovtResources: [
      { label: "UKRI Policy Internships Scheme", url: "https://www.ukri.org/what-we-offer/developing-people-and-skills/esrc/esrc-studentship-opportunities/policy-internships-scheme/", description: "UKRI-funded policy internships for PhD students" },
      { label: "STEM Futures", url: "https://stemfutures.co.uk", description: "Government-run programme enabling STEM placements" },
      { label: "Directory of Exchange Schemes", url: "https://www.gov.uk/government/publications/routes-for-academic-engagement-with-government/routes-for-academic-engagement-with-government", description: "Full list of structured schemes for academics and civil servants" }
    ],
    contactKey: "",
    localLinkKey: "internships",
    localLinkLabel: "Internships guidance"
  },

  studentproj: {
    id: "studentproj",
    title: "Student Project",
    subtitle: "Working with Master's and PhD students on short-term targeted analysis",
    section: "External to your organisation",
    description: "Student projects involve working with Master's or PhD students on short-term, targeted analysis of a policy question. These can be low or zero cost and offer a good way to get fresh analytical perspectives on bounded questions. They are often facilitated through university knowledge exchange teams. Like internships, they are capacity-building routes where mutual benefit is important and the academic supervisor plays a key role alongside the government supervisor in ensuring quality and relevance.",
    benefits: [
      "Often low or zero cost to government",
      "Can produce targeted, high-quality analysis on specific questions",
      "Provides valuable development opportunity for students",
      "Can be arranged relatively quickly via university knowledge exchange teams"
    ],
    limitations: [
      "Quality varies — dependent on both the student and the quality of supervision",
      "Projects must be well-scoped and bounded to be productive",
      "Not suitable for sensitive, urgent or high-scrutiny work",
      "Academic supervisor involvement needed alongside government supervision"
    ],
    bestFor: "Bounded analytical questions with a clear brief, sufficient lead time, and a willing university partner — particularly where a fresh student perspective on an evidence question would add value.",
    xgovtResources: [
      { label: "UPEN — University Policy Engagement Network", url: "https://upen.ac.uk/", description: "Good route for finding university partners willing to facilitate student projects" },
      { label: "Directory of Exchange Schemes", url: "https://www.gov.uk/government/publications/routes-for-academic-engagement-with-government/routes-for-academic-engagement-with-government", description: "Includes student project and placement schemes" }
    ],
    contactKey: "",
    localLinkKey: "student_projects",
    localLinkLabel: "Student project guidance"
  },

  seminar: {
    id: "seminar",
    title: "Seminar",
    subtitle: "Hosting academics to give a seminar on a specific topic",
    section: "External to your organisation",
    description: "Online seminars are a practical, low-barrier way to connect civil servants with academics. They bring experts directly to policy audiences, helping officials stay informed about the latest evidence relevant to their work. Seminars usually run 45–60 minutes with either a headline presentation followed by a short Q&A, or a shorter presentation followed by a longer interactive discussion. They typically include one to three speakers. While usually organised around a specific department's priorities, they are often advertised widely and colleagues from other departments regularly benefit. Speakers can be drawn from academics who respond to ARIs or calls for evidence, are already engaging with the department, or are suggested by teams.",
    benefits: [
      "Low cost and easy to organise, especially online",
      "Good for team-level learning and awareness-raising on a specific topic",
      "Can be a first step towards deeper engagement with a specific academic",
      "Often advertised widely, benefiting colleagues across departments"
    ],
    limitations: [
      "Largely one-directional — mostly input to officials with limited dialogue",
      "Not appropriate for getting a range of views or for active policy development",
      "Quality is highly dependent on the choice of speaker and topic framing"
    ],
    bestFor: "Building team understanding of a topic, or introducing a new evidence base to a policy team — particularly at an early stage of policy development.",
    xgovtResources: [
      { label: "Case study: Professor Caroline Bond seminar and policy dialogue", url: "https://www.gov.uk/government/case-studies/professor-caroline-bond-lunchtime-seminar-and-policy-dialogue", description: "Example of how a seminar can lead to deeper policy engagement" },
      { label: "Finding Academics — Navigator guide", url: "../finding-academics.html", description: "Practical routes for identifying suitable seminar speakers" }
    ],
    contactKey: "",
    localLinkKey: "seminars",
    localLinkLabel: "Seminar guidance"
  },

  roundtable: {
    id: "roundtable",
    title: "Roundtable",
    subtitle: "Bringing together experts to explore a complex or contested policy question in depth",
    section: "External to your organisation",
    description: "Roundtables typically bring together a small number of experts, policymakers and stakeholders to explore complex or contested policy questions in depth. They work best where issues benefit from structured discussion, interaction across disciplines or roles, and facilitated dialogue. Roundtables are well suited to early or mid-stage policy development before positions are fixed — particularly for exploring uncertainty, tradeoffs or emerging evidence; testing assumptions with a range of experts; and understanding how evidence from different disciplines fits together. The Chatham House Rule is commonly used to encourage more candid contributions. Note the distinction with workshops: roundtables are best for expert challenge and sense-making; workshops for collaborative development and problem-solving.",
    benefits: [
      "Gathers a diversity of expert views quickly in a single event",
      "Chatham House Rule encourages more candid and open contributions",
      "Relatively low cost compared to more structured forms of engagement",
      "Good for surfacing risks, unintended consequences and areas of expert disagreement"
    ],
    limitations: [
      "Can be hard to ensure the right mix of voices — diversity needs active planning",
      "Unstructured discussions can produce outputs that are hard to synthesise",
      "Requires skilled facilitation to be productive",
      "Not appropriate where a formal, auditable record of expert input is required"
    ],
    bestFor: "Gathering a range of informed expert views on a policy question in an exploratory, open-ended way — particularly where the issue is complex, contested or cross-disciplinary and early-stage.",
    xgovtResources: [
      { label: "Roundtables: How-to Guide (GOS)", url: "https://www.gov.uk/government/organisations/government-office-for-science", description: "Practical, step-by-step guidance on designing and running a roundtable" },
      { label: "CAPE Resource Navigator", url: "https://www.cape.ac.uk/wp-content/uploads/2025/04/CAPE-Resource-Navigator-April-2025.pdf", description: "Curated tools supporting academic–policy engagement including event formats" },
      { label: "Finding Academics — Navigator guide", url: "../finding-academics.html", description: "Practical routes for identifying the right participants" }
    ],
    contactKey: "",
    localLinkKey: "roundtables",
    localLinkLabel: "Roundtable guidance"
  },

  workshop: {
    id: "workshop",
    title: "Workshop",
    subtitle: "An interactive, facilitated session for collaborative working with academics",
    section: "External to your organisation",
    description: "Workshops are usually more structured and facilitative in format than roundtables, and are often used for collaborative working — such as testing ideas or co-producing options. They may involve a broader mix of participants and can accommodate larger groups using facilitated activities or breakout sessions. Workshops are well suited to collaborative development and problem-solving: co-producing options, testing assumptions across disciplines, supporting collective sense-making on complex issues between experts, practitioners and policymakers. The key distinction: choose a roundtable when you want expert challenge and sense-making; choose a workshop when you want collaborative development.",
    benefits: [
      "Produces specific, actionable outputs through structured activity",
      "Allows for genuine co-production of ideas between officials and academics",
      "Can surface creative options and build shared understanding",
      "Can accommodate larger and more diverse groups via breakout activities"
    ],
    limitations: [
      "Requires significant preparation and skilled facilitation",
      "More resource-intensive to organise than a seminar or roundtable",
      "Quality of outputs is highly dependent on design and facilitation",
      "Not appropriate where a formal, auditable record of expert input is required"
    ],
    bestFor: "Exploring policy options or developing joint approaches with academics on a complex, open-ended question — particularly where co-production or structured problem-solving is needed.",
    xgovtResources: [
      { label: "NESTA toolkit — methods and materials", url: "https://www.nesta.org.uk", description: "Methods and tools for facilitated workshops" },
      { label: "CAPE Resource Navigator", url: "https://www.cape.ac.uk/wp-content/uploads/2025/04/CAPE-Resource-Navigator-April-2025.pdf", description: "Curated tools supporting academic–policy engagement including workshop formats" },
      { label: "Finding Academics — Navigator guide", url: "../finding-academics.html", description: "Practical routes for identifying the right participants" }
    ],
    contactKey: "",
    localLinkKey: "workshops",
    localLinkLabel: "Workshop guidance"
  },

  fellowship: {
    id: "fellowship",
    title: "Policy Fellowship",
    subtitle: "A career development fellowship connecting you to a range of academics",
    section: "External to your organisation",
    description: "Policy fellowships are career and professional development (CPD) opportunities hosted by academic institutions or one of the national Academies. Policy officials sign up to a fellowship — fees are usually in the low thousands — for a roughly 3 to 6 month engagement programme. Via structured interactions with a range of academic and other experts, the official builds a new academic network and gains insights that might otherwise never be obtained. Central to this is also the development of a peer network with other officials attending the programme simultaneously. These are grouped alongside secondments and internships as structured capacity-building routes.",
    benefits: [
      "Builds a lasting, diverse academic network beyond any single policy area",
      "Creates peer connections with other officials going through the same process",
      "Generates insights that structured single-topic engagement rarely produces",
      "Recognised CPD route — useful for personal development plans and appraisals"
    ],
    limitations: [
      "Typically requires L&D budget — usually low thousands of pounds",
      "Time commitment over several months requires line manager support and forward planning",
      "The breadth of engagement means it is less targeted than other options",
      "Long lead times — needs to be planned well in advance"
    ],
    bestFor: "Officials wanting to build a broader academic network and deeper understanding of how academia works, with months available and L&D budget in place.",
    xgovtResources: [
      { label: "Directory of Exchange Schemes", url: "https://www.gov.uk/government/publications/routes-for-academic-engagement-with-government/routes-for-academic-engagement-with-government", description: "Full list of structured fellowship and exchange schemes" },
      { label: "British Academy policy fellowships", url: "https://www.thebritishacademy.ac.uk", description: "British Academy policy engagement programmes" },
      { label: "Royal Academy of Engineering fellowships", url: "https://raeng.org.uk", description: "RAEng policy engagement and fellowship programmes" },
      { label: "Civil Service Careers: Secondments", url: "https://www.civil-service-careers.gov.uk/secondments/", description: "Includes outward fellowship and placement opportunities" }
    ],
    contactKey: "",
    localLinkKey: "policy_fellowships",
    localLinkLabel: "Policy Fellowships guidance"
  }
};
