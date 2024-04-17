/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
export interface BookProps {
  abbrev: Abbrev
  author: string
  chapters: number
  group: string
  name: string
  testament: string
}
interface Abbrev {
  pt: string
  en: string
}
