// Single source of truth for all portfolio content.
// Every fact below is taken from Adith Krishna's resume. Do not add claims that are not in the resume.

export const profile = {
  name: 'Adith Krishna',
  title: 'Data Engineer',
  tagline: 'Azure · PySpark · SQL · Spark on AKS · ETL/ELT',
  location: 'Bengaluru, India',
  email: 'adithkrishna59955@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adith-krishna',
  // The resume lists no GitHub profile. Set this to a URL to show a GitHub link in the hero and contact section.
  github: '' as string,
  resumeUrl: '/Adith_Krishna_Data_Engineer_Resume.pdf',
  resumeFileName: 'Adith_Krishna_Data_Engineer_Resume.pdf',
  summary:
    'Data Engineer with 2+ years at LTIMindtree building, migrating and running production data pipelines on Microsoft Azure for enterprise clients Lufthansa Group and Microsoft.',
  intro:
    "Currently engineering on Lufthansa's PELE revenue-management platform, which runs 20+ concurrent Spark jobs to price 1,000+ airline markets daily.",
}

export const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const heroStats = [
  { value: '2+', label: 'Years in production data engineering' },
  { value: '1,000+', label: 'Airline markets priced daily on PELE' },
  { value: '20+', label: 'Concurrent Spark jobs on the platform' },
  { value: '40+', label: 'Scheduled Spark pipelines supported' },
]

export const heroTech = ['Azure Data Factory', 'PySpark', 'Spark on AKS', 'Microsoft Fabric', 'ADLS Gen2', 'Synapse Analytics']

export type Experience = {
  client: string
  project: string
  role: string
  company: string
  period: string
  context: string
  stack: string[]
  bullets: { lead: string; text: string }[]
}

export const experience: Experience[] = [
  {
    client: 'Lufthansa Group',
    project: 'PELE (Price Elasticity Estimator)',
    role: 'Data Engineer',
    company: 'LTIMindtree',
    period: 'Mar 2026 – Present',
    context:
      'Azure-based airline revenue-management platform that computes price-elasticity curves and Buy-Down Adjusted Fares (BDAF) for 1,000+ markets across LH, LX, OS and SN. The client case study credits the platform with a ~9% revenue uplift.',
    stack: ['Spark (Scala/PySpark)', 'AKS', 'Azure Data Factory', 'ADLS Gen2', 'Cosmos DB', 'Azure DevOps', 'Azure Monitor'],
    bullets: [
      {
        lead: 'Operate at scale',
        text: 'Maintain and support 40+ scheduled production and non-production Spark pipelines across the PELE and RSP landscape, including MID/FID, DP2 data provisioning, TopOnD, Segmentation, FID Ingestion, PAX Segmentation and Endprice Extraction.',
      },
      {
        lead: 'Cloud migration',
        text: 'Migrate the TopOnD and Segmentation modules to the ITA Airways tenant by reconfiguring spark-submit parameters, ADLS Gen2 containers and output paths, then validating end-to-end data flow in UAT.',
      },
      {
        lead: 'Failure diagnosis',
        text: 'Diagnose Spark job failures on AKS using kubectl and KQL queries on Log Analytics, triaging schema errors (unresolved columns), missing ADLS input partitions, executor out-of-memory and Cosmos DB RU throttling.',
      },
      {
        lead: 'Root-cause analysis',
        text: 'Performed code-level root-cause analysis of the Scala Segmentation writer job, tracing a recurring failure to the ADLS Gen2 temp-directory rename after successful compute and to its effect on downstream RSP jobs, narrowing the fix to the write/commit stage.',
      },
      {
        lead: 'Spark tuning & recovery',
        text: 'Adjust driver/executor resources and spark-submit configurations for long-running workloads, and rerun and recover failed jobs while preserving downstream data dependencies.',
      },
      {
        lead: 'Runbooks & handover',
        text: 'Co-authored the PELE and PELE-RSP Operations Handbooks, covering component data flows, ADLS and Cosmos DB source-to-target mappings, schedules and failure-scenario playbooks; maintain the job-schedule and pipeline-status trackers used for team handover.',
      },
      {
        lead: 'Incident ownership',
        text: 'Own incident follow-through: verify downstream file delivery, communicate status and root cause to client and engineering teams, and escalate platform issues.',
      },
    ],
  },
  {
    client: 'Microsoft',
    project: 'Microsoft Learn (Skilling Track)',
    role: 'Data Engineer',
    company: 'LTIMindtree',
    period: 'May 2024 – Feb 2026',
    context: "Enterprise analytics for Microsoft Learn's global learning and certification ecosystem.",
    stack: ['Azure Data Factory', 'Microsoft Fabric', 'Azure Synapse Analytics', 'ADLS Gen2', 'PySpark', 'SQL'],
    bullets: [
      {
        lead: 'Pipelines',
        text: 'Built and maintained end-to-end ETL/ELT pipelines in Azure Data Factory and Microsoft Fabric, ingesting learning and certification data into curated ADLS Gen2 layers for analytics and reporting.',
      },
      {
        lead: 'Transformations',
        text: 'Developed PySpark transformations and optimized Synapse SQL for cleansing, schema standardization, joins, aggregations and incremental loads.',
      },
      {
        lead: 'Data quality',
        text: 'Implemented data-quality and validation rules (null, duplicate, schema and reconciliation checks) to stop bad records from reaching downstream reports.',
      },
      {
        lead: 'Reliability',
        text: 'Resolved pipeline failures with product, analytics and platform teams to keep business-critical learning analytics accurate and on schedule.',
      },
    ],
  },
]

