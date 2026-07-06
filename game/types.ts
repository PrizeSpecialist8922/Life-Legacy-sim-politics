export type Gender = "male" | "female";

export type Stat = "happiness" | "health" | "smarts" | "looks";

export interface Stats {
  happiness: number;
  health: number;
  smarts: number;
  looks: number;
}

export type AcademicPathway = "regular" | "honors" | "ib";

export type CourseLevel = "HL" | "SL";

export interface SelectedCourse {
  id: string;
  name: string;
  group: string; // subject group / program label
  level?: CourseLevel; // HL/SL for IB courses; undefined for fixed loads
}

export type EducationStage =
  "none" | "elementary" | "middle" | "high" | "college" | "gradschool" | "graduated";

export type WealthTier = "poor" | "working" | "middle" | "affluent" | "wealthy";

export interface Family {
  tier: WealthTier;
  income: number; // household annual income
  netWorth: number;
  savings: number;
  debt: number;
  creditScore: number;
  ownsHome: boolean;
  investments: number;
  motherOccupation: string;
  fatherOccupation: string;
  householdSize: number;
  financialPlanning: number; // 0-100 planning habits
  savingsPlanType: "529" | "savings" | "none";
  collegeSavings: number; // balance earmarked for education
  collegeSavingsUsed: number;
}

export interface TestScores {
  sat?: number; // 400-1600
  act?: number; // 1-36
  lsat?: number; // 120-180
  gmat?: number; // 200-800
  mcat?: number; // 472-528
  bar?: "passed" | "failed";
}

export interface GradeYear {
  age: number;
  stage: string;
  grade: string; // letter grade
  yearGpa: number;
  cumGpa?: number; // cumulative GPA after this year
  cumDelta?: number; // change in cumulative GPA vs previous year
}

export interface Scholarship {
  name: string;
  amount: number;
  kind?: "merit" | "athletic" | "leadership" | "debate" | "need";
  reason?: string;
  renewable?: boolean;
  minGpa?: number;
  status?: "active" | "reduced" | "revoked";
}

export type LivingArrangement = "dorm" | "apartment" | "parents" | "greek";

export interface StudentLoan {
  principal: number;
  balance: number;
  rate: number; // annual interest rate (e.g. 0.055)
  monthlyPayment: number;
  totalRepayment: number;
  termYears: number;
  repaying: boolean;
}

export interface FafsaResult {
  filed: boolean;
  householdIncome: number;
  parentAssets: number;
  householdSize: number;
  efc: number; // expected family contribution (per year)
  grantEligible: number; // annual need-based grant
  loanEligible: number; // annual federal loan cap
}

export interface CollegeBudgetYear {
  age: number;
  year: number;
  tuition: number;
  housing: number;
  books: number;
  fees: number;
  totalCost: number;
  parents: number;
  savings: number;
  scholarships: number;
  grants: number;
  workStudy: number;
  jobIncome: number;
  loans: number;
  remaining: number;
}

export interface CollegeFinance {
  university: string;
  major: string;
  living: LivingArrangement;
  prestige: number;
  yearsPlanned: number;
  yearsFunded: number;
  // Per-year figures from the accepted package
  tuition: number;
  housing: number;
  books: number;
  fees: number;
  parentContribution: number;
  parentDecision: string;
  workStudyRole?: string;
  workStudyIncome: number;
  // Cumulative totals across enrolled years
  totalScholarships: number;
  totalGrants: number;
  totalParent: number;
  totalSavings: number;
  totalWorkStudy: number;
  totalLoans: number;
  budget: CollegeBudgetYear[];
  appealed: boolean;
}

export interface AidLetter {
  university: string;
  major: string;
  prestige: number;
  living: LivingArrangement;
  tuition: number;
  housing: number;
  books: number;
  fees: number;
  totalCost: number;
  parentContribution: number;
  parentDecision: string;
  collegeSavings: number;
  scholarships: Scholarship[];
  scholarshipsTotal: number;
  grants: number;
  workStudyRole?: string;
  workStudyIncome: number;
  loans: number;
  netCost: number;
}

export type SchoolStage = "elementary" | "middle" | "high";

export interface IBSubjectResult {
  courseId: string;
  name: string;
  level: CourseLevel;
  score: number; // 1-7
}

export interface InternshipRecord {
  id: string;
  name: string;
  org: string;
  field: string;
  age: number;
  level: "high" | "college";
  outcome: "accepted" | "return" | "fulltime";
  recLetter?: boolean;
}

export type GradProgramKind = "mba" | "jd" | "md" | "jdmba";

