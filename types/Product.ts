export type Product = {
  readonly title: string
  readonly imagePath: string
  readonly alt: string
  readonly content: string
  readonly tags: string[]
  readonly url: string | null
  readonly linkTitle?: string
}