export type SkillGroup = { title: string; icon: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: 'code', items: ['Python', 'SQL', 'PySpark', 'Scala (working knowledge)', 'Java'] },
  {
    title: 'Big Data Processing',
    icon: 'cpu',
    items: ['Apache Spark (DataFrame API, Spark SQL)', 'spark-submit', 'Partitioning', 'Parquet', 'Delta Lake'],
  },
  {
    title: 'Azure & Cloud Data',
    icon: 'cloud',
    items: [
      'Azure Data Factory',
      'ADLS Gen2',
      'Azure Synapse Analytics',
      'Microsoft Fabric',
      'Azure Databricks',
      'Cosmos DB (Cassandra API)',
      'AKS',
    ],
  },
  {
    title: 'Data Engineering',
    icon: 'workflow',
    items: [
      'ETL/ELT pipelines',
      'Batch & incremental ingestion',
      'Medallion architecture',
      'Data modeling',
      'Data quality & validation',
      'Reconciliation',
      'Cloud data migration',
    ],
  },
  {
    title: 'DevOps & Observability',
    icon: 'activity',
    items: ['Azure DevOps (Repos, build/release pipelines)', 'Git', 'Kubernetes (kubectl)', 'Azure Monitor', 'Log Analytics (KQL)', 'Linux'],
  },
  { title: 'Analytics', icon: 'chart', items: ['Power BI'] },
]

export type Project = {
  id: string
  name: string
  client: string
  tag: string
  problem: string
  architecture: { label: string; sub?: string }[]
  stack: string[]
  contribution: string[]
  challenges: string[]
  outcome: string
}

