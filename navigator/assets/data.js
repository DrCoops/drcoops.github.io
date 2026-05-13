// A-PE Navigator - Core Data
// Extracted from Excel workbook v2.0 (Aug 2023)
// Edit config.js to customise for your organisation

window.APE_DATA = {

  questions: [
    {
      id: "reason",
      label: "I want to…",
      number: "1",
      options: [
        { code: 1, label: "Conduct new research, secondary analysis or synthesis" },
        { code: 2, label: "Get a range of expert views to inform a policy question" },
        { code: 3, label: "Find an expert to explore a specific topic" },
        { code: 4, label: "Get a simple overview of the academic evidence" },
        { code: 5, label: "Get some support on quality assuring a research project" },
        { code: 6, label: "Develop team knowledge & capability" },
        { code: 7, label: "Explore policy scenarios/futures" }
      ]
    },
    {
      id: "budget",
      label: "Financially, I have…",
      number: "2",
      options: [
        { code: 1, label: "Zero £" },
        { code: 2, label: "L&D funding only" },
        { code: 3, label: "Recruitment funding only" },
        { code: 4, label: "Less than £5K for procuring research or similar" },
        { code: 5, label: "More than £5K for procuring research or similar" }
      ]
    },
    {
      id: "deadline",
      label: "My deadline is in…",
      number: "3",
      options: [
        { code: 1, label: "Hours" },
        { code: 2, label: "Days" },
        { code: 3, label: "Weeks" },
        { code: 4, label: "Months" },
        { code: 5, label: "Years / No deadline" }
      ]
    },
    {
      id: "scrutiny",
      label: "My scrutiny level is…",
      number: "4",
      options: [
        { code: 1, label: "High" },
        { code: 2, label: "Low" },
        { code: 3, label: "Uncertain" }
      ]
    }
  ],

  // Scoring: for each option, which codes are a "match" per dimension
  // A match on a dimension = 1 point. Max score = 4 = GREEN, 3 = AMBER, 0-2 = RED
  options: [
    {
      id: "csa",
      label: "Chief Scientific Adviser",
      shortLabel: "CSA",
      subtitle: "Academic engagement and brokering via your CSA",
      section: "internal",
      sectionLabel: "Internal to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,3],
        deadline: [1,2,3,4,5],
        reason:   [2,3,5]
      }
    },
    {
      id: "sac",
      label: "Science Advisory Council / Expert Group",
      shortLabel: "SAC / Expert Group",
      subtitle: "Engaging your organisation's scientific advisory committees",
      section: "internal",
      sectionLabel: "Internal to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,3],
        deadline: [2,3,4,5],
        reason:   [2,3,4,5,6]
      }
    },
    {
      id: "gse",
      label: "Government Scientist / Analyst",
      shortLabel: "GSE / Analyst",
      subtitle: "Using internal analysts and scientists as brokers",
      section: "internal",
      sectionLabel: "Internal to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [1,2,3,4,5],
        reason:   [1,2,3,4,5,6,7]
      }
    },
    {
      id: "albs",
      label: "Arms Length Bodies (ALBs)",
      shortLabel: "ALBs",
      subtitle: "Scientific/engineering ALBs as a route to academic expertise",
      section: "internal",
      sectionLabel: "Internal to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,3],
        deadline: [3,4,5],
        reason:   [1,2,3,5]
      }
    },
    {
      id: "ari",
      label: "Areas of Research Interest (ARIs)",
      shortLabel: "ARIs",
      subtitle: "Guiding and connecting to academic interests via published ARIs",
      section: "internal",
      sectionLabel: "Internal to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [4,5],
        reason:   [1]
      }
    },
    {
      id: "college",
      label: "College of Experts",
      shortLabel: "College of Experts",
      subtitle: "A locally-developed list of pre-approved experts for rapid advice",
      section: "internal",
      sectionLabel: "Internal to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [1,2,3,4,5],
        reason:   [2,3,4,5,7]
      }
    },
    {
      id: "callsforevidence",
      label: "Calls for Evidence",
      shortLabel: "Calls for Evidence",
      subtitle: "Advertising for evidence to generate wide academic engagement",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [4,5],
        reason:   [2,3,4]
      }
    },
    {
      id: "researchcomm",
      label: "Research Commissioning",
      shortLabel: "Research Commissioning",
      subtitle: "Buying in external research expertise",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [5],
        scrutiny: [1,2,3],
        deadline: [4,5],
        reason:   [1,6,7]
      }
    },
    {
      id: "secondment",
      label: "Inward Secondment",
      shortLabel: "Secondments",
      subtitle: "Temporarily recruiting an academic into the civil service",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [3,5],
        scrutiny: [1,2,3],
        deadline: [4,5],
        reason:   [3,4,5,6,7]
      }
    },
    {
      id: "advisory",
      label: "Advisory Board / Group",
      shortLabel: "Advisory Board",
      subtitle: "A temporary group of experts advising on project design and delivery",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [4,5],
        reason:   [2,3,5]
      }
    },
    {
      id: "directadvice",
      label: "Direct Advice",
      shortLabel: "Direct Advice",
      subtitle: "Speaking directly to an individual academic on a specific topic",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [2,3,4,5],
        reason:   [3,5,7]
      }
    },
    {
      id: "internship",
      label: "Academic Internship",
      shortLabel: "Internship",
      subtitle: "Funded placements for PhD and Master's students in government",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [2,3,4,5],
        scrutiny: [2,3],
        deadline: [4,5],
        reason:   [1,4,5,6]
      }
    },
    {
      id: "studentproj",
      label: "Student Project",
      shortLabel: "Student Project",
      subtitle: "Working with Master's and PhD students on short-term targeted analysis",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [2,3],
        deadline: [3,4,5],
        reason:   [1,3,4,7]
      }
    },
    {
      id: "seminar",
      label: "Seminar",
      shortLabel: "Seminar",
      subtitle: "Hosting one or more academics to give a seminar on a specific topic",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [3,4,5],
        reason:   [4,6]
      }
    },
    {
      id: "roundtable",
      label: "Roundtable",
      shortLabel: "Roundtable",
      subtitle: "An open discussion with 10–15 academics on a policy issue",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [3,4,5],
        reason:   [2,4,7]
      }
    },
    {
      id: "workshop",
      label: "Workshop",
      shortLabel: "Workshop",
      subtitle: "An interactive session with academics to explore policy options",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [1,2,3,4,5],
        scrutiny: [1,2,3],
        deadline: [3,4,5],
        reason:   [6,7]
      }
    },
    {
      id: "fellowship",
      label: "Policy Fellowship",
      shortLabel: "Policy Fellowship",
      subtitle: "A career development fellowship connecting you to a range of academics",
      section: "external",
      sectionLabel: "External to your organisation",
      scoring: {
        budget:   [2],
        scrutiny: [1,2,3],
        deadline: [4,5],
        reason:   [2,3,6]
      }
    }
  ]
};
