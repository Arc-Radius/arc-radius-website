# Arc Radius – Navigating Rights, Policy, and Action for LGBTQ+ Young Adults

**Course:** Data Science 210 — Spring 2026, Section 1  
**Type:** MIDS Capstone Project

## Team

| Name | Email |
|------|-------|
| Ambro Quach | ambroquach@berkeley.edu |
| Beth McBride | bethmcbride@berkeley.edu |
| Chase Martin | chase_martin@berkeley.edu |
| Indri Adisoemarta | indri.a@berkeley.edu |
| Ishani Cheshire | ishacheshi@berkeley.edu |

## Teaser

Arc Radius turns complex LGBTQ+ policy into clear insights and action tools, helping young adults understand and respond to legislation.

## Links

- **Product:** <https://arcradi.us/>
- **Briefing site:** <https://arcradius.netlify.app/>
- **Project page:** <https://ambroquach29.github.io/spring26-mids-capstone/#about>

---

## Description

Arc Radius is a data-driven platform that helps LGBTQ+ young adults understand how legislation affects their rights and provides tools to respond. It integrates classification, explanation, and action generation to translate complex policy into clear, user-centered outputs.

---

## Problem & Motivation

LGBTQ+ young adults in the United States are navigating a rapidly evolving and increasingly hostile policy landscape without accessible tools to understand how legislative changes affect their rights and daily lives. Recent national survey data indicates that political and policy environments are a significant contributor to negative mental health outcomes for this population, with 90 percent of LGBTQ+ young people reporting adverse well-being impacts linked to recent political developments (The Trevor Project, 2024).

At the same time, legislative activity targeting LGBTQ+ communities has accelerated at an unprecedented rate. In 2025 alone, more than 600 anti-LGBTQ+ bills were introduced across state legislatures, the highest number recorded in a single year (American Civil Liberties Union, 2025). These bills span critical domains including healthcare access, education, public accommodations, identity documentation, and participation in public life. While information about these policies exists, it is highly fragmented, written in technical legal language, and difficult to interpret without policy expertise.

For affected young adults, this challenge extends beyond information access. It is also a problem of trust. Fragmented sources, inconsistent interpretations, and unclear implications make it difficult for users to determine what information is reliable, whether a policy affects them personally, and what actions, if any, are appropriate. Arc Radius was created to address this gap by helping users move from confusion and uncertainty to understanding and informed civic action.

---

## Designing for Trust

Arc Radius is designed as a trust-critical system for a vulnerable user population. Early user research highlighted that credibility, clarity, and perceived care were as important as functional accuracy. As a result, trust served as a central design constraint across both product and technical decisions.

Trust in Arc Radius is operationalized through three core principles:

- **Accuracy:** All outputs are grounded in authoritative legislative data and validated model pipelines.
- **Consistency:** Similar inputs produce stable, predictable outputs across the system.
- **Clarity:** Explanations are written in plain language and do not require policy or legal expertise to interpret.

These principles informed the system architecture, modeling choices, and evaluation strategy, ensuring that users feel informed, supported, and confident in the information they receive.

---

## System Overview

Arc Radius is structured around three core user-facing capabilities:

1. **Understand** — Identify legislation that is relevant to the user.
2. **Interpret** — Explain what the legislation does and why it matters.
3. **Act** — Enable users to respond through concrete civic actions.

These capabilities map directly to three system components: a classification pipeline, GraphRAG-based explanation generator, and an action generation module.

---

## Data Sources & Approach

Arc Radius integrates large-scale legislative data with curated labeled datasets.

**Primary data sources:**

- LegiScan API for bill text, metadata, and legislative history
- Labeled datasets from ACLU, Plural, and related organizations

The full dataset contains approximately 750,000 bills from 2021 through 2026. Of these, 2,325 bills are labeled as LGBTQ+-related. To address severe class imbalance, a 2:1 negative sampling strategy was used, resulting in an additional 4,650 non-LGBTQ+ bills included in the training set.

### Modeling Constraints

Several constraints shaped the modeling approach:

- Limited labeled data for LGBTQ+-specific legislation.
- Extreme class imbalance between relevant and non-relevant bills.
- Ambiguity and domain specificity of legal language.