export const projects: Project[] = [
  {
    id: 'pele',
    name: 'PELE — Price Elasticity Estimator',
    client: 'Lufthansa Group',
    tag: 'Revenue management · Spark on AKS',
    problem:
      'Airlines need price-elasticity curves and Buy-Down Adjusted Fares (BDAF) for 1,000+ markets across LH, LX, OS and SN, produced reliably every day from a landscape of dependent Spark jobs.',
    architecture: [
      { label: 'Azure Data Factory', sub: 'Scheduling' },
      { label: 'Spark on AKS', sub: 'Scala / PySpark' },
      { label: 'ADLS Gen2 · Cosmos DB', sub: 'Source-to-target stores' },
      { label: 'RSP jobs', sub: 'Downstream' },
    ],
    stack: ['Spark (Scala/PySpark)', 'AKS', 'Azure Data Factory', 'ADLS Gen2', 'Cosmos DB', 'Azure DevOps', 'Azure Monitor', 'KQL'],
    contribution: [
      'Maintain and support 40+ scheduled production and non-production Spark pipelines across the PELE and RSP landscape.',
      'Migrated the TopOnD and Segmentation modules to the ITA Airways tenant and validated end-to-end data flow in UAT.',
      'Co-authored the PELE and PELE-RSP Operations Handbooks and maintain the schedule and status trackers used for handover.',
    ],
    challenges: [
      'Recurring Segmentation writer failure traced to the ADLS Gen2 temp-directory rename after successful compute, affecting downstream RSP jobs.',
      'Triaging schema errors, missing ADLS input partitions, executor out-of-memory and Cosmos DB RU throttling using kubectl and KQL.',
      'Recovering failed jobs while preserving downstream data dependencies.',
    ],
    outcome:
      'The platform runs 20+ concurrent Spark jobs to price 1,000+ markets daily; the client case study credits it with a ~9% revenue uplift. Adith contributes to operations, migration and root-cause analysis on the platform.',
  },
  {
    id: 'mslearn',
    name: 'Microsoft Learn — Skilling Analytics',
    client: 'Microsoft',
    tag: 'Enterprise analytics · Azure ETL/ELT',
    problem:
      "Microsoft Learn's global learning and certification ecosystem needs accurate, on-schedule analytics built on curated, validated data.",
    architecture: [
      { label: 'Source data', sub: 'Learning & certification' },
      { label: 'ADF / Fabric', sub: 'ETL/ELT pipelines' },
      { label: 'PySpark + Synapse SQL', sub: 'Transform & validate' },
      { label: 'ADLS Gen2', sub: 'Curated layers' },
    ],
    stack: ['Azure Data Factory', 'Microsoft Fabric', 'Azure Synapse Analytics', 'ADLS Gen2', 'PySpark', 'SQL'],
    contribution: [
      'Built and maintained end-to-end ETL/ELT pipelines in Azure Data Factory and Microsoft Fabric into curated ADLS Gen2 layers.',
      'Developed PySpark transformations and optimized Synapse SQL for cleansing, schema standardization, joins, aggregations and incremental loads.',
      'Implemented null, duplicate, schema and reconciliation checks before data reaches downstream reports.',
    ],
    challenges: [
      'Keeping business-critical learning analytics accurate and on schedule.',
      'Resolving pipeline failures together with product, analytics and platform teams.',
    ],
    outcome:
      'Validation rules stop bad records from reaching downstream reports, keeping learning analytics accurate and on schedule. No quantified metric is documented for this engagement.',
  },
]

export type Expertise = { title: string; icon: string; text: string; evidence: string }

export const expertise: Expertise[] = [
  {
    title: 'Data pipeline architecture',
    icon: 'workflow',
    text: 'Medallion-style layering and curated ADLS Gen2 zones feeding analytics and reporting.',
    evidence: 'Microsoft Learn: curated ADLS Gen2 layers via ADF and Fabric.',
  },
  {
    title: 'ETL and ELT',
    icon: 'git',
    text: 'Batch and incremental ingestion built in Azure Data Factory and Microsoft Fabric.',
    evidence: 'Microsoft Learn: end-to-end ETL/ELT pipelines.',
  },
  {
    title: 'Data transformation',
    icon: 'shuffle',
    text: 'PySpark and Synapse SQL for cleansing, schema standardization, joins and aggregations.',
    evidence: 'Microsoft Learn: PySpark transformations and Synapse SQL.',
  },
  {
    title: 'Distributed processing',
    icon: 'cpu',
    text: 'Apache Spark workloads run as containers on Azure Kubernetes Service.',
    evidence: 'Lufthansa PELE: 40+ scheduled Spark pipelines on AKS.',
  },
  {
    title: 'Cloud data platforms',
    icon: 'cloud',
    text: 'ADLS Gen2, Synapse, Microsoft Fabric, Cosmos DB and cloud data migration across tenants.',
    evidence: 'PELE: migration of TopOnD and Segmentation to the ITA Airways tenant.',
  },
  {
    title: 'Data quality and reliability',
    icon: 'shield',
    text: 'Null, duplicate, schema and reconciliation checks; incident follow-through and runbooks.',
    evidence: 'Microsoft Learn validation rules; PELE Operations Handbooks.',
  },
  {
    title: 'Performance optimization',
    icon: 'gauge',
    text: 'Driver and executor resource tuning and spark-submit configuration for long-running workloads.',
    evidence: 'Lufthansa PELE; Synapse SQL optimization on Microsoft Learn.',
  },
  {
    title: 'Data orchestration',
    icon: 'calendar',
    text: 'Scheduled pipelines orchestrated with Azure Data Factory, with dependencies preserved on recovery.',
    evidence: 'PELE job schedules and downstream dependency handling.',
  },
]

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'Vellore Institute of Technology, Chennai',
  period: '2019 – 2023',
}

export const certifications = [
  { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', issuer: 'Microsoft', kind: 'Certification' },
  { name: 'Azure Synapse Analytics (L1, L2)', issuer: 'LTIMindtree', kind: 'Training' },
  { name: 'Python', issuer: 'LTIMindtree', kind: 'Training' },
]