export interface GradProgramState {
  kind: GradProgramKind;
  name: string;
  school: string;
  prestige: number;
  yearsTotal: number;
  yearsDone: number;
  tuition: number; // annual
}

export interface JobOffer {
  jobId: string;
  title: string;
  company: string;
  salary: number;
  source: string;
  expiresAge: number;
}

export interface K12Offer {
  schoolId: string;
  scholarshipName?: string;
  scholarship: number;
  aid: number;
  parentContribution: number;
  remaining: number;
}

export interface EducationRecord {
  school: string;
  schoolPrestige?: number; // 1-100
  attendance: number; // 0-100
  homework: number; // 0-100 completion
  disciplineIncidents: number;
  studyHours: number; // accumulated this year
  skips: number; // accumulated this year
  assignmentAvg?: number; // 0-100 average score on assignments this year
  assignmentsThisYear?: number; // count done this year
  classRank: number;
  classSize: number;
  pathway?: AcademicPathway; // chosen entering Grade 11
  courses?: SelectedCourse[]; // current course load
  needsCourseSelection?: boolean; // IB pathway chosen, courses not yet picked
  needsIBExams?: boolean; // Grade 12 IB exams pending
  ibResults?: IBSubjectResult[]; // final IB transcript
  ibTotal?: number; // /45 including 3 core points
  leadership?: string[]; // leadership positions held
  research?: number; // research projects completed
  volunteer?: number; // volunteer engagements
  recLetters?: number; // recommendation letters earned
  internships?: InternshipRecord[];
  internAppliedThisYear?: string[]; // internship ids applied to this year
  schoolKind?: "public" | "private" | "religious" | "boarding";
  k12Tuition?: number; // net annual cost of current K-12 school
  clubs: string[];
  sports: string[];
  awards: string[];
  scholarships: Scholarship[];
  degrees: string[];
  history: GradeYear[];
}

export type RelationType = "mother" | "father" | "sibling" | "friend" | "partner" | "child";

export interface Relationship {
  id: string;
  name: string;
  type: RelationType;
  relationship: number; // 0-100
  age: number;
  alive: boolean;
}

/** An interactive extracurricular competition generated each school year. */
export interface ECChallenge {
  activity: string;
  kind: "club" | "sport";
  title: string;
  subtitle: string;
  category: string; // QuizCategory identifier
  rival: string; // rival school competed against
  event: string; // e.g. "Regional Tournament"
}

export interface Job {
  id: string;
  title: string;
  company: string;
  salary: number;
  performance: number; // 0-100
  level: number;
  field: string;
  yearsAtLevel?: number; // years spent at the current ladder level
  yearsAtCompany?: number; // total years at this employer
  burnout?: number; // 0-100
  managerRel?: number; // 0-100
  coworkerRel?: number; // 0-100
  bonusPct?: number; // 0-1 bonus potential of salary
  careerGroup?: string; // id of the special-careers group
}

export interface Asset {
  id: string;
  name: string;
  kind: "property" | "vehicle" | "luxury" | "investment";
  value: number;
}

export type LogTone = "neutral" | "good" | "bad" | "milestone";

export interface LogEntry {
  age: number;
  text: string;
  tone: LogTone;
}

// ---------------------------------------------------------------------------
// Politics (Build 8) — every political type is plain serializable data so the
// whole simulation survives the localStorage save/load round-trip.
// ---------------------------------------------------------------------------

export type PoliticalIssue =
  "economy" | "healthcare" | "education" | "crime" | "immigration" | "foreign" | "environment";

/** Governance domains tracked while holding office (approval per domain). */
export type PoliticalDomain =
  "economy" | "education" | "healthcare" | "crime" | "environment" | "foreign";

export type PartyLean = "left" | "centre" | "right";

export type AdvisorRole =
  | "campaign_manager"
  | "comms_director"
  | "pollster"
  | "finance_director"
  | "policy_advisor"
  | "chief_of_staff";

export interface PoliticalAdvisor {
  id: string;
  name: string;
  role: AdvisorRole;
  competence: number; // 0-100
  loyalty: number; // 0-100
  popularity: number; // 0-100
  experience: number; // 0-100
  salary: number; // annual, paid from campaign funds
}

export interface Minister {
  id: string;
  name: string;
  portfolio: PoliticalDomain;
  competence: number;
  loyalty: number;
  popularity: number;
  experience: number;
}

export interface CampaignOpponent {
  name: string;
  party: string; // party display name
  strength: number; // 0-100 overall candidate quality
}

export type CampaignStage = "primary" | "leadership" | "general";