These constraints motivated the use of a two-stage classification pipeline and the incorporation of metadata features for stance prediction, rather than relying on a single end-to-end text model.

---

## System Architecture

The system follows a modular pipeline architecture. Each stage is decoupled from the others.

**Pipeline stages:**

1. Data ingestion and normalization
2. Relevance classification
3. Stance classification
4. Graph-based retrieval and generation
5. Letter generation

Each stage operates independently and produces validated outputs that feed into the next component. This separation reduces error propagation, simplifies debugging and iteration, and supports independent evaluation of system components. From a user perspective, this design improves reliability by ensuring that each layer of interpretation is grounded and validated before being surfaced.

---

## Core System Components

### Classification: What Is This Bill?

The classification component determines whether a bill is relevant to LGBTQ+ issues and, if so, whether it is supportive or harmful. This task is implemented as a two-stage pipeline to improve interpretability and reduce compounding errors.

#### Stage 1 — Relevance Classification

Relevance classification is performed using a LegalBERT model trained on bill titles and short descriptions. Only text inputs are used at this stage to avoid metadata leakage. Given that errors at this stage would exclude bills entirely from downstream analysis, precision for LGBTQ+-relevant bills is prioritized.

LegalBERT achieved the strongest overall performance among evaluated models, including general-purpose transformer and instruction-tuned models. Its ability to capture legal language patterns resulted in high accuracy and stable performance across stratified train-test splits.

#### Stage 2 — Stance Classification

Stance classification is applied only to bills identified as LGBTQ+-relevant. Multiple approaches were evaluated, including text-based transformer models and metadata-driven models.

Text-based models showed limited improvement due to the small labeled dataset and the inherent ambiguity of legal language. In contrast, metadata-driven models performed more consistently. Features such as sponsor party composition, state political lean, and legislative context provided strong and interpretable signals of bill intent.

Based on these findings, a linear model using engineered political context features was selected. Model selection prioritized minimizing false supportive classifications of harmful legislation, as such errors pose higher risk to users.

#### Classification Model Comparison & Performance

| Model | Accuracy | Precision | Recall | F1 Score |
|-------|----------|-----------|--------|----------|
| Mistral-7B-Instruct-v0.3 | 0.58 | 0.90 | 0.18 | 0.30 |
| BERT | 0.91 | 0.83 | 0.91 | 0.87 |
| **LegalBERT** | **0.93** | **0.92** | **0.92** | **0.92** |
| Legal-RoBERTa | 0.589 | 0.434 | 0.917 | 0.584 |

LegalBERT achieved the strongest and most balanced performance for relevance classification, particularly with respect to recall on the minority LGBTQ+-relevant class.

#### Stance Model Comparison & Performance

| Model | Accuracy |
|-------|----------|
| Majority Party Rule | 0.93 |
| **Linear Model** | **0.96** |

**Majority Party Rule — per-class:**

| | Precision | Recall | F1 Score |
|---|-----------|--------|----------|
| Supportive | 0.60 | 0.99 | 0.73 |
| Harmful | 0.95 | 0.93 | 0.96 |

**Linear Model — per-class:**

| | Precision | Recall | F1 Score |
|---|-----------|--------|----------|
| Supportive | 0.78 | 0.68 | 0.72 |
| Harmful | 0.97 | 0.98 | 0.98 |

The metadata-driven linear model outperformed text-based approaches on stance classification. Performance gains were driven by political context features, which provided highly interpretable and stable signals of legislative intent.

The final cumulative F1 score for the two-stage classification pipeline was **0.91**.

---

### GraphRAG: Explanation Generation

The GraphRAG component generates structured explanations that answer three core user questions: what the bill does, why it matters, and how it relates to other legislation. This task requires more than summarization — it involves grounding explanations in legal text while incorporating contextual relationships across policy domains and jurisdictions.

#### System Design

The GraphRAG system combines:

- Retrieval over bill text
- A structured knowledge graph encoding relationships between bills, topics, and jurisdictions
- Constrained prompt-based generation

