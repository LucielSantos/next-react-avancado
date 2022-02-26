type Merge<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
  B extends infer O
  ? { [K in keyof O]: O[K] }
  : never

interface DataObj<Attributes> {
  attributes: Attributes
}

interface DataAttributes<
  Attributes,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Data extends Record<string, any> = Record<string, any>
> {
  data: Merge<Data, DataObj<Attributes>>
}

export type Image = {
  data: DataObj<{ url: string; alternativeText: string }>
}

export type LogoProps = DataAttributes<{
  alternativeText: string
  url: string
}>

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: DataAttributes<{
    alternativeText: string
    url: string
  }>
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: DataAttributes<{
    alternativeText: string
    url: string
  }>
}

export type SectionTechProps = {
  title: string
  techIcons: {
    title: string
    icon: DataAttributes<{
      alternativeText: string
      url: string
    }>
  }[]
}

export type SectionConceptsProps = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesProps = {
  title: string
  modules: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type AuthorAttributes = {
  name: string
  role: string
  description: string
  socialLinks: {
    title: string
    url: string
  }[]
  photo: Image
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    data: DataObj<AuthorAttributes>[]
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: {
    name: string
    text: string
    photo: Image
  }[]
}

export type SectionFAQProps = {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}

export type LandingPageProps = {
  data: {
    attributes: {
      logo: LogoProps
      header: HeaderProps
      sectionAboutProject: SectionAboutProjectProps
      sectionTech: SectionTechProps
      sectionConcepts: SectionConceptsProps
      sectionModules: SectionModulesProps
      sectionAgenda: SectionAgendaProps
      pricingBox: PricingBoxProps
      sectionAboutUs: SectionAboutUsProps
      sectionReviews: SectionReviewsProps
      sectionFAQ: SectionFAQProps
    }
  }
}