export interface CampaignState {
  officeId: string;
  officeName: string;
  stage: CampaignStage;
  hasPrimary: boolean;
  eventsDone: number;
  eventsTotal: number;
  usedEventIds: string[];
  polling: { you: number; opponent: number; undecided: number };
  opponent: CampaignOpponent; // general-election opponent
  primaryOpponent?: CampaignOpponent; // primary / leadership rival
  electorate: Record<PoliticalIssue, number>; // preferred position (0/1/2) per issue
  debateDone: boolean;
  adSpend: number;
  isIncumbent: boolean;
  isSkip: boolean; // running above your earned level
  startAge: number;
  endorsements: string[];
}

export interface ElectionRecord {
  age: number;
  office: string;
  stage: CampaignStage;
  result: "won" | "lost";
  share: number; // your final vote share
  opponent: string;
}

export interface OfficeState {
  id: string;
  name: string;
  level: number;
  termYears: number;
  yearsServed: number; // within the current term
  termsServed: number;
  salary: number;
  executive: boolean;
}

export interface PoliticalTimelineEntry {
  age: number;
  text: string;
}

export interface CrisisOption {
  label: string;
  text: string;
  tone: LogTone;
  approval: number; // delta to overall approval
  trust: number; // delta to public trust
  money?: number; // delta to personal money (corrupt options)
  domainEffects: Partial<Record<PoliticalDomain, number>>;
  corrupt?: boolean; // adds scandal risk & possible legal exposure
}

export interface PendingCrisis {
  id: string;
  title: string;
  description: string;
  options: CrisisOption[];
}

export interface PoliticsState {
  ideology?: Record<PoliticalIssue, number>; // 0 = left, 1 = centre, 2 = right position per issue
  partyId?: string; // party id, "independent" or "custom"
  customPartyName?: string;
  approval: number; // 0-100
  publicTrust: number; // 0-100
  funds: number; // campaign war chest ($)
  prestige: number; // 0-100 political prestige
  experience: number; // accumulating political XP
  reputation: number; // 0-100 public reputation
  volunteers: number;
  partySupport: number; // 0-100 standing inside current party
  office?: OfficeState;
  campaign?: CampaignState;
  domainApproval: Record<PoliticalDomain, number>;
  advisors: PoliticalAdvisor[];
  cabinet: Minister[];
  electionHistory: ElectionRecord[];
  timeline: PoliticalTimelineEntry[];
  billsPassed: number;
  billsFailed: number;
  scandalRisk: number; // grows only through the player's corrupt choices
  corruptActs: number;
  pendingCrisis?: PendingCrisis;
  highestLevelWon: number; // -1 until first win
  fundraisesThisYear: number;
  mediaThisYear: number;
}

export interface Character {
  name: string;
  gender: Gender;
  country: string;
  city: string;
  citizenship: string;
  birthday: string;
  age: number;
  alive: boolean;
  causeOfDeath?: string;
  stats: Stats;
  mentalHealth: number;
  fitness: number;
  illnesses: string[];
  insurance: boolean;
  money: number;
  education: EducationStage;
  gpa: number; // 0-4
  major?: string;
  university?: string;
  job?: Job;
  relationships: Relationship[];
  assets: Asset[];
  family: Family;
  edu: EducationRecord;
  scores: TestScores;
  criminalRecord: number;
  fame: number;
  politicalInfluence: number;
  politics?: PoliticsState; // Build 8 — lazily initialised, keeps old saves loading
  businessReputation: number;
  emancipated: boolean;
  independent: boolean;
  homeless: boolean;
  livingArrangement?: LivingArrangement;
  networking?: number; // 0-100 professional network strength
  jobYearsAccrued?: number; // total years of full-time work experience
  currentSchoolId?: string;
  pendingSchoolChoice?: SchoolStage; // stage entry: pick/apply to schools
  k12Offer?: K12Offer; // accepted private-school offer awaiting decision
  k12Applied?: string[]; // schools already applied to this cycle
  pendingChallenges?: ECChallenge[]; // extracurricular competitions to play out
  gradProgram?: GradProgramState;
  jobOffers?: JobOffer[];
  fafsa?: FafsaResult;
  studentLoans: StudentLoan[];
  collegeFinance?: CollegeFinance;
  netWorthHistory: { age: number; value: number }[];
  log: LogEntry[];
  yearActionsUsed: number;
  createdAt: number;
}

export interface GameChoice {
  label: string;
  apply: (c: Character) => { text: string; tone: LogTone } | void;
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  minAge: number;
  maxAge: number;
  weight: number;
  condition?: (c: Character) => boolean;
  choices: GameChoice[];
}