Neo4j is used to store both embeddings and graph structure, enabling retrieval that incorporates semantic similarity and relational context. Structured prompts explicitly define required outputs, reducing variability and improving consistency.

#### Model Trials

Multiple approaches were explored for generating explanations:

- Direct prompting using bill text alone
- Retrieval-augmented generation using text chunks
- Graph-augmented retrieval combined with structured prompts

Direct prompting produced outputs that were often incomplete or insufficiently grounded. Text-only retrieval improved coverage but lacked contextual depth. The addition of a knowledge graph provided more consistent incorporation of relationships between bills and topics. Based on these comparisons, the GraphRAG approach was selected.

#### GraphRAG Evaluation

GraphRAG outputs were evaluated using both human scoring and an LLM-as-a-judge framework.

**Human Evaluation Results**

Human evaluation was conducted on 40 bills, evenly split between supportive and harmful legislation, with three generated outputs per bill for a total of 120 samples. Outputs were scored on a 0–2 scale across three dimensions: correctness, tone, and style. Three raters participated, double-scoring 25% of the samples.

| Metric | Avg. (0–2 scale) | Interrater Reliability |
|--------|-------------------|------------------------|
| Correctness | 1.84 | 0.90 |
| Tone | 1.86 | 0.90 |
| Style | 1.66 | 0.85 |

Scores indicate strong performance on factual accuracy and appropriate tone, with slightly lower performance on stylistic consistency.

**LLM-Based Evaluation Agreement**

An LLM-as-a-judge framework was used to scale evaluation. Agreement between LLM and human judgments was high, particularly when allowing for small deviations.

| Dimension | Exact Match | Within ±1 |
|-----------|-------------|-----------|
| Correctness | 0.77 | 0.99 |
| Tone | 0.81 | 0.98 |
| Style | 0.73 | 0.96 |

These results support the use of LLM-based evaluation as a reliable proxy for ongoing quality monitoring.

---

### Letter Generator: Take Action

The letter generator enables users to respond directly to legislation by producing tailored emails or phone scripts. This component introduces additional risk, as outputs represent the user's voice and intent.

#### System Design

The action generator uses structured prompting with parameterized inputs, including:

- Bill identity and jurisdiction
- Stance classification
- GraphRAG-generated explanations
- User-selected tone and format

By grounding generation in upstream structured outputs, the system avoids unconstrained text generation and improves reliability.

#### Evaluation

Human evaluation was conducted on 160 generated outputs across 40 bills. Each output was scored for correct bill identification, stance alignment, tone, and formatting. Three human raters scored the 160 outputs, with 25% double-scored to determine interrater reliability.

| Metric | Count 1s | Count 0s | Interrater Reliability |
|--------|----------|----------|------------------------|
| Formatting | 156 | 4 | 1.00 |
| ID | 159 | 1 | 1.00 |
| Stance | 159 | 1 | 1.00 |
| Tone | 151 | 9 | 0.97 |

Results show near-perfect performance on bill identification and stance alignment, with very high interrater reliability. Errors were primarily limited to edge cases involving tone preferences.

---

## Key Learnings & Impact

Arc Radius demonstrates how data science and responsible AI design can be applied to:

- Make complex policy environments understandable to non-experts
- Reduce information and trust barriers for vulnerable populations
- Support informed and actionable civic participation

By integrating classification, explanation, and action within a single system, Arc Radius enables users to understand legislation, interpret its impact, and respond with confidence.

---

## Acknowledgements

We would like to thank our capstone instructors and mentors, Joyce Shen and Zona Kostic, for their guidance throughout this project, as well as our peers and early users who provided valuable feedback during development.

We are especially grateful to organizations and researchers working in LGBTQ+ policy and advocacy spaces, whose publicly available datasets and insights made this work possible. Their efforts to document and interpret legislative change were foundational to building Arc Radius.

---

## References

- American Civil Liberties Union. (2025). *Mapping attacks on LGBTQ rights in U.S. state legislatures (2025)*. <https://www.aclu.org/legislative-attacks-on-lgbtq-rights-2025>
- The Trevor Project. (2024). *2024 U.S. national survey on the mental health of LGBTQ+ young people*. <https://www.thetrevorproject.org/survey-2024/>
